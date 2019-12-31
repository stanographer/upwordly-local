class TextAreaBindingTwo {
  constructor(elem, doc) {
    this.doc = doc;
    this.elem = elem;
  }

  attachDoc = () => {
    this.doc.subscribe(err => {
      if (err) {
        throw new Error('Could not subscribe to the doc.');
      }

      // IE and Opera replace \n with \r\n. Always store strings as \n
      this.elem.value.replace(/\r\n/g, '\n');
      this.elem.value = this.doc.data;
      this.doc.on('op', op => this.onRemoteOp(op));
    });
  };

  attachElement = () => {
    this.elem.addEventListener('input', this.applyLocalChange, false);
  };

  bind = () => {
    this.elem.onkeydown = e => {
      // Enables tab key use.
      if (e.key === 'Tab') {
        e.preventDefault();

        const val = this.elem.value;
        const start = this.elem.selectionStart;
        const end = this.elem.selectionEnd;

        // Set textarea value to: text before caret + tab + text after caret
        this.elem.value = `${val.substring(0, start)}\t${val.substring(end)}`;

        // Put caret at right position again
        this.elem.selectionStart = this.elem.selectionEnd = start + 1;

        // Prevent the focus lose
        return false;
      }
    };

    // Local Changes ===============

    this.attachElement();
    this.attachDoc();
  };

  onLocalInsert = (start, inserted) => {
    const op = [start, inserted];
    console.log('local insert op', op);
    this.doc.submitOp(op);
  };

  onLocalRemove = (index, count) => {
    if (count < 1) return;
    const op = [index, '', { d: count }];
    this.doc.submitOp(op);
  };

  getElementValue = () => {
    const { value } = this.elem;
    return value.replace(/\r\n/g, '\n');
  };

  getInputEnd = (previous, value) => {
    if (this.elem !== document.activeElement) return null;
    const end = value.length - this.elem.selectionStart;
    if (end === 0) return end;
    if (
      previous.slice(previous.length - end) !== value.slice(value.length - end)
    )
      return null;

    return end;
  };

  applyLocalChange = () => {
    // Replace the content of old text with new text.
    const previous = this.doc.data;
    const value = this.getElementValue();

    if (previous === value) return;

    let start = 0;
    let end = this.getInputEnd(previous, value);

    if (end === null) {
      // If we failed to find the end based on the cursor, do a diff. When
      // ambiguous, prefer to locate ops at the end of the string, since users
      // more frequently add or remove from the end of a text input.

      while (previous.charAt(start) === value.charAt(start)) {
        start += 1;
      }

      end = 0;

      while (
        previous.charAt(previous.length - 1 - end) ===
          value.charAt(value.length - 1 - end) &&
        end + start < previous.length &&
        end + start < value.length
      ) {
        end += 1;
      }
    } else {
      while (
        previous.charAt(start) === value.charAt(start) &&
        start + end < previous.length &&
        start + end < value.length
      ) {
        start += 1;
      }
    }

    // Adding text.
    if (value.length !== start + end) {
      const inserted = value.slice(start, value.length - end);
      this.onLocalInsert(start, inserted);
    }

    // Removing text.
    if (previous.length !== start + end) {
      const removed = previous.slice(start, previous.length - end);
      this.onLocalRemove(start, removed.length);
    }
  };

  // Remote Changes ===============

  applyRemoteOp = (index, length, transformCursor) => {
    if (document.activeElement === this.elem) {
      const selectionStart = transformCursor(
        index,
        length,
        this.elem.selectionStart,
      );

      const selectionEnd = transformCursor(
        index,
        length,
        this.elem.selectionEnd,
      );

      const selectionDirection = this.elem.selectionDirection;

      this.update();

      this.elem.setSelectionRange(
        selectionStart,
        selectionEnd,
        selectionDirection,
      );
    } else {
      this.update();
    }
  };

  insertCursorTransform = function(index, length, cursor) {
    return index < cursor ? cursor + length : cursor;
  };

  removeCursorTransform = function(index, length, cursor) {
    return index < cursor ? cursor - Math.min(length, cursor - index) : cursor;
  };

  onRemoteInsert = (index, length) => {
    this.applyRemoteOp(index, length, this.insertCursorTransform);
  };

  onRemoteRemove = (index, length) => {
    this.applyRemoteOp(index, length, this.removeCursorTransform);
  };

  onRemoteOp = op => {
    console.log('op', op);
    if (op.length === 0) return;

    // Is an insert op.
    if ((op[1] && typeof op[1] === 'string') || typeof op[1] === 'number') {
      const index = op[0];
      const length = op[1].length;

      this.onRemoteInsert(index, length);
    } else if (op[1] && typeof op[1] === 'object') {
      const index = op[0];
      const length = op[1].d;

      this.onRemoteRemove(index, length, this.removeCursorTransform);
    } else {
      this.update();
    }
  };

  update = () => {
    const value = this.doc.data;

    if (this.getElementValue() === value) return;
    this.elem.value = value;
  };
}

export default TextAreaBindingTwo;

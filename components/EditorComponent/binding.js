// Class takes in a snapshot as a string and transforms the text
// before sending changes back up.

export default class Binding {
  constructor(snapshot, flag) {
    this.snapshot = snapshot;
    this.flag = flag;
  }

  // Methods to update state text whenever ops are received
  // through WebSockets.

  applyOp = (op) => {
    // When an op is received, transform it, and
    // set it equal to the component snapshot.
    this.snapshot = this.transformSnapshot(op, this.snapshot);
    return this.snapshot;
  };

  transformSnapshot = (op, snap) => {
    // Create a new temp variable to hold changes.
    const newDoc = [];

    // Loop through the ops object.
    for (let i = 0; i < op.length; i++) {
      let component = op[i];
      // Classifies the different components of the op.
      switch (typeof component) {
          // If it is a number, make it the index.
        case 'number':
          newDoc.push(snap.slice(0, component));
          snap = snap.slice(component);
          break;
          // If it is a string, we know to insert it into the temp variable.
        case 'string':
          newDoc.push(component);
          break;
          // If it is an object, we know it's a delete command.
        case 'object':
          snap = snap.slice(component.d);
          break;
      }
    }
    // Once that is done, join the changes stored in the temp variable
    // to the snapshot and send it back to applyOp().
    return newDoc.join('') + snap;
  };

  applyLocalChange = (doc, snap, change) => {
    // Strings are immutable and have reference equality.
    // I think this test is O(1), so its worth doing.
    if (snap === change) return;

    console.log(doc.type);

    let start = 0;

    // Scan the document. While all characters in the change document
    // and the new document are the same, keep advancing.
    while (snap.charAt(start) === change.charAt(start)) {
      start++;
    }

    let end = 0;

    // Scan the other end of document. While all characters in the change document
    // and the new document are the same, keep advancing toward start.
    while (
        snap.charAt(snap.length - 1 - end) ===
        change.charAt(change.length - 1 - end) &&
    start + end < snap.length &&
    start + end < change.length) {
      end++;
    }

    const onInsert = (position, text) => {
      console.log(start, text);
      let op = [position, text];
      doc.submitOp(op);
    };

    const onRemove = (position, length) => {
      let op = [position, '', { d: length }];
      console.log(op);
      this.applyOp(op);
      doc.submitOp(op);
    };

    if (snap.length !== start + end) {
      // snap = change.slice(start, change.length - end);
      onRemove(start, snap.length - start - end);
    }

    if (change.length !== start + end) {
      onInsert(start, change.slice(start, change.length - end));
    }

    this.snapshot = doc.data;
  };
}

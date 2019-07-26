import ReactBinding from '../ReactBinding';

describe('ReactBinding', () => {
  describe('instantiates a new Binding object.', () => {
    const snapshot = 'This is a fancy-pants snapshot';
    const flag = '≈';
    const binding = new ReactBinding(snapshot, flag);

    it('contains the correct properties.', () => {
      expect(binding.snapshot).toBe('This is a fancy-pants snapshot');
      expect(binding.flag).toBe('≈');
    });
  });
});

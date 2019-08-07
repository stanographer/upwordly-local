import React from 'react';
import { shallow } from 'enzyme/build';
import Button from '../Button/index';
import { checkProps, findByTestAttr } from '../../../../utils';

// Creates component and passes props.
const setup = (props = {}) => {
  return shallow(<Button {...props} />);
};

describe('Dashboard button', () => {
  describe('behaves correctly when passed appropriate props.', () => {
    let wrapper;

    const props = {
      classNames: null,
      name: 'press me',
      color: 'green',
      onClick: jest.fn(),
      text: 'Press Me',
      type: 'submit',
    };

    beforeAll(() => {
      wrapper = setup(props);
    });

    it('calls onClick prop when button is clicked.', () => {
      const button = findByTestAttr(wrapper, 'landing-button');
      button.simulate('click');

      expect(props.onClick.mock.calls.length).toEqual(1);
    });

    it('proptypes should throw no errors.', () => {
      const propsErr = checkProps(Button, props);
      expect(propsErr).toBe(undefined);
    });
  });

  describe('behaves correctly with appropriate properties even with no onClick func.', () => {
    let wrapper;

    const props = {
      classNames: null,
      name: 'press me',
      color: 'green',
      text: 'Press Me',
      type: 'submit',
    };

    beforeAll(() => {
      wrapper = setup(props);
    });

    it('should render with the correct color class.', () => {
      const component = findByTestAttr(wrapper, 'landing-button').find('.text-green-200');
      expect(component.length).toBe(1);
    });

    it('should render with the correct button text.', () => {
      const component = findByTestAttr(wrapper, 'landing-button');
      expect(component.text()).toEqual('Press Me');
    });

    it('should be a button of type submit.', () => {
      const component = findByTestAttr(wrapper, 'landing-button');
      expect(component.find('[type=\"submit\"]').length).toBe(1);
    });

    it('should apply correct aria-label.', () => {
      const component = findByTestAttr(wrapper, 'landing-button');
      expect(component.find('[aria-label=\"Press Me button\"]').length).toBe(1);
    });
  });

  describe('behavior when appropriate props are not provided', () => {
    it('missing proptypes should throw errors.', () => {
      const propsErr = checkProps(Button, {});
      expect(propsErr).toBeDefined();
    });
  });
});

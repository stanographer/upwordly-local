import React from 'react';
import { shallow } from 'enzyme/build';
import Button from './index';
import { checkProps, findByTestAttr } from '../../../../utils';

// Creates component and passes props.
const setup = (props = {}) => {
  return shallow(<Button {...props} />);
};

describe('Dashboard button', () => {
  describe('callback function called when clicked.', () => {
    let wrapper;

    const props = {
      color: 'red',
      onClick: jest.fn(),
      margin: 'mx-2',
      text: 'blah',
      type: 'submit',
    };

    beforeAll(() => {
      wrapper = setup(props);
    });

    it('calls onSubmit prop when button is clicked.', () => {
      const button = findByTestAttr(wrapper, 'dashboard-button');
      button.simulate('click');

      expect(props.onClick.mock.calls.length).toEqual(1);
    });

    it('should contain the correct proptypes.', () => {
      const propsErr = checkProps(Button, props);
      expect(propsErr).toBe(undefined);
    })
  });

  describe('provided appropriate props with no onClick func.', () => {
    let wrapper;

    const props = {
      color: 'red',
      onClick: null,
      margin: 'mx-2',
      text: 'blah',
      type: 'submit',
    };

    beforeAll(() => {
      wrapper = setup(props);
    });

    it('should render with the correct color class.', () => {
      const component = findByTestAttr(wrapper, 'dashboard-button').find('.text-red-200');
      expect(component.length).toBe(1);
    });

    it('should render with the correct button text.', () => {
      const component = findByTestAttr(wrapper, 'dashboard-button');
      expect(component.text()).toEqual(props.text);
    });

    it('should be a button of type submit.', () => {
      const component = findByTestAttr(wrapper, 'dashboard-button');
      expect(component.find(`[type='submit']`).length).toBe(1);
    });
  });
});
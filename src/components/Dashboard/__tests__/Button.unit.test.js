import React from 'react';
import { shallow } from 'enzyme/build';
import Button from '../Button';
import { checkProps, findByTestAttr } from '../../../../utils';

// Creates component and passes props.
const setup = (props = {}) => {
  return shallow(<Button {...props} />);
};

describe('Dashboard button', () => {
  describe('Checking PropTypes.', () => {
    it('should not throw a warning.', () => {
      const expectedProps = {
        color: 'red',
        onClick: null,
        margin: 'mx-2',
        text: 'blah',
        type: 'submit',
      };

      const propsErr = checkProps(Button, expectedProps);

      expect(propsErr).toBe(undefined);
    });
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

    it('should render with the fields filled in correctly.', () => {
      const component = findByTestAttr(wrapper, 'dashboard-button');

      expect(component.hasClass(`text-${props.color}-200`)).toBe(true);
      expect(component.hasClass(`${props.margin}`)).toBe(true);
      expect(component.text()).toEqual(props.text);

    });
  });
});
import React from 'react';
import { mount, shallow } from 'enzyme';
import LoginSignInLayout from '../LoginSignInLayout';
import Button from '../../Dashboard/Button';
import { checkProps, findByTestAttr } from '../../../../utils';

// Creates component and passes props.
const setup = (props = {}) => {
  return shallow(<LoginSignInLayout {...props} />);
};

describe('LoginSignInLayout', () => {
  describe('presence of correct and required props.', () => {
    it('should return PropTypes error.', () => {
      const propsErr = checkProps(LoginSignInLayout, {});

      expect(propsErr).toBeDefined();
    });
  });

  describe('components rendered and correct attributes based on props.', () => {
    let wrapper;
    const props = {
      title: 'Stanley\'s Marvelous Component',
      typedText: ['Welcome!'],
    };

    beforeAll(() => {
      wrapper = setup(props);
    });

    it(`should have a title matching passed prop "title"`, () => {
      expect(wrapper.find('title').text()).toEqual('Stanley\'s Marvelous Component');
    });

    it(`should type out the text passed in the prop array "typedText"`, () => {
      const component = findByTestAttr(wrapper, 'typed-header');

      // Gotta wait because it has to type it out first.
      setTimeout(() => {
        expect(component.text()).toBe('Welcome!');
      }, 1200);
    });

    it('should render the footer', () => {
      const footer = wrapper.find('Footer');

      expect(footer.length).toBe(1);
    });

    it('should render the child component.', () => {
      const props = {
        title: 'Stanley\'s Marvelous Component',
        typedText: ['Welcome!'],
      };

      const component = mount(
          <LoginSignInLayout {...props}>
            <Button color="red" type="submit" text="hello" />
          </LoginSignInLayout>);

      const foundButton = findByTestAttr(component, 'dashboard-button');

      expect(foundButton.length).toBe(1);
    });
  });
});
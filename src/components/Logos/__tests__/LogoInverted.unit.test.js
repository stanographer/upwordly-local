import React from 'react';
import { shallow } from 'enzyme';
import LogoInverted from '../LogoInverted';
import { findByTestAttr } from '../../../../utils';

// Creates component and passes props.
const setup = (props = {}) => {
  return shallow(<LogoInverted {...props} />);
};

describe('LogoInverted Component', () => {
  describe('without props', () => {
    const wrapper = setup();

    it('should render without errors.', () => {
      const logoInverted = findByTestAttr(wrapper, 'logo-inverted');
      expect(logoInverted.length).toBe(1);
    });

    it('should render the Upword.ly name.', () => {
      const logoTitle = findByTestAttr(wrapper, 'logo-title');
      expect(logoTitle.text()).toEqual('Upword.ly');
    });
  });

  describe('with center prop', () => {
    const wrapper = setup({ center: true });
    it('should render with justify-center class.', () => {
      const logoInverted = findByTestAttr(wrapper, 'logo-inverted');
      const centered = wrapper.find('.justify-center');

      expect(logoInverted.length).toBe(1);
      expect(centered.length).toBe(1);
    });
    it('should render the Upword.ly name.', () => {
      const logoTitle = findByTestAttr(wrapper, 'logo-title');
      expect(logoTitle.text()).toEqual('Upword.ly');
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import NavLogo from '../NavLogo';

describe('Nav logo component', () => {
  it('should render without errors.', () => {
    const component = shallow(<NavLogo />);
    const wrapper = component.find('.nav-logo');

    expect(wrapper.length).toBe(1);
  });
});

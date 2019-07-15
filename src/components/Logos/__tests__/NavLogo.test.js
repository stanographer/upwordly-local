import React from 'react';
import { shallow } from 'enzyme';
import NavLogo from '../NavLogo';
import { findByTestAttr } from '../../../../utils';

// Creates component and passes props.
const setup = (props = {}) => {
  return shallow(<NavLogo {...props} />);
};

describe('NavLogo component', () => {
  it('should render without justify-center class without props.', () => {
    const component = setup();
    const isLogo = component.find('.nav-logo');

    // console.log(component.debug());

    expect(isLogo.length).toBe(1);
  });

  it('should render with justify-center class if center prop is passed as true.', () => {
    const component = setup({center: true});
    const hasJustifyCenter = component.find('.justify-center');

    expect(hasJustifyCenter.length).toBe(1);
  });

  it('should render the logo.', () => {
    const component = shallow(<NavLogo center={true} />);
    const logo = findByTestAttr(component, 'upwordly-logo');

    expect(logo.length).toBe(1);
  });

  it('should render Upword.ly logo text.', () => {
    const component = setup();
    const logoText = findByTestAttr(component, 'logo-text');

    expect(logoText.text()).toEqual('Upword.ly');
  })
});

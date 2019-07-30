import React from 'react';
import { mount, shallow } from 'enzyme/build';
import WrapperComponent from '.';
import { checkProps, findByTestAttr } from '../../../../utils';
import Logo from '../../Logos/Logo';

const setup = (props = {}) => {
  return shallow(<WrapperComponent {...props} />);
};

describe('Wrapper component', () => {
  const props = {
    htmlTitle: 'Just say no to chains and snapbacks',
    title: 'Archive',
  };

  describe('without proper props', () => {
    it('should complain if props are not provided.', () => {
      const propsErr = checkProps(WrapperComponent, {});

      expect(propsErr).toBeDefined();
    });
  });

  describe('with proper props', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = setup(props);
    });

    it('should have the htmlTitle as the title.', () => {
      const htmlTitle = wrapper.find('title');

      expect(htmlTitle.text()).toEqual('Just say no to chains and snapbacks');
    });

    describe('mounted fully', () => {
      let mountedComponent;

      beforeAll(() => {
        mountedComponent = mount(
          <WrapperComponent htmlTitle={props.htmlTitle} title={props.title}>
            <Logo />
          </WrapperComponent>,
        );
      });

      it('should render all 6 nav buttons.', () => {
        const NavButtons = findByTestAttr(mountedComponent, 'nav-button');

        expect(NavButtons.length).toBe(6);
      });

      // it('should highlight the "Archive" button green', () => {
      //   const highlightedButton = findByTestAttr(mountedComponent, 'nav-button-text');
      //
      //   expect(highlightedButton.length).toBe(1);
      //
      // });
    });
  });
});

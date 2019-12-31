import React from 'react';
import { shallow } from 'enzyme/build';
import { checkProps, findByTestAttr } from '../../../../utils';
import ToolbarButton from '../ToolbarButton';

const setup = (props = {}) => {
  return shallow(<ToolbarButton {...props} />);
};

describe('ToolbarButton component', () => {
  describe('no title provided', () => {
    it('should return a prop error', () => {
      const noTitleError = checkProps(ToolbarButton, {});
      expect(noTitleError).toBeDefined();
    });
  });

  describe('correct props provided', () => {
    let wrapper;
    let button;
    const mock = jest.fn();

    beforeAll(() => {
      const props = {
        title: 'My Button',
        icon: <div data-test="toolbar-button-icon" />,
        onClick: mock,
      };

      wrapper = setup(props);
      button = findByTestAttr(wrapper, 'toolbar-button');
    });

    describe('should render and behave correctly.', () => {
      it('should render with correct prop modifications.', () => {
        expect(button.find('span').text()).toEqual('My Button');
      });

      it('should render the icon.', () => {
        const icon = findByTestAttr(wrapper, 'toolbar-button-icon');
        expect(icon.length).toBe(1);
      });

      it('should run onClick when clicked.', () => {
        button.simulate('click');
        expect(mock).toHaveBeenCalled();
      });
    });
  });
});

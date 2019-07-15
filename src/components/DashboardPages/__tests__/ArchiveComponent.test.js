import React from 'react';
import { shallow } from 'enzyme';
import ArchiveComponent from '../ArchiveComponent';
import { findByTestAttr } from '../../../../utils';

// Creates component and passes props.
const setup = (props = {}) => {
  return shallow(<ArchiveComponent {...props} />);
};

describe('ArchiveComponent', () => {
  describe('is passed props', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        user: {
          username: 'stanley',
          jobs: {
            'job1': {}
          }
        }
      };

      wrapper = setup(props);
    });

    it('should render without errors.', () => {
      const component = findByTestAttr(wrapper, 'archive-component-list');

      expect(component.length).toBe(1);
    });

  });

  describe('props is empty', () => {
    let wrapper = setup();

    it('should not render archive component list', () => {
      const component = findByTestAttr(wrapper, 'archive-component-list');

      expect(component.length).toBe(0);
    })

  });
});
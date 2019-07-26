import React from 'react';
import { shallow } from 'enzyme/build';
import JobArchiveItem from '../JobArchiveItem';
import { findByTestAttr } from '../../../../../utils';

// Creates component and passes props.
const setup = (props = {}) => {
  return shallow(<JobArchiveItem {...props} />);
};

describe('JobArchiveItem', () => {
  describe('with props', () => {
    let wrapper;

    const props = {
      deleteAJob: jest.fn(),
      getUserData: jest.fn(),
      id: 'xxx',
      job: {
        shortName: 'testjob',
        speakers: 'Stanley Sakai',
        title: 'Test Job',
      },
    };

    beforeEach(() => {
      wrapper = setup(props);
    });

    it('should render without errors.', () => {
      const component = findByTestAttr(wrapper, 'job-archive-item');

      expect(component.length).toBe(1);
    });

    it('should render shortName, speakers, and title correctly.', () => {
      const shortName = findByTestAttr(wrapper, 'job-shortName');
      const speakers = findByTestAttr(wrapper, 'job-speakers');
      const title = findByTestAttr(wrapper, 'job-title');

      expect(shortName.text()).toEqual(props.job.shortName);
      expect(speakers.text()).toEqual(props.job.speakers);
      expect(title.text()).toEqual(`"${props.job.title}"`);
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Heading from '.';
import { checkProps, findByTestAttr } from '../../../../utils';

const setup = (props = {}) => {
  return shallow(<Heading {...props} />);
};

describe('Heading component', () => {
  describe('should render correctly with props.', () => {
    let wrapper;
    const props = {
      additionalText: (
        <p className="pt-4 pb-2 text-green-200" data-test="logged-in-text">
          Logged in as Mike Wazowski
        </p>
      ),
      heading: 'Looper by ANML',
      typedText: ['The best vape juice evar.'],
    };

    beforeAll(() => {
      wrapper = setup(props);
    });

    it('should have heading text', () => {
      const headingText = findByTestAttr(wrapper, 'heading-text');
      expect(headingText.text()).toEqual('Looper by ANML');
    });

    it('should render the additional text if provided.', () => {
      const additionalText = findByTestAttr(wrapper, 'logged-in-text');
      expect(additionalText.text()).toEqual('Logged in as Mike Wazowski');
    });

    it('should render typed text.', () => {
      const typedText = findByTestAttr(wrapper, 'typed-text');

      // It has to wait for it to type it out, duh!
      setTimeout(() => {
        expect(typedText.text()).toEqual('Logged in as Mike Wazowski');
      }, 600);
    });
  });
});

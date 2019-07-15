import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
require('dotenv').config();

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});
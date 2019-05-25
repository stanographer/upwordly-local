import Head from 'next/head';
import {
  Container
} from 'reactstrap';
import '../style.css';
import '../fonts.css';

const Layout = props => (
    <div>
      {props.children}
    </div>
);

export default Layout;
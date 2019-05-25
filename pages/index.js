import Link from 'next/link';
import Layout from '../components/Layout';
import React from 'react';

// export default () => (
//     <Layout>
//         <div className="flex items-stretch bg-gray-200 h-24">
//           <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
//           <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
//             <Link href="/signin"><a>Sign In</a></Link>
//           </div>
//           <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
//         </div>
//     </Layout>
// );

import { bubble as Menu } from 'react-burger-menu';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#575b70'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '40px',
    width: '40px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#1a1b21',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#1a1b21'
  },
  bmItemList: {
    color: '#b8b7ad',
    overflow: 'hidden',
    height: 'unset',
    padding: '0.8em',
    width: '100%',
  },
  bmItem: {
    display: 'inline-block',
    fontSize: '2.5rem',
    padding: '1rem 0'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: 'slide',
      side: 'left'
    };
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
        <Menu
            styles={styles}
            right
            noOverlay
            width="100%">
          <Link href="/signin"><a className="menu-item">Sign In</a></Link>
          <br />
          <a id="home" className="menu-item" href="/">Home</a>
          <br />
          <a id="about" className="menu-item" href="/about">About</a>
          <br />
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <br />
          <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
          <br />
        </Menu>
    );
  }
}
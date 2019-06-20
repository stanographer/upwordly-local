import '../style.css';
import '../fonts.css';
import Link from 'next/link';
import React from 'react';
import WidgetContext from '../context/widget-context';

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

class AppProvider extends React.Component {
  state = {
    currentWidget: '',
    widgetOpen: false,
  };

  openWidget = widget => {
    this.setState({
      currentWidget: widget,
      widgetOpen: true,
    })
  };

  closeWidget = () => {
    this.setState({
      widgetOpen: false,
    })
  };

  render() {
    const {
      currentWidget,
      widgetOpen,
    } = this.state;

    return (
        <WidgetContext.Provider
            value={{
              currentWidget,
              widgetOpen,
              openWidget: this.openWidget,
              closeWidget: this.closeWidget,
            }}>
          {this.props.children}
        </WidgetContext.Provider>
    );
  }
}

export default AppProvider;
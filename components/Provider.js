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
    settings: {},
    widgetOpen: false,
  };

  INITIAL_SETTINGS = {
    backgroundColor: 'rgb(30,34,39)',
    color: '#fffce1',
    fontFamily: 'Apercu',
    fontSize: '30',
    lineHeight: '1.3',
    paddingX: '2',
    paddingY: '2',
  };

  openWidget = widget => {
    this.setState({
      currentWidget: widget,
      widgetOpen: true,
    });
  };

  closeWidget = () => {
    this.setState({
      widgetOpen: false,
    });
  };

  getSettings = () => {

    // Get settings from localstorage.
    let settings;

    try {
      settings = window.localStorage.getItem('upwordly-settings') || this.INITIAL_SETTINGS;

      this.setState({
        settings: JSON.parse(settings),
      }, () => console.log('settings state ', this.state.settings));
    } catch {

      // If settings cannot be loaded, load initial state.
      this.setState({
        settings: this.INITIAL_SETTINGS,
      });
      console.log('this is the catch');
    }
  };

  onChangeSettings = (key, value) => {
    const settings = this.state.settings;

    this.setState({
      settings: {
        ...settings,
        [key]: value,
      }
    });
  };

  setSettings = () => {

    // Save settings to localstorage.
    try {
      window.localStorage.setItem('upwordly-settings', JSON.stringify(this.state.settings));
    } catch {
      console.log('Error retrieving from localstorage.');
    }
  };

  componentDidMount() {
    this.getSettings();
  }

  render() {
    const {
      currentWidget,
      settings,
      widgetOpen,
    } = this.state;

    return (
        <WidgetContext.Provider
            value={{
              currentWidget,
              settings,
              widgetOpen,
              onChangeSettings: this.onChangeSettings,
              openWidget: this.openWidget,
              closeWidget: this.closeWidget,
              getSettings: this.getSettings,
              setSettings: this.setSettings
            }}>
          {this.props.children}
        </WidgetContext.Provider>
    );
  }
}

export default AppProvider;
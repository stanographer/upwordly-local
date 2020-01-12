import React from 'react';
import WidgetContext from '../../providers/WidgetContext';

class Provider extends React.Component {
  state = {
    currentWidget: '',
    settings: {},
    widgetOpen: false,
  };

  INITIAL_SETTINGS_DESKTOP = {
    backgroundColor: 'rgb(30,34,39)',
    color: '#fffce1',
    fontFamily: 'Apercu',
    fontSize: '30',
    lineHeight: '1.3',
    paddingX: '2',
    paddingY: '2',
  };

  INITIAL_SETTINGS_MOBILE = {
    backgroundColor: 'rgb(30,34,39)',
    color: '#fffce1',
    fontFamily: 'Apercu',
    fontSize: '15',
    lineHeight: '1.3',
    paddingX: '1.2',
    paddingY: '1.2',
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
      settings =
        window.localStorage.getItem('upwordly-settings') ||
        this.loadResponsiveSettings();

      this.setState(
        {
          settings: JSON.parse(settings),
        },
        () => console.log('settings state ', this.state.settings)
      );
    } catch {
      // If settings cannot be loaded, load initial state.
      this.setState({
        settings: this.loadResponsiveSettings(),
      });
    }
  };

  openWidget = widget => {
    this.setState({
      currentWidget: widget,
      widgetOpen: true,
    });
  };

  loadResponsiveSettings = screenWidth => {
    // Loads the appropriate stylings based on screen size.

    if (screenWidth > 800) {
      return this.INITIAL_SETTINGS_DESKTOP;
    } else {
      return this.INITIAL_SETTINGS_MOBILE;
    }
  };

  onChangeSettings = (key, value) => {
    const settings = this.state.settings;

    this.setState({
      settings: {
        ...settings,
        [key]: value,
      },
    });
  };

  setSettings = () => {
    // Save settings to localstorage.

    try {
      window.localStorage.setItem(
        'upwordly-settings',
        JSON.stringify(this.state.settings)
      );
    } catch {
      console.log('Error retrieving from localstorage.');
    }
  };

  componentDidMount() {
    this.getSettings();
  }

  render() {
    const { currentWidget, settings, widgetOpen } = this.state;

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
          setSettings: this.setSettings,
        }}
      >
        {this.props.children}
      </WidgetContext.Provider>
    );
  }
}

export default Provider;

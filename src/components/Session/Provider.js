import React from 'react';
import WidgetContext from '../../providers/WidgetContext';

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
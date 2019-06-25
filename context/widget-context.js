import React from 'react';

export default React.createContext({
  currentWidget: '',
  onChangeSettings: () => {},
  settings: {},
  widgetOpen: false,
  openWidget: widget => {},
  closeWidget: widget => {},
});
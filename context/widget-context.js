import React from 'react';

export default React.createContext({
  currentWidget: '',
  widgetOpen: false,
  openWidget: widget => {},
  closeWidget: widget => {},
});
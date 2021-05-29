import { createContext } from 'react';

createContext({
  notification: null,
  showNotification: function() {},
  hideNotification: function() {}
});

export default notificationContext;

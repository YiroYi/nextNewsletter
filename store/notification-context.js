import { createContext, useState } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: function() {},
  hideNotification: function() {}
});

export const NotificationContextProvider = (props) => {
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;

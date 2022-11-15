import React, { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  });

  const value = {
    isAuth,
    activateAuth: ({ login, signup }) => {
      setIsAuth(true);
      if(login) window.sessionStorage.setItem('token', login)
      if(signup) window.sessionStorage.setItem('token', signup)
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem('token')
    }
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};

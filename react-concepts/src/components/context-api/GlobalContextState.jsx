import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const GlobalContext=createContext(null);

const GlobalContextState = ({children}) => {
  const [theme,setTheme]=useState('light');

  function handleTheme(){
    if(theme==='light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }

  }

  return <GlobalContext.Provider value={{theme,handleTheme}}>
    {children}
  </GlobalContext.Provider>
}

export default GlobalContextState
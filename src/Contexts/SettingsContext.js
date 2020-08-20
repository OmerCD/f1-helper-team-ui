import React from "react";
export const SettingsContext = React.createContext({})

export const SettingsProvider = ({children}) => (
    <SettingsContext.Provider value={{navbarHeight: '42px'}}>
        {children}
    </SettingsContext.Provider>
)
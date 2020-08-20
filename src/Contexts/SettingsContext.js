import React from "react";
import appSettings from '../appsettings.json'

export const SettingsContext = React.createContext({})

export const SettingsProvider = ({children}) => (
    <SettingsContext.Provider value={{
        navbarHeight: '42px',
        baseApiAddress: appSettings.apiAddress
    }}>
        {children}
    </SettingsContext.Provider>
)
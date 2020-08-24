import React from 'react';
import './App.css';
import Navigator from "./Components/Navbar/Navigator";
import {LanguageProvider} from "./Contexts/LanguageContext";
import {SettingsProvider} from "./Contexts/SettingsContext";
import {AxiosRequestProvider} from "./Contexts/AxiosRequestContext";
import {SiteRouteProvider} from "./Contexts/SiteRouteContext";

const Providers = ({children}) => {
    return (
        <LanguageProvider>
            <SettingsProvider>
                <AxiosRequestProvider>
                    <SiteRouteProvider>
                        {children}
                    </SiteRouteProvider>
                </AxiosRequestProvider>
            </SettingsProvider>
        </LanguageProvider>
    )
}

function App() {
    return (
        <Providers>
            <Navigator/>
        </Providers>
    );
}

export default App;

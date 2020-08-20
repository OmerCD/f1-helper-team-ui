import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/Home/HomePage";
import Navigator from "./Components/Navbar/Navigator";
import {LanguageProvider} from "./Contexts/LanguageContext";
import {SettingsProvider} from "./Contexts/SettingsContext";
import {AxiosRequestProvider} from "./Contexts/AxiosRequestContext";

function App() {
    return (
        <LanguageProvider>
            <SettingsProvider>
                <AxiosRequestProvider>
                    <Navigator/>
                </AxiosRequestProvider>
            </SettingsProvider>
        </LanguageProvider>
    );
}

export default App;

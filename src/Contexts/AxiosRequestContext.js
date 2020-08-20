import React, {createContext, useContext} from "react";
import {SettingsContext} from "./SettingsContext";
import axios from 'axios'

export const AxiosRequestContext = createContext();

export const AxiosRequestProvider = ({children}) => {
    const settingsContext = useContext(SettingsContext);
    const axiosInstance = axios.create({
        baseURL: settingsContext.baseApiAddress
    });
    return (
        <AxiosRequestContext.Provider value={axiosInstance}>
            {children}
        </AxiosRequestContext.Provider>
    )
}
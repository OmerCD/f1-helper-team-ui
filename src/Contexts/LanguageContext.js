import React, {useContext} from "react";
import {createContext, useState} from "react";
import {dictionaryList, languageOptions} from "../Languages";

export const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.en
});

export function LanguageProvider({children}) {
    const [userLanguage, setUserLanguage] = useState('en');

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected => {
            const newLanguage = languageOptions[selected] ? selected : 'en';
            setUserLanguage(newLanguage);
            window.localStorage.setItem('rcml-lang', newLanguage);
        }
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
}
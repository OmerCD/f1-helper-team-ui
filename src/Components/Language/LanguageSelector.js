import React, {useContext, useEffect} from "react";
import {LanguageContext} from "../../Contexts/LanguageContext";
import {languageOptions} from "../../Languages";

export default function LanguageSelector() {
    const {userLanguage, userLanguageChange} = useContext(LanguageContext);
    const handleLanguageChange = e => userLanguageChange(e.target.value);

    useEffect(() => {
        let defaultLanguage = window.localStorage.getItem('rcml-lang');
        if (!defaultLanguage) {
            defaultLanguage = window.navigator.language.substring(0, 2);
        }
        userLanguageChange(defaultLanguage);
    }, [userLanguageChange]);

    return(
        <select
            onChange={handleLanguageChange}
            value={userLanguage}
            >
            {
                Object.entries(languageOptions).map(([id,name]) => (
                    <option key={id} value={id}>{name}</option>
                ))
            }
        </select>
    )
}
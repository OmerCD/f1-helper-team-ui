import React, {useContext} from "react";
import {LanguageContext} from "../../Contexts/LanguageContext";

function HomePage() {
    const languageContext = useContext(LanguageContext);
    return (
        <>
            <h1>{languageContext.dictionary['home']}</h1>
        </>
    )
}

export default HomePage;
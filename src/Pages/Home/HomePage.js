import React, {useContext} from "react";
import {LanguageContext} from "../../Contexts/LanguageContext";
import {Spring} from "react-spring/renderprops-universal";

function HomePage() {
    const languageContext = useContext(LanguageContext);
    return (
        <>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => (
                    <h1 style={props}>{languageContext.dictionary['home']}</h1>
                )}
            </Spring>
        </>
    )
}

export default HomePage;
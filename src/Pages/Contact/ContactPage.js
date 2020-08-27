import React, {useContext} from "react";
import Contact from "../../Components/Contact/Contact";
import './ContactPage.css'
import styled from "styled-components";
import {SettingsContext} from "../../Contexts/SettingsContext";

function ContactPage() {
    const settings = useContext(SettingsContext);

    const StyledDiv = styled.div`
    height: calc(100vh - ${settings.navbarHeight});
    `
    return (
        <div className={'contact-main-adjust'}>
            <StyledDiv className={'contact-main-container'}>
                <div style={{margin: 'auto'}}>
                    <Contact/>
                </div>
            </StyledDiv>
        </div>
    )
}

export default ContactPage;

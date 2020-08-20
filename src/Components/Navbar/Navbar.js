import React, {useContext} from "react";
import './Navbar.css'
import {SettingsContext} from "../../Contexts/SettingsContext";

function Navbar({children}){
    const settingsContext = useContext(SettingsContext);
    return(
        <div className='navbar-container' style={{height:settingsContext.navbarHeight}}>
            {children}
        </div>
    )
}

export default Navbar;
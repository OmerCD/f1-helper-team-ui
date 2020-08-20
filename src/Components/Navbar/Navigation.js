import React, {useContext, useEffect, useState} from "react";
import NavItem from "./NavItem";
import Navbar from "./Navbar";
import {withRouter} from "react-router-dom";
import {LanguageContext} from "../../Contexts/LanguageContext";

const navigations = [
    {name:'home', to: '/home'},
    {name:'projects', to: '/projects'},
    {name:'aboutUs', to: '/aboutus'},
    {name:'contact', to:'/contact'},
    {name:'language', to:'/language', right:true},
]

function Navigation(props) {
    const [location,setLocation] = useState(props.location.pathname);
    const languageContext = useContext(LanguageContext);
    const onNavItemClick = (name) => {
        setLocation(navigations.find(x=>x.name === name).to);
    }
    const mapper = () => navigations.map(item => {
        return (
            <NavItem
                onClick={onNavItemClick}
                {...item}
                displayName={languageContext.dictionary[item.name]}
                isActive={location === item.to}
            />
        )
    })


    return (
        <Navbar>
            {mapper()}
        </Navbar>
    )
}

export default withRouter(Navigation);
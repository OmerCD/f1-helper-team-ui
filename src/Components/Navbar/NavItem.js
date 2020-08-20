import React from "react";
import './NavItem.css'
import {Link} from "react-router-dom";
import styled from "styled-components";

function NavItem({name, displayName, isActive, onClick, to, right}) {
    let mainClass = "nav-item";
    if (isActive) {
        mainClass += " nav-item-active"
    }
    if (right) {
        mainClass += " nav-item-right";
    }
    const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active{
        text-decoration: none;
    }
    `;
    return (
        <StyledLink to={to} className={mainClass} onClick={() => onClick(name)}>
            <label className='nav-item-text'>
                {displayName}
            </label>
        </StyledLink>
    )
}

export default NavItem;
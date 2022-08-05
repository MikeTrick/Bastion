import React from "react";
import {NavLink} from "react-router-dom";


export const HeaderMenuItem = ({ name, link }) => {
    return (
        <div className="header-menu-bar__item">
            <NavLink to={link}>{name}</NavLink>
        </div>
    )
}
import React from "react";

import FavLogo from '../../images/Star.png'
import CartLogo from "../../images/Cart.png";
import {NavLink} from "react-router-dom";

export const FavoritesHeader = () => {
    return (
        <div className='search-menu-wrapper_favorites'>
            <button>
                <img src={FavLogo} alt=""/>
                <NavLink to='##'>Избранное</NavLink>
            </button>
        </div>

)
}
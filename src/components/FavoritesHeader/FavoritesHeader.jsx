import React from "react";

import FavLogo from '../../images/Star.png'

export const FavoritesHeader = () => {
    return (
        <div className='search-menu-wrapper_favorites'>
            <div>
                <img src={FavLogo} alt=""/>
            </div>
            <div>
                Избранное
            </div>
        </div>
    )
}
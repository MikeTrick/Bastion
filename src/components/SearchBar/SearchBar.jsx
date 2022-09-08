import React from "react";

import ZoomLogo from '../../images/Search.png'
import EnterLogo from '../../images/Enter.png'


export const SearchBar = () => {
    return (
        <div className='search-wrapper'>
            <div className="search-wrapper_img">
                <img src={ZoomLogo} alt=""/>
            </div>
            <div className="search-wrapper_input">
                <input type="text" placeholder='Поиск по названию...'/>
            </div>
            <div className="search-wrapper_button-enter">
                <button>
                    <img src={EnterLogo} alt=""/>
                </button>
            </div>
        </div>
    )
}
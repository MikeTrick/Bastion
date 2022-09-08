import React from "react";

import CartLogo from '../../images/Cart.png'
import {NavLink} from "react-router-dom";

export const CartHeader = () => {
    return (
        <div className='search-menu-wrapper_cart'>
            <button>
                <img src={CartLogo} alt=""/>
                <NavLink to='cart'>Корзина</NavLink>
            </button>
        </div>
    )
}
import React from "react";
import {CatalogButton} from "../CatalogButton/CatalogButton";
import {SearchBar} from "../SearchBar/SearchBar";
import {FavoritesHeader} from "../FavoritesHeader/FavoritesHeader";
import {CartHeader} from "../CartHeader/CartHeader";

export const SearchMenu = () => {
    return (
        <div className='search-menu'>
            <CatalogButton/>
            <SearchBar/>
            <FavoritesHeader/>
            <CartHeader link='cart'/>
        </div>
    )
}
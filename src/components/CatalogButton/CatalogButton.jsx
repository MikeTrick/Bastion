import React from "react";
import CatalogBtn from "../../images/CatalogBtn.png";

export const CatalogButton = () => {
    return (
        <div className="search-menu__wrapper_button">
            <button>
                <img src={CatalogBtn} alt=""/>
                Каталог
            </button>
        </div>
    )
}
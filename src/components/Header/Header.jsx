import React from "react";


import BastionLogo from './../../images/header__logo1.png'
import {HeaderMenuItem} from "../HeaderMenuItem/HeaderMenuItem";
import PhoneLogo from "../../images/Phone.png";
import MapPointer from "../../images/MapPointer.png";
import ArrowDown from "../../images/ArrowDown.png";
import Letter from "../../images/Letter.png";
import {Route} from "../Route/Route";
import {SearchMenu} from "../SearchMenu/SearchMenu";


export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="header-menu-bar">
                <HeaderMenuItem name='Типы продуктов' link='types'/>
                <HeaderMenuItem name='Продукты' link='products'/>
                <HeaderMenuItem name='Выгода для вас'/>
                <HeaderMenuItem name='Гарантии'/>
                <HeaderMenuItem name='Контакты'/>
                <div className="header-info-bar">
                    <div className="header-info-bar__items">
                        <div className="header-info-bar__item">
                            <div>
                                <img src={PhoneLogo} alt=""/>
                            </div>
                            <div className="header-info-bar__item_number">
                                +7 (499) 380-78-90
                            </div>
                        </div>
                    </div>
                    <div className="header-info-bar__item">
                        <div>
                            <img src={MapPointer} alt=""/>
                        </div>
                        <div className="header-info-bar__item_city">
                            Москва
                        </div>
                        <div>
                            <img src={ArrowDown} alt=""/>
                        </div>
                    </div>
                    <div className="header-info-bar__item">
                        <div>
                            <img src={Letter} alt=""/>
                        </div>
                        <span> info@bastion.pro </span>
                    </div>
                </div>
            </div>

            <div className="search-menu__wrapper">
                <div className="search-menu__wrapper_logo">
                    <div>
                        <img src={BastionLogo} alt=""/>
                    </div>
                    <div>
                        Производитель металлических изделий №1
                    </div>
                </div>
                <SearchMenu/>
            </div>
            <Route/>
        </div>
    )
}
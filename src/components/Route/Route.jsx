import React from "react";

import ArrowRight from '../../images/ArrowRight.png'

export const Route = () => {
    return (
        <div className='route-wrapper'>
            <div className="route-wrapper__element">
                Главная
            </div>
            <img src={ArrowRight} alt=""/>
            <div className="route-wrapper__element">
                Интернет-магазин
            </div>
            <img src={ArrowRight} alt=""/>
            <div className="route-wrapper__element">
                <span>Опоры труопроводов</span>
            </div>
        </div>
    )
}
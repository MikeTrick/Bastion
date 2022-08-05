import React from "react";

import MetalCascade from '../../images/e83b3ba7a7f3f3856bb925a1de52ec51 1.png'
import Fence from '../../images/noroot.png'
import Rectangle from '../../images/RectangleCatalogItems.png'



export const CatalogBody = () => {
    return (
        <div className='catalog-body__wrapper'>
            <h1>Каталог товаров</h1>

            <div className="catalog-wrapper">
                <div className="catalog-wrapper_list">
                    <div className="catalog-card__upper">
                        <h2>Металлокаркасы</h2>
                        <div>
                            <img src={MetalCascade} alt=""/>
                        </div>
                        <div className="catalog-card__upper_items">
                            <div className="catalog-card__upper_item">
                                Колонны
                            </div>
                            <div className="catalog-card__upper_item">
                                Перекрытия
                            </div>
                            <div className="catalog-card__upper_item">
                                Фермы
                            </div>
                            <div className="catalog-card__upper_item">
                                Балки
                            </div>
                            <div className="catalog-card__upper_item">
                                Опоры
                            </div>
                            <div className="catalog-card__upper_item">
                                Прогоны
                            </div>
                        </div>
                    </div>
                    <div className="catalog-card__upper">
                        <h2>Ограждения</h2>
                        <div>
                            <img src={Fence} alt=""/>
                        </div>
                        <div className="catalog-card__upper_items">
                            <div className="catalog-card__upper_item">
                                Газонные
                            </div>
                            <div className="catalog-card__upper_item">
                                Пешеходные
                            </div>
                            <div className="catalog-card__upper_item">
                                Строительные
                            </div>
                            <div className="catalog-card__upper_item">
                                Технологические
                            </div>
                            <div className="catalog-card__upper_item">
                                Балконные
                            </div>
                            <div className="catalog-card__upper_item">
                                Шумозащитные
                            </div>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <h3>
                            Быстровозводимые здания
                        </h3>
                        <div>
                            <img src={Rectangle} alt=""/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Опоры трубопроводов
                        </span>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Опоры трубопроводов
                        </span>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Опоры трубопроводов
                        </span>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Опоры трубопроводов
                        </span>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Опоры трубопроводов
                        </span>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="callBack-wrapper">
                <div className="callBack-content">
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <div>
                            <button>Заказать звонок</button>
                        </div>
                        <div>Нажимая на кнопку вы соглашаетесь <br/>
                            с политикой конфеденциальности
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

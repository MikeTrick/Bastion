import React from "react";

import MetalCascade from '../../images/e83b3ba7a7f3f3856bb925a1de52ec51 1.png'
import Fence from '../../images/noroot.png'
import Rectangle from '../../images/RectangleCatalogItems.png'
import Sklad from '../../images/Sklad.png'
import Stolb from '../../images/Stolb.png'
import Estakada from '../../images/Estakada.png'
import Opori from '../../images/opori.png'
import Lestni from '../../images/let-2 1.png'
import Armatura from '../../images/armatura 1.png'
import Fasad from '../../images/ocinkovannaya-podkonstrukciya-dlya-ventfasadov 1.png'
import Mebel from '../../images/mebel.png'
import Emkost from '../../images/unnamed 1.png'
import FooterInfo from '../../images/Footer.png'


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
                        <span>
                            Быстровозводимые здания
                        </span>
                        <div>
                            <img src={Rectangle} alt=""/>
                        </div>
                        <div className='catalog-card_img'>
                            <img src={Sklad} alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Высотные сооружения
                        </span>
                        <div>
                            <img src={Rectangle} alt=""/>
                        </div>
                        <div className='catalog-card_img'>
                            <img src={Stolb} alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Эстакады
                        </span>
                        <div>
                            <img src={Rectangle} alt=""/>
                        </div>
                        <div className='catalog-card_img'>
                            <img src={Estakada} alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Опоры трубопроводов
                        </span>
                        <div>
                            <img src={Rectangle} alt=""/>
                        </div>
                        <div className='catalog-card_img'>
                            <img src={Opori} alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Лестницы
                        </span>
                        <div>
                            <img src={Rectangle} alt=""/>
                        </div>
                        <div className='catalog-card_img'>
                            <img src={Lestni} alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Конструкции для ЖБИ
                        </span>
                        <div>
                            <img src={Rectangle} alt=""/>
                        </div>
                        <div className='catalog-card_img'>
                            <img src={Armatura} alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Фасадные конструкции
                        </span>
                        <div>
                            <img src={Rectangle} alt=""/>
                        </div>
                        <div className='catalog-card_img'>
                            <img src={Fasad} alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Мебельные конструкции
                        </span>
                        <div>
                            <img src={Rectangle} alt=""/>
                        </div>
                        <div className='catalog-card_img'>
                            <img src={Mebel} alt=""/>
                        </div>
                    </div>
                    <div className="catalog-card">
                        <span>
                            Емкости и резервуары
                        </span>
                        <div>
                            <img src={Rectangle} alt=""/>
                        </div>
                        <div className='catalog-card_img'>
                            <img src={Emkost} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="callBack-wrapper">*/}
            {/*    <div className="callBack-content">*/}
            {/*        <div>*/}
            {/*            <input type="text" placeholder='Ваше имя'/>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <input type="text" placeholder='Ваш телефон'/>*/}
            {/*        </div>*/}
            {/*        <div className='callBack-content_button'>*/}
            {/*            <div>*/}
            {/*                <button>Заказать звонок</button>*/}
            {/*            </div>*/}
            {/*            <div>Нажимая на кнопку вы соглашаетесь <br/>*/}
            {/*                <span> с политикой конфеденциальности </span>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="catalog-footer-wrapper">*/}
            {/*    <img src={FooterInfo} alt=""/>*/}
            {/*</div>*/}
        </div>
    )
}

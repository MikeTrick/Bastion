import React from "react";

import ItemImage from '../../images/cart-item.png'


export const Cart = () => {
    return (
        <div className="cart-wrapper">
            <h1>
                КОРЗИНА
            </h1>
            <div className="cart-items_wrapper">
                <div className="cart-items">
                    <div className="cart-item">
                        <div className="cart-item__img">
                            <img src={ItemImage} alt=''/>
                        </div>
                        <div className="cart-item__info">
                            <div className="cart-item__info_standart">
                                ГОСТ 14911-82
                            </div>
                            <div className="cart-item__info_name">
                                Name
                            </div>
                            <div className="cart-item__info_price">
                                Price
                            </div>
                        </div>
                        <div className="cart-item__quantity">
                            Quantity + and -
                        </div>
                        <div className="cart-item__total-price">
                            Total Price
                        </div>
                        <div>
                            <button>DeleteBtn</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-sidebar_wrapper">
                <h2>Заказ</h2>
                <div className="cart-sidebar_client">
                    <div>
                        Контактная информация
                    </div>
                    <div>
                        ФИО
                    </div>
                    <div className="cart-sidebar_client-info">
                        <div className="cart-sidebar_client-info__element">
                            <img src="" alt="name"/>
                            <input type="text" placeholder='Иванов Иван Иванович'/>
                        </div>
                        <div className="cart-sidebar_client-info__element">
                            <img src="" alt="phonr"/>
                            <input type="text" placeholder='Контактный телефон'/>
                        </div>
                        <div className="cart-sidebar_client-info__element">
                            <img src="" alt="mail"/>
                            <input type="text" placeholder='Email'/>
                        </div>
                        <div className="cart-sidebar_client-info__element">
                            <img src="" alt="organization"/>
                            <input type="text" placeholder='Организация / ИНН'/>
                        </div>

                    </div>
                    <div className="cart-sidebar_order">
                        <div className='cart-sidebar_order__total' >
                            <div>
                                Итого
                            </div>
                            <div>
                                Сумма
                            </div>
                        </div>
                        <div>
                            <button>
                                <img src="" alt="cart"/>
                                Оформить заказ
                            </button>
                            <button>
                                <img src="" alt="file"/>
                                Коммерческое предложение
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>);
}
import React, {useEffect} from "react";
import {ProductItem} from "../ProductItem";
import CartImage from '../../images/Cart.png'
import FileImage from '../../images/file.png'
import {useSelector} from "react-redux";
import {getCartState} from "../../redux/selectors";
import {useActions} from "../../hooks";
import {cartActions} from "../../redux/actions/products/cartActions";
import PersonImg from '../../images/user.png'
import PhoneSide from '../../images/phone2.png'
import AtSign from '../../images/at-sign.png'
import BriefCase from '../../images/briefcase.png'

export const Cart = () => {
    const products = useSelector(getCartState.cartProductsSelector);
    const totalSum = useSelector(getCartState.cartTotalSumSelector);
    const {changeProduct, changeTotalSum} = useActions(cartActions)

    useEffect(() => {
        debugger;
        changeTotalSum(products.reduce((acc, curr) => (acc + Number
            .parseFloat(`${curr.totalPrice}`)), 0))
    }, [products])

    return (
        <div className='container'>
            <h1>
                КОРЗИНА
            </h1>
            <div className="cart-wrapper">
                {products.map((product) => (
                    <ProductItem {...product} changeProduct={changeProduct} key={product.id}/>
                ))}
                <div className="cart-sidebar-wrapper">
                    <h3>Заказ</h3>
                    <div className="cart-sidebar-wrapper__contact-info">
                        <div>
                            <span>Контактная информация</span>
                        </div>
                        <div className="cart-sidebar-wrapper__contact-info_element">
                            <div className="cart-sidebar-wrapper__contact-info_element_logo">
                                <img src={PersonImg} alt=""/>
                            </div>
                            <div className="cart-sidebar-wrapper__contact-info_element_input">
                                <input type="text" placeholder='Иванов Иван Иванович'/>
                            </div>

                        </div>
                        <div className="cart-sidebar-wrapper__contact-info_element">
                            <div className="cart-sidebar-wrapper__contact-info_element_logo">
                                <img src={PhoneSide} alt=""/>
                            </div>
                            <div className="cart-sidebar-wrapper__contact-info_element_input">
                                <input type="text" placeholder='Номер телефона'/>
                            </div>

                        </div>
                        <div className="cart-sidebar-wrapper__contact-info_element">
                            <div className="cart-sidebar-wrapper__contact-info_element_logo">
                                <img src={AtSign} alt=""/>
                            </div>
                            <div className="cart-sidebar-wrapper__contact-info_element_input">
                                <input type="text" placeholder='Email'/>
                            </div>

                        </div>
                        <div className="cart-sidebar-wrapper__contact-info_element">
                            <div className="cart-sidebar-wrapper__contact-info_element_logo">
                                <img src={BriefCase} alt=""/>
                            </div>
                            <div className="cart-sidebar-wrapper__contact-info_element_input">
                                <input type="text" placeholder='Организация / ИНН'/>
                            </div>

                        </div>
                    </div>


                    <div className="cart-sidebar_order">
                        <div className='cart-sidebar_order__total'>
                            <div>
                                Сумма {totalSum}
                            </div>
                        </div>
                        <div className='cart-sidebar_order__buttons'>
                            <button>
                                <img src={CartImage} alt="cart"/>
                                Оформить заказ
                            </button>
                            <button>
                                <img src={FileImage} alt="file"/>
                                Коммерческое предложение
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
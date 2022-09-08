import React, {FC, memo, useCallback, useEffect, useState} from "react";
import {IMainProduct, IProductItemProps} from "../../types";
import ItemImage from "../../images/cart-item.png";
import CartImage from '../../images/Cart.png'
import {productsActions} from "../../redux/actions/products/productsActions";
import {cartActions} from "../../redux/actions/products/cartActions";
import {useActions} from "../../hooks";

// TODO: унести в константы
enum OperationsTypes {
    PLUS = 'plus',
    MINUS = 'minus'
}

const isCartProps = (params: IProductItemProps | IMainProduct): params is IProductItemProps => (
    'changeProduct' in params
)

export const ProductItem: FC<IProductItemProps | IMainProduct> = memo((props) => {
    const {standart, name, price} = props;
    const [orderCount, setOrderCount] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>(price)

    const {addToCart} = useActions(cartActions)

    useEffect(() => {
        setTotalPrice(price * orderCount)
    }, [orderCount])

    useEffect(() => {
        if (isCartProps(props)) {
            props.changeProduct({id: props.id, name, price, standart, quantity: orderCount, totalPrice})
        }
    }, [totalPrice])

    const orderCountHandler = useCallback((operationType: OperationsTypes) => () => {
        setOrderCount(operationType === OperationsTypes.PLUS
            ? orderCount + 1
            : (orderCount > 0 ? orderCount - 1 : orderCount))
    }, [orderCount])

    return (
        <div className='added-product_container'>
            <div className='added-product__wrapper'>
                <div className="added-product-item_wrapper">
                    <div className="added-product-item_img">
                        <img src={ItemImage} alt=''/>
                    </div>
                    <div className="added-product-item_info">
                        <div className="added-product-item_info_element_standart">
                            <div>
                                ГОСТ {standart}
                            </div>
                        </div>
                        <div className="added-product-item_info_element">
                            <div className="added-product-item_info_element_name">
                                {name}
                            </div>
                        </div>
                        <div className="added-product-item_info_element">
                            <div className="added-product-item_info_element_price">
                                {price} Руб.
                            </div>
                        </div>

                    </div>
                    <div className="added-product-total_element">
                        <div className="added-product-total_element_quantity-wrapper">
                            <div className='added-product-total_element'>
                                <button onClick={orderCountHandler(OperationsTypes.PLUS)}>+</button>
                            </div>
                            <div className="added-product-total_element_quantity">
                                {orderCount}
                            </div>
                            <div className='added-product-total_element'>
                                <button onClick={orderCountHandler(OperationsTypes.MINUS)}>-</button>
                            </div>
                        </div>
                        <div className="added-product-total_element">
                            <div className="added-product-total_element_total-price">
                                {totalPrice} Руб.
                            </div>
                            {!isCartProps(props) && <div className="added-product-total_element_add-button">
                                <button onClick={() => addToCart({
                                    id: props.id,
                                    name,
                                    price,
                                    standart,
                                    quantity: orderCount,
                                    totalPrice
                                })}><img src={CartImage} alt=""/></button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
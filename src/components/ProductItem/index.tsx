import React, {FC, memo, useCallback, useEffect, useState} from "react";
import {ICartProduct} from "../../types";
import ItemImage from "../../images/cart-item.png";

// TODO: унести в константы
enum OperationsTypes {
    PLUS = 'plus',
    MINUS = 'minus'
}

export const ProductItem: FC<ICartProduct> = memo(({
                                                       standart,
                                                       name,
                                                       price,
                                                       productTypeName,
                                                   }) => {
    const [orderCount, setOrderCount] = useState<number>(1)
    const [totalPrice, setTotalPrice] = useState<number>(price)

    useEffect(() => setTotalPrice(price * orderCount), [orderCount])

    const orderCountHandler = useCallback((operationType: OperationsTypes) => () => {
        setOrderCount(operationType === OperationsTypes.PLUS
            ? orderCount + 1
            : (orderCount > 0 ? orderCount - 1 : orderCount))
    }, [orderCount])

    return (
        <div className="cart-item">
            <div className="cart-item__img">
                <img src={ItemImage} alt=''/>
            </div>
            <div className="cart-item__info">
                <div className="cart-item__info_standart">
                    {standart}
                </div>
                <div className="cart-item__info_name">
                    {name}
                </div>
                <div className="cart-item__info_price">
                    {price}
                </div>
                <div className="cart-item__info_product-type">
                    {productTypeName}
                </div>
            </div>
            <div className="cart-item__quantity">
                {orderCount}
            </div>
            <div className="cart-item__total-price">
                {totalPrice}
            </div>
            <div>
                <button onClick={orderCountHandler(OperationsTypes.PLUS)}>+</button>
            </div>
            <div>
                <button onClick={orderCountHandler(OperationsTypes.MINUS)}>-</button>
            </div>
            <div>
                <button>DeleteBtn</button>
            </div>
        </div>
    )
})
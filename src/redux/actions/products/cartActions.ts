import {ICartProduct} from "../../../types";
import {CartActions} from "./Actions.enum";

const addToCart = (payload: ICartProduct) => ({
    type: CartActions.addToCart,
    payload,
})

const changeTotalSum = (payload: number) => ({
    type: CartActions.changeTotalSum,
    payload,
})

const changeProduct = (payload: ICartProduct) => ({
    type: CartActions.changeProduct,
    payload
})

export const cartActions = {
    addToCart,
    changeTotalSum,
    changeProduct,
}
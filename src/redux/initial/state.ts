import {ICartProduct, ICartState, initialProductsState} from "../../types";

export const INITAIL_PRODUCTS_STATE: initialProductsState = {
    types: [],
    products: [],
}

export const INITIAL_CART_STATE: ICartState = {
    products: [] as Array<ICartProduct>,
    totalPrice: 0,
}
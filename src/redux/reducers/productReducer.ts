import {AnyActionType, initialProductsState} from "../../types";
import {INITAIL_PRODUCTS_STATE} from "../initial/state";
import {PRODUCT_ACTIONS} from "../actions/products/productActions.enum";

export const productReducer = (state: initialProductsState = INITAIL_PRODUCTS_STATE, action: AnyActionType) => {
    switch (action.type) {
        case PRODUCT_ACTIONS.addProduct: {
            return ({...state, products: [...state.products, action.payload]})
        }
        case PRODUCT_ACTIONS.addType: {
            return ({...state, types: [...state.types, action.payload]})
        }
        default:
            return state
    }
}
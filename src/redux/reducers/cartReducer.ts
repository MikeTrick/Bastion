import {AnyActionType, ICartState, initialProductsState} from "../../types";
import {INITAIL_PRODUCTS_STATE, INITIAL_CART_STATE} from "../initial/state";
import {CartActions, PRODUCT_ACTIONS} from "../actions/products/Actions.enum";

export const cartReducer = (state: ICartState = INITIAL_CART_STATE, action: AnyActionType) => {
    switch (action.type) {
        case CartActions.addToCart: {
            return ({...state, products: [...state.products, action.payload]})
        }
        case CartActions.changeTotalSum: {
            return ({...state, totalPrice: action.payload})
        }
        case  CartActions.changeProduct: {
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        return action.payload;
                    }
                    return product
                })
            }
        }
        default: return state;
    }

}

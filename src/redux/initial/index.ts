import {combineReducers, createStore} from "redux";
import {productReducer} from "../reducers/productReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {cartReducer} from "../reducers/cartReducer";

const reducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
})

export const store = createStore(reducers, composeWithDevTools())
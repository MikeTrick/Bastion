import {combineReducers, createStore} from "redux";
import {productReducer} from "../reducers/productReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const reducers = combineReducers({
    products: productReducer
})

export const store = createStore(reducers, composeWithDevTools())
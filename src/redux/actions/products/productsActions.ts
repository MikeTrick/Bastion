import {IProduct, IProductType} from "../../../types";
import {PRODUCT_ACTIONS} from "./productActions.enum";
import {AnyAction} from "redux";

const addProduct = (payload: IProduct): AnyAction => ({
    type: PRODUCT_ACTIONS.addProduct, payload
})
const addType = (payload: IProductType): AnyAction => ({
    type: PRODUCT_ACTIONS.addType, payload
})

export const productsActions = {
    addProduct,
    addType,
}

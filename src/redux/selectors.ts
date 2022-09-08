import {IMainProduct, IState} from "../types";

const mainProductsSelector = ({ products }: IState) => (
    products.products.reduce((acc, curr) => {
        const product = {
            ...curr,
            productTypeName: (products.types.find(({id}) => curr.productType === id))?.name || ''
        }
        acc.push(product)
        return acc
    }, [] as Array<IMainProduct>)
)

const cartProductsSelector = ({ cart }: IState) => cart.products;
const cartTotalSumSelector = ({ cart }: IState) => cart.totalPrice;

export const getCartState = {
    cartProductsSelector,
    cartTotalSumSelector,
}

export const getMainProductsState = {
    getCartProducts: mainProductsSelector,
}
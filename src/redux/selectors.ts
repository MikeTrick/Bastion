import {ICartProduct, IState} from "../types";

const getCartProducts = ({ products }: IState) => (
    products.products.reduce((acc, curr) => {
        debugger
        const product = {
            ...curr,
            productTypeName: (products.types.find(({id}) => curr.productType === id))?.name || ''
        }
        acc.push(product)
        return acc
    }, [] as Array<ICartProduct>)
)

export const getCartState = {
    getCartProducts,
}
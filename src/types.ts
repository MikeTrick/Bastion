export interface IState {
    products: initialProductsState,
    cart: ICartState,
}

export interface initialProductsState {
    types: IProductType[],
    products: IProduct[]
}

export interface IFieldProps {
    type: 'input' | 'select',
    value: string,
    placeholder: string,
    onBlur?: (arg0: any) => void,
    options?: IOption[]
    currentOption?: string,
}

export interface IProduct {
    id: string,
    name: string,
    price: number,
    standart: string,
    productType?: string,
}

export interface ICartProduct extends IProduct {
    quantity: number,
    totalPrice: number,
}

export interface IMainProduct extends IProduct {
    productTypeName?: string
}

export interface IProductType {
    id: string,
    name: string,
}

export interface IOption {
    name: string,
    id: string,
}

export type AnyActionType = {
    type: string,
    payload?: any
}

export interface ICartState {
    products: Array<ICartProduct>,
    totalPrice: number,
}

export interface IProductItemProps extends ICartProduct {
    changeProduct: (product: ICartProduct) => void
}

export interface IState {
    products: initialProductsState
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
}


export interface IProductType extends IOption {
    id: string,
}

export interface IOption {
    name: string,
    id: string,
}

export type AnyActionType = {
    type: string,
    payload?: any
}
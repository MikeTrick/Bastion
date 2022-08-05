import * as React from "react";
import {FormField} from "../../UI/FormField";
import {productsActions} from "../../redux/actions/products/productsActions";
import {useState} from "react";
import {useActions} from "../../hooks";
import {useSelector} from "react-redux";
import {IOption, IState} from "../../types";

export const Products = () => {


    const {addProduct} = useActions(productsActions)

    const [productData, upadteProductData] = useState({
        id: '',
        name: '',
        price: 0,
        standart: '',
        productType: '',
    })

    const products = useSelector(({products}: IState) => products.products)
    const types = useSelector(({products}: IState) => products.types)
    const onBlurHandler = (fieldName:string) => (value:string | IOption[]) => upadteProductData(prev => ({...prev, [fieldName]: value}))

    return (
        <div className='products-container'>
            <div className="products-container__item_id">
                <FormField type='input' value='' placeholder='id' onBlur={onBlurHandler('id')}/>
            </div>
            <FormField type='input' value='' placeholder={'name'} onBlur={onBlurHandler('name')}/>
            <FormField type='input' value='' placeholder='price' onBlur={onBlurHandler('price')}/>
            <FormField type='select' value='' placeholder='Тип продукта' options={types}
                       onBlur={onBlurHandler('productType')} currentOption={productData.productType}/>

            <FormField type='input' value='' placeholder='ГОСТ' onBlur={onBlurHandler('standart')}/>
            <div>
                <hr/>
            </div>
            <button onClick={() => addProduct(productData)}>Создать</button>
        </div>
    )
}
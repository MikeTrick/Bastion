import React, {useState} from 'react';
import {FormField} from "../../UI/FormField";
import {useActions} from "../../hooks";
import {productsActions} from "../../redux/actions/products/productsActions";
// import {useSelector} from "r eact-redux";
// import {IState} from "../../types";

export const ProductsTypes = () => {
    const {addType} = useActions(productsActions)
    const [id, setId] = useState('')
    const [name, setName] = useState('')

    // const types = useSelector(({products}: IState) => products.types)

    return (
        <div className='products-container'>
            <FormField type='input' value='' placeholder='Тип' onBlur={(name:string) => setName(name)}/>
            <FormField type='input' value='' placeholder='id' onBlur={(id:string) => setId(id)}/>

            <button type='button' onClick={() => addType({id, name})}>Создать</button>
        </div>
    )
}
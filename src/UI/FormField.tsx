import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {IFieldProps} from "../types";

export const FormField: FC<IFieldProps> = (
    {
        type,
        value = '',
        onBlur,
        placeholder = '',
        options,
        currentOption = 'default',

    }) => {
    const [currentValue, setCurrentValue] = useState('')

    useEffect(() => {
        (type === 'input') && setCurrentValue(value)
    }, [value, type])

    useEffect(() => {
        type === 'select' && setCurrentValue(currentOption)
    }, [currentOption])

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setCurrentValue(e.target.value)
    const onBlurHandler = () => {
        onBlur && onBlur(currentValue)
    }
    const selectBlurHandler = () => {
        onBlur && onBlur(currentValue)
    }

    const renderField = () => {
        switch (type) {
            case 'input': {
                return (
                    <input type={type} value={currentValue} onChange={changeHandler} onBlur={onBlurHandler}
                           placeholder={placeholder}/>
                )
            }
            case 'select': {
                return (
                    <select value={currentValue}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCurrentValue(e.target.value)}
                            onBlur={selectBlurHandler}>
                        <option value='default'>Не выбрано</option>
                        {options?.map(({name, id}, index) => (
                            <option value={id} key={`option-${index + 1}`}>
                                {name}
                            </option>
                        ))}
                    </select>
                )
            }
        }
    }

    return (
        <div className='form-field-wrapper'>
            {renderField()}
        </div>
    )
}
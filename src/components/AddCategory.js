import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (element) => {
        setInputValue(element.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cate => [inputValue, ...cate]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Escriba un gif para buscar'>
            </input>
        </form>
    );
}

    //obliga enviar X propiedad
    AddCategory.propTypes = {
        setCategories: PropTypes.func.isRequired,
    }
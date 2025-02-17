import { useState } from 'react';
import { PropTypes } from 'prop-types'

export const AddCategory = ( { onNewCategory } ) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ( { target } ) => {

        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = inputValue.trim();
        if(newValue.length <= 1) return;
        //setCategories( (c) => [ inputValue, ...c ] );
        onNewCategory(inputValue)
        setInputValue('');
    }
    return (
        
        <form onSubmit={ onSubmit }>

            <input
                type="test"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ onInputChange
                }
            />

        </form>

    )

};

AddCategory.propTypes = {
    onNewCategory: PropTypes.string
};
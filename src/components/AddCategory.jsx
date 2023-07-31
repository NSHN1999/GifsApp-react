import PropTypes from 'prop-types';
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleOnChange = ({target}) => {
        setInputValue(target.value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <=1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return(
        <form
            className='text-black w-full px-10' 
            onSubmit={handleOnSubmit}
        >
            <input
                className="px-4 mt-10 rounded-full h-10 w-full border-blue-500 border-4"
                type="text"
                placeholder="Buscar Gifs..."
                value={inputValue}
                onChange={handleOnChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
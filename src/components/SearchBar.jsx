import { useState } from 'react';


export const SearchBar = ({ onSetSearch }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleChange = ({ target }) => {

        const newValue = target.value.toLowerCase().replace(/\s+/g, '+');
        onSetSearch( newValue );
        setInputValue( target.value );

    }

  return (
    
    <form>

        <input 
            type="text" 
            id="category" 
            value={ inputValue } 
            onChange={ handleChange } 
            placeholder="..."
        />

    </form>

  )
}
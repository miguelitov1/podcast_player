import { useState } from 'react';


export const SearchBar = ({ onNewSearch }) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {

        setInputValue( event.target.value );

    }

    const onSubmit = ( event ) => {
        
        event.preventDefault();
        const newValue = inputValue.trim();

        if ( newValue !== '' ) {
        
            onNewSearch( newValue );
            setInputValue('');
        
        }

    }

  return (
    
    <form onSubmit={ onSubmit } aria-label="form">

        <input 
            type="text" 
            id="category" 
            value={inputValue} 
            onChange={ handleChange } 
            placeholder="..."
        />

    </form>

  )
}
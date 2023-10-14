import { useState } from 'react';


export const SearchBar = ({ onSetSearch }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleChange = ({ target }) => {

        const newValue = target.value.toLowerCase().replace(/\s+/g, '+');
        onSetSearch( newValue );
        setInputValue( target.value );

    }

  return (
    
    <form className='flex items-center justify-center'>

        <input 
            className='w-2/3 h-12 px-4 text-lg text-white placeholder-white border 
            border-gray-900 rounded-lg focus:outline-none bg-gray-900'
            type="text" 
            id="category" 
            value={ inputValue } 
            onChange={ handleChange } 
            placeholder="Buscador de podcasts..."
        />

    </form>

  )
}
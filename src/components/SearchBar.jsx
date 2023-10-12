import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';


export const SearchBar = ({ onNewSearch }) => {

    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState('');

    const { data, isLoading, error } = useFetch( `https://itunes.apple.com/search?term=${ search }&entity=podcast` );

    const handleChange = ({ target }) => {

        const newValue = target.value.toLowerCase().replace(/\s+/g, '+');
        setSearch( newValue );
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
import { useState } from 'react'
import { SearchBar } from './components/SearchBar'

export const PodcastPlayerApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {

      setCategories([ newCategory, ...categories ]);
      
    };

  return (
    <>

        <h1>Buscador</h1>

        <SearchBar onNewSearch={ onAddCategory }/>

        <ul>
            {categories.map( category =>  <li key={category}>{category}</li> )}
        </ul>
    
    </>
  )
}

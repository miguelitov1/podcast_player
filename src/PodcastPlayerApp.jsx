import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { PodcastGrid } from './components/PodcastGrid'

export const PodcastPlayerApp = () => {

  const [search, setSearch] = useState('');

  const onSetSearch = ( result ) => {

    setSearch( result );

  }

  return (
    <>

        <h1>Buscador</h1>

        <SearchBar onSetSearch={ onSetSearch }/>

        <PodcastGrid search={ search }/>
    
    </>
  )
}

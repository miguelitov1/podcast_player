import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { PodcastGrid } from './components/PodcastGrid'

export const PodcastPlayerApp = () => {

  const [search, setSearch] = useState('');

  const onSetSearch = ( result ) => {

    setSearch( result );

  }

  return (

    <div className="flex-col mx-auto w-830">

        <SearchBar onSetSearch={ onSetSearch }/>

        <PodcastGrid search={ search }/>

    </div>
  )
}

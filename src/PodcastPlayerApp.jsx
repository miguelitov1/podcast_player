import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchBar } from './components/SearchBar'
import { PodcastGrid } from './components/PodcastGrid'
import { PodcastDetails } from './components/PodcastDetailsGrid';

export const PodcastPlayerApp = () => {

  const [search, setSearch] = useState('');

  const onSetSearch = ( result ) => {

    setSearch( result );

  }

  return (

    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={
          <div className="flex-col mx-auto w-830">
            <SearchBar onSetSearch={ onSetSearch }/>
            <PodcastGrid search={ search }/>
          </div>
        }/>

        <Route exact path="/podcast/:podcastId" element={
          <PodcastDetails />
        }/>

      </Routes>
    </BrowserRouter>
  )
}

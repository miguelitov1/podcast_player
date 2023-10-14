import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AudioOrderProvider } from './providers/AudioOrderProvider'

import { SearchBar } from './components/podcast_search/SearchBar'
import { PodcastGrid } from './components/podcast_search/PodcastGrid'
import { PodcastDetailsGrid } from './components/Podcast_view/PodcastDetailsGrid';
import { AudioPlayer } from './components/audio_player/AudioPlayer';

export const PodcastPlayerApp = () => {

  const [search, setSearch] = useState('');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

//Funcion que setea la busqeuda
  const onSetSearch = ( result ) => {
    setSearch( result );
  }

  // Función para controlar la reproducción del audio
  const handleAudioPlay = () => {
    setIsAudioPlaying(true);
  };

  // Función para controlar cuando se detiene la reproducción del audio
  const handleAudioPause = () => {
    setIsAudioPlaying(false);
  };

  return (
    <AudioOrderProvider>

      <div>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="flex-col mx-auto w-830">
                  <SearchBar onSetSearch={onSetSearch} />
                  <PodcastGrid search={search} />
                </div>
              }
            />

            <Route path="/podcast/:collectionId" element={<PodcastDetailsGrid />} />
          </Routes>
        </BrowserRouter>

        {/* Renderizar AudioPlayer solo si se está reproduciendo un audio */}

          <div className="fixed bottom-0 w-full">
            <AudioPlayer
            />
          </div>


      </div>
    </AudioOrderProvider>
  );
};

import React, { useState } from 'react';
import Player from "@madzadev/audio-player";

export const AudioPlayer = ({ tracks }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
        {isPlaying ? (
          <Player
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlaylist={false}
            autoPlayNextTrack={true}
        />
        ) : (
          <button onClick={handlePlay}>Reproducir audio</button>
        )}
    </div>
  )
}

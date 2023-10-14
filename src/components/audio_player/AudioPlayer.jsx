import React, { useState, useRef, useContext, useEffect } from "react";
import { AudioOrderContext } from "../../providers/AudioOrderProvider";
import imagen from "../../public/onda-sonora.png";

import CardContent from "@material-ui/core/CardContent";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Card from "@material-ui/core/Card";

export const AudioPlayer = () => {
  const [audiosOrder, ] = useContext(AudioOrderContext);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
	if (isPlaying) {
	  audioRef.current.pause();
	} else {
	  // Verificar si el objeto de audio está listo para reproducirse
	  if (audioRef.current.readyState === 4) {
		audioRef.current.play();
	  }
	}
	setIsPlaying(!isPlaying);
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
    audioRef.current.load(); // Load new audio source
    setIsPlaying(true); // Start playing the new track
    audioRef.current.play();
  };

  useEffect(() => {
    const handleEnd = () => {
      setIsPlaying(false);
      setCurrentTrackIndex(null);  // Anular la reproducción al llegar al final
    };

    audioRef.current.addEventListener("ended", handleEnd);

    return () => {
      audioRef.current.removeEventListener("ended", handleEnd);
    };
  }, []);
  

  return (
    <div className="w-full flex justify-center">
      <Card className="flex justify-center w-full bg-whitesmoke shadow-md">
        <div className="flex flex-col max-w-lg max-h-25">
          <CardContent className="flex-1">
            <Typography className="line-clamp-2 text-base" component="p" variant="h6">
			        {currentTrackIndex !== null ? audiosOrder[currentTrackIndex].title : "No hay canción seleccionada"}
            </Typography>
          </CardContent>
          <div className="flex items-center justify-center pl-1 pb-1">
            <IconButton
              aria-label="previous"
              onClick={() => changeTrack((currentTrackIndex - 1 + audiosOrder.length) % audiosOrder.length)}
            >
              {useTheme().direction !== "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
            <IconButton aria-label="play/pause" onClick={playAudio}>
              {isPlaying ? (
                <PauseIcon style={{ height: 20, width: 20 }} />
              ) : (
                <PlayArrowIcon style={{ height: 20, width: 20 }} />
              )}
            </IconButton>
            <IconButton
              aria-label="next"
              onClick={() => changeTrack((currentTrackIndex + 1) % audiosOrder.length)}
            >
              {useTheme().direction !== "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
          </div>
        </div>
        <CardMedia className="w-40" image={audiosOrder[currentTrackIndex]?.image || imagen} />
        <audio className="audio-element" ref={audioRef}>
		{currentTrackIndex !== null && <source src={audiosOrder[currentTrackIndex].url} />}
        </audio>
      </Card>
    </div>
  );
};

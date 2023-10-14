import React, { useState, useRef } from "react";
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
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
    audioRef.current.load(); // Load new audio source
    setIsPlaying(true); // Start playing the new track
    audioRef.current.play();
  };

  const tracks = [
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      image: "https://www.mgc.es/wp-content/uploads/2020/04/musica-corazon.jpg",
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      image: "https://www.mgc.es/wp-content/uploads/2020/04/musica-corazon-feliz.jpg",
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      image: "https://www.mgc.es/wp-content/uploads/2020/04/musica-corazon.jpg",
    },
  ];

  return (
    <div className="p-4">
      <Card className="flex w-96 bg-whitesmoke shadow-md">
        <div className="flex flex-col">
          <CardContent className="flex-1">
            <Typography component="h5" variant="h5">
              {tracks[currentTrackIndex].title}
            </Typography>
          </CardContent>
          <div className="flex items-center pl-1 pb-1">
            <IconButton
              aria-label="previous"
              onClick={() => changeTrack((currentTrackIndex - 1 + tracks.length) % tracks.length)}
            >
              {useTheme().direction !== "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
            <IconButton aria-label="play/pause" onClick={playAudio}>
              {isPlaying ? (
                <PauseIcon style={{ height: 38, width: 38 }} />
              ) : (
                <PlayArrowIcon style={{ height: 38, width: 38 }} />
              )}
            </IconButton>
            <IconButton
              aria-label="next"
              onClick={() => changeTrack((currentTrackIndex + 1) % tracks.length)}
            >
              {useTheme().direction !== "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
          </div>
        </div>
        <CardMedia className="w-40" image={tracks[currentTrackIndex].image} />
        <audio className="audio-element" ref={audioRef}>
          <source src={tracks[currentTrackIndex].url} />
        </audio>
      </Card>
    </div>
  );
};

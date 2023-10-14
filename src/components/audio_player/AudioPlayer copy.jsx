// import React, { useState, useEffect, useRef, useContext  } from "react";
// import { AudioOrderContext } from "../providers/AudioOrderProvider";

// import CardContent from "@material-ui/core/CardContent";
// import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
// import SkipNextIcon from "@material-ui/icons/SkipNext";
// import { useTheme } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import CardMedia from "@material-ui/core/CardMedia";
// import PauseIcon from '@material-ui/icons/Pause';
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import Card from "@material-ui/core/Card";


// export const AudioPlayer = () => { 
//   const [ audioOrder, setAudiosOrder ] = useContext(AudioOrderContext);

//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
//   const [currentTrackImage, setCurrentTrackImage] = useState("");

//   const playAudio = () => {
//     const audioElement = audioRef.current;
//     if (isPlaying) {
//       audioElement.pause();
//     } else {
//       audioElement.src = audioOrder[currentTrackIndex].url;
//       setCurrentTrackImage(audioOrder[currentTrackIndex].image);
//       if (audioElement.paused) {
//         audioElement.play();
//         setIsPlaying(true);
//       } else {
//         audioElement.onpause = () => {
//           audioElement.play();
//           setIsPlaying(true);
//         };
//         audioElement.pause();
//       }
//     }
//     setIsPlaying(!isPlaying);
//   };
  
//   useEffect(() => {
//     const audioElement = audioRef.current;
//     const playPromise = audioElement.play();
//     if (playPromise !== undefined) {
//       playPromise.then(() => {
//         setIsPlaying(true);
//       }).catch(() => {
//         setIsPlaying(false);
//       });
//     }
//   }, []);
  

//   const handleNext = () => {
//     setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % audioOrder.length);
//     playAudio();
//   };

//   const handlePrev = () => {
//     setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + audioOrder.length) % audioOrder.length);
//     playAudio();
//   };

  
//   return (
//     <div className="max-w-xl mx-auto my-8">
//       <Card className="flex bg-whitesmoke shadow-md">
//         <div className="flex flex-col">
//           <CardContent className="flex-1">
//             <Typography component="h5" variant="h5">
//               {audioOrder[currentTrackIndex].title}
//             </Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               Singer Name
//             </Typography>
//           </CardContent>
//           <div className="flex items-center pl-1 pb-1">
//             <IconButton aria-label="previous" onClick={handlePrev}>
//               <SkipPreviousIcon />
//             </IconButton>
//             <IconButton aria-label="play/pause" onClick={playAudio}>
//               {isPlaying ? (
//                 <PauseIcon style={{ height: 38, width: 38 }} />
//               ) : (
//                 <PlayArrowIcon style={{ height: 38, width: 38 }} />
//               )}
//             </IconButton>
//             <IconButton aria-label="next" onClick={handleNext}>
//               <SkipNextIcon />
//             </IconButton>
//           </div>
//         </div>
//         <CardMedia
//           style={{
//             width: 151,
//             height: 151 
//           }}
//           image={currentTrackImage} 
//         />
//         <audio ref={audioRef} className="audio-element" />
//       </Card>
//     </div>
//   );
// };
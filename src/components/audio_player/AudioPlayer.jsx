import { useState } from "react";
import CardContent from "@material-ui/core/CardContent"; 
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"; 
import SkipNextIcon from "@material-ui/icons/SkipNext"; 
import { useTheme } from "@material-ui/core/styles"; 
import Typography from "@material-ui/core/Typography"; 
import IconButton from "@material-ui/core/IconButton"; 
import CardMedia from "@material-ui/core/CardMedia"; 
import PlayArrowIcon from "@material-ui/icons/PlayArrow"; 
import Card from "@material-ui/core/Card"; 

export function AudioPlayer() { 

	const [isPlaying, setIsPlaying] = useState(false);

	const playAudio = () => {
	  const audioEl = document.getElementsByClassName("audio-element")[0];
	  if (isPlaying) {
		audioEl.pause(); // Pausar la reproducción
	  } else {
		audioEl.play(); // Iniciar la reproducción
	  }
	  setIsPlaying(!isPlaying); // Alternar el estado de reproducción
	};

return ( 
	<div style={{}}> 
	<Card 
		style={{ 
		width: 400, 
		display: "flex", 
		backgroundColor: "whitesmoke", 
		boxShadow: "4px 4px 4px gray", 
		}} 
	> 
		<div 
		style={{ 
			display: "flex", 
			flexDirection: "column", 
		}} 
		> 
		<CardContent 
			style={{ 
			flex: "1 0 auto", 
			}} 
		> 
			<Typography component="h5" variant="h5"> 
			Music Title 
			</Typography> 
			<Typography variant="subtitle1" color="textSecondary"> 
			Singer Name 
			</Typography> 
		</CardContent> 
		<div 
			style={{ 
			display: "flex", 
			alignItems: "center", 
			paddingLeft: 1, 
			paddingBottom: 1, 
			}} 
		> 
			<IconButton aria-label="previous"> 
			{useTheme().direction !== "rtl" ? ( 
				<SkipPreviousIcon /> 
			) : ( 
				<SkipNextIcon /> 
			)} 
			</IconButton> 
			<IconButton aria-label="play/pause"> 
			<PlayArrowIcon 
				style={{ 
				height: 38, 
				width: 38, 
				}} 
				onClick={playAudio} 
			/> 
			</IconButton> 
			<IconButton aria-label="next"> 
			{useTheme().direction !== "rtl" ? ( 
				<SkipNextIcon /> 
			) : ( 
				<SkipPreviousIcon /> 
			)} 
			</IconButton> 
		</div> 
		</div> 
		<CardMedia 
		style={{ 
			width: 151, 
		}} 
		image= 
"https://write.geeksforgeeks.org/static/media/Group%20210.08204759.svg"
		/> 
		<audio className="audio-element"> 
		<source src= 
"https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"> 
		</source> 
		</audio> 
	</Card> 
	</div> 
); 
}

let time = 600;
let calc = time*1000 
video.playbackRate = 0.7;
let videoplay = () => {
        video.currentTime = 0;
        video.play();
}
setInterval(videoplay,calc);
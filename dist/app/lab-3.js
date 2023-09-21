"use strict";
class AudioPlayer {
    play() {
        const audio = document.querySelector("#audio");
    }
}
class VideoPlayer {
    play() {
        console.log("Đang phát Video  …");
    }
}
const audioPlayer = new AudioPlayer();
const videoPlayer = new VideoPlayer();
audioPlayer.play();
videoPlayer.play();

interface Playable {
    play():void;
}

class AudioPlayer implements Playable {
    play(): void {
     const audio = document.querySelector("#audio") as HTMLAudioElement;
        
    }
}

class VideoPlayer implements Playable {
  play(): void {
    console.log("Đang phát Video  …");
  }
}


  const audioPlayer = new AudioPlayer();
  const videoPlayer = new VideoPlayer();
  audioPlayer.play();
  videoPlayer.play();

  
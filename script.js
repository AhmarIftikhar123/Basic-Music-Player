const progress_bar = document.getElementById("progress");

const play_btn = document.getElementById("play_btn");

const song = document.getElementById("song");

song.onloadedmetadata = () => {
  progress_bar.max = song.duration;
  progress_bar.value = song.currentTime;
};

play_btn.addEventListener("click", (e) => {
  if (e.target.tagName === "UL") {
    var click = e.target.children[0];
  } else if (e.target.tagName === "I") {
    var click = e.target;
  }

  if (click.classList.contains("fa-play")) {
    song.play();
    click.classList.replace("fa-play", "fa-pause");
  } else {
    song.pause();
    click.classList.replace("fa-pause", "fa-play");
  }
});

 progress_bar.addEventListener('input',()=>{
    song.play();
    song.currentTime = progress_bar.value;
 })


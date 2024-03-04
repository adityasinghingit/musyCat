console.log("Welcome to Musicat");
// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('/musyCat/music/Backinblack.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let gif2 = document.getElementById('gif2');

let songs = [
    {songName: "BackinBlack", filePath: "/musyCat/music/Backinblack.mp3", covrPath: "cover/1.jpg"},
    {songNaame: "BackinBlack", filePath: "/musyCat/music/Backinblack.mp3", covrPath: "cover/1.jpg"},
    {songName: "BackinBlack", filePath: "/musyCat/music/Backinblack.mp3", covrPath: "cover/1.jpg"},
    {songName: "BackinBlack", filePath: "/musyCat/music/Backinblack.mp3", covrPath: "cover/1.jpg"},
    {songName: "BackinBlack", filePath: "/musyCat/music/Backinblack.mp3", covrPath: "cover/1.jpg"},
    {songName: "BackinBlack", filePath: "/musyCat/music/Backinblack.mp3", covrPath: "cover/1.jpg"},
    {songName: "BackinBlack", filePath: "/musyCat/music/Backinblack.mp3", covrPath: "cover/1.jpg"},
]


masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("gg-play-button-o");
        masterPlay.classList.add("gg-play-pause-o");
        gif.style.opacity = 1;
        gif2.style.opacity = 1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove("gg-play-pause-o");
        masterPlay.classList.add("gg-play-button-o");
        gif.style.opacity = 0;
        gif2.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // updateSeekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100)
    console.log(progress);
    myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


// <li class="brand"><img src="../pics/logo.jpg" alt="Musicat">Musicat</li>
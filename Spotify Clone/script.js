let song = [
    {songName:"Shivers", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Photograph", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Shape of you", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"}
]

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.querySelector("#masterPlay");
let progressBar = document.querySelector("#myprogressbar");
let gif = document.querySelector("#gif");
let mastersongname = document.querySelector("#mastersongname");
let songtime = Array.from(document.getElementsByClassName("timestamp"));
let songitems = Array.from(document.getElementsByClassName("song"));
console.log(songitems);

masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");

    }
});


audioElement.addEventListener("timeupdate", ()=> {
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     console.log(progress);
    progressBar.value = progress;
})

progressBar.addEventListener("change", ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
});


songitems.forEach((e,i)=> {
    console.log(e,i);
    e.getElementsByTagName("img")[0].src = song[i].coverPath;
    e.getElementsByTagName("p")[0].innerText = song[i].songName;
})

const makeplay = ()=> {
    Array.from(document.getElementsByClassName("songplay")).forEach((e)=>{
        e.classList.remove("fa-pause-circle");
        console.log("click");
        e.classList.add("fa-play-circle");
        
    })

}

Array.from(document.getElementsByClassName("songplay")).forEach((e)=>{
    e.addEventListener("click",(element)=> {
        makeplay();
        songIndex = parseInt(element.target.id);
        // console.log(index);
        // console.log(e.target.id);
        e.classList.remove("fa-play-circle");
        e.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songIndex}.mp3`;
        // mastersongname.innerHTML = song[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();


        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;



        
    })
})



document.querySelector("#before").addEventListener("click", ()=> {
    if(songIndex<=0){
        songIndex  = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerHTML = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();


    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;


});


document.querySelector("#next").addEventListener("click", ()=> {
    if(songIndex>=3){
        songIndex  = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerHTML = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();


    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;


});





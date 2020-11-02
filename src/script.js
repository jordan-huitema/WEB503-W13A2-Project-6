// DOM selectors
const musicContainer = document.getElementById("music-container")
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const cover = document.getElementById('cover')

// Song title array
const songs = ['blue-reeves', 'slow-snow', 'the-roads']

// Keep track of songs
let songIndex = 2

// Load song details into DOM
loadSong(songs[songIndex])

// Update song details 
function loadSong(song) {
    title.innerText = song
    audio.src = `../assests/audio/${song}.mp3`
    cover.src = `../assests/images/${song}.jpg`
}

// Play song 
function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}
// Pasue Song
function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause()
}
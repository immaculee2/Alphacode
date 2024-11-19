// script.js
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-container');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

// Songs data
const songs = [
  { title: 'Song 1', artist: 'killer', src: 'WhatsApp Audio 2024-11-19 at 11.20.54.mpeg' },
  { title: 'Song 2', artist: 'bright', src: 'WhatsApp Audio 2024-11-19 at 11.22.35.mpeg' },
  { title: 'Song 3', artist: 'mboneza', src: 'WhatsApp Audio 2024-11-19 at 11.22.46.mpeg' },
];

let currentSongIndex = 0;

// Load song
function loadSong(song) {
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  audio.src = song.src;
}

// Play/Pause functionality
function playPauseSong() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  }
}

// Previous song
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(songs[currentSongIndex]);
  audio.play();
  playPauseBtn.textContent = '⏸️';
}

// Next song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(songs[currentSongIndex]);
  audio.play();
  playPauseBtn.textContent = '⏸️';
}

// Update progress
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  currentTimeEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Set progress
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Display duration
function displayDuration() {
  const duration = audio.duration;
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  durationEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Event listeners
playPauseBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('loadedmetadata', displayDuration);
progressContainer.addEventListener('click', setProgress);

// Initial load
loadSong(songs[currentSongIndex]);
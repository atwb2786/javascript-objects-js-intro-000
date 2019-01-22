var playlist = {
  acdc: "thunderstruck",
  nirvana: "teen spirit",
  metallica: "unforgiven"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

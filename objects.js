var playlist = {
  acdc: "thunderstruck",
  nirvana: "teen spirit",
  metallica: "unforgiven"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
};

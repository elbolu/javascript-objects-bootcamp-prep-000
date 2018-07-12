const playlist = { artist: "song"}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song })
}

function removeFromPlaylist () {
  Object.assign({}, playlist, { artist: ['song'] })
  return playlist
}
const playlist = {nilsson: 'one', Blur: 'song 2', KingstonTrio: 'Three Song'}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song })
}

function removeFromPlaylist () {
  Object.assign({}, playlist, { artist: ['song'] })
  return playlist
}
const playlist = {nilsson: 'one', Blur: 'song 2', KingstonTrio: 'Three Song'}

function updatePlaylist(playlist, artist, song) {
  playlist[artist]=song;
  return playlist
}

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}
  // it's important that we merge everything into
  // a new object such as the empty {}. 
    // Otherwise, the object obj will be modified. 
    // Test what happens if this line was written as:
    // return Object.assign(obj, { [key]: value })
 
const recipe = { eggs: 3 }
 
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
// returns `{ eggs: 3, chocolate: '1 cup' }`
 
recipe /




function removeFromPlaylist () {
  Object.assign({}, playlist, { artist: ['song'] })
  return playlist
}
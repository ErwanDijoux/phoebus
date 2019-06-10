
export default function(playlist=[], action) {
  // console.log('ACTION EN COURS ====>', action)

  if (action.type === 'add') {

    var playlistCopy = [...playlist];
    // pushing the list
    playlistCopy.push(action)
    return playlistCopy;
  }

  if (action.type === "playlisted") {
    console.log("MA CHANSON A AJOUTER A LA PLAYLIST =", action)

    var playlistCopy = [...playlist];
    playlistCopy.push(action)
    playlist = playlistCopy
    console.log("MA PLAYLIST", playlist)
    return playlist
  }

  else{
    return playlist
  }}
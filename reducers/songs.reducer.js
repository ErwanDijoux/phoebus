export default function (songsList = [], action){
    // console.log("titre envoyé =========>", action)

    if(action.type == 'addSong'){
    var songsListCopy = [...songsList]
    songsListCopy.push(action)
    console.log("titres dans le reducer= ========>", songsListCopy)
    return songsListCopy
}

    else{
        return songsList
    }
}
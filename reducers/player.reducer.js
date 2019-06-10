export default function (song = "", action){

    if(action.type == 'songSelect'){
    song = action
    // console.log("SONG SELECTED YAAAAYYYYY", song)
    return song
}

    else{
        return song
    }
}
export default function (artist = "", action){

    if(action.type == 'artistSelect'){
    artist = action.artist
    console.log("artiste  ========>", artist)
    return artist
}

    else{
        artist = "rien"
        return artist
    }
}
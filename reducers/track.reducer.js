export default function (album = "", action){

    if(action.type == 'albumSelect'){
    album = action
    console.log("album  ========>", album)
    return album
}

else{
    return album
}}
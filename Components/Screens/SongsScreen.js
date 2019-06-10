import React from 'react';
import {
 
 fontStyle,
 View, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity
} from 'react-native';
import {Avatar, Text, Button, Divider, ListItem, List} from 'react-native-elements'
import { connect } from 'react-redux'


class SongsScreen extends React.Component {


    render() {



        var songsList = this.props.songsList

            // var songsList = [
            //     {
            //     title: "Arurian Dance",
            //     track: 3,
            //     album: "Departure",
            //     artist: "Nujabes",
            //     year: 2004,
            //     },
            //     {
            //     title: "Somebody Else's Guy",
            //     track: 1,
            //     album: "Somebody Else's Guy",
            //     artist: "Jocelyn Brown",
            //     year: 1984
            //     },
            //     {
            //     title: "Plastic Love",
            //     track: 1,
            //     album: "Plastic Love",
            //     artist: "Mariya Takeuchi",
            //     year: 1984
            //     },
            //     {
            //     title: "Battlecry",
            //     track: 1,
            //     album: "Departure",
            //     artist: "Nujabes",
            //     year: 2004
            //     },
            //     {
            //     title: "A day by atmosphere supreme",
            //     track: 9,
            //     album: "Metaphorical Music",
            //     artist: "Nujabes",
            //     year: 2003
            //     },
            // ]
            
            songsList.sort(function(a, b) {
                var textA = a.album.toUpperCase();
                var textB = b.album.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            songsList.sort(function(a, b) {
                var textA = a.artist.toUpperCase();
                var textB = b.artist.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });






        var actuallyDisplayed = []

        // console.log("this.props.selectedAlbum", this.props.selectedAlbum)
        if(this.props.selectedAlbum === "rien"){
        actuallyDisplayed = songsList
        console.log("actuallyDisplayed", actuallyDisplayed)
        }
        else{
        for (var i = 0; i < songsList.length; i++) {
            // console.log(displayedList[i].artist , this.props.selectedArtist)
            if(songsList[i].artist === this.props.selectedArtist){
                actuallyDisplayed.push(songsList[i])
            }
        }}


            for (var i = 0; i < songsList.length; i++) {
                // console.log("ALBUM DE LA CHANSON DE SONGLIST ACTUELLE",songsList[i].album)
                // console.log("SELECTED ALBUM", this.props.selectedAlbum.album)
                if(songsList[i].album === this.props.selectedAlbum.album){
                    actuallyDisplayed.push(songsList[i])
                }
            }
    










            var songsListItem = actuallyDisplayed.map((item, i) => {

            return (

                

            <ListItem hideChevron
                key={i}
                title={
                <View style={styles.artist} >
                
                    <TouchableOpacity style={{width: "95%" }} onPress={ () => {this.props.song(item), this.props.navigation.navigate("PlayerScreen")}}>

                        <View style={styles.artist}>
                        <Image source={item.picto} style={{width:18, height:18, marginTop: 10, marginRight: 15}}/>

                        <View style={styles.vieww}>
                        <Text style={styles.artist}>{item.title}</Text>
                        <Text style={styles.artist}>{item.artist}</Text>
                        </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={ () => {this.props.playlistedSong(item), this.props.navigation.navigate("PlaylistScreen")}}>
                    <Image source={require('../../assets/icon_plus.png')} style={{width:18, height:18, marginTop: 10, marginRight: 15}}/>
                    </TouchableOpacity>

                </View>

                }
            />
            );

            })


            return (
            <View style={styles.container2}>

            <SearchBar lightTheme={true} inputStyle={{backgroundColor:'white'}} containerStyle={{marginTop: 100, backgroundColor: 'transparent', borderColor:'red', borderStyle:'dotted'}}
                
                round
                onChange={this.setSearchText.bind(this)}
                placeholder='Type Here…' />
            
            
                <View style={{marginTop: 40, marginBottom: 20, alignItems: "center"}}><Text >Songs</Text></View>

                <ScrollView >
                    <SafeAreaView style={styles.container}>
                        <List style={styles.container} containerStyle={{backgroundColor: '#FFD2BE'}}>
                            {songsListItem}
                        </List>
                    </SafeAreaView>
                </ScrollView>
            </View>
            );
    }
}



const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#FFD2BE',
        margin: 20,
        
        
    },
    container2: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#FFD2BE',
    },
    artist:{
        
        flexDirection:'row',
        padding:0,
        paddingTop:0,
        color: '#007d8f',
    },
    artist2:{
        flexDirection:'column',
        padding:2,
        paddingTop:2,
        color: '#007d8f'
    },
    ratingText:{
        color: 'grey',
    }
});




// ENVOI DE LA CHANSON SÉLECTIONNÉE


function mapDispatchToProps3(dispatch){
    return{
        song: function(song){
            dispatch({
                type:"songSelect",
                song:song
            });
        },
        playlistedSong: function(song){
            dispatch({
                type:"playlisted",
                song:song
            })
        }
    }
    }
        


// RECUPÉRATION DE LA LISTE DE CHANSONS
function mapStateToProps(state){
    // console.log("Bonjour, moi, state.songsList, je suis", state.songsReducer)
    // console.log("Bonjour, moi, state.albumReducer, je suis", state.albumReducer)
    // console.log("Bonjour, moi, state.trackReducer, je suis", state.trackReducer)
    return{ songsList: state.songsReducer,
            selectedAlbum: state.trackReducer.album }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps3
    )(SongsScreen)
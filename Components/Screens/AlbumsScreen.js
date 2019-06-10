import React from 'react';
import {
 Image,
 fontStyle,
 View, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity
} from 'react-native';
import {Avatar, Text, Button, Divider, ListItem, List} from 'react-native-elements'
import { connect } from 'react-redux'


class AlbumsScreen extends React.Component {
    render() {


            
            this.props.songsList.sort(function(a, b) {
                var textA = a.album.toUpperCase();
                var textB = b.album.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            this.props.songsList.sort(function(a, b) {
                var textA = a.artist.toUpperCase();
                var textB = b.artist.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });








        var displayedList = []
        var undisplayedAlbums = []

        for (var i = 0; i < this.props.songsList.length; i++) {
        // console.log(undisplayedAlbums.indexOf(this.props.songsList[i].album))

            if(undisplayedAlbums.indexOf(this.props.songsList[i].album) === -1){
                displayedList.push(this.props.songsList[i]);
                undisplayedAlbums.push(this.props.songsList[i].album)
            }
        //A CE STADE, ON A TOUS LES ALBUMS, SANS DOUBLONS
        };
        // console.log("this.props.songsList ======", this.props.songsList)

        console.log("displayedList ================", displayedList)

        var actuallyDisplayed = []

        console.log("this.props.selectedArtist", this.props.selectedArtist)
        if(this.props.selectedArtist === "rien"){
        actuallyDisplayed = displayedList
        console.log("actuallyDisplayed", actuallyDisplayed)
        }
        else{
        for (var i = 0; i < displayedList.length; i++) {
            // console.log(displayedList[i].artist , this.props.selectedArtist)
            if(displayedList[i].artist === this.props.selectedArtist){
                actuallyDisplayed.push(displayedList[i])
            }
        }}




        // console.log("actuallyDisplayed ===", actuallyDisplayed)




            var ArtistsListItem = actuallyDisplayed.map((item, i) => {

            return (
            <ListItem hideChevron style={styles.artist} 
            
                key={i}
                title={       <TouchableOpacity onPress={ () => {this.props.album(item), this.props.navigation.navigate("SongsScreen")}}>

                            <View style={styles.artist}>
                            <Image source={require('../../assets/icon_album.png')} style={{width:18, height:18, marginTop: 10, marginRight: 15}}/>

                            <View style={styles.vieww}>
                            <Text style={styles.artist}>{item.album}</Text>
                            <Text style={styles.artist}>{item.artist}</Text>
                            </View>
                            </View>

                            </TouchableOpacity>
                        }
            />);

        })


            return (
            <View style={styles.container2} >
            
                <View style={{marginTop: 40, marginBottom: 20, alignItems: "center"}}><Text>Albums</Text></View>

                <ScrollView  >
                    <SafeAreaView style={styles.container}>
                        <List  style={styles.container} containerStyle={{backgroundColor: '#FFD2BE'}}>
                            {ArtistsListItem}
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



// ENVOI DE l'ALBUM SÉLECTIONNÉ
function mapDispatchToProps3(dispatch){
    return{
        album: function(album){
            dispatch({
                type:"albumSelect",
                album:album
            })
        }
    }
}

// RECUPÉRATION DE LA LISTE DE CHANSONS
function mapStateToProps(state){
    // console.log("Bonjour, moi, state.songsList, je suis", state.songsReducer)
    // console.log("Bonjour, moi, state.albumReducer, je suis", state.albumReducer)


    return{ songsList: state.songsReducer,
            selectedArtist: state.albumReducer }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps3
    )(AlbumsScreen)
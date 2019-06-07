import React, { Component } from 'react';
import {
Image, fontStyle, View, ScrollView, StyleSheet,  SafeAreaView, TouchableOpacity
} from 'react-native';
import {Avatar, Text, Button, Divider, ListItem, List} from 'react-native-elements'

import { connect } from 'react-redux'


class ArtistsScreen extends React.Component {
    
    render() {


        // console.log("Bonjour, moi, this.props.songsList, je suis", this.props.songsList)

        this.props.songsList.sort(function(a, b) {
                var textA = a.artist.toUpperCase();
                var textB = b.artist.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            var artistsList = []

            for (var i = 0; i < this.props.songsList.length; i++) {

                if(artistsList.indexOf(this.props.songsList[i].artist) === -1){
                    artistsList.push(this.props.songsList[i].artist)
                }
            }




            var ArtistsListItem = artistsList.map((item, i) => {

                

            return (
            <ListItem hideChevron 
            
                key={i}
                title={
                <TouchableOpacity onPress={  () => {this.props.artist(item); this.props.navigation.navigate("AlbumsScreen")} }>
                    <View style={styles.vieww}>
                        <Image source={require("../../assets/icon_artist.png")} style={{width:18, height:18, marginRight: 10}}/>
                        <Text style={styles.artist}>{item}</Text>
                    </View>
                </TouchableOpacity>}
            />);

        })


            return (
                
            <View style={styles.container2}>
            
                <View style={{marginTop: 40, marginBottom: 20, alignItems: "center"}}><Text >Artists</Text></View>

                <ScrollView >
                    <SafeAreaView style={styles.container}>
                        <List style={styles.container} containerStyle={{backgroundColor: '#FFD2BE'}}>
                            {ArtistsListItem}
                        </List>
                    </SafeAreaView>
                </ScrollView>
            </View>
            );
    }
}





function mapDispatchToProps(dispatch) {
        return {
        handleContact: function(nomArtiste) {
            dispatch({
                type: 'artistName',
                artist: nomArtiste
            })
        }
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

    vieww:{
        flexDirection:'row',
        marginTop: 8,
        marginBottom: 8,
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






// ENVOI DE l'ARTISTE SÉLECTIONNÉ
function mapDispatchToProps2(dispatch){
    return{
        artist: function(artist){
            dispatch({
                type:"artistSelect",
                artist:artist
            })
        }
    }
}

// RECUPÉRATION DE LA LISTE DE CHANSONS
function mapStateToProps(state){
    // console.log("Bonjour, moi, state.songsList, je suis", state.songsReducer)

    return{ songsList: state.songsReducer }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps2
    )(ArtistsScreen)
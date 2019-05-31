import React from 'react';
import {
 Image,
 fontStyle,
 View, ScrollView, StyleSheet, SafeAreaView
} from 'react-native';
import {Avatar, Text, Button, Divider, ListItem, List} from 'react-native-elements'


export default class ArtistsScreen extends React.Component {
    render() {

        var songsList = [
            {
                title: "Arurian Dance",
                track: 3,
                album: "Departure",
                artist: "Nujabes",
                year: 2004
            },
            {
                title: "Somebody Else's Guy",
                track: 1,
                album: "Somebody Else's Guy",
                artist: "Jocelyn Brown",
                year: 1984
            },
            {
                title: "Plastic Love",
                track: 1,
                album: "Plastic Love",
                artist: "Mariya Takeuchi",
                year: 1984
            },
            {
                title: "Battlecry",
                track: 1,
                album: "Departure",
                artist: "Nujabes",
                year: 2004
            },
            {
                title: "A day by atmosphere supreme",
                track: 9,
                album: "Metaphorical Music",
                artist: "Nujabes",
                year: 2003
            },
            ]

            
        songsList.sort(function(a, b) {
                var textA = a.artist.toUpperCase();
                var textB = b.artist.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            var artistsList = []

            for (var i = 0; i < songsList.length; i++) {

                if(artistsList.indexOf(songsList[i].artist) === -1){
                    artistsList.push(songsList[i].artist)
                }

            }





            var ArtistsListItem = artistsList.map((artist, i) => {

            return (
            <ListItem hideChevron 
            
                key={i}
                
                title={<View style={styles.artist}>

                <Image source={require('../../assets/icon_artist.png')} style={{width:18, height:18,  marginRight: 15}}/>
                <Text style={styles.artist}>{artist}</Text>
                
            </View>}
            />);

        })


            return (
            <View style={styles.container2}>
            
                <View style={{marginTop: 40, marginBottom: 20, alignItems: "center"}}><Text >Artists</Text></View>

                <ScrollView >
                    <SafeAreaView style={styles.container}>
                        <List style={styles.container} containerStyle={{backgroundColor: 'FFD2BE'}}>
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
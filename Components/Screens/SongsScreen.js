import React from 'react';
import {
 Image,
 fontStyle,
 View, ScrollView, StyleSheet, SafeAreaView, Image
} from 'react-native';
import {Avatar, Text, Button, Divider, ListItem, List} from 'react-native-elements'


export default class SongsScreen extends React.Component {
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
                var textA = a.album.toUpperCase();
                var textB = b.album.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            songsList.sort(function(a, b) {
                var textA = a.artist.toUpperCase();
                var textB = b.artist.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            var songsListItem = songsList.map((song, i) => {

            return (
            <ListItem
                key={i}
                title={song.title}
                subtitle={
                    <View>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                }
            />);

            })


            return (
            <View style={styles.container}>
            
                <View style={{marginTop: 40, marginBottom: 20, alignItems: "center"}}><Text >Songs</Text></View>

                <ScrollView style={styles.container}>
                    <SafeAreaView style={styles.container}>
                        <List style={styles.container} containerStyle={{backgroundColor: 'FFD2BE'}}>
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
        paddingTop: 15,
        backgroundColor: '#FFD2BE'
    },
    artist:{
        flexDirection:'row',
        padding:10,
        paddingTop:5,
    },
    ratingText:{
        color: 'grey',
    }
});
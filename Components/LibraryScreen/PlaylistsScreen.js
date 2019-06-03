import React from 'react';
import {
 Image,
 fontStyle,
 View, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity
} from 'react-native';
import {Avatar, Text, Button, Divider, ListItem, List} from 'react-native-elements'
import ModalPlayList from './ModalPlayList';



export default class PlaylistsScreen extends React.Component {
    render() {

            var playlistsList = [

                {
                title: "Playlist 1",
                tracks: [
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
                ]
                },

                {
                    title: "Playlist 2",
                    tracks: [
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
                        }
                    ]
                }
            ]
            
            

            var playlistsListItem = playlistsList.map((playlist, i) => {

            return (
            <ListItem
                key={i}
                title={<ListItem hideChevron 
            
                    key={i}
                    
                    title={<TouchableOpacity onPress={ () => this.props.navigation.navigate("AlbumsScreen")}>
                    <View style={styles.vieww}>
                      <Image source={require("../../assets/icon_artist.png")} style={{width:18, height:18, marginRight: 10}}/>
                      <Text style={styles.artist}>{item}</Text>
                    </View>
                  </TouchableOpacity>}
                />}
    
            />);

            })


            return (
            <View style={styles.container}>
            
                <View style={{marginTop: 40, marginBottom: 20, alignItems: "center"}}><Text >Playlists</Text></View>

                <ScrollView style={styles.container}>
                    <SafeAreaView style={styles.container}>
                        <List style={styles.container} containerStyle={{backgroundColor: '#FFD2BE'}}>
                            {playlistsListItem}
                        </List>
                    </SafeAreaView>
                </ScrollView>

            <View style={{justifyContent:"center", alignItems:"center", marginBottom: 20}}>
                <ModalPlayList/>

            </View>
                
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
  
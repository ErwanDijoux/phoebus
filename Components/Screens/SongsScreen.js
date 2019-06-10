import React from 'react';
import {
 
 fontStyle,
 View, ScrollView, StyleSheet, SafeAreaView, Image, TouchableOpacity
} from 'react-native';
import {Avatar, Text, Button, Divider, ListItem, List, SearchBar} from 'react-native-elements'


export default class SongsScreen extends React.Component {

    constructor(){
        super();
        this.state={
            songsList : [
                {
                title: "Arurian Dance",
                track: 3,
                album: "Departure",
                artist: "Nujabes",
                year: 2004,
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
                }],

            dataBackup : [
                {
                title: "Arurian Dance",
                track: 3,
                album: "Departure",
                artist: "Nujabes",
                year: 2004,
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
                }]
            }
            
        }




        setSearchText(event){
            console.log("=========> NativeEvent",event.nativeEvent)
            //Afficher le texte tapé
            searchText = event.nativeEvent.text;
            dataBackup       = this.state.dataBackup;
            console.log("=====> this.state.dataBackup",this.state.dataBackup)
            // searchText = searchText.trim().toLowerCase();
            // console.log('=======>searchTex.trim', searchText.trim())
            tabfilter = dataBackup.filter(function(l) {
               console.log("L ==================>",l);
            return l.name.match( searchText );
           });
           this.setState({
            data : tabfilter
            });
           }
        



    render() {

            var songsList = this.state.songsList
            
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

            var songsListItem = songsList.map((item, i) => {

            return (

                

            <ListItem hideChevron
                key={i}
                title={<TouchableOpacity onPress={ () => this.props.navigation.navigate("PlayerScreen")}>

                <View style={styles.artist}>
                <Image source={require('../../assets/icon_song.png')} style={{width:18, height:18, marginTop: 10, marginRight: 15}}/>

                <View style={styles.vieww}>
                <Text style={styles.artist}>{item.title}</Text>
                <Text style={styles.artist}>{item.artist}</Text>
                </View>
                </View>

                </TouchableOpacity>
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
import React from 'react';
import {
 Image,
 fontStyle,
 View, ScrollView, StyleSheet, SafeAreaView,
 AsyncStorage
} from 'react-native';
import {Avatar, Text, Button, Divider, ListItem, List} from 'react-native-elements'
import ModalPlayList from './ModalPlayList';
import { connect } from 'react-redux';


class PlaylistsScreen extends React.Component {

    

    constructor(){
        super()
        // this.state={
            
        //     playlistsList : [

        //         {
        //         title: "Playlist 1",
        //         tracks: [
        //             {
        //                 title: "Somebody Else's Guy",
        //                 track: 1,
        //                 album: "Somebody Else's Guy",
        //                 artist: "Jocelyn Brown",
        //                 year: 1984
        //                 },
        //             {
        //                 title: "Plastic Love",
        //                 track: 1,
        //                 album: "Plastic Love",
        //                 artist: "Mariya Takeuchi",
        //                 year: 1984
        //                 },
        //         ]
        //         },

        //         {
        //             title: "Playlist 2",
        //             tracks: [
        //                 {
        //                     title: "Battlecry",
        //                     track: 1,
        //                     album: "Departure",
        //                     artist: "Nujabes",
        //                     year: 2004
        //                     },
        //                 {
        //                     title: "A day by atmosphere supreme",
        //                     track: 9,
        //                     album: "Metaphorical Music",
        //                     artist: "Nujabes",
        //                     year: 2003
        //                 }
        //             ]
        //         }
        //     ]

        // }
    }

    componentDidUpdate=(prevProps)=>{
        // if (prevProps.playlist !== this.props.playlist) {

        //     var playlistCopy = [...this.state.playlistsList]

        //      playlistCopy.push({
        //         title: this.props.playlist,
        //         tracks: []
        //     })
        //     this.setState({
        //         playlistsList: playlistCopy
        //     })

            
        // } 
        
        // AsyncStorage.getItem("playlistNameStore", 
        //       function(error, data){
        //         console.log("Voci la data GetItem",data);
        //       })
    
        
        
    }

    componentWillMount(){

        AsyncStorage.getItem("playlistNameLocal",
                (err, data) => { 

                  var userData = JSON.parse(data); 

                  console.log("data Saved ====>", data);
                } 
                
              )

        // AsyncStorage.getItem("playlistNameStore", 
        //     (error, data) =>{
        //     console.log("Voci la data GetItem",data);
            

        //     var playlistCopy = [...this.state.playlistsList]
        //     // console.log("this.data.playlist =====>", this.state.playlistsList)

        //     playlistCopy.push({
        //         title: data,
        //         tracks: []
        //     })
        //     this.setState({
        //         playlistsList: playlistCopy
        //     })
        //     console.log("new state======>",this.state.playlistsList)

        //     })

    }

    // toto = () => {
    //     AsyncStorage.getItem("playlistNameStore", 
    //           function(error, data){
    //             console.log("Voci la data GetItem",data);
    //           })
    //   };


    render() {
        var playlist = (this.props.playlist)? this.props.playlist : []; 
        // const {playlistsList} = this.state
        console.log("this is my playList ========>", playlist)

            

            // playlistsList.push({
            //     title: this.props.playlist,
            //     tracks: []
            // })
            


            var playlistsListItem = playlist.map((playlist, i) => {

            return (
            <ListItem
                key={i}
                title={playlist.text}
    
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

function mapStateToProps(state) {
    console.log("=========> state playlist", (state.playlist))
    return { playlist: state.playlistReducer }
  }


export default connect(
    mapStateToProps,
    null
)(PlaylistsScreen);
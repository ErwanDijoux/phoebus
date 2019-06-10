import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';


import { List, ListItem, Button } from 'react-native-elements'

import { connect } from 'react-redux'




var songsList = [
  {
      title: "Arurian Dance",
      track: 3,
      album: "Departure",
      artist: "Nujabes",
      year: 2004,
      link: 'AlbumsScreen',
      cover: require("../mp3s/NujabesDeparture.jpg"),
      path: require("../mp3s/aruriandance.mp3"),
      picto: require('../../assets/icon_song.png')
  },
  // {
  //     title: "Somebody Else's Guy",
  //     track: 1,
  //     album: "Somebody Else's Guy",
  //     artist: "Jocelyn Brown",
  //     year: 1984,
  //     link: 'AlbumsScreen'
  // },
  {
      title: "Plastic Love",
      track: 1,
      album: "Plastic Love",
      artist: "Mariya Takeuchi",
      year: 1984,
      link: 'AlbumsScreen',
      cover: require("../mp3s/MariyaTakeuchiPlasticLove.jpg"),
      path: require("../mp3s/plasticlove.mp3"),
      picto: require("../mp3s/soundcloud_icon.png")
  },
  {
      title: "Battlecry",
      track: 1,
      album: "Departure",
      artist: "Nujabes",
      year: 2004,
      link: 'AlbumsScreen',
      cover: require("../mp3s/NujabesDeparture.jpg"),
      path: require("../mp3s/battlecry.mp3"),
      picto: require("../../assets/icon_song.png")
  },
  {
      title: "A day by atmosphere supreme",
      track: 9,
      album: "Metaphorical Music",
      artist: "Nujabes",
      year: 2003,
      link: 'AlbumsScreen',
      cover: require("../mp3s/NujabesMetaphoricalMusic.jpg"),
      path: require("../mp3s/adaybyatmospheresupreme.mp3"),
      picto: require("../mp3s/spotify_icon.png")
  },
  ]




class LibraryScreen extends React.Component {
  
  render() {



    var list = [
      {
        title: "Playlists",
        link: "PlaylistsScreen",
        picto: require('../../assets/icon_playlist.png')
      },
      {
        title:"Artists",
        link:"ArtistsScreen",
        picto: require('../../assets/icon_artist.png')
      },
      {
        title: "Albums",
        link: "AlbumsScreen",
        picto: require('../../assets/icon_album.png')
      },
      {
        title: "Songs",
        link: "SongsScreen",
        picto: require('../../assets/icon_song.png')
      }
    ];


//ENVOI DANS LA LIBRARY DE TOUTES LES CHANSONS
    songsList.map((item, i) => {
      key={i};
      envoiLibrary(this, item) 
    })
    
    function envoiLibrary(argument, argument2){
      argument.props.library(argument2.title, argument2.artist, argument2.album, "AlbumsScreen", argument2.cover, argument2.path, argument2.picto)
    }


    var listItem = list.map((item, i) => {

      return (




      <ListItem hideChevron 
      
          key={i}


  title={
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate(item.link); this.props.artist("rien"); this.props.album("rien")}}>
        <View style={styles.vieww}>
          <Image source={item.picto} style={{width:18, height:18, marginRight: 10}}/>
          <Text style={styles.artist}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    }
      />
      
      
      
      
      );
  })
    
    return (

  



<View style={styles.container2}>
            
                <View style={{marginTop: 40, marginBottom: 20, alignItems: "center"}}><Text >Library</Text></View>

                <ScrollView >
                    <SafeAreaView style={styles.container}>
                        <List style={styles.container} containerStyle={{backgroundColor: '#FFD2BE'}}>
                            {listItem}
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
  
  /* <View   style={{flexDirection:'row', alignItems: 'center', width:'90%', backgroundColor: 'transparent',  borderBottomWidth:'0.5', borderBottomColor:'#007D8F', height:65, marginTop:140,}}>
            <Image source={require('../../assets/icon_playlist.png')} style={{width: 18, height:18}}/>
            <Text style={{paddingLeft:20, fontFamily:'openSans', fontSize:20, color:'#007D8F'}}>Playlists</Text>
        </View>
        <View  style={{flexDirection:'row', alignItems: 'center', width:'90%', backgroundColor: 'transparent',  borderBottomWidth:'0.5', borderBottomColor:'#007D8F', height:65}}>
            <Image source={require('../../assets/icon_artist.png')} style={{width: 18, height:18}}/>
            <Text style={{paddingLeft:20, fontFamily:'openSans', fontSize:20, color:'#007D8F'}}>Artists</Text>
        </View>
        <View  style={{flexDirection:'row', alignItems: 'center', width:'90%', backgroundColor: 'transparent',  borderBottomWidth:'0.5', borderBottomColor:'#007D8F', height:65}}>
            <Image source={require('../../assets/icon_album.png')} style={{width: 18, height:18}}/>
            <Text style={{paddingLeft:20, fontFamily:'openSans', fontSize:20, color:'#007D8F'}}>Albums</Text>
        </View>
        <View  style={{flexDirection:'row', alignItems: 'center', width:'90%', backgroundColor: 'transparent',  borderBottomWidth:'0.5', borderBottomColor:'#007D8F', height:65}}>
            <Image source={require('../../assets/icon_song.png')} style={{width: 18, height:18}}/>
            <Text style={{paddingLeft:20, fontFamily:'openSans', fontSize:20, color:'#007D8F'}}>Songs</Text>
        </View> */

// A placer dans le style de la view
// alignItems:'center'

function mapDispatchToProps(dispatch){
  return{
    library: function(title, artist, album, link, cover, path, picto){
      dispatch({
          type:"addSong",
          title: title,
          artist: artist,
          album: album,
          link: link,
          cover: cover,
          path: path,
          picto: picto
      })
    },
    artist: function(artist){
      dispatch({
          type:"artistSelect",
          artist:artist
      })},
      album: function(album){
        dispatch({
          type:"albumSelect",
          album:album
        })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LibraryScreen)
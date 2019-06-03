import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';


import { List, ListItem, Button } from 'react-native-elements'










export default class LibraryScreen extends React.Component {
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
    ]


    var listItem = list.map((item, i) => {

      return (




        
      <ListItem hideChevron 
      
          key={i}

  title={
      <TouchableOpacity onPress={ () => this.props.navigation.navigate(item.link)}>
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
            
                <View style={{marginTop: 40, marginBottom: 20, alignItems: "center"}}><Text >Artists</Text></View>

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


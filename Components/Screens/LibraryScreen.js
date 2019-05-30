import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


import { List, ListItem } from 'react-native-elements'


const list = [
    {
      name: 'Playlists',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Artists',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
        name: 'Albums',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Songs',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }
    
  ]

export default class LibraryScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#FFD2BE', alignItems:'center' }}>
          {/* <List  containerStyle={{marginBottom: 20}}>
            {
                list.map((l) => (
                <ListItem leftIcon={{}} hideChevron  containerStyle={{backgroundColor: '#FFD2BE'}}
                    roundAvatar
                    avatar={{uri:l.avatar_url}}
                    key={l.name}
                    title={l.name}
                />
                ))
            }
        </List> */}
        <View   style={{flexDirection:'row', alignItems: 'center', width:'90%', backgroundColor: 'transparent',  borderBottomWidth:'0.5', borderBottomColor:'#007D8F', height:65, marginTop:140,}}>
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
        </View>
        
      </View>
    );
  }
}


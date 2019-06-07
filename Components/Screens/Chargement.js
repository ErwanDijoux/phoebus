import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { List, ListItem, Button, Header } from 'react-native-elements';


export default class Chargement extends React.Component {
    render() {


        return (
        <View style={{flex:1, backgroundColor: '#1e1c1c', alignItems: 'center', justifyContent:'center'}}>

            <Image style={{width: 300, height: 300}} className="App-logo" source={require('../../assets/note-music.gif')}/>

        </View>
     );
    }
  }

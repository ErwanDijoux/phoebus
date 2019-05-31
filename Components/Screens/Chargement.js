import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


export default class Chargement extends React.Component {
    render() {

        
        return (
        <View style={{flex:1, backgroundColor: '#FFD2BE', alignItems: 'center', justifyContent:'center'}}>
        
            <Image style={{width: 250, height: 250}} className="App-logo" source={require('../../assets/logo.png')}/>
            
        </View>
     );
    }
  }
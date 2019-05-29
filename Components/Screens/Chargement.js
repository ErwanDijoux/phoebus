import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class Chargement extends React.Component {
    render() {

        const logo = require('../../assets/logo.png');

        return (
        <View style={{flex:1, backgroundColor: '#FFD2BE', alignItems: 'center'}}>
            <Image style={{width: 200, height: 200, marginTop: 40}} source={require('../../assets/logo.png')}/>
        </View>
     );
    }
  }
  
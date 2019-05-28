import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Connexion from './Components/Screens/Connexion';



export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Connexion/>
      </View>
    );
  }
}


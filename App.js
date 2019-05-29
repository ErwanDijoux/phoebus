import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Connexion from './Components/Screens/Connexion';
// import SignInUpScreen from './Components/Screens/SignInUpScreen';
import Chargement from './Components/Screens/Chargement';




export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Chargement/>
      </View>
    );
  }
}


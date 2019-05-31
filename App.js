import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Connexion from './Components/Screens/Connexion';
import SignInUpScreen from './Components/Screens/SignInUpScreen';
import Chargement from './Components/Screens/Chargement';
import ModalPlayList from './Components/LibraryScreen/ModalPlayList';
import PlayListsScreen from './Components/LibraryScreen/PlaylistsScreen';





export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <PlayListsScreen/>
      </View>
    );
  }
}


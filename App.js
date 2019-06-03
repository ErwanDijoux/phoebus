import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Font} from 'expo';
import Connexion from './Components/Screens/Connexion';
import LibraryScreen from './Components/Screens/LibraryScreen';

import SongsScreen from './Components/Screens/SongsScreen';
import SignInUpScreen from './Components/Screens/SignInUpScreen';
import Chargement from './Components/Screens/Chargement';
import AlbumsScreen from './Components/Screens/AlbumsScreen';
import ArtistsScreen from './Components/Screens/ArtistsScreen';
import PlaylistsScreen from './Components/LibraryScreen/PlaylistsScreen';

import Navigation from './Components/Navigation/Navigation';


export default class App extends React.Component {
  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }
  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
      openBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ loaded: true });
  };

  render() {
    return (
      <View style={{flex:1}}>

      {  this.state.loaded ? (
      <Navigation/>
    ) : null}

        

      </View>
    );
  }
}


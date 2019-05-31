import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Font} from 'expo';
import Connexion from './Components/Screens/Connexion';
import LibraryScreen from './Components/Screens/LibraryScreen';

// import Connexion from './Components/Screens/Connexion';
// import SignInUpScreen from './Components/Screens/SignInUpScreen';
import Chargement from './Components/Screens/Chargement';
import AlbumsScreen from './Components/Screens/AlbumsScreen';





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

        <PlayListsScreen/>

      {  this.state.loaded ? (
      <AlbumsScreen/>
    ) : null}


      </View>
    );
  }
}

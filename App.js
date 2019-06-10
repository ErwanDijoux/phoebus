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
import SearchScreen from './Components/Screens/SearchScreen';;
import ConnectApps from './Components/Screens/ConnectApps';


import Navigation from './Components/Navigation/Navigation';

import songsReducer from './reducers/songs.reducer'
// import albumReducer from './reducers/album.reducer'
// import trackReducer from './reducers/track.reducer'
import albumReducer from './reducers/album.reducer'
import trackReducer from './reducers/track.reducer'
import playerReducer from './reducers/player.reducer'
import playlistReducer from './reducers/playlist.reducer'
import playlistedReducer from './reducers/playlisted.reducer'


import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
const store = createStore(combineReducers({songsReducer, albumReducer, trackReducer, playerReducer, playlistReducer, playlistedReducer}))

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
      <Provider store={store} style={{flex:1}}>

      {  this.state.loaded ? (
      <ConnectApps/>
    ) : null}

        

      </Provider>
    );
  }
}


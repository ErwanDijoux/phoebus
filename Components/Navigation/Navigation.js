import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';

import {
    Ionicons,
    MatterialCommunityIcons
} from '@expo/vector-icons';

// Imports of my nav components
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from 'react-navigation';





import Chargement from '../Screens/Chargement';
import Connexion from '../Screens/Connexion';
import LibraryScreen from '../Screens/LibraryScreen';
import SearchScreen from '../Screens/SearchScreen';


import SongsScreen from '../Screens/SongsScreen';
import SignInUpScreen from '../Screens/SignInUpScreen';
import AlbumsScreen from '../Screens/AlbumsScreen';
import ArtistsScreen from '../Screens/ArtistsScreen';
import PlaylistsScreen from '../LibraryScreen/PlaylistsScreen';
import PlayerScreen from '../Screens/PlayerScreen'
import ConnectApps from '../Screens/ConnectApps'


const bottomNavigator = createBottomTabNavigator({
    Library: LibraryScreen,
    Search: SearchScreen,
}, {
    // The lastest version of react navigation requires us to use defaultNavigationOptions instead of navigationOptions
    defaultNavigationOptions: ({
        navigation
    }) => ({
        tabBarIcon: ({
            focused,
            horizontal,
            tintColor
        }) => {
            var iconName;
            var outline = (focused) ?
                ''
                // : '-outline'; // this -outline is actually leading to a visual error. Another icon library could solve the problem.
                :
                '';
            if (navigation.state.routeName == 'Account') {
                Platform.OS === 'ios' ?
                    iconName = 'ios-information-circle' :
                    iconName = 'md-information-circle'
            } else if (navigation.state.routeName == 'Search') {
                Platform.OS === 'ios' ?
                    iconName = 'ios-search' :
                    iconName = 'md-search'
            } else if (navigation.state.routeName == 'Following') {
                Platform.OS === 'ios' ?
                    iconName = 'ios-people' :
                    iconName = 'md-people'
            }

            return <Ionicons name = {
                iconName + outline
            }
            size = {
                25
            }
            color = {
                tintColor
            }
            />;
        }
    }),
    // This part is to handle the style of the bottom tab bar
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
    }
});





var StackNavigator = createStackNavigator({
    // pages de ma navigation sans bottom
    Home: ConnectApps,
    LibraryScreen: LibraryScreen,
    SongsScreen: SongsScreen,
    ArtistsScreen: ArtistsScreen,
    AlbumsScreen: AlbumsScreen,
    PlaylistsScreen: PlaylistsScreen,
    PlayerScreen: PlayerScreen,



    // MainNavigator must my put inside the stack navigator
    bottomNavigator: bottomNavigator
}, {
    headerMode: 'float',
    headerTransitionPreset:'uikit'
})

// Finally, we just need to export StackNavigator (which contains all our screens) into the createAppContainer given function
export default Navigation = createAppContainer(StackNavigator);
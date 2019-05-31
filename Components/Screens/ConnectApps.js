import React from 'react';
import {
 View,
 Image,
 StyleSheet,
 fontStyle,
} from 'react-native';
import {Avatar, Text, Button, Divider, SocialIcon} from 'react-native-elements'


export default class ConnectApps extends React.Component {
    render() {
      return (
        <View style={{flex:1, backgroundColor: '#FFD2BE', alignItems: 'center'}}>

                <Text style={{color: '#007D8F', fontWeight: 'bold', fontSize: 30, marginTop: 30}}>Connect Apps</Text>

              <Divider style={{height:200}}/>

              <SocialIcon
              style={{width:250, backgroundColor:'#007D8F'}}
              iconColor='white'
              title="Link to Spotify"
              button type="spotify"
              large
              onPress={ () => this.props.navigation.navigate('SignUp')} // link vers le site Spotify
              >
              </SocialIcon>

              <Divider style={{height:20}}/>

                <SocialIcon
                style={{width:250, backgroundColor:'#007D8F'}}
                title="Link to SoundCloud"
                button type="soundcloud"
                large
                iconColor='white'
                onPress={ () => this.props.navigation.navigate('SignUp')} // link vers le site Soundcloud
                >
                </SocialIcon>

                <Divider style={{height:140}}/>

                <Button
                title="Continue without linking"
                style={{width:300, fontWeight: 'bold'}}
                backgroundColor='#FFD2BE'
                color= '#007D8F'
                onPress={ () => this.props.navigation.navigate('Library')} // navigation vers la page ConnectApps
                >
                </Button>


      </View>
      );
    }
  }

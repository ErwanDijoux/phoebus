import React from 'react';
import {
 View,
 Image,
 StyleSheet,
 fontStyle,
} from 'react-native';
import {Avatar, Text, Button, Divider, SocialIcon} from 'react-native-elements'; 
import {AuthSession} from 'expo'
import { encode as btoa } from 'base-64';
import SpotifyWebAPI from 'spotify-web-api-js';
console.log(AuthSession.getRedirectUrl())




export default class ConnectApps extends React.Component {

   credentials = {
    clientId: '55c185058d454dee80f4469251dbf005',
    clientSecret: 'fefc379f4bea48a6856e22886b890f6e',
    redirectUri: AuthSession.getRedirectUrl()
    }

    scopes = ['user-read-private, user-read-email'].join(' ');


  handleSubmit = async () => {
  
     var data = await this.getTokens();
     var sp = new SpotifyWebAPI();
     await sp.setAccessToken(data.access_token);
     const { id: userId } = await sp.getMe();
     const { items: playlists } = await sp.getUserPlaylists(userId, { limit: 50 });
     console.log('playlists @@@@@@', playlists);
  }   


 getAuthorizationCode = async () => {
  
    console.log('@@@@@@@@@@@@'); 
    const redirectUrl = AuthSession.getRedirectUrl(); //this will be something like https://auth.expo.io/@your-username/your-app-slug
    const result = await AuthSession.startAsync({
      authUrl:
        'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' +
        this.credentials.clientId +
        (this.scopes ? '&scope=' + encodeURIComponent(this.scopes) : '') +
        '&redirect_uri=' +
        encodeURIComponent(redirectUrl),
    })
  
  console.log('result.params.code', result.params.code);
  return result.params.code
}

 getTokens = async () => {
  try {
    const authorizationCode = await this.getAuthorizationCode() 
    
    const redirectUrl = AuthSession.getRedirectUrl();
    const credsB64 = btoa(`${this.credentials.clientId}:${this.credentials.clientSecret}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credsB64}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${
        redirectUrl
      }`,
    });
    const responseJson = await response.json();
    console.log('@@@@@@@@@@ resp ', responseJson);
    return responseJson;
  } catch (err) {
    console.error(err);
  }
}



  //   fetch('https://pacific-ocean-46244.herokuapp.com/login')
  //   .then((res, err)  => res.json()
  //   ).then(data => {
  //     console.log("RETOUR FETCH",data)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // };

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
              onPress={this.handleSubmit} // link vers le site Spotify

              // TouchableOpacity onPress={()=>{this.props.navigation.navigate(item.link); this.props.artist("rien"); this.props.album("rien")}}>
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

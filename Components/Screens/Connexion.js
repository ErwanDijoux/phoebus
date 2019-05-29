import React from 'react';
import {
 View,
 Image,
 StyleSheet,
 fontStyle,
} from 'react-native';
import {Avatar, Text, Button, Divider} from 'react-native-elements'


export default class Connexion extends React.Component {
    render() {
      return (
        <View style={{flex:1, backgroundColor: '#FFD2BE', alignItems: 'center'}}>

                <Image style={{width: 170, height: 170, marginTop: 40}} source={require('../../assets/logo.png')}/>
                <Divider style={{height: 20}}></Divider>
                <Text style={{color: '#2FA5A0', fontWeight: 'bold', fontSize: 30}}>Phoebus</Text>
              
              <Divider style={{height:50}}/>

                <Button
                title="Sign In"
                style={{width:300}}
                fontWeight= 'bold'
                fontSize= '20'
                rounded
                large
                backgroundColor='#007D8F'
                onPress={ () => this.props.navigation.navigate('SignIn')} // navigation vers la page SignIn 
                >
                </Button>
              <Divider style={{height:20}}/>
                <Button
                title="Sign Up"
                style={{width:300}}
                fontWeight= 'bold'
                fontSize= '20'
                rounded
                large
                backgroundColor='#007D8F'
                onPress={ () => this.props.navigation.navigate('SignUp')} // navigation vers la page SignUp 
                >
                </Button>
              <Divider style={{height:140}}/>
              <Button
                title="Continue without Signing In"
                style={{width:300}}
                backgroundColor='#FFD2BE'
                color= '#007D8F'
                onPress={ () => this.props.navigation.navigate('ConnectApps')} // navigation vers la page ConnectApps
                >
                </Button>


        </View>
      );
    }
  }
  
        
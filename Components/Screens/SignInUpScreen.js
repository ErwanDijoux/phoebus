import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import {Text, Button, Divider} from 'react-native-elements';
import { Tab, Tabs, Container, Header, Content,} from 'native-base';
import SignIn from './SignIn';
import SignUp from './SignUp';




export default class SignInUpScreen extends React.Component {
    render() {

        
        return (
    
        <View style={{flex:1, backgroundColor: '#FFD2BE', alignItems: 'center'}}>

            <Image style={{width: 170, height: 170, marginTop: 40}} source={require('../../assets/logo.png')}/>
            <Divider style={{height: 20}}></Divider>
            <Text style={{color: '#2FA5A0', fontWeight: 'bold', fontSize: 30}}>Phoebus</Text>

            <Tabs tabBarUnderlineStyle= {{ backgroundColor: '#F4F5EE' }}>
          <Tab heading="Sign In"
          textStyle={{ color: '#007D8F' }}
          tabStyle={{ backgroundColor: '#FFD2BE' }}
          activeTabStyle={{ backgroundColor: '#FFD2BE' }}
          activeTextStyle={{ fontWeight: 'bold', color: '#007D8F' }}
          >
          
            <SignIn />
          </Tab>
          <Tab heading="Sign Up"
          textStyle={{ color: '#007D8F' }}
          tabStyle={{ backgroundColor: '#FFD2BE' }}
          activeTabStyle={{ backgroundColor: '#FFD2BE' }}
          activeTextStyle={{ fontWeight: 'bold', color: '#007D8F' }}
          >

            <SignUp />
          </Tab>
        </Tabs>

        </View>
        



        );
    }       
}

import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Button, FormLabel, FormInput, Divider} from 'react-native-elements';


export class SignIn extends Component {

    render() {
        return (
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

            <FormLabel>Email</FormLabel>
            <FormInput/>
    
            <FormLabel>Password</FormLabel>
            <FormInput/>

            <Divider style={{height:90}}/>

            <Button
              style={{width:100}}
              title ="Sign In"
              style={{width:300}}
              fontFamily= 'Helvetica Neue'
              fontWeight= 'bold'
              fontSize= '20'
              rounded
              large
              backgroundColor='#007D8F'
              onPress={ () => this.props.navigation.navigate('ConnectApps')}
            />
                </View>
        )
    }
}

export default SignIn

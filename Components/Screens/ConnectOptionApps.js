import React from 'react';
import {
 View,
 Image,
 StyleSheet,
 TouchableOpacity,
} from 'react-native';
import {Avatar, Text, Button, Divider, SocialIcon, Switch, List, ListItem} from 'react-native-elements';


export default class ConnexionOptionApps extends React.Component {
  constructor() {
    super()
    this.state = {
      switchState1: false,
      switchState2: false
    }
  }

    render() {
      return (
        <View style={{flex:1, backgroundColor: '#FFD2BE', alignItems: 'center'}}>

              <Text style={{color: '#007D8F', fontWeight: 'bold', fontSize: 30, marginTop: 30}}>Connect Apps</Text>

              <Divider style={{height:135}}/>

              <List containerStyle={{marginBottom: 10, width:300, borderRadius:10, backgroundColor:'#FFD2BE' }}>
                <ListItem
                  title= {<View>
                        <Image source={require('../../assets/spotify_icon.png')} style={{width:25, height:25, marginTop: 15, marginRight: 15}}/>
                          <Text style={{color: '#007D8F', textAlign:'center', fontSize: 16, fontWeight:'bold'}}>Link to Spotify</Text>
                      </View>}
                  switchButton
                  switched={this.state.switchState1}
                  hideChevron
                  onSwitch={(value) => {
                    this.setState(previousState => {
                      return {...previousState,switchState1: value}
                      })
                    }}
                />
                <ListItem
                  title= {<View>
                            <Image source={require('../../assets/soundcloud_icon.png')}  style={{width:
                              59, height:25, marginTop: 15, marginRight: 15}}/>
                              <Text style={{color: '#007D8F', textAlign:'center', fontSize: 16, fontWeight:'bold'}}>Link to SoundCloud</Text>
                        </View>}
                  switchButton
                  switched={this.state.switchState2}
                  hideChevron
                  onSwitch={(value) => {
                    this.setState(previousState => {
                      return {...previousState,switchState2: value}
                      })
                    }}
                  />
              </List>

          <Divider style={{height:20}}/>

              <Button
                containerViewStyle={{width:300}}
                title ='SAVE'
                fontWeight= 'bold'
                rounded
                large
                backgroundColor='#007D8F'
                onPress={ () => this.props.navigation.navigate('Library')} // navigation vers la page ConnectApps
                >
              </Button>

          <Divider style={{height:140}}/>

              <Button
                title='Continue without linking'
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

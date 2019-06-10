import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements'


import { List, ListItem } from 'react-native-elements'

export default class SearchScreen extends React.Component {

    
    setSearchText(event){
        console.log("=========> NativeEvent",event.nativeEvent)
        //Afficher le texte tapé
        searchText = event.nativeEvent.text;
        dataBackup       = this.state.dataBackup;
        console.log("=====> this.state.dataBackup",this.state.dataBackup)
        // searchText = searchText.trim().toLowerCase();
        // console.log('=======>searchTex.trim', searchText.trim())
        tabfilter = dataBackup.filter(function(l) {
           console.log("L ==================>",l);
        return l.name.match( searchText );
       });
       this.setState({
        data : tabfilter
        });
       }

       
   

    
    render() {
        
      
      return (
        <View style={{flex:1, backgroundColor: '#FFD2BE' }}>
            
            <SearchBar lightTheme={true} inputStyle={{backgroundColor:'white'}} containerStyle={{marginTop: 100, backgroundColor: 'transparent', borderColor:'red', borderStyle:'dotted'}}
                
                round
                onChange={this.setSearchText.bind(this)}
                placeholder='Type Here…' />

            <List  containerStyle={{marginBottom: 20}}>
            {
                this.state.data.map((l) => (
                <ListItem leftIcon={{}} hideChevron  containerStyle={{backgroundColor: '#FFD2BE'}}
                    roundAvatar
                    avatar={{uri:l.avatar_url}}
                    key={l.name}
                    title={l.name}
                    
                    
                />
                ))
            }
            </List>
        </View>
      );
    }
  }
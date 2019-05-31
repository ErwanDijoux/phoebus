import React from 'react';
import {
 View,
 ImageBackground,
 ScrollView,
 StyleSheet,
 Modal,
 TouchableHighlight,
 Alert,
 Image
} from 'react-native';
import {Avatar, Text, Button, Divider, FormLabel, FormInput} from 'react-native-elements'

export default class HomeScreen extends React.Component {

  constructor(){
    super()
    this.setModalVisible = this.setModalVisible.bind(this)
    this.setModalInvisible = this.setModalInvisible.bind(this)
    this.state = {
      modalVisible: false,
      addPlaylist: '',
    }
  }

  setModalVisible() {
   this.setState({modalVisible: true});
 }

  setModalInvisible() {
   this.setState({modalVisible: false});
 }

 render() {

   return (

     <View style={{alignItems: 'center'}}>
         <Divider style={{height:100}}/>
            <Button
                title="+ Add Playlist"
                style={{width:300}}
                fontWeight= 'bold'
                fontSize={20}
                rounded
                large
                backgroundColor='#007D8F'
                onPress={this.setModalVisible}                >
            </Button>

        <View>
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}>
              <View
               style={{flex: 1, alignItems: 'center', marginTop: 200}}>
             <Text style={styles.title}>Add a playlist</Text>

            <FormInput placeHolder='Enter your playlist name'
             onChangeText={(e) => this.setState({addPlaylist: e})}/>

            <Divider style={{height:40}}/>

            <View style={{flex: 1, flexDirection: 'row'}}>
               <Button
                 title="Cancel"
                 style={{width:200}}
                 backgroundColor='#929292'
                 color='#FFFFFF'
                 onPress={this.setModalInvisible}/>

                <Button
                 title="OK"
                 style={{width:200}}
                 backgroundColor='#007D8F'
                 color='#FFFFFF'
                 onPress={this.handleSubmit}/>
            </View>

              </View>
          </Modal>

        </View>
      </View>

  );
 }

}

const styles = StyleSheet.create({
 subtitle:{
   flexDirection:'column',
   padding:10,
   paddingTop:5,
 },
 ratingText:{
   color: 'grey',
 },
 picNumber:{
   paddingLeft: 10,
   fontWeight: 'bold',
   fontSize: 18
 },
 title: {
   fontSize: 25,
   fontWeight: 'bold',
   margin: 15,
 },
 descDisplay: {
   flexDirection: 'row',
 },
});

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Slider, Alert, Image } from 'react-native';
import { Constants, Audio } from 'expo';

import { connect } from 'react-redux'










class PlayerScreen extends Component {



  
  state = {
    playingStatus: "PLAY",
  };

  async _playRecording() {



    

var chanson = this.props.selectedSong

const source = chanson.song.path





    const { sound } = await Audio.Sound.create(
      source,
      {
        shouldPlay: true,
        isLooping: true,
      },
      this._updateScreenForSoundStatus,
    );
    this.sound = sound;
    this.setState({
      playingStatus: 'PAUSE'
    });
  }

  _updateScreenForSoundStatus = (status) => {
    if (status.isPlaying && this.state.playingStatus !== "PAUSE") {
      this.setState({ playingStatus: "PAUSE" });
    } else if (!status.isPlaying && this.state.playingStatus === "PAUSE") {
      this.setState({ playingStatus: "PLAY" });
    }
  };

  async _pauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.playingStatus == 'PAUSE') {
        console.log('pausing...');
        await this.sound.pauseAsync();
        console.log('paused!');
        this.setState({
          playingStatus: 'PLAY',
        });
      } else {
        console.log('playing...');
        await this.sound.playAsync();
        console.log('playing!');
        this.setState({
          playingStatus: 'PAUSE',
        });
      }
    }
  }

  _syncPauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.playingStatus == 'PAUSE') {
        this.sound.pauseAsync();
      } else {
        this.sound.playAsync();
      }
    }
  }

  _playAndPause = () => {
    switch (this.state.playingStatus) {
      case 'PLAY':
        this._playRecording();
        break;
      case 'PAUSE':
        this._pauseAndPlayRecording();
        break;
    }
  }

  render() {



// CE CONSOLE LOG FONCTIONNE
// console.log("CHANSON A JOUER ======= ", this.props.selectedSong)


laChanson = this.props.selectedSong

console.log("chanson à jouer lol",laChanson)
    return (


        <View style={styles.container}>
        <View style={styles.playbackContainer}>

<Image
          source={laChanson.song.cover}
          style={{width: 350, height: 350, marginBottom: 50}}
/>
<Text style={{fontWeight:'bold', fontSize:20}}>{laChanson.song.title}</Text>
<Text>{laChanson.song.artist}</Text>


          <Slider
            style={styles.playbackSlider}
          />
          <Text
            style={styles.paragraph}>
          </Text>

        </View>



        <View style={styles.playStopContainer}>

          <Text style={styles.paragraph}>{"<<"}</Text>

          <TouchableOpacity 
            onPress={this._playAndPause}
            >
            <Text style={styles.paragraph}>{this.state.playingStatus}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._playAndPause}
            >
            <Text style={styles.paragraph}>STOP</Text>
          </TouchableOpacity>




            <Text style={styles.paragraph}>>></Text>


        </View>


        <View style={styles.volumeContainer}>
          <Text style={styles.paragraph}>VOLUME</Text>
          <Slider
            style={styles.volumeSlider}
            value={1}

          />
        </View>
      </View>



    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFD2BE',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  playStopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playbackContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  playbackSlider: {
    alignSelf: 'stretch',
  },
  volumeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 150,
    maxWidth: 150,
  },
  volumeSlider: {
    width: 250,
  },
});


//RECUPERATION DE LA CHANSON A JOUER
function mapStateToProps(state){
  // console.log("Bonjour, moi, state.songsList, je suis", state.songsReducer)
  // console.log("Bonjour, moi, state.albumReducer, je suis", state.albumReducer)
  // console.log("Bonjour, moi, state.trackReducer, je suis", state.trackReducer)
    console.log("Bonjour, moi, state.playerReducer, je suis", state.playerReducer)

  return{
          selectedSong: state.playerReducer }
}


export default connect(
  mapStateToProps,
  )(PlayerScreen)
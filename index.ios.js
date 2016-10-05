/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image
} from 'react-native';

class image extends Component {
  render() {
    return (
       <Image
        source={require('./image/audi1.jpg')}
        style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Audi
        </Text>
        <Text style={styles.instructions}>
          Enter the world of brand Audi.
        </Text>
        <Text style={styles.instructions}>
          Get up close with Audi innovation, performance and precision.{'\n'}
        </Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor:'transparent',
    resizeMode:'stretch'
  },
  welcome: {
    flex:1,
    padding:40,
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
    color:'tomato'
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('image', () => image);

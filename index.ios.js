'use strict'

var React = require('react');
var ReactNative = require('react-native');
var SearchPage = require('./SearchPage');


class Image extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Movies',
          component: SearchPage,
        }}/>
    );
  }
}

var styles = ReactNative.StyleSheet.create(
{
text: {
color:'violet',
backgroundColor:'white',
fontSize:40,
margin:80
},
container: {flex:1,
}
});
ReactNative.AppRegistry.registerComponent('image', function() { return Image });
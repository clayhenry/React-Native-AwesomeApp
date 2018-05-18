import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

 class App extends React.Component {
  render() {
    let img = {uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};


    return (
      
      <View style={styles.container}>

      <Image source={img} style={{width: 193, height: 110}} />
  
      <Text>Cool</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}


class Greeting extends React.Component{


  render(){

 return (

    <Text>{this.props.name}  </Text>

 ) 

  }
}

export default class SomeGreetings extends React.Component{

  render(){

    return (

      <View>

        <Greeting name = "Hello" />
        <Greeting name = "Czesc" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

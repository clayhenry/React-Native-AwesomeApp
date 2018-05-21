import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

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
    <View>
        <Text>{this.props.name}  </Text>
        <Text>{this.props.booger}  </Text>
        <Text>{this.props.snot}  </Text>
    </View>
    ) 
  }
}


class Blink extends React.Component{
  
constructor( props ){
  super(props);
    this.state = {isShowingText : true, passText: 0};
}

    render(){

      

      //in one second, we'llupdate thestate value
      setInterval(() => { 
        this.setState( (prev)=> { return {isShowingText: !prev.isShowingText } } )
      }, 5000);

      let display = this.state.isShowingText ? this.props.text : ' hello';


      return (
      
      <Text>{display}</Text>);
    }

  } 

class Translator extends React.Component{
constructor(props){
super(props);
this.state = {text : ""};

}

render(){


  return(

<View style={{padding: 10}}>

<TextInput placeholder="Your TextHere" onChangeText = { (text)=>this.setState({text}) } />
<Text>{this.state.text.split(" ").map( (w)=> w && 'Pawel' ).join(" ")  }</Text>
</View>

  )

}


}

class Clock extends React.Component{

  render(){
    return (
      <View>

        <Text>This awesome Clock </Text>
      {/* <Image source= {{ uri: this.props.srce}} style={{width: 193, height: 110}}  /> */}
        <Text>It is now {this.props.now} O'clock </Text> 
      </View>
    )
  }
}

export default class SomeGreetings extends React.Component{

  render(){

    return (
      <View>
        <Greeting name = "Hello" />
        <Greeting name = "Czesc" />
        <Greeting booger = "snot" snot="booger"/>
       <Clock now={new Date().toLocaleDateString()}  />
        <Translator />
       

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

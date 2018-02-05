import React, { Component } from 'react';
import {Text,View,Button,Image,AppRegistry,ScrollView,Picker} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item} from 'native-base';
import Delhi from './delhi.js';
import Mumbai from './mumbai.js';
import Chennai from './chennai.js';
import Kanpur from './kanpur.js';
import Kolkata from './kolkata.js';
import Explore from './explore.js';
import {
    StackNavigator,
  } from 'react-navigation';


export default class Nearme extends React.Component {
    constructor(){
     super();
     this.state={
         PickerValue:''

      }
    };
    clickme=()=>{
        var data=this.state.PickerValue;
        if(data=="")
        {
            alert("please select an option");
        }
        else if(data=="Delhi")
        {
           // this.navigator.push({Page: Delhi , props: yourprops});
           this.props.navigation.navigate('Delhi');
        }
        else if(data=="Mumbai")
        {
           // this.navigator.push({Page: Delhi , props: yourprops});
           this.props.navigation.navigate('Mumbai');
        }
        else if(data=="Chennai")
        {
           // this.navigator.push({Page: Delhi , props: yourprops});
           this.props.navigation.navigate('Chennai');
        }
        else if(data=="Kanpur")
        {
           // this.navigator.push({Page: Delhi , props: yourprops});
           this.props.navigation.navigate('Kanpur');
        }
        else if(data=="Kolkata")
        {
           // this.navigator.push({Page: Delhi , props: yourprops});
           this.props.navigation.navigate('Kolkata');
        }

          


    }
   static navigationOptions={
       tabBarIcon:({tintColor}) => (
    <Image   source={require('./images/swiggy.png')}/>
       ),   
       tabBarLabel:'Near Me',
       headerStyle:{backgroundColor:'#FFF'},
       headerTitleStyle:{color:'blue'},
   }
  
 render() {

     return(
        <Container>
            
            <Picker
            style={{}}
            selectedValue={this.state.PickerValue}
            onValueChange={(itemValue,itemIndex) => this.setState({PickerValue: itemValue})}
            >
            <Picker.Item label="Select your location" value=" "/>
            <Picker.Item label="Mumbai" value="Mumbai"/>
            <Picker.Item label="Delhi" value="Delhi"/>
            <Picker.Item label="Chennai" value="Chennai"/>
            <Picker.Item label="Kanpur" value="Kanpur"/>
            <Picker.Item label="Kolkata" value="Kolkata"/>

            </Picker>
            <Button title="Search Restaurants"  onPress={this.clickme} />

            
        
          
     
          </Container>  
     );
 }
}
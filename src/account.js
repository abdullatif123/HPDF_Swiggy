import React from 'react';
import {Text,View,Button,Image,AppRegistry} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item} from 'native-base';
export default class Account extends React.Component {
   static navigationOptions={
       tabBarIcon:({tintColor}) => (
    <Icon name='person' style={{color:tintColor}} />
       ),   
       headerStyle:{backgroundColor:'#FFF'},
       headerTitleStyle:{color:'blue'},
   }
 render() {
     return(
        <Container style={{backgroundColor:'white'}}>
        <View>
            </View>
       
          
          </Container>  
     );
 }
}
import React from 'react';
import {Text,View,Button,Image,AppRegistry} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item} from 'native-base';
export default class Swiggypop extends React.Component {
   static navigationOptions={
       tabBarIcon:({tintColor}) => (
        <Image   source={require('./images/pop.png')} style={{width:30,height:30}}/>
       ),   
       tabBarLabel:'',
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
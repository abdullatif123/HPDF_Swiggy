import React from 'react';
import {Text,View,Button,Image,AppRegistry} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item} from 'native-base';
export default class Cart extends React.Component {
   static navigationOptions={
       tabBarIcon:({tintColor}) => (
    <Icon name='cart' style={{color:tintColor}} />
       ),   
       headerStyle:{backgroundColor:'#FFF'},
       headerTitleStyle:{color:'blue'},
   }
 render() {
     return(
        <Container>
        <View>
            </View>
       
          
          </Container>  
     );
 }
}
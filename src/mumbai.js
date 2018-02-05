import React, { Component } from 'react';
import {Text,View,Button,Image,AppRegistry,ScrollView,Picker} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item} from 'native-base';




export default class Mumbai extends React.Component {
    render(){
        return(
<Container>
<Header style={{backgroundColor:'white',alignItems:'center'}}>
        
<Text style={{fontSize:20}}>6 Restaurants results</Text>

</Header>
     
     
     <ScrollView>     
     <View style={{flexDirection:'row'}}>
         <Image source={require('./images/1.jpg')} style={{height:120,width:200}}/>
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,fontWeight:'bold'}}>Truffles </Text>
         <Text style={{fontSize:20,}}>Chinese Fastfood </Text>
     
         </View>
         
         </View>
         


         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/1.jpg')} style={{height:120,width:200}}/>
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,fontWeight:'bold'}}>Truffles </Text>
         <Text style={{fontSize:20,}}>Chinese Fastfood </Text>
     
         </View>
         </View>
    


         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/1.jpg')} style={{height:120,width:200}}/>
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,fontWeight:'bold'}}>Truffles </Text>
         <Text style={{fontSize:20,}}>Chinese Fastfood </Text>
     
         </View>
         </View>




         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/1.jpg')} style={{height:120,width:200}}/>
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,fontWeight:'bold'}}>Truffles </Text>
         <Text style={{fontSize:20,}}>Chinese Fastfood </Text>
     
         </View>
         </View>



         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/1.jpg')} style={{height:120,width:200}}/>
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,fontWeight:'bold'}}>Truffles </Text>
         <Text style={{fontSize:20,}}>Chinese Fastfood </Text>
     
         </View>
         </View>







         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/1.jpg')} style={{height:120,width:200}}/>
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,fontWeight:'bold'}}>Truffles </Text>
         <Text style={{fontSize:20,}}>Chinese Fastfood </Text>
     
         </View>
         </View>
     </ScrollView>  
     </Container>
        );
}
}
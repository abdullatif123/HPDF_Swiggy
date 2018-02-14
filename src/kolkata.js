import React, { Component } from 'react';
import {Text,View,Button,Image,AppRegistry,ScrollView,Picker, TouchableWithoutFeedback} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item} from 'native-base';
import Shmenu from './menu/shmenu.js';
import Numenu from './menu/numenu.js';
import Hamenu from './menu/hamenu.js';
import Somenu from './menu/somenu.js';
import Limenu from './menu/limenu.js';




export default class Kolkata extends React.Component {
    constructor(){
        super();
        this.state={
            State:''
   
         }
       };
       onPress = () => {
        this.props.navigation.navigate('Shmenu');
      }
       abc = () => {
        this.props.navigation.navigate('Numenu');
       }
       klm = () => {
        this.props.navigation.navigate('Hamenu');
       }
       x = () => {
        this.props.navigation.navigate('Somenu');
       }
       y = () => {
        this.props.navigation.navigate('Limenu');
       }
    render(){
        return(
<Container>
<Header style={{backgroundColor:'white',alignItems:'center'}}>
        
<Text style={{fontSize:20}}>5 Restaurants results</Text>

</Header>
     
     
     <ScrollView style={{backgroundColor:"white"}}>     
     <TouchableWithoutFeedback onPress={this.onPress}>
     <View style={{flexDirection:'row'}}>
         <Image source={require('./images/sharma.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20,marginTop:10}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Sharma Dhaba </Text>
         <Text style={{fontSize:20,marginBottom:18}}>North Indian, Fast Food                  </Text>
         <View
            style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                marginBottom:3,
            }}
         />
             <View style={{flexDirection:'row'}}>
             <Icon name='star'  />
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>4.2</Text>
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>61 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>500 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>


        
         <TouchableWithoutFeedback onPress={this.abc}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/nu.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Nu Variety </Text>
         <Text style={{fontSize:20,marginBottom:18}}>North Indian, South Indian             </Text>
         <View
            style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                marginBottom:3,
            }}
         />
             <View style={{flexDirection:'row'}}>
             <Icon name='star'  />
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>4.3</Text>
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>56 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>350 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>



         <TouchableWithoutFeedback onPress={this.klm}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/ha.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Handa's Restaurant </Text>
         <Text style={{fontSize:20,marginBottom:18}}>Indian, Chinese, Fast Food                                </Text>
         <View
            style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                marginBottom:3,
            }}
         />
             <View style={{flexDirection:'row'}}>
             <Icon name='star'  />
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>4.1</Text>
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>60 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>300 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>




         <TouchableWithoutFeedback onPress={this.x}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/soul.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Soul </Text>
         <Text style={{fontSize:20,marginBottom:18}}>Italian, American
                    </Text>
         <View
            style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                marginBottom:3,
            }}
         />
             <View style={{flexDirection:'row'}}>
             <Icon name='star'  />
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>4.3</Text>
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>68 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>500 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>




         <TouchableWithoutFeedback onPress={this.y}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/li.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Little Pleasures </Text>
         <Text style={{fontSize:20,marginBottom:18}}>Desserts                     </Text>
         <View
            style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                marginBottom:3,
            }}
         />
             <View style={{flexDirection:'row'}}>
             <Icon name='star'  />
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>4.5</Text>
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>55 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>300 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>




         
         
         

     </ScrollView>  
     </Container>
        );
}
}
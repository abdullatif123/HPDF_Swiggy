import React, { Component } from 'react';
import {Text,View,Button,Image,AppRegistry,ScrollView,Picker, TouchableWithoutFeedback} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item} from 'native-base';
import Qmenu from './menu/qmenu.js';
import Artmenu from './menu/artmenu.js';
import Smenu from './menu/smenu.js';
import Thmenu from './menu/thmenu.js';
import Nmenu from './menu/nmenu.js';
import Rmenu from './menu/rmenu.js';




export default class Delhi extends React.Component {
    constructor(){
        super();
        this.state={
            State:''
   
         }
       };
       onPress = () => {
        this.props.navigation.navigate('Qmenu');
      }
       abc = () => {
        this.props.navigation.navigate('Artmenu');
       }
       klm = () => {
        this.props.navigation.navigate('Smenu');
       }
       x = () => {
        this.props.navigation.navigate('Thmenu');
       }
       y = () => {
        this.props.navigation.navigate('Nmenu');
       }
       z = () => {
        this.props.navigation.navigate('Rmenu');
       }
    render(){
        return(
<Container>
<Header style={{backgroundColor:'white',alignItems:'center'}}>
        
<Text style={{fontSize:20}}>6 Restaurants results</Text>

</Header>
     
     
     <ScrollView style={{backgroundColor:"white"}}>   
     <TouchableWithoutFeedback  onPress={this.onPress}>  
     <View style={{flexDirection:'row'}}>
         <Image source={require('./images/qd.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20,marginTop:10}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>QD's Restaurant </Text>
         <Text style={{fontSize:20,marginBottom:18}}>Indian, Chinese                 </Text>
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
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>48 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>500 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>


         
         <TouchableWithoutFeedback onPress={this.abc}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/art.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Art of Spices </Text>
         <Text style={{fontSize:20,marginBottom:18}}>North Indian, Fast Food, Mughlai              </Text>
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
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>56 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>300 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>



         
           
         <TouchableWithoutFeedback onPress={this.klm}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/sahi.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Shahji by Indichow </Text>
         <Text style={{fontSize:20,marginBottom:18}}>North Indian                                 </Text>
         <View
            style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                marginBottom:3,
            }}
         />
             <View style={{flexDirection:'row'}}>
             <Icon name='star'  />
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>3.8</Text>
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>45 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>550 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>




         
         <TouchableWithoutFeedback onPress={this.x}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/hudson.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>The Hudson Cafe </Text>
         <Text style={{fontSize:20,marginBottom:18}}>Chinese, Italian, Fast Food                     </Text>
         <View
            style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                marginBottom:3,
            }}
         />
             <View style={{flexDirection:'row'}}>
             <Icon name='star'  />
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>4.4</Text>
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>45 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>550 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>




         
         <TouchableWithoutFeedback onPress={this.y}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/tera.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>New Tera Hotel </Text>
         <Text style={{fontSize:20,marginBottom:18}}>North Indian                     </Text>
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
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>51 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>150 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>




         
         <TouchableWithoutFeedback onPress={this.z}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/ricos.jpg')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Ricos </Text>
         <Text style={{fontSize:20,marginBottom:18}}>Italian, Continental, Mexican                    </Text>
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
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>43 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>600 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>
         
         

     </ScrollView>  
     </Container>
        );
}
}
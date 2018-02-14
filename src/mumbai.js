import React, { Component } from 'react';
import {Text,View,Button,Image,AppRegistry,ScrollView,Picker,TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item} from 'native-base';
import Mmenu from './menu/mmenu.js';
import Anmenu from './menu/anmenu.js';
import Fmenu from './menu/fmenu.js';
import Emenu from './menu/emenu.js';
import Pmenu from './menu/pmenu.js';
import Tmenu from './menu/tmenu.js';
import Kmenu from './menu/kmenu.js';



export default class Mumbai extends React.Component {
    constructor(){
        super();
        this.state={
            State:''
   
         }
       };
       onPress = () => {
        this.props.navigation.navigate('Mmenu');
      }
       abc = () => {
        this.props.navigation.navigate('Anmenu');
       }
       klm = () => {
        this.props.navigation.navigate('Fmenu');
       }
       x = () => {
        this.props.navigation.navigate('Emenu');
       }
       y = () => {
        this.props.navigation.navigate('Pmenu');
       }
       z = () => {
        this.props.navigation.navigate('Tmenu');
       }
       xyz = () => {
        this.props.navigation.navigate('Kmenu');
       }
       
    render(){
        return(
<Container>
<Header style={{backgroundColor:'white',alignItems:'center'}}>
        
<Text style={{fontSize:20}}>7 Restaurants results</Text>

</Header>
     
     
     <ScrollView style={{backgroundColor:"white"}}>     
     <TouchableWithoutFeedback onPress={this.onPress}>
     <View style={{flexDirection:'row'}}>
         <Image source={require('./images/ayy.jpg')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20,marginTop:10}} />
        
     
         <View  style={{flexDirection:'column'}}>
        
         <Text style={{fontSize:30,color:'black'}}>Ayyappan Pure Veg </Text>
 
         <Text style={{fontSize:20,marginBottom:18}}>North Indian, Chinese, South Indian             </Text>
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
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>45 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>400 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>



         <TouchableWithoutFeedback onPress={this.abc}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/anna.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Anna Idli </Text>
         <Text style={{fontSize:20,marginBottom:18}}>South Indian                     </Text>
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
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>38 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>100 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>



         <TouchableWithoutFeedback onPress={this.klm}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/fresh.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>FreshMenu</Text>
         <Text style={{fontSize:20,marginBottom:18}}>Chinese, Continental, Italian                       </Text>
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
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>500 FOR TWO</Text>
             </View>
         </View>
         </View>
        </TouchableWithoutFeedback>



         <TouchableWithoutFeedback onPress={this.x}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/east.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>East End Deli </Text>
         <Text style={{fontSize:20,marginBottom:18}}>Beverages, Desserts                    </Text>
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
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>46 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>600 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>




         <TouchableWithoutFeedback onPress={this.y}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/p.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Potoba </Text>
         <Text style={{fontSize:20,marginBottom:18}}>Street Food, North Indian, Chinese                    </Text>
         <View
            style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                marginBottom:3,
            }}
         />
             <View style={{flexDirection:'row'}}>
             <Icon name='star'  />
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>4.0</Text>
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>35 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>500 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>




         <TouchableWithoutFeedback onPress={this.z}>
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/t.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Theobroma </Text>
         <Text style={{fontSize:20,marginBottom:18}}>Fast Food                               </Text>
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
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>44 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>600 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>
         



         <TouchableWithoutFeedback onPress={this.xyz}> 
         <View style={{flexDirection:'row'}}>
         <Image source={require('./images/k.png')} style={{height:120,width:120,marginRight:20,
            marginBottom:20,marginLeft:20}} />
     
         <View  style={{flexDirection:'column'}}>
         <Text style={{fontSize:30,color:'black'}}>Krishnaa Leela </Text>
         <Text style={{fontSize:20,marginBottom:18}}>Street Food, North Indian, Chinese                    </Text>
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
             <Text style={{marginLeft:5,marginRight:15,fontSize:20}}>41 MINS</Text>
             <Image   source={require('./images/rupee.png')} style={{marginTop:5}}/>
             <Text style={{marginLeft:0,marginRight:15,fontSize:20}}>450 FOR TWO</Text>
             </View>
         </View>
         </View>
         </TouchableWithoutFeedback>
         

     </ScrollView>  
     </Container>
        );
}
}
import React from 'react';
import {Text,View,Button,Image,AppRegistry,ScrollView} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item} from 'native-base';
import Dash from 'react-native-dash';
export default class Anmenu extends React.Component {
    k = () =>{

    }
 render() {
     return(
        <Container style={{backgroundColor:'white'}}>
        <ScrollView>
            <Text style={{marginLeft:20,fontSize:30,color:'black'}}>Anna Idli</Text>
            <Text style={{marginLeft:20,fontSize:20,marginBottom:30}}>South Indian </Text>
            <Dash style={{marginLeft:20,marginRight:20,marginBottom:20}} dashColor='grey'/>
            <View  style={{flexDirection:'row'}}>
            <Icon name='star' style={{marginLeft:50}}/>
            <Text style={{fontSize:20,color:'black'}} >3.8</Text>
            <Text style={{marginLeft:110,marginRight:110,fontSize:20,color:'black'}}>38 mins</Text>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5}}/>
            <Text style={{fontSize:20,color:'black',marginRight:30}}>100</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:20,fontSize:20}}>35784 ratings</Text>
            <Text style={{marginLeft:40,fontSize:20,marginRight:80}}>Delivery Time</Text>
            <Text style={{fontSize:20}}>For Two</Text>
            </View>
            <Dash style={{marginLeft:20,marginRight:20,marginTop:20}} dashColor='grey'/>   
            <Text style={{color:'black',marginLeft:20,marginTop:20,fontSize:25,marginBottom:20}}>Recommended</Text>
        
            <View style={{flexDirection:'row'}}>
            <Image source={require('./../images/idli.jpg')} style={{height:150,width:190,
             marginLeft:20,marginRight:30,marginBottom:20}}/>
             <Image source={require('./../images/appam.jpg')} style={{height:150,width:190,
             marginRight:0,marginBottom:20}}/>             
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'black',fontSize:20,marginRight:130,marginLeft:20}}>Idli (4 Pcs)</Text>
            <Text style={{color:'black',fontSize:20}}>Appam</Text>
                </View >
            <View style={{flexDirection:'row',marginBottom:10}}>
            <Text style={{fontSize:15,marginRight:141,marginLeft:20}}>South Indian</Text>
            <Text style={{fontSize:15}}>South Indian</Text>
                </View>    
            <View style={{flexDirection:'row'}}>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5,marginLeft:20}}/>
            <Text style={{fontSize:20}}>30</Text> 
            <View style={{marginLeft:105,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View> 
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5}}/>
            <Text style={{fontSize:20}}>30</Text>  
            <View style={{marginLeft:113,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View>
                </View>    

            

                <View style={{flexDirection:'row',marginTop:20}}>
                <Image source={require('./../images/idli.jpg')} style={{height:150,width:190,
             marginLeft:20,marginRight:30,marginBottom:20}}/>
             <Image source={require('./../images/appam.jpg')} style={{height:150,width:190,
             marginRight:0,marginBottom:20}}/>             
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'black',fontSize:20,marginRight:130,marginLeft:20}}>Idli (4 Pcs)</Text>
            <Text style={{color:'black',fontSize:20}}>Appam</Text>
                </View >
            <View style={{flexDirection:'row',marginBottom:10}}>
            <Text style={{fontSize:15,marginRight:141,marginLeft:20}}>South Indian</Text>
            <Text style={{fontSize:15}}>South Indian</Text>
                </View>    
            <View style={{flexDirection:'row'}}>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5,marginLeft:20}}/>
            <Text style={{fontSize:20}}>30</Text> 
            <View style={{marginLeft:105,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View> 
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5}}/>
            <Text style={{fontSize:20}}>30</Text>  
            <View style={{marginLeft:113,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View>
                </View>     



                <View style={{flexDirection:'row',marginTop:20}}>
                <Image source={require('./../images/idli.jpg')} style={{height:150,width:190,
             marginLeft:20,marginRight:30,marginBottom:20}}/>
             <Image source={require('./../images/appam.jpg')} style={{height:150,width:190,
             marginRight:0,marginBottom:20}}/>             
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'black',fontSize:20,marginRight:130,marginLeft:20}}>Idli (4 Pcs)</Text>
            <Text style={{color:'black',fontSize:20}}>Appam</Text>
                </View >
            <View style={{flexDirection:'row',marginBottom:10}}>
            <Text style={{fontSize:15,marginRight:141,marginLeft:20}}>South Indian</Text>
            <Text style={{fontSize:15}}>South Indian</Text>
                </View>    
            <View style={{flexDirection:'row'}}>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5,marginLeft:20}}/>
            <Text style={{fontSize:20}}>30</Text> 
            <View style={{marginLeft:105,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View> 
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5}}/>
            <Text style={{fontSize:20}}>30</Text>  
            <View style={{marginLeft:113,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View>
                </View>    


                

            </ScrollView>
       
          
          </Container>  
     );
 }
}
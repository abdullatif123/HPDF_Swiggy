import React from 'react';
import {Text,View,Button,Image,AppRegistry,ScrollView} from 'react-native';
import {Icon,Container,Header,Left,Body,Content,Input,Right,Item,TouchableOpacity} from 'native-base';
import Dash from 'react-native-dash';
export default class Qmenu extends React.Component {
    k = () =>{

    }
 render() {
     return(
        <Container style={{backgroundColor:'white'}}>
        <ScrollView>
            <Text style={{marginLeft:20,fontSize:30,color:'black'}}>QD's Restaurant</Text>
            <Text style={{marginLeft:20,fontSize:20,marginBottom:30}}>Indian,Chinese </Text>
            <Dash style={{marginLeft:20,marginRight:20,marginBottom:20}} dashColor='grey'/>
            <View  style={{flexDirection:'row'}}>
            <Icon name='star' style={{marginLeft:50}}/>
            <Text style={{fontSize:20,color:'black'}} >4.1</Text>
            <Text style={{marginLeft:110,marginRight:110,fontSize:20,color:'black'}}>48 mins</Text>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5}}/>
            <Text style={{fontSize:20,color:'black',marginRight:30}}>500</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{marginLeft:20,fontSize:20}}>45687 ratings</Text>
            <Text style={{marginLeft:40,fontSize:20,marginRight:80}}>Delivery Time</Text>
            <Text style={{fontSize:20}}>For Two</Text>
            </View>
            <Dash style={{marginLeft:20,marginRight:20,marginTop:20}} dashColor='grey'/>   
            <Text style={{color:'black',marginLeft:20,marginTop:20,fontSize:25,marginBottom:20}}>Recommended</Text>
        
            <View style={{flexDirection:'row'}}>
            <Image source={require('./../images/dosa.jpg')} style={{height:150,width:190,
             marginLeft:20,marginRight:30,marginBottom:20}}/>
             <Image source={require('./../images/lemon.jpg')} style={{height:150,width:190,
             marginRight:0,marginBottom:20}}/>             
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'black',fontSize:20,marginRight:30,marginLeft:20}}>Dil Kush Dosa (1 Pcs)</Text>
            <Text style={{color:'black',fontSize:20}}>Lemon Rice</Text>
                </View >
            <View style={{flexDirection:'row',marginBottom:10}}>
            <Text style={{fontSize:15,marginRight:65,marginLeft:20}}>Ayyappan Special Dosa</Text>
            <Text style={{fontSize:15}}>Rice</Text>
                </View>    
            <View style={{flexDirection:'row'}}>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5,marginLeft:20}}/>
            <Text style={{fontSize:20}}>120</Text> 
            <View style={{marginLeft:96,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5}}/>
            <Text style={{fontSize:20}}>102</Text>  
            <View style={{marginLeft:100,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View>
                </View>    


                <View style={{flexDirection:'row',marginTop:20}}>
                <Image source={require('./../images/dosa.jpg')} style={{height:150,width:190,
             marginLeft:20,marginRight:30,marginBottom:20}}/>
             <Image source={require('./../images/lemon.jpg')} style={{height:150,width:190,
             marginRight:0,marginBottom:20}}/>             
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'black',fontSize:20,marginRight:30,marginLeft:20}}>Dil Kush Dosa (1 Pcs)</Text>
            <Text style={{color:'black',fontSize:20}}>Lemon Rice</Text>
                </View >
            <View style={{flexDirection:'row',marginBottom:10}}>
            <Text style={{fontSize:15,marginRight:65,marginLeft:20}}>Ayyappan Special Dosa</Text>
            <Text style={{fontSize:15}}>Rice</Text>
                </View>    
            <View style={{flexDirection:'row'}}>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5,marginLeft:20}}/>
            <Text style={{fontSize:20}}>120</Text> 
            <View style={{marginLeft:96,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5}}/>
            <Text style={{fontSize:20}}>102</Text>  
            <View style={{marginLeft:100,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View>
                </View>    

    

            
                <View style={{flexDirection:'row',marginTop:20}}>
                <Image source={require('./../images/dosa.jpg')} style={{height:150,width:190,
             marginLeft:20,marginRight:30,marginBottom:20}}/>
             <Image source={require('./../images/lemon.jpg')} style={{height:150,width:190,
             marginRight:0,marginBottom:20}}/>             
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'black',fontSize:20,marginRight:30,marginLeft:20}}>Dil Kush Dosa (1 Pcs)</Text>
            <Text style={{color:'black',fontSize:20}}>Lemon Rice</Text>
                </View >
            <View style={{flexDirection:'row',marginBottom:10}}>
            <Text style={{fontSize:15,marginRight:65,marginLeft:20}}>Ayyappan Special Dosa</Text>
            <Text style={{fontSize:15}}>Rice</Text>
                </View>    
            <View style={{flexDirection:'row'}}>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5,marginLeft:20}}/>
            <Text style={{fontSize:20}}>120</Text> 
            <View style={{marginLeft:96,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View>
            <Image   source={require('./../images/rupee.png')} style={{marginTop:5}}/>
            <Text style={{fontSize:20}}>102</Text>  
            <View style={{marginLeft:100,marginRight:20}}> 
            <Button color='green' title="ADD" onPress={this.k} ></Button>
             </View>
                </View>    



                

            </ScrollView>
       
          
          </Container>  
     );
 }
}
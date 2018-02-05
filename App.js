import React from 'react';
import {View,Text} from 'react-native';
import {TabNavigator,DrawerNavigator,StackNavigator} from 'react-navigation';
//import HomeScreenNavigator from './src/index.js';
import {Container,Content} from 'native-base';
import Nearme from './src/nearme.js';
import Delhi from './src/delhi.js';
import Mumbai from './src/mumbai.js';
import Chennai from './src/chennai.js';
import Kanpur from './src/kanpur.js';
import Kolkata from './src/kolkata.js';
import Explore from './src/explore.js';
import Swiggypop from './src/swiggypop.js';
import Cart from './src/cart.js';
import Account from './src/account.js';


const Main = StackNavigator({
  Nearme: { screen:  TabNavigator({
    Home:{screen:Nearme},
    Explore:{screen:Explore},
    SwiggyPop:{screen:Swiggypop},
    Cart:{screen:Cart},
    Account:{screen:Account}
  },{
    // tabBarComponent: props => (<TabBarComponent{...props} />), 
       tabBarPosition: 'bottom',
           animationEnabled: true,
     tabBarOptions: {
       pressColor:'white',
       activeTintColor:'orange',
       inactiveTintColor:"black",
       showIcon:true,
       showLabel:true,
       upperCaseLabel:false,
       hideTabBar:true,
       style:{
         backgroundColor:'white',
       },
       indicatorStyle:{
         backgroundColor:'orange',
       },
     },
   },
),
  },
  Delhi:{screen: Delhi},
  Mumbai:{screen: Mumbai},
  Chennai:{screen: Chennai},
  Kanpur:{screen: Kanpur},
  Kolkata:{screen: Kolkata},

 
})

export default class App extends React.Component {
  render(){
    return(
      <Container>
     
    
    <Main/>
    
    
    

        </Container>
    );
  }
}

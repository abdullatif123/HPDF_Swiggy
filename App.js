import React from 'react';
import {View,Text} from 'react-native';
import {TabNavigator,DrawerNavigator,StackNavigator} from 'react-navigation';
//import HomeScreenNavigator from './src/index.js';
import {Container,Content} from 'native-base';
import Nearme from './src/nearme.js';
import Delhi from './src/delhi.js';
import Mumbai from './src/mumbai.js';
import Kolkata from './src/kolkata.js';
import Explore from './src/explore.js';
import Swiggypop from './src/swiggypop.js';
import Cart from './src/cart.js';
import Account from './src/account.js';
import Mmenu from './src/menu/mmenu.js';
import Anmenu from './src/menu/anmenu.js';
import Fmenu from './src/menu/fmenu.js';
import Emenu from './src/menu/emenu.js';
import Pmenu from './src/menu/pmenu.js';
import Tmenu from './src/menu/tmenu.js';
import Qmenu from './src/menu/qmenu.js';
import Artmenu from './src/menu/artmenu.js';
import Smenu from './src/menu/smenu.js';
import Thmenu from './src/menu/thmenu.js';
import Nmenu from './src/menu/nmenu.js';
import Rmenu from './src/menu/rmenu.js';
import Kmenu from './src/menu/kmenu.js';
import Shmenu from './src/menu/shmenu.js';
import Numenu from './src/menu/numenu.js';
import Hamenu from './src/menu/hamenu.js';
import Somenu from './src/menu/somenu.js';
import Limenu from './src/menu/limenu.js';

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
  Kolkata:{screen: Kolkata},
  Mmenu:{screen:Mmenu},
  Anmenu:{screen:Anmenu},
  Fmenu:{screen:Fmenu},
  Emenu:{screen:Emenu},
  Pmenu:{screen:Pmenu},
  Tmenu:{screen:Tmenu},
  Kmenu:{screen:Kmenu},
  Qmenu:{screen:Qmenu},
  Artmenu:{screen:Artmenu},
  Smenu:{screen:Smenu},
  Thmenu:{screen:Thmenu},
  Nmenu:{screen:Nmenu},
  Rmenu:{screen:Rmenu},
  Shmenu:{screen:Shmenu},
  Numenu:{screen:Numenu},
  Hamenu:{screen:Hamenu},
  Somenu:{screen:Somenu},
  Limenu:{screen:Limenu},



 
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

import React  from "react";
import { View,Text,Icon,ScrollView } from "react-native";
import {TabNavigator,DrawerNavigator,StackNavigator} from 'react-navigation';
import Nearme from './nearme.js';
import Explore from './explore.js';
import Swiggypop from './swiggypop.js';
import Cart from './cart.js';
import Account from './account.js';



const MainScreenNavigator = TabNavigator({
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
  );
  export default MainScreenNavigator;
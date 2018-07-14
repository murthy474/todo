import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, createStackNavigator, DrawerNavigator } from 'react-navigation';

import Librarylist from './components/Librarylist';
import Viewitems from "./components/Viewitems";
// import Main from './Main';


const Router = createStackNavigator({  
    Librarylist:{screen:Librarylist,navigationOptions:{header:null}},
    Viewitems:{screen:Viewitems,navigationOptions:{header:null}},
    // Main:{screen:Main,navigationOptions:{header:null}},    
    },{ initialRouteName: 'Librarylist' });

export default Router;

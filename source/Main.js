import React from 'react';
import {View,Text,StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import { applyMiddleware,createStore} from 'redux';
import reducers from './reducers/Index';


import Router from './Router';

// import Viewitems from "./components/Viewitems";


export default class Main extends React.Component {

    componentDidMount() {
        StatusBar.setHidden(false);
        StatusBar.setBarStyle("light-content");
      }

render(){
    return(
        <Provider store={createStore(reducers)}>
        <View style={{width:400,flex:1,alignSelf:'center',backgroundColor:'white'}}>
            <Text>    </Text>
            <Router/>
        </View> 
        </Provider> 
    );
}
}
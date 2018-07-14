import React, { Component } from "react";
import { View,Text,StyleSheet, ListView ,FlatList,TouchableOpacity,TextInput} from "react-native";
import PropTypes from "prop-types";
import { Button,CheckBox} from 'react-native-elements';
import { connect } from "react-redux";
// import Item from "./Item";

import Librarylist from './Librarylist';

class Viewitems extends Component {

  constructor(props) {
    super(props);
    this.removeitem = this.removeitem.bind(this);
    this.state = {
      checked:false,showtext:'none',textdata:''
  }
  }

  removeitem(id) {
    this.props.dispatch({ type: "REMOVE_ITEM", id });
  }

  edititem(data){
    this.props.navigation.navigate('Librarylist',{editdata:data.name,editid:data.id});
    // this.props.dispatch({type:"edit_item",payload: { id, name }  })
    // payload: { id, done }
    }
  checkboxposition(item, done){
    this.props.dispatch({type: "checkvalue",payload:{item,done} });
  }

render() {
    //   console.warn(this.props.dataSource._dataBlob.s1);
    const { goBack } = this.props.navigation;
    return (
        <View style={{width:'100%'}}>
          <View style={{width:'100%',height:50,backgroundColor:'white'}}>
            <TouchableOpacity style={{margin:15}}  onPress={() => goBack()}>
             <Text style={{fontSize:16,}}> BACK </Text> 
            </TouchableOpacity>
          </View>
            <FlatList
            data={this.props.dataSource}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => {
                return(
                  <View>
                    <View style={{flexDirection:'row',margin:5}}>
                      <View>
                      <CheckBox
                             title='click'
                             checked={item.done}
                            onPress={() => this.checkboxposition(item, !item.done)}
                          />
                          {/* {console.warn(!item.done)} */}
                      </View>
                        <View style={[{ marginTop:3,height:40,width:150,backgroundColor: item.bgColor}]}>
                            <Text style={{color:'red'}}>{item.name}</Text>
                        </View>
                        <View style={{marginTop:3,flexDirection:'row',height:40}}>
                          <TouchableOpacity style={{backgroundColor:'#E6DDDD',marginHorizontal:10}}
                            onPress={() =>this.edititem(item)}>
                              <Text style={{fontSize:15,margin:5}}>EDIT</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{backgroundColor:'#E6DDDD'}}
                             onPress={() =>this.removeitem(item.id)}>
                              <Text style={{fontSize:15,margin:5}}>DELETE</Text>                        
                          </TouchableOpacity>
                        </View>
                    </View>
                   
                    </View>
                );
            }}
                />
           
            </View>

    );
  }
}


function mapStateToProps(state) {
  return {
    dataSource:state.items
  };
}

Viewitems.propTypes = {
  dataSource: PropTypes.object,
  dispatch: PropTypes.func
};


export default connect(mapStateToProps)(Viewitems);

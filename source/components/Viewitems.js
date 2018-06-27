import React, { Component } from "react";
import { View,Text,StyleSheet, ListView ,FlatList,TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Item from "./Item";

class Viewitems extends Component {
  constructor(props) {
    super(props);
    this.removeitem = this.removeitem.bind(this);
  }

  removeitem(id) {
    this.props.dispatch({ type: "REMOVE_ITEM", id });
  }

 
render() {
    //   console.warn(this.props.dataSource._dataBlob.s1);
    return (
        <View style={{width:'100%'}}>
        
            <FlatList
            data={this.props.dataSource}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => {
                return(
                    <View style={{}}>
                        <TouchableOpacity style={[{ height:40,width:400,backgroundColor: item.bgColor}]} 
                         onPress={() =>this.removeitem(item.id)}>
                            <Text style={{color:'red'}}>{item.name}</Text>
                        </TouchableOpacity>
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

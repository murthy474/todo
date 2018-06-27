import React,{Component} from 'react';
import {connect} from 'react-redux';
import { View, Text,FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from "prop-types";

class Librarylist extends Component{

    constructor(props) {
        super(props);
    
       
        this.addtolist = this.addtolist.bind(this);
        this.randomizeItemData = this.randomizeItemData.bind(this);
      }

    // renderdata(item){
    //     console.warn(item);
    //     return(
    //         <View>
    //                <Text>{item.name}</Text>
    //                <Text>{item.description}
    //                    </Text> 
    //             </View>
    //     );
    // }
    addtolist() {
        const randomizedItemData = this.randomizeItemData();
        this.props.dispatch({ type: "ADD_ITEM", ...randomizedItemData});
      }

      randomizeItemData() {
      
        let colorArr = ["#00FFFF", "#D8BFD8", "#28B490","	#87CEFA"];
        let randColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    
        let randNum = Math.floor(Math.random() * 10 + 1);
        let randName = "Number" + randNum;
    
        return { name: randName, bgColor: randColor };
      }
      
    render(){
        console.warn(this.props.library);
        return(
            <View>
            <View style={{marginTop:30}}>
            <Button
            large
            onPress={()=>{this.addtolist()}}
                title='add to list' />
                </View>
            {/* <View>
                 <FlatList
                                  data={this.props.library}
                                  keyExtractor={(item, index) => index}
                                  renderItem={({ item }) => this.renderdata(item)}
                              />
                </View> */}
        </View>
        );
    }
}
Librarylist.propTypes = {
    dispatch: PropTypes.func
  };

// const mapStateToProps = state =>{
//     return{library:state.libraries}
// }
export default connect()(Librarylist)
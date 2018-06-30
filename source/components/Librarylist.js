import React,{Component} from 'react';
import {connect} from 'react-redux';
import { View, Text,FlatList,TextInput, TouchableOpacity} from 'react-native';
import { Button,CheckBox} from 'react-native-elements';
import PropTypes from "prop-types";

// import Viewitems from './Viewitems';

class Librarylist extends Component{
    state={
        text:'',textBool:'none',
    }
    static PropTypes = {
        saticname:PropTypes.object.isRequired
    }
    constructor(props) {
        super(props);
        this.addtolist = this.addtolist.bind(this);
        // this.randomizeItemData = this.randomizeItemData.bind(this);
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
        this.setState({textBool:'flex'},()=>{})       
      }

    addthetext(){
          if(this.props.saticname){
              this.setState({textBool:'flex',text:this.props.saticname})
          }
        if(this.state.text !==''){
            const randomizedItemData = this.randomizeItemData();
            this.props.dispatch({ type: "ADD_ITEM", ...randomizedItemData,});
            this.setState({textBool:'none',text:''});
        }else{
            alert('enter the text');
        }
    }
      randomizeItemData() {
        if(this.state.text){  
            let colorArr = ["#00FFFF"];
            let randColor = colorArr[Math.floor(Math.random() * colorArr.length)];
           
            // let randNum = Math.floor(Math.random() * 10 + 1);
            // let randName = "Number" + randNum;
        
            return { name: this.state.text,
                    bgColor: randColor,
                 };
            
      }else{
          return false;
      }
      }

    render(){
        // console.warn(this.props.library);
        return(
            <View>
            <View style={{marginTop:30}}>
            <Button
            large
            onPress={()=>{this.addtolist()}}
                title='add to list' />
                </View>
                <View style={{marginTop:10,flexDirection:'row',display: this.state.textBool}}>
                    <TextInput
                            style={{height: 50,width:300, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(text) => this.setState({text})}
                            placeholder='enter the some text'
                            value={this.state.text}
                        />
                        <TouchableOpacity style={{backgroundColor:'#E6DDDD'}} onPress={()=>{this.addthetext()}}>
                            <Text style={{height:30,width:30,margin:10}}>GO</Text>
                        </TouchableOpacity>
                        
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
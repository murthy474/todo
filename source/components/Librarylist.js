import React,{Component} from 'react';
import {connect} from 'react-redux';
import { View, Text,FlatList,TextInput, TouchableOpacity} from 'react-native';
import { Button,CheckBox} from 'react-native-elements';
import PropTypes from "prop-types";

// import Viewitems from './Viewitems';

class Librarylist extends Component{
    state={
        text:'',textBool:'none',itemdetails:'',button:'GO'
    }
    
   componentWillMount(){
        this.addtolist = this.addtolist.bind(this);  
        // console.warn(this.props.getParam('editdata'));
        //  this.setState({itemdetails:this.props.navigation.state},()=>{
        //      console.warn(this.state.itemdetails)});                            
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
        this.setState({textBool:'flex',text:'',button:''},()=>{})       
      }

    addthetext(value,id){
        if(value==='undefined'|| ''  && id ==='undefined'|| ''){
            this.setState({text:''});            
        }else if(value ){
           let value = this.state.text;
            this.props.dispatch({ type: "updte_item", payload:{value,id}});
            this.setState({text:'',button:''});
            this.props.navigation.navigate('Viewitems')
           
        }else if(this.state.text !==''){
            const randomizedItemData = this.randomizeItemData();
            this.props.dispatch({ type: "ADD_ITEM", ...randomizedItemData,});
            this.setState({text:''});
            this.props.navigation.navigate('Viewitems')
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
      valueitem(naming){
            if(naming == ''){
                valueitem.push('');
            }else{
                 return naming;  
                 let naming = ''
                 valueitem.push(naming);
            }
        }
    render(){ 
    //    console.log(valueitem);
    let {navigation} = this.props;
       let valueitem = navigation.getParam('editdata');
       let itemid =navigation.getParam('editid')
        // console.warn(valueitem);
        return(
            <View>
            <View style={{marginTop:30}}>
            <Button
            large
            onPress={()=>{this.addtolist()}}
                title='add to list' />
                </View>
                <View style={{marginTop:10,marginLeft:20,flexDirection:'row',display: this.state.textBool}}>
                    <TextInput
                            style={{height: 50,width:300, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(text) => this.setState({text })}
                            placeholder='enter the some text'
                            value={this.state.text ? this.state.text :valueitem }
                        />
                        <TouchableOpacity style={{backgroundColor:'#E6DDDD'}} onPress={()=>{this.addthetext(valueitem,itemid)}}>
                            <Text style={{height:30,width:40,margin:10}}>{ this.state.button  ? 'update' :'GO'}</Text>
                        </TouchableOpacity>
                </View>z
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
    dispatch: PropTypes.func,

  };

// const mapStateToProps = state =>{
//     return{library:state.libraries}
// }
export default connect()(Librarylist)
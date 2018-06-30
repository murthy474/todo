
let nextItemId = 0;


const items = (state = [], action) => {
  // console.warn(action.name);
  switch (action.type) {
    case "ADD_ITEM": {
      return [
        ...state,
        {
          id: nextItemId++,
          name: action.name,
          bgColor: action.bgColor
          
        },
      ];
    }
    case "REMOVE_ITEM": {
      // Find index of item with matching ID and then
      // remove it from the array by its' index
      const index = state.findIndex(x => x.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case "index_value":{
        let array ={...state}
        // console.warn(array);
        const index = state.findIndex(x => x.id === action.id);
        let eleminatevalue = {...state.slice(0, index), ...state.slice(index + 1)};
        // console.warn(eleminatevalue);
        // return[eleminatevalue]
        //  state.map(function(data,index)
        // {
        //       eleminatevalue.map(function(innerdata,index)
        //     {
        //           if(data.id===innerdata.id){
        //             console.warn(innerdata,data);
        //           }      
        //     })
        // })
              // // let tempdata = state;
      // const index = state.findIndex(x => x.id === action.id);
      // // // console.warn(index);
      // let selectedvalue =  [...state.splice(index,1)] 
      // return[...state.slice(0, index), ...state.slice(index + 1),done]
      // const { payload: { id, done } } = action
      // state.map(function(data,index)
      // {  
      //   if(passeddata.payload.id === data.id){
      //     console.warn(passeddata.payload.done)
         
      //     const index = state.findIndex(x => x.id === action.id);
      //     let selcteddata = data;
      //         return[...state.slice(0, index), ...state.slice(index + 1),done]
      //   }else{
      //     console.warn('else loop')
      //   }
      // })
      state.map(x => {
        if (x.id === id) {
          return {
            ...x,
            done,
          }
        }
        return x
      })
    }
    default:
      return state;
  }
};

export default items;

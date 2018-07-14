
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
          bgColor: action.bgColor,
          done:false
        },
      ];
    }
    case "REMOVE_ITEM": {
      // Find index of item with matching ID and then
      // remove it from the array by its' index
      const index = state.findIndex(x => x.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case "checkvalue": {
      if(action.payload.done){
        
        var arry = [...state]
        var index = arry.indexOf(action.payload.item);        
        var elimanate = arry.splice(index,1);
        var boolcondition = [];
          for (let i = 0; i < elimanate.length; i++) {
            if(action.payload.item.name === elimanate[i].name){ 
               elimanate[i].bgColor='#FFA500'
               elimanate[i].done =action.payload.done
                boolcondition.push(elimanate[i])
            }else false;
          }
         
        var finalarry = arry.concat(boolcondition);
        return [
          ...state=finalarry];
        
      }else {
        var arry = [...state]
        var index = arry.indexOf(action.payload.item);        
        var elimanate = arry.splice(index,1);
        var boolcondition = [];
          for (let i = 0; i < elimanate.length; i++) {
            if(action.payload.item.name === elimanate[i].name){ 
              elimanate[i].bgColor='#00FFFF'
               elimanate[i].done =action.payload.done
                boolcondition.push(elimanate[i])
            }else false;
          }
        
        var finalarry = arry.concat(boolcondition);             
        // splice(0, 0, boolcondition)
      //  console.warn(finalarry);
        return [
          ...state=finalarry];
      }
    }
    case "edit_item":{
     return action.payload  
    }
    case "updte_item":{
      console.warn(action.payload);
      var arry = [...state]        
      var boolcondition = [];
        for (let i = 0; i < arry.length; i++) {
          if(action.payload.id === arry[i].id){ 
            arry[i].name =action.payload.value
              boolcondition.push(arry[i]);
              console.warn(arry);
               var finalarry = arry      
          }else false;
        }
        return [
          ...state=finalarry];
    }
    default:
      return state;
  }
};

export default items;

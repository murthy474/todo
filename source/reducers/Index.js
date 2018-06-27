import { combineReducers} from 'redux';
import libraryreducers from './libraryreducers';
import items from './items';

const itemApp = combineReducers({
    items
  });

//   export default combineReducers({
//       libraries:libraryreducers
//   })
export default itemApp;

import { combineReducers } from 'redux'
import reducerDeveloper from './reducerDeveloper';
import reducerRealEstate from './reducerRealEstate';

export default combineReducers({
  reducerDeveloper,
  reducerRealEstate,
});
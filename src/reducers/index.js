import { combineReducers } from 'redux';
import light from './light';
import counter from './counter';

export default combineReducers({
  light,
  counter,
});

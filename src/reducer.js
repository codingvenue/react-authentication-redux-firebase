import { combineReducers } from 'redux';
import * as globalReducers from './ducks';

const appReducer = combineReducers({...globalReducers});

export default appReducer;
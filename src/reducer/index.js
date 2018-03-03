import { combineReducers } from 'redux';
import todos from './todo';

const todoAppReducer = combineReducers({
  todos
});

export default todoAppReducer;
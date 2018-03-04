import { combineReducers } from 'redux'
import { todos, latestId } from './todo'

const todoAppReducer = combineReducers({
  todos: todos,
  latest_id: latestId
})

export default todoAppReducer
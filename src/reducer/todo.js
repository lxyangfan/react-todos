import { ADD_TODO, CHECK_TODO, SYNC_TODOS, FETCHED_TODOS, UPDATE_LATEST_ID } from '../action/index'
import { fetchTodos } from '../api/todo'

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(`[REDUCER] add todo clicks`)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case CHECK_TODO:
      console.log(`[REDUCER] CHECK_TODO clicks`)
      console.log(state)
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    case SYNC_TODOS:
      console.log(`[REDUCER] SYNC_TODOS clicks`)
      return state
    case FETCHED_TODOS:
      console.log(`[REDUCER] FETCHED_TODOS `)
      return action.data.reduce((arr, y) => (arr.findIndex(x => x.id === y.id) < 0 ? [...arr, y] : arr), state)
    default:
      return state
  }
}

export function latestId(state = 1, action) {
  switch (action.type) {
    case UPDATE_LATEST_ID:
      console.log(`[REDUCER-latestId] ${action.id}`)
      return action.id
    default:
      return state
  }
}
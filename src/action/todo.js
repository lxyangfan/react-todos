export const ADD_TODO = 'ADD_TODO'
export const CHECK_TODO = 'CHECK_TODO'
export const SYNC_TODOS = 'SYNC_TODOS'
export const FETCHED_TODOS_REQUEST = 'FETCHED_TODOS_REQUEST'
export const FETCHED_TODOS = 'FETCHED_TODOS'
export const FETCHED_TODOS_FAILED = 'FETCHED_TODOS_FAILED'

export const UPDATE_LATEST_ID = 'UPDATE_LATEST_ID'

export const addTodo = (id, text) => ({
  type: ADD_TODO,
  id: id,
  text: text
})

export const checkTodo = (id) => ({
  type: CHECK_TODO,
  id: id
})

export const updateLastId = (id) => ({ type: UPDATE_LATEST_ID, id: id })

export const syncTodo = () => ({ type: FETCHED_TODOS_REQUEST })


export const fetchedTodos = (data) => ({ type: FETCHED_TODOS, data: data })

export const fetchedTodosFailed = (err) => ({ type: FETCHED_TODOS_FAILED, error: err })
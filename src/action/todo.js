const ADD_TODO = 'ADD_TODO';
const CHECK_TODO = 'CHECK_TODO';

export function addTodo(id, text) {
  return {
    type: ADD_TODO,
    id: id,
    text: text
  };
}

export function checkTodo(id) {
  return {
    type: CHECK_TODO,
    id: id
  };
}

export { ADD_TODO, CHECK_TODO };
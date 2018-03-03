import { ADD_TODO, CHECK_TODO } from '../action/index';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(`[REDUCER] add todo clicks`);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case CHECK_TODO:
      console.log(`[REDUCER] CHECK_TODO clicks`);
      console.log(state);
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
}
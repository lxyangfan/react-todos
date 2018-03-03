import React, { Component } from 'react';
import Todo from './todo';
import AddTodo from './add-todo';

export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.lastId = 1;
    console.log(`[TodoList] constructor()`);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(
            (todo, index) => (
              <Todo key={index} {...todo} onItemClick={(id) => this.props.onItemClick(id)} />
            ))}
        </ul>
        <AddTodo onAddTodoClick={
          (text) => {
            this.props.onAddTodoClick(this.lastId++, text);
          }
        } />
      </div>
    );
  }
}

// <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} onItemClick={ (id) => this.props.onItemClick(id) } />
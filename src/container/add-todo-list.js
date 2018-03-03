import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/todo-list';
import { addTodo, checkTodo } from '../action/index';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onItemClick: (id) => dispatch(checkTodo(id)),
    onAddTodoClick: (id, text) => dispatch(addTodo(id, text))
  };
}

const AddTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default AddTodoList;


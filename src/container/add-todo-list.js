import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/todo-list'
import { addTodo, checkTodo, syncTodo, updateLastId } from '../action/index'

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    latest_id: state.latest_id
  }
}

// all sync dispatch
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onItemClick: (id) => dispatch(checkTodo(id)),
    onAddTodoClick: (id, text) => { dispatch(addTodo(id, text)); dispatch(updateLastId(id)) },
    syncTodo: () => dispatch(syncTodo())
  }
}

const AddTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default AddTodoList


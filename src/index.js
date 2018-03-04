import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import todoAppReducer from './reducer/index'
import AddTodoList from './container/add-todo-list'
import './style.css'

// saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/todo'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(todoAppReducer, applyMiddleware(
  sagaMiddleware
))
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <AddTodoList />
  </Provider>,
  document.getElementById('root')
)

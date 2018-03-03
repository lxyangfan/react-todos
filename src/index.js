import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import todoAppReducer from './reducer/index';
import AddTodoList from './container/add-todo-list';
import './style.css';

let store = createStore(todoAppReducer);

render(
  <Provider store={store}>
    <AddTodoList />
  </Provider>,
  document.getElementById('root')
)

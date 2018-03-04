import React, { Component } from 'react'

export default class AddTodo extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type="text"  onChange={(e) => { this.text = e.target.value }} />
        <button onClick={(e) => (this.props.onAddTodoClick(this.text))}>Add Todo</button>
      </div>
    )
  }
}
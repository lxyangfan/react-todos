import React, { Component } from 'react'
import './todo.css'

export default class TodoItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const className = this.props.completed ? 'item-checked' : 'item-unchecked'
    const curId = this.props.id
    return (
      <li>
        <a onClick={
          (e) => {
            e.preventDefault()
            console.log(`[TodoItem] clicks`)
            console.log(this.props)
            // this just call parent's input callback
            this.props.onItemClick(curId)
          }}
          className={className} > {this.props.text} </a>
      </li>
    )
  }
}
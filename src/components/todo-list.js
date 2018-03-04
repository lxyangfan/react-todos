import React, { Component } from 'react'
import Todo from './todo'
import AddTodo from './add-todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        console.log(`[TodoList] constructor()`)
        console.log(this.props)
        this.props.syncTodo() // for fetch todo from remote
    }


    render() {
        return (<div>
                    <ul> {this.props.todos.map((todo, index) => (<Todo key={index} {...todo} onItemClick={(id) => this.props.onItemClick(id)} />))}
                    </ul>
                    <AddTodo onAddTodoClick={
                        (text) => {
                            const lastId = Number.parseInt(this.props.latest_id) + 1
                            console.log(`LLLLLLLLLL id: ${lastId}`)
                            this.props.onAddTodoClick(lastId, text)
                        }
                    } />
                    <button onClick={() => this.props.syncTodo()} > Sync Todos </button>
                </div>
        )
    }
}

    // <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed}
    // onItemClick={ (id) => this.props.onItemClick(id) } />

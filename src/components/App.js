import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const finalList = this.state.todos.map(alist => <TodoItem key={alist.id} todo={alist} handleChange={this.handleChange} />)
        return (
            <div className="todo-list">
                <h1>Simple ToDo List</h1>
                {finalList}
            </div>
        )
    }
}

export default App
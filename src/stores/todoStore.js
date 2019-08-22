import { decorate, observable, action } from "mobx"

class TodoStore {
    todos
    list

    constructor() {
        this.todos = [
            {
                id: 1,
                text: 'First',
                completed: true
            },
            {
                id: 2,
                text: 'Second',
                completed: false
            }
        ];
    }

    toggleTodo(id) {
        this.todos.map(item => item.id === id ? item.completed = !item.completed : item)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(item => item.id !== id)
    }

    addTodo(text) {
        this.todos.push(
            {
                id: this.todos.length + 1,
                text: text,
                completed: false
            }
        )
    }
}

decorate(TodoStore, {
    todos: observable,
    addTodo: action,
    toggleTodo: action,
    removeTodo: action
})

export default new TodoStore();
import React from 'react'
import { inject, observer } from 'mobx-react';
import './styles.scss'
import Todo from '../Todo'
import AddTodo from '../AddTodo'
import FilterButton from '../FilterButton'


const TodoList = inject('todoStore', 'filterStore')(observer(({todoStore, filterStore}) => {
    const getTasks = () => {
        return todoStore.todos.filter((item) => ((filterStore.filter === 'all') || (filterStore.filter === 'completed') === item.completed));
    }

    return (
        <div className="wrap">
            <div className="todo-list-container">
                {getTasks().map(todo => {
                    return (
                        <Todo
                            text={todo.text}
                            id={todo.id}
                            completed={todo.completed}
                        />
                    )
                })}
                <AddTodo/>

                <div className="button-group">
                    <FilterButton filter="all"/>
                    <FilterButton filter="completed"/>
                    <FilterButton filter="active"/>
                </div>
            </div>
        </div>
    )
}))


export default TodoList;
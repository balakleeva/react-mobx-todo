import React from 'react'
import cx from 'classnames'
import './styles.scss'
import { inject, observer } from 'mobx-react'

const Todo = inject('todoStore')(observer(({todoStore, text, id, completed}) => {
    return (
        <div
            key={id}
            className={cx('todo', {'completed': completed})}
        >
            <span onClick={() => todoStore.toggleTodo(id)}>{text}</span>
            <span onClick={() => todoStore.removeTodo(id)}>x</span>
        </div>
    )
}))

export default Todo
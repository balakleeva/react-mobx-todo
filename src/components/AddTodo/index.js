import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'

const AddTodo = inject('todoStore')(observer(({todoStore}) => {
    const [text, setText] = useState('')

    const handleChange = (text) => {
        setText(text)
    }

    const addTodo = (text) => {
        if (text === '') {
            alert('Write todo')
            return
        }

        todoStore.addTodo(text)
        setText('')
    }

    return (
        <div className="add-container">
            <input
                value={text}
                onChange={(e) => handleChange(e.target.value)}
                type="text"
                placeholder="Write todo"
            />
            <button onClick={() => addTodo(text)}>Add</button>
        </div>
    )
}))

export default AddTodo;
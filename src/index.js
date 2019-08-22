import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList'
import { Provider } from 'mobx-react'
import todoStore from './stores/todoStore'
import filterStore from './stores/filterStore'

const stores = { todoStore, filterStore }

ReactDOM.render(
    <Provider {...stores}>
        <TodoList/>
    </Provider>,
    document.getElementById('root')
);

import React from 'react'
import ReactDOM from 'react-dom'
import { observable } from 'mobx'

import Todo from './Todo'
import App from './components/App'

const store = observable([])

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
)

store.push(new Todo('Hello'))

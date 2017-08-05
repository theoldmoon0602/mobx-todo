import React from 'react'
import { observer } from 'mobx-react'

import Todo from '../Todo'

@observer
class AddTodo extends React.Component {
    constructor() {
	super()
	this.state = {text: ''}
    }
    handleSubmit(e) {
	e.preventDefault()
	this.props.todos.push(new Todo(this.state.text))
	this.setState({text: ''})
    }
    handleChange(e) {
	this.setState({text: e.target.value})
    }
    render() {
	return (
	    <form
		onSubmit={this.handleSubmit.bind(this)}
	    >
		<input
		    type="text"
		    value={this.state.text}
		    onChange={this.handleChange.bind(this)} />
		<button type="submit">Add</button>
	    </form>
	)
    }
}
export default AddTodo

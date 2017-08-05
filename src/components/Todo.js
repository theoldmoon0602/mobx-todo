import React from 'react'
import { observer } from 'mobx-react'


@observer
class Todo extends React.Component {
    handleClick(e) {
	// props いじってるし間違ってるよね……
	this.props.todo.state = (this.props.todo.state=='TODO') ? 'DONE' : 'TODO'
    }
    
    render() {
	return (
	    <div>
		<input
		    type="checkbox"
		    checked={(this.props.todo.state == 'DONE')?true:false}
		    onClick={this.handleClick.bind(this)}
		/>
		{this.props.todo.content}
	    </div>
	)
    }
}

export default Todo

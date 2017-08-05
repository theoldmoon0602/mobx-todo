import React from 'react'
import { observer } from 'mobx-react'

@observer
class Complete extends React.Component {
    getDone() {
	return this.props.todos.filter((e) => e.state == 'DONE').length
    }
    render() {
	return (
	    <div>
		{this.getDone()} / {this.props.todos.length}
	    </div>
	)
    }
}
export default Complete

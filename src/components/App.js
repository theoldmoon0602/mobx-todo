import React from 'react'
import { observer } from 'mobx-react'

import Todos from './Todos'
import AddTodo from './AddTodo'
import Complete from './Complete'

const App = observer(
    ({store}) => (
	<div>
	    <AddTodo todos={store} />
	    <Todos todos={store} />
	    <Complete todos={store} />
	</div>
    )
)
export default App

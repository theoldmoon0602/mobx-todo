import React from 'react'
import { observer } from 'mobx-react'

import Todo from './Todo'

// observable な値を扱うコンポーネントには observer をつける
// (クラスなら@observer でいいんだけど関数は observer 関数で包む)
const Todos = observer(
    ({todos}) => (
	<ul>
	    { todos.map((todo) => (
		<li key={todo.id}>
		    <Todo todo={todo} />
		</li>
	    )) }
	</ul>
    )
)
export default Todos

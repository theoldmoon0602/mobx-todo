import {observable} from 'mobx'


// 悲しい変数を生んでしまうのは私が未熟だから
let globalId = 0

// ある一つのTodo（これはただのデータ型）
class Todo {
    // fields
    id
    @observable state   // 変更されるような値には observable をつける
    @observable content 

    constructor(content) {
	this.id = globalId++
	this.state = 'TODO'
	this.content = content
    }
}
export default Todo

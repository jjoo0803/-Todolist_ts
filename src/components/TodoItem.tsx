import './TodoStyle.scss'
import { TodoObject } from './TodoListContainer'

interface todoType {
  todo: TodoObject
}

function TodoItem ({ todo }: todoType) {
  const { idx, content, complete } = todo

  return (
    <div className='todo-item'>
      <div>{ idx }</div>
      <div> { content }</div>
      <div>{ complete ? 'true': 'false'}</div>
    </div>
  )
}

export default TodoItem
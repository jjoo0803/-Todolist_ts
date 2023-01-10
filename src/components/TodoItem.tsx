import './TodoStyle.scss'
import { TodoObject } from '../interface/interface'

interface todoProps {
  todo: TodoObject
  index: number,
  deleteTodo: (index: number) => void
}

function TodoItem ({ todo, index, deleteTodo }: todoProps) {
  const {content, complete} = todo

  return (
    <div className='todo-item'>
      <div>{ index }</div>
      <div> { content }</div>
      <div>{ complete ? 'true': 'false'}</div>
      <button onClick={() => {deleteTodo(index)}}>삭제</button>
    </div>
  )
}

export default TodoItem
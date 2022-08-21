import { useState } from "react"
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

export interface TodoObject {
  idx: number,
  content: string,
  complete: boolean
}

interface TodoListType {
  [x: string]: any
}


function TodoListContainer () {

  const [todo, setTodo] = useState<TodoListType>([
    {
      idx: 1,
      content: 'content1',
      complete: false
    },
    {
      idx: 2,
      content: 'content2',
      complete: false
    }
  ])

  return (
    <div>
      <TodoInput />
      {todo.map((item: TodoObject) => <TodoItem key={item.idx} todo={item}/>)}
    </div>
  )
}

export default TodoListContainer
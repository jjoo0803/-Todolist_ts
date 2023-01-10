import { useState } from "react"
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

import { TodoObject } from "../interface/interface"

function TodoListContainer () {

  const [todoList, setTodoList] = useState<TodoObject[]>([  
  ])

  const addTodoItem = (content: String) => {
    console.log('Todo content: ', content)
    let tmpObj:TodoObject = {
      content: content,
      complete: false
    }
    setTodoList(todoList.concat(tmpObj))
  }

  const deleteTodoItem = (index: number) => {
    let newList: TodoObject[] = todoList.filter((v, i) => {
      return index-1 !== i
    })
    setTodoList(newList)
  }

  return (
    <div>
      <TodoInput addTodo={addTodoItem} />
      {todoList.map((item: TodoObject, index: number) => 
        <TodoItem key={index} todo={item} index={index +1} deleteTodo={deleteTodoItem}></TodoItem>
      )}
    </div>
  )
}

export default TodoListContainer
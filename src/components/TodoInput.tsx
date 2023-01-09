import React, {useState, useCallback} from 'react';


interface propsType {
  addTodo: (todo: string) => void
}

function TodoInput ({addTodo}: propsType) {

  const [text, setText] = useState('')

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  // const onClickButton = useCallback(() => {
  //   handleTodo(text)
  // }, [handleTodo, text])

  const onClickButton = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div>
      <input name="content" value={text} onChange={onChange} />
      <button onClick={onClickButton}>
        등록
      </button>
    </div>
  )
}

export default React.memo(TodoInput)
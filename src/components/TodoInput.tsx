import React, {useState} from 'react';

function TodoInput () {

  const [text, setText] = useState('')

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="content" value={text} onChange={onChange} />
      <button type="submit">
        등록
      </button>
    </form>
  )
}

export default TodoInput
import { useState } from 'react'
import style from './InputTask.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export function InputTask({ onAddItem }: any) {
  const [text, setText] = useState('')
  const [error, setError] = useState<boolean>(false)

  function handleAddItem(event: any) {
    event.preventDefault()
    if (!text) {
      setError(true)
      return
    }

    onAddItem(text)
    setText('')
  }

  return (
    <form onSubmit={handleAddItem} className={style.formAddTask}>
      <input
        placeholder="Adicionar uma nova tarefa"
        style={
          error
            ? { border: '2px solid rgb(255, 121, 121)', borderRight: 'none' }
            : {}
        }
        onChange={(event) => {
          setText(event.target.value)
          if (error) setError(false)
        }}
        type="text"
        value={text}
      />
      <button disabled={error} type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  )
}

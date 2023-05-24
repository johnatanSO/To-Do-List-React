import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Item } from '../../App'
import style from './ModalEdit.module.scss'

interface ModalEditProps {
  itemDataToEdit: Item
  items: Item[]
  onHideModal: (event: any) => void
  setItems: (items: Item[]) => void
  handleClose: () => void
}

export function ModalEdit({
  itemDataToEdit,
  onHideModal,
  items,
  setItems,
  handleClose,
}: ModalEditProps) {
  const [item, setItem] = useState<Item>(itemDataToEdit)

  function onUpdate(event: any) {
    event.preventDefault()
    const newItems = items.map((it) => {
      if (it.id === item?.id) it.text = item.text
      return it
    })
    handleClose()
    setItems(newItems)
  }

  return (
    <div id="modal" onClick={onHideModal} className={style.overlay}>
      <form onSubmit={onUpdate} className={style.modalContent}>
        <header>
          <h2>Editar tarefa</h2>
          <FontAwesomeIcon
            onClick={handleClose}
            className={style.closeIcon}
            icon={faXmark}
          />
        </header>
        <input
          onChange={(event) => {
            setItem({ ...item, text: event.target.value })
          }}
          value={item?.text}
          type="text"
          placeholder="Digite a tarefa"
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  )
}

import { useState } from 'react'
import { Item } from '../../App'

interface ModalProps {
  itemDataToEdit: Item
  items: Item[]
  onHideModal: (event: any) => void
  setItems: (items: Item[]) => void
}

export function Modal({
  itemDataToEdit,
  onHideModal,
  items,
  setItems,
}: ModalProps) {
  const [item, setItem] = useState(itemDataToEdit)

  function onUpdate(event: any) {
    event.preventDefault()
    const newItems = items.map((it) => {
      if (it.id === item?.id) it.text = item.text
      return it
    })
    setItems(newItems)
  }

  return (
    <div id="modal" onClick={onHideModal} className="modal">
      <div className="modalContent">
        <h2>Edit task</h2>
        <form className="formUpdate">
          <input
            onChange={(event) => {
              setItem({ ...item, text: event.target.value })
            }}
            className="editTaskInput"
            value={item?.text}
            type="text"
          />
          <button onClick={onUpdate} className="btnUpdate">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

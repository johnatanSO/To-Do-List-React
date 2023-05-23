import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { ListItem } from './components/ListItem'
import { InputTask } from './components/InputTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.scss'

const SAVED_ITEMS = 'savedItems'

interface Item {
  id: number
  text: string
  done: boolean
}

export function App() {
  const [items, setItems] = useState<Item[]>([])
  const [itemDataToEdit, setItemDataToEdit] = useState<Item | undefined>(
    undefined,
  )
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS) || '[]')
    if (savedItems) {
      setItems(savedItems)
    }
  }, [])

  function onAddItem(text: string) {
    const newItem = {
      id: (items?.length + 1) * (Math.random() * 1000),
      done: false,
      text,
    }
    setItems((currentItems) => [...currentItems, newItem])
  }

  function handleClearItems() {
    setItems([])
  }

  function handleDone(item: Item) {
    const updatedItems = items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done
      }
      return it
    })
    setItems(updatedItems)
  }

  function handleDeleteItem(item: Item) {
    const filteredItems = items.filter((it) => {
      return it.id !== item.id
    })
    setItems(filteredItems)
  }

  function handleEditItem(item: Item) {
    setShowModal(true)
    setItemDataToEdit(item)
  }

  function onHideModal(event: any) {
    const target = event.target
    if (target.id === 'modal') {
      setShowModal(false)
    }
  }

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    if (items.length > 0) {
      document.title = `(${items.length}) Todo list`
    } else {
      document.title = 'Todo list'
    }
  }, [items])

  return (
    <div className="container">
      <Header />

      <h1>To-do list</h1>

      <InputTask onAddItem={onAddItem} />

      <button className="clearButton" onClick={handleClearItems}>
        <FontAwesomeIcon icon={faBroom} />
        Limpar
      </button>

      <ul>
        {items?.map((item: any) => {
          return (
            <ListItem
              handleDeleteItem={handleDeleteItem}
              handleEditItem={handleEditItem}
              handleDone={handleDone}
              key={item?.id}
              item={item}
            />
          )
        })}
      </ul>

      {showModal && (
        <Modal
          itemDataToEdit={itemDataToEdit}
          onHideModal={onHideModal}
          items={items}
          setItems={setItems}
        />
      )}
    </div>
  )
}

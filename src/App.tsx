import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { ModalEdit } from './components/ModalEdit'
import { ListItem } from './components/ListItem'
import { InputTask } from './components/InputTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.scss'
import { ModalDetails } from './components/ModalDetails'

const SAVED_ITEMS = 'savedItems'

export interface Item {
  id: number
  text: string
  done: boolean
  createdAt: Date
  donedDate?: Date
}

export function App() {
  const [items, setItems] = useState<Item[]>([])
  const [itemDataToEdit, setItemDataToEdit] = useState<Item>(undefined as any)
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false)
  const [showModalDetails, setShowModalDetails] = useState<boolean>(false)

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
      createdAt: new Date(),
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
        it.donedDate = new Date()
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
    setShowModalEdit(true)
    setItemDataToEdit(item)
  }

  function handleOpenDetailsItem(item: Item) {
    console.log('open detais')
    setShowModalDetails(true)
    setItemDataToEdit(item)
  }

  function onHideModal(event: any) {
    const target = event.target
    if (target.id === 'modal') {
      setShowModalEdit(false)
      setShowModalDetails(false)
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

      {items?.length > 0 && (
        <button className="clearButton" onClick={handleClearItems}>
          <FontAwesomeIcon icon={faBroom} />
          Limpar
        </button>
      )}

      <ul>
        {items?.map((item) => {
          return (
            <ListItem
              handleDeleteItem={handleDeleteItem}
              handleEditItem={handleEditItem}
              handleOpenDetailsItem={handleOpenDetailsItem}
              handleDone={handleDone}
              key={item?.id}
              item={item}
            />
          )
        })}
      </ul>

      {showModalEdit && (
        <ModalEdit
          itemDataToEdit={itemDataToEdit}
          onHideModal={onHideModal}
          items={items}
          setItems={setItems}
          handleClose={() => {
            setShowModalEdit(false)
          }}
        />
      )}
      {showModalDetails && (
        <ModalDetails
          handleClose={() => {
            setShowModalDetails(false)
          }}
          onHideModal={onHideModal}
          itemDetails={itemDataToEdit}
        />
      )}
    </div>
  )
}

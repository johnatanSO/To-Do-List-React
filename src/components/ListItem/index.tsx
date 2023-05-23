import style from './ListItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faPen,
  faCheck,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'

export function ListItem({
  item,
  handleDone,
  handleEditItem,
  handleDeleteItem,
}: any) {
  return (
    <li className={style.listItem}>
      <FontAwesomeIcon
        onClick={() => {
          handleDone(item)
        }}
        className={item.done ? style.iconDoned : style.iconDone}
        icon={faCheck}
      />
      <span className={item.done ? style.donedText : ''}>{item?.text}</span>

      <div className={style.actions}>
        <button className={style.detailsButton} onClick={() => {}}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </button>

        <button
          disabled={item.done}
          className={style.editButton}
          onClick={() => {
            handleEditItem(item)
          }}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>

        <button
          onClick={() => {
            handleDeleteItem(item)
          }}
          className={style.deleteButton}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  )
}

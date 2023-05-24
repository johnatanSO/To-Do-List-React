import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import { Item } from '../../App'
import style from './ModalDetails.module.scss'

interface ModalDetailsProps {
  itemDetails: Item
  onHideModal: (event: any) => void
  handleClose: () => void
}

export function ModalDetails({
  itemDetails,
  onHideModal,
  handleClose,
}: ModalDetailsProps) {
  return (
    <div id="modal" onClick={onHideModal} className={style.overlay}>
      <div className={style.modalContent}>
        <header>
          <h2>Detalhes da tarefa</h2>
          <FontAwesomeIcon
            onClick={handleClose}
            className={style.closeIcon}
            icon={faXmark}
          />
        </header>
        <main className={style.fieldsContainer}>
          <div className={style.field}>
            <h3>Data de criação</h3>
            <span>
              {dayjs(itemDetails.createdAt).format('DD/MM/YYYY HH:mm')}
            </span>
          </div>
          {itemDetails.donedDate && (
            <div className={style.field}>
              <h3>Data de conclusão</h3>
              <span>
                {dayjs(itemDetails.donedDate).format('DD/MM/YYYY HH:mm')}
              </span>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

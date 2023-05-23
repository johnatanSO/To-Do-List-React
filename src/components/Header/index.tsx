import style from './Header.module.scss'
import dayjs from 'dayjs'

export function Header() {
  return (
    <div className={style.headerContainer}>
      <h3>{dayjs().format('DD MMMM YYYY')}</h3>
    </div>
  )
}

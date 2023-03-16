import { useState } from 'react'
import { Toggle } from 'rsuite'
import styles from './UserItem.module.scss'
import 'rsuite/dist/rsuite.min.css'

export function UserItem({ user }) {
  const [toggleIsActive, setToggleIsActive] = useState(false)

  return (
    <div className={styles.userCard}>
      <div className={styles.userInfo}>
        <div>
          <p>Nome:</p>
          <span>{user.nameUser}</span>
        </div>
        <div>
          <p>e-mail:</p>
          <span>{user.email}</span>
        </div>
        <div>
          <p>Status:</p>
          <span>{user.status ? 'Ativo' : 'inativo'}</span>
        </div>
        <div>
          <p>Grupo:</p>
          <span>{user.group}</span>
        </div>
      </div>
      <div className={styles.userActions}>
        <Toggle
          checked={user.status}
          onChange={(value) => {
            setToggleIsActive(value)
          }}
        />
        <button type="button">Alterar</button>
      </div>
    </div>
  )
}

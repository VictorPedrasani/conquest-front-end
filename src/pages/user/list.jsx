import { useEffect, useState } from 'react'
import styles from '@/styles/pages/user/List.module.scss'
import { UserItem } from '@/components/pages/user/UserItem'

const usersMock = [
  {
    id: 1,
    name: 'Victor pedrasani',
    email: 'victor.p@gmail.com',
    status: true,
    group: 'administrador',
  },
  {
    id: 2,
    name: 'gustavo santos',
    email: 'gustavo.s@gmail.com',
    status: false,
    group: 'administrador',
  },
]

export default function List() {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    // todo: criar requisicao para retornar a lista de usuarios
    setUserList(usersMock)
  }, [])

  return (
    <>
      <div className={styles.tittle}>
        <h1>Lista de usuários</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.topbar}>
          <input type="text" placeholder="Busca de usuario" />
          <button type="button" className={styles.userCad}>
            Cadastro de usuário
          </button>
        </div>
        {userList.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}

        {/* <div className={styles.actions}>
          <button className={styles.cancel}>Cancelar</button>
          <button className={styles.save}>Salvar</button>
        </div> */}
      </div>
    </>
  )
}

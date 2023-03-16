import { useEffect, useState } from 'react'
import styles from '@/styles/pages/user/List.module.scss'
import { UserItem } from '@/components/pages/user/UserItem'


export default function List() {
  const [userList, setUserList] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:8080/conquest/user/listusers')
      .then(response => response.json())
      .then(data => setUserList(data))
      .catch(error => console.error('Erro:', error))
  }, [])

  return (
    <>
      <div className={styles.tittle}>
        <h1>Lista de usuários</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.topbar}>
          <input type="text" placeholder="Busca de usuario" />
          <button type="button" className={styles.userCad} >
            Cadastro de usuário
          </button>
        </div>
        {userList.map((nameUser) => (
          <UserItem key={nameUser.id} user={nameUser} />
        ))}

        {/* <div className={styles.actions}>
          <button className={styles.cancel}>Cancelar</button>
          <button className={styles.save}>Salvar</button>
        </div> */}
      </div>
    </>
  )
}

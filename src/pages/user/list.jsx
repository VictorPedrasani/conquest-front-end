import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '@/styles/pages/user/List.module.scss'
import { UserItem } from '@/components/pages/user/UserItem'

async function getData() {
  try {
    const response = await axios.get('http://localhost:8080/conquest/user/listusers');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default function List() {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setUserList(result);
    }
    fetchData();
    setUserList(getData())
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

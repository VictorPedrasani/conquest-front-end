import { useEffect, useState } from 'react'
import styles from '@/styles/pages/user/List.module.scss'
import { UserItem } from '@/components/pages/user/UserItem'
import { api } from '@/services/api'
import { useRouter } from "next/router"
import { Button } from '@/components/Button'

export default function List() {
  const [userList, setUserList] = useState([])
  const router = useRouter()
  useEffect(() => {
    api.get('/conquest/user/listusers').then(({data}) => {
      setUserList(data);
    }).catch((error) => console.error(error))
  }, [])

  return (
    <>
      <div className={styles.tittle}>
        <Button className={styles.back} onClick={() => router.push("/")} type="button">Voltar</Button>
        <h1>Lista de usuários</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.topbar}>
          <div className={styles.cad}>
            <input type="text" placeholder="Busca de usuario" />
            <button onClick={()=>router.push("userCad")} type="button" className={styles.userCad}>
              +
            </button>
          </div>
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

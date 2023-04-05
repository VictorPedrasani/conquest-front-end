import { useEffect, useState } from 'react'
import styles from '@/styles/pages/user/List.module.scss'
import { UserItem } from '@/components/pages/user/UserItem'
import { api } from '@/services/api'
import { useRouter } from "next/router"

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
      <button onClick={() => router.push("/")} type="button">Voltar</button>
        <h1>Lista de produtos</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.topbar}>
          <input type="text" placeholder="Busca de Produto" />
          <button onClick={()=>router.push("prodCad")} type="button" className={styles.ProdCad}>
            Cadastro de Produto
          </button>
        </div>
        {userList.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}

      </div>
    </>
  )
}
import { useEffect, useState } from 'react'
import styles from '@/styles/pages/user/List.module.scss'
import { UserItem } from '@/components/pages/user/UserItem'
import { ApiProdList } from '@/services/api'
import { useRouter } from "next/router"

export default function List() {
  const [prodList, setProdList] = useState([])
  const router = useRouter()

  const fetchProdList = async () => {
    try {
      const listaProd = await ApiProdList()
      setProdList(listaProd)
      console.log(prodList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProdList()
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
          <button onClick={() => router.push("prodCad")} type="button" className={styles.ProdCad}>
            Cadastro de Produto
          </button>
        </div>
        {prodList.map((prod) => (
          <UserItem key={prod.id} user={prod} />
        ))}
      </div>
    </>
  )
}
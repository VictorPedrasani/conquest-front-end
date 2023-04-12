import styles from '@/styles/pages/Home.module.scss'
import { useRouter } from "next/router"

const getOut = (router) => {
  localStorage.clear()
  router.push("/login")
}


export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <span>Seja bem-vindo {JSON.parse(localStorage.getItem("userData")).email}</span>
      <button onClick={() => getOut(router) } type="button">Sair</button>
      <div className={styles.tittle}>
        <h1>Tela provisoria</h1>
      </div>
      <div className={styles.data}>
        <button onClick={() => router.push("/product/prodList")} type="button">Lista de produtos</button>
        <button onClick={() => router.push("/user/userList")} type="button">Lista de usuário</button>
      </div>
    </div>
  )
}

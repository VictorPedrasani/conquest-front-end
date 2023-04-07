import styles from '@/styles/pages/Home.module.scss'
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.tittle}>
        <h1>Tela provisoria</h1>
      </div>
      <div className={styles.data}>
        <button onClick={() => router.push("/product/list")} type="button">Lista de produtos</button>
        <button onClick={() => router.push("/user/list")} type="button">Lista de usuário</button>
      </div>
    </div>
  )
}

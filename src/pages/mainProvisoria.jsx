import styles from '@/styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.tittle}>
        <h1>Tela provisoria</h1>
      </div>
      <div className={styles.data}>
        <button type="button">Usuario cliente</button>
        <button type="button">Usuário funcionario</button>
      </div>
    </div>
  )
}

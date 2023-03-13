import styles from '@/styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="assets/logo.png" alt="logotipo conquest" />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="e-mail" />
        <input type="password" placeholder="senha" />
        <button type="button">Acessar</button>
      </form>
      <div className={styles.newRegister}>
        <p>Não tem cadastro?</p>
        <button type="button">Registrar</button>
      </div>
    </div>
  )
}

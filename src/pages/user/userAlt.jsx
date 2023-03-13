import styles from '@/styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.tittle}>
        <h1>Alteração usuário</h1>
      </div>
      <div className={styles.data}>
        <form className={styles.form}>
          <p>Nome:</p>
          <input type="text" placeholder="Digite seu nome" />
          <p>CPF:</p>
          <input type="text" placeholder="Digite seu CPF" />
          <p>e-Mail:</p>
          <input type="text" placeholder="Digite seu nome" />
          <p>Senha:</p>
          <input type="text" placeholder="Crie uma senha" />
          <p>Confirmação de senha:</p>
          <input type="text" placeholder="Repita sua senha" />
          <p>Grupo:</p>
          <input type="radio" name="grupo" value="adm" />
          Administrador
          <input type="radio" name="grupo" value="stq" />
          Estoquista
        </form>

        <div className={styles.submit}>
          <button type="button">Cancelar</button>
          <button type="button">Salvar</button>
        </div>
      </div>
    </div>
  )
}

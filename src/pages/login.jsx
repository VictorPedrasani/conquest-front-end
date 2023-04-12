import { useState } from 'react'
import styles from '@/styles/pages/Home.module.scss'
import { ApiUserBackLogin } from '@/services/api'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    let teste = await ApiUserBackLogin(email, senha)
    console.log("Mostrando o teste", teste)
    if (teste.idUser == 0) {
      alert("Usuário não encontrado!")
    } else {
      alert("Login completo!")
      teste.email = email;
      teste.senha = senha;
      localStorage.setItem("userData", JSON.stringify(teste))
      console.log(JSON.parse(localStorage.getItem("userData")))
      router.push("/")
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="assets/logo.png" alt="logotipo conquest" />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="e-mail" />
        <input
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          placeholder="senha" />
        <button type="submit">Acessar</button>
      </form>
    </div>
  )
}

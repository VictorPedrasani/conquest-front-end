import { useState } from 'react'
import styles from '@/styles/pages/Home.module.scss'
import { api } from '../services/api'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      email,
      password: senha,
    }

    console.log(JSON.stringify(payload))
    
    // mandar dados para o back
    api.post("/conquest/user/loginbackoffice",
      payload
    ).then((response) => {
      console.log(response)
      router.push("/")
    }).catch(() => alert("Usuário não encontrado"))
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="assets/logo.png" alt="logotipo conquest" />
      </div>
      <form className={styles.form}>
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
        <button type="button" onClick={handleSubmit}>Acessar</button>
      </form>
      {/* <div className={styles.newRegister}>
        <p>Não tem cadastro?</p>
        <button  type="button">Registrar</button>
      </div> */}
    </div>
  )
}

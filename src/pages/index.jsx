import { useState } from 'react'
import styles from '@/styles/pages/Home.module.scss'

export default function Home() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const doLogin = () => {
    let user = {}
    user.email = email
    user.senha = senha
    let resposta = false

    fetch('http://localhost:8080/conquest/user/loginbackoffice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => resposta = data.email === user.email && data.password === user.senha)
      .catch(error => console.error(error))

    return resposta
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      email,
      senha,
    }

    console.log(JSON.stringify(payload))
    
    // mandar dados para o back
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
        <button type="button" onClick={() => doLogin ? alert("Login Correto!") : alert("login incorreto")} >
  Acessar
</button></form>
      {/* <div className={styles.newRegister}>
        <p>Não tem cadastro?</p>
        <button type="button">Registrar</button>
      </div> */}
    </div>
  )
}

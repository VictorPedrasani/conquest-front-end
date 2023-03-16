import { useState } from 'react'
import styles from '@/styles/pages/user/UserCad.module.scss'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function Home() {
  const [nameUser, setNameUser] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [group, setGroup] = useState('')

  const postUser = () => {
    const user = {}
    user.nameUser = nameUser
    user.cpf = cpf
    user.email = email
    user.password = password
    user.group = group

    fetch('http://localhost:8080/conquest/user/registeruser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      nameUser,
      cpf,
      email,
      password,
      group,
    }

    console.log(JSON.stringify(payload))
    // mandar dados para o back
  }

  const handleLogin = () => password === password2 ? postUser() : alert('As senhas não conferem!')

  return (
    <div className={styles.container}>
      <div className={styles.tittle}>
        <h1>Cadastrar usuário</h1>
      </div>
      <div className={styles.data}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            value={nameUser}
            onChange={(e) => setNameUser(e.target.value)}
            type="text"
            placeholder="Digite seu nome"
            label="Nome:"
          />
          <Input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            type="text"
            placeholder="Digite seu CPF"
            label="CPF:"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Digite seu e-mail"
            label="e-mail:"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Digite sua senha"
            label="Senha:"
          />
          <Input
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            type="password"
            placeholder="Digite sua senha"
            label="Repita sua senha:"
          />
          <span>Grupo: </span>
          <input
            onChange={() => setGroup(1)}
            type="radio"
            name="grupo"
            value={1}
          />
          Administrador
          <input
            onChange={() => setGroup(2)}
            type="radio"
            name="grupo"
            value={2}
          />
          Estoquista
          <div className={styles.submit}>
            <Button type="reset" color="cancel">
              Cancelar
            </Button>
            <Button type="submit" color="primary" onClick={handleLogin}>
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
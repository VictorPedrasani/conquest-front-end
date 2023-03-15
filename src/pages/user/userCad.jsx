import { useState } from 'react'
import styles from '@/styles/pages/user/UserCad.module.scss'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function Home() {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senha2, setSenha2] = useState('')
  const [grupo, setGrupo] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      nome,
      cpf,
      email,
      senha,
      grupo,
    }

    console.log(JSON.stringify(payload))
    // mandar dados para o back
  }

  const handleLogin = () =>
    senha === senha2 ? alert('esta correto') : alert('não é possível')

  return (
    <div className={styles.container}>
      <div className={styles.tittle}>
        <h1>Cadastrar usuário</h1>
      </div>
      <div className={styles.data}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="text"
            placeholder="Digite sua senha"
            label="Senha:"
          />
          <Input
            value={senha2}
            onChange={(e) => setSenha2(e.target.value)}
            type="text"
            placeholder="Digite sua senha"
            label="Repita sua senha:"
          />
          <span>Grupo: </span>
          <input
            onChange={() => setGrupo(1)}
            type="radio"
            name="grupo"
            value={1}
          />
          Administrador
          <input
            onChange={() => setGrupo(2)}
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

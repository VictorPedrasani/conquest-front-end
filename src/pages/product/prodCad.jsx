import styles from '@/styles/pages/Home.module.scss'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function Home() {
  return(
    <div>
      <button>Voltar</button>
      <h1>Cadastro de produtos</h1>
        <div className={styles.container}>
          <Input 
          value={null}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome do item"
          label="Item:"/>
          <div className={styles.smallInputs}>
            <Input 
            value={null}
            onChange={(e) => setNome(e.target.value)}
            type="number"
            placeholder="Valor do item"
            label="Valor:"/>
            <Input 
            value={null}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Disponibilidade de estoque"
            label="Estoque:"/>
            <Input 
            value={null}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Avalição do item"
            label="Avalição:"/>
          </div>
          <div className={styles.descript}>
            <Input 
            value={null}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Descrição do produto"
            label="Descrição:"/>
          </div>
          
          <div className={styles.buttons}>
          <Button type="reset" color="cancel">
              Cancelar
            </Button>
            <Button type="submit" color="primary" onClick={null}>
              Salvar
            </Button>
          </div>
        </div>
    </div>
  )
}
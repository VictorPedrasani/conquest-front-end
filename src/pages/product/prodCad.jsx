import React, { useState } from 'react'
import { api } from '../../services/api'
import styles from '@/styles/pages/Home.module.scss'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { router } from 'next/router';



export default function Home(props) {

  const [imagens, setImagens] = useState([])
  const [nome, setNome] = useState('')
  //const [categoria, setCategoria] = useState('')
  const [valor, setValor] = useState('')
  const [estoque, setEstoque] = useState('')
  const [avaliacao, setAvaliacao] = useState(0.0)
  const [descricao, setDescricao] = useState('')

  const [jsonProd, setJsonProd] = useState('')

  const fillProduct = () => {
    const prod = {}
    prod.productName = nome
    prod.productImages = [...imagens] // TODO: destructuring operator
    //prod.categoria = categoria
    prod.productValue = Number(valor)
    prod.productQuantity = estoque
    prod.productReview = avaliacao
    prod.productDescription = descricao

    setJsonProd(JSON.stringify(prod))
    console.log("fillProduct " + jsonProd)
  }

  const handleChange = (e, setFunction) => {
    e.preventDefault()
    setFunction(e.target.value)
  }

  const handleImage = (event) => {
    event.preventDefault()
    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = () => {
      setImagens(reader.result)
    }
  }

  const saveProduct = () => {
    fillProduct()

    console.log(jsonProd)

    api.post("conquest/backoffice/product/register", jsonProd
    ).then((response) => {
      console.log(response)
      router.push("/")
    }).catch(() => alert("Erro ao mandar o JSON"))
  }


  return (
    <div>
      <button onClick={() => router.push("list")} type="button">Voltar</button>
      <h1>Cadastro de produtos</h1>
      <div className={styles.container}>
        <Input
          value={jsonProd.setImagens}
          onInput={(e) => handleImage(e, setImagens)}
          type="file"
          multiple
          accept="image/jpeg, image/png"
          placeholder="Imagem do Item"
          label="Imagem:"
        />

        <Input
          value={nome}
          onChange={(e) => handleChange(e, setNome)}
          type="text"
          placeholder="Nome do item"
          label="Nome do produto:"
        />
        {/* <Input
          value={categoria}
          onChange={(e) => handleChange(e, setCategoria)}
          type="text"
          placeholder="Categoria do produto."
          label="Item:"
        /> */}
        <div className={styles.smallInputs}>
          <Input
            value={valor}
            onChange={(e) => handleChange(e, setValor)}
            type="number"
            min={0}
            placeholder="Valor do item"
            label="Valor:"
          />

          <Input
            value={estoque}
            onChange={(e) => handleChange(e, setEstoque)}
            type="text"
            placeholder="Disponibilidade de estoque"
            label="Estoque:"
          />

          <Input
            value={avaliacao}
            onChange={(e) => handleChange(e, setAvaliacao)}
            type="text"
            placeholder="Avalição do item"
            label="Avalição:"
          />
        </div>
        <div className={styles.descript}>
          <Input
            value={descricao}
            onChange={(e) => handleChange(e, setDescricao)}
            type="text"
            placeholder="Descrição do produto"
            label="Descrição:"
          />
        </div>

        <div className={styles.buttons}>
          <Button type="reset" color="cancel">
            Cancelar
          </Button>

          <Button type="submit" color="primary" onClick={() => saveProduct()}>
            Salvar
          </Button>

        </div>
      </div>
    </div>
  )
}

import React, { useState } from "react";
import Banner from './Components/Banner/Banner'
import Formulario from './Components/Formulario/Formulario'
import Area from "./Components/Area/Area";


function App() {
  const secoes= [
    {
      nome: 'Computadores'
    },
    {
      nome: 'Acessórios'
    },
    {
      nome: 'Impressoras'
    },
    {
      nome: 'Games'
    },
    {
      nome: 'Gadgets'
    }
  ];
const marcas=[
  {
    nome: 'HP',
    imagem:'Asus.png'
    
  },
  {
    nome: 'Dell',
    imagem:'Dell'
  },
  {
    nome: 'Positivo',
    imagem:'Positivo'
  },
  {
    nome: 'Asus',
    imagem:'Asus'
  },
  {
    nome: 'Xing Ling Genérico',
    imagem:'xing'
  },

]

 

 const listSecoes=secoes.map(secao=>secao.nome);
 
 
 const [produtos,setProdutos] = useState([])

const adicionaProd=(prod)=>{
  console.log(prod)
  const listaNova=produtos.slice();
  listaNova.push(prod)
  setProdutos(listaNova)
  console.log(listaNova)

  
}

  
  return (
    <div>
      <Banner/>
      <Formulario secoes={listSecoes} marcas={marcas} aoProdutoCadastrado={prod=>adicionaProd(prod)}/>
      {secoes.map(secao=> <Area
      key={secao.nome}
      produtos={produtos.filter(prod=> prod.secao===secao.nome)}
      
      />)}

    </div>
  )
}

export default App


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
    imagem:'/imagens/Marcas/HP.png'
    
  },
  {
    nome: 'Dell',
    imagem:'/imagens/Marcas/Dell.png'
  },
  {
    nome: 'Positivo',
    imagem:'/imagens/Marcas/Positivo.png'
  },
  {
    nome: 'Asus',
    imagem:'/imagens/Marcas/Asus.png'
  },
  {
    nome: 'Xing Ling Genérico',
    imagem:'/imagens/Marcas/Xing.png'
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

const removerProduto = (id) => {
  setProdutos(produtos.filter(prod => prod.id !== id));
};


  
  return (
    <div>
      <Banner/>
      <Formulario secoes={listSecoes} marcas={marcas} aoProdutoCadastrado={prod=>adicionaProd(prod)}/>
      {secoes.map(secao=> <Area
      key={secao.nome}
      nome={secao.nome}
      produtos={produtos.filter(prod=> prod.secao===secao.nome)}
      aoRemover={removerProduto}
      
      />)}

    </div>
  )
}

export default App


import React, { useState } from "react";
import Banner from './Components/Banner/Banner'
import Formulario from './Components/Formulario/Formulario'

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
    nome: 'HP'
  },
  {
    nome: 'Dell'
  },
  {
    nome: 'Positivo'
  },
  {
    nome: 'Asus'
  },
  {
    nome: 'Xing Ling Genérico'
  },

]

 const listSecoes=secoes.map(secao=>secao.nome);
 const listMarcas=marcas.map(marca=>marca.nome);
  
  return (
    <div>
      <Banner/>
      <Formulario secoes={listSecoes} marcas={listMarcas}/>
    </div>
  )
}

export default App

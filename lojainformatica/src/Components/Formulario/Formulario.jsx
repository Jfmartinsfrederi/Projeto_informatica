import React, { useState } from "react";
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import CampoTexto from "../CampoTexto/CampoTexto";



const Formulario =(props)=>{

    const [secao, setSecao]= useState('Computadores')
    const [marca, setMarca]= useState('HP')
    const [nome, setNome]=useState('')
    const [preco, setPreco]=useState('')



    return(
       <section>
        <form >

            <h1>Cadastrar Produtos</h1>
             <ListaSuspensa
             label="Seções"
             itens={props.secoes}
             value={secao}
             aoAlterado={valor=>setSecao(valor)}
             
             
             />
             
             <ListaSuspensa
             label="Marcas"
             itens={props.marcas}
             value={marca}
             aoAlterado={valor=>setMarca(valor)}
             
             />

             <CampoTexto 
             label="Nome:"
             placeholder="Insira o nome do produto:"
             value={nome}
             aoAlterado={valor=>setNome(valor)}
             
             />

              <CampoTexto 
             label="Preço:"
             placeholder="Insira o preço do produto:"
             value={preco}
             aoAlterado={valor=>setPreco(valor)}
             
             />

            
        
        </form>
       </section>

    )



}

export default Formulario;
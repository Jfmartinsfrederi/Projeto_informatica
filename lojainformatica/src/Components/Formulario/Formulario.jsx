import React, { useState } from "react";
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import CampoTexto from "../CampoTexto/CampoTexto";
import CampoRadio from "../CampoRadio/CampoRadio";
import Botao from "../Botao/Botao";

const Formulario =(props)=>{

    const [secao, setSecao]= useState('Computadores')
    const [marca, setMarca]= useState('HP')
    const [nome, setNome]=useState('')
    const [preco, setPreco]=useState('')
    const [opcao, setOpcao]=useState('')

    const aoSalvar=(evento)=>{
        evento.preventDefault();
        const marcaCompleta = props.marcas.find(m => m.nome === marca);
        props.aoProdutoCadastrado(
            {
                "secao":secao,
                "marca":marcaCompleta.nome,
                "imagem":marcaCompleta.imagem,
                "nome":nome,
                "preco":preco,
                "opcao":opcao
            }
        )
        setSecao('Computadores');
        setMarca('HP')
        setNome('');
        setPreco('');
        setOpcao('');

    }

    



    return(
       <section>
        <form onSubmit={aoSalvar}>

            <h1>Cadastrar Produtos</h1>
             <ListaSuspensa
             label="Seções"
             itens={props.secoes}
             value={secao}
             aoAlterado={valor=>setSecao(valor)}
             
             
             />
             
             <ListaSuspensa
             label="Marcas"
             itens={props.marcas.map(marca=>marca.nome)}
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

             <CampoRadio 
             nome="Opção"
             opcoes={["Novo","Usado"]}
             valorSelecionado={opcao}
             aoAlterado={valor=>setOpcao(valor)}

             />
             <Botao>Cadastrar Produto</Botao>
             

            
        
        </form>
       </section>

    )



}

export default Formulario;
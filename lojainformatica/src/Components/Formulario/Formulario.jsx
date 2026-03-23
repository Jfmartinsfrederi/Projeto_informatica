import React, { useState } from "react";
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import CampoTexto from "../CampoTexto/CampoTexto";
import CampoRadio from "../CampoRadio/CampoRadio";
import Botao from "../Botao/Botao";
import "./Formulario.css"

const Formulario =(props)=>{

    const [secao, setSecao]= useState('Computadores')
    const [marca, setMarca]= useState('HP')
    const [nome, setNome]=useState('')
    const [preco, setPreco]=useState('')
    const [opcao, setOpcao]=useState('')

    const aoAlterarPreco=(valor)=>{
        if (valor==="" || Number(valor)>0){
            setPreco(valor);
        }

    }



    const aoSalvar=(evento)=>{
        evento.preventDefault();
        const marcaCompleta = props.marcas.find(m => m.nome === marca);
        props.aoProdutoCadastrado(
            {
                "id": crypto.randomUUID(),
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
       <section className="form-section">
        <form className="form-container" onSubmit={aoSalvar}>

            <h1 className="form-titulo">Cadastrar Produtos</h1>
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
             tipo="input"
             placeholder="Insira o nome do produto:"
             value={nome}
             aoAlterado={valor=>setNome(valor)}
             
             />

              <CampoTexto 
             label="Preço:"
             
             tipo="number"
             placeholder="Insira o preço do produto:"
             value={preco}
             aoAlterado={aoAlterarPreco}
             
             />

             <CampoRadio 
             nome="Opção"
             opcoes={["Novo","Usado"]}
             valorSelecionado={opcao}
             aoAlterado={valor=>setOpcao(valor)}
             required

             />
             <Botao className="btn-submit" >Cadastrar Produto</Botao>
             

            
        
        </form>
       </section>

    )



}

export default Formulario;
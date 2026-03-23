import React from "react";
import Botao from "../Botao/Botao";
import "./Produto.css";

const Produto =({id,imagem,marca,nome,preco,opcao,aoRemover})=>{
    const handleRemover=()=>{
        aoRemover(id)
    }

    return(
        <div className="card">
            <div className="card-img">
                <img src={imagem} alt={marca} />
            </div>
            <div className="card-content">
                <h4>{nome}</h4>
                <h5>R${preco}</h5>
                <h6>{opcao}</h6>
                <Botao className="btn-remover" aoClicar={handleRemover}>Remover</Botao>

            </div>
        </div>
    )



}

export default Produto;
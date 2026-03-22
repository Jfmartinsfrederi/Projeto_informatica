import React from "react";

const Produto =({imagem,marca,nome,preco,opcao})=>{

    return(
        <div>
            <div>
                <img src={imagem} alt={marca} />
            </div>
            <div>
                <h4>{nome}</h4>
                <h5>{preco}</h5>
                <h6>{opcao}</h6>

            </div>
        </div>
    )



}

export default Produto;
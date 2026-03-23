import React from "react";
import Produto from "../Produto/Produto";
import "./Area.css";




const Area=(props) =>{

 return(
    (props.produtos.length>0) ? <section className="area">
        <h3 className="area-titulo">{props.nome}</h3>
        <div className="grid">
            {props.produtos.map(prod=> <Produto
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            imagem={prod.imagem}
            preco={prod.preco}
            opcao={prod.opcao}
            aoRemover={props.aoRemover}
            
            />

            )}

        </div>
    </section>
    :''
 )


}

export default Area;
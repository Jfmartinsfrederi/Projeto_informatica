import React from "react";
import Produto from "../Produto/Produto";




const Area=(props) =>{

 return(
    (props.produtos.length>0) ? <section>
        <h3>{props.nome}</h3>
        <div>
            {props.produtos.map(prod=> <Produto
            key={prod.nome}
            nome={prod.nome}
            imagem={prod.imagem}
            preco={prod.preco}
            opcao={prod.opcao}
            
            />

            )}

        </div>
    </section>
    :''
 )


}

export default Area;
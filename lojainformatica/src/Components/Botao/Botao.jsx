import React from "react";
 import "./Botao.css"

const Botao=(props)=>{
    return(
        <button className={props.className} onClick={props.aoClicar}>
            {props.children}
        </button>
    )
}

export default Botao;
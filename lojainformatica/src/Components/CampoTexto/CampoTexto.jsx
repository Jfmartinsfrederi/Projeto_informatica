import React from "react";

const CampoTexto= (props)=>{

    const aoDigitado = (evento) => {
 props.aoAlterado(evento.target.value)
 }



    return (
        <div >
            <label >{props.label}</label>
            <input value={props.value}
            onChange={aoDigitado}
            placeholder={props.placeholder} />






        </div>

    )
}

export default CampoTexto;
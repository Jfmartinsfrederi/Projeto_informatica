import React from "react";

const CampoRadio=(props)=>{

    const aoSelecionado = (evento) => {
 props.aoAlterado(evento.target.value)
 }



    return(
        <div>
            {props.opcoes.map(opcao=>(
            <label key={opcao}>
                <input type="radio"
                name={props.nome}
                value={opcao}
                checked={props.valorSelecionado===opcao}
                onChange={aoSelecionado}
                required

                
                />
                {opcao}




            </label>

        ))}




        </div>

    )

}

export default CampoRadio;
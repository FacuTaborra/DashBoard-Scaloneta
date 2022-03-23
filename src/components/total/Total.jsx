import React from "react";
import "./total.css"

function Total(props){
    return(

    <div className="conteiner"> 
        <span className="Titulo"> {props.titulo} </span>
        <span className="total">Total {props.total} </span>
    </div>

    )
}
export default Total;
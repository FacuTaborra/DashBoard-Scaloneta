import React from "react";
import "./tabla.css"
import Cabezal from './Cabezal'
import Rows from './Rows'
import { Link, Route, Switch } from "react-router-dom";

function Tabla(props){

    return(
        <div className="conteiner-table">
            <table className="table"> 
                <caption>{props.titulo}</caption>
                <Cabezal band = {props.band}/>
                <Rows band = {props.band}/>
            </table>
        </div>
    )
}
export default Tabla;
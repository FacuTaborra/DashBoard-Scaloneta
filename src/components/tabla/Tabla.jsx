import React from "react";
import "./tabla.css"
import { Link, Route, Switch } from "react-router-dom";
import Cabezal from './Cabezal'
import RowProduct from './RowProduct'
import RowCategory from './RowCategory';
import RowUser from "./RowUser";

function Tabla(props){

    return(
        <div className="conteiner-table">
            <table className="table"> 
                <caption>{props.titulo}</caption>
                <Cabezal band = {props.band}/>
                <Route path='/products' component={RowProduct}/> 
                <Route path='/categories' component={RowCategory}/>
                <Route path='/users' component={RowUser}/> 
            </table>
        </div>
    )
}
export default Tabla;
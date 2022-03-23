import React from "react";
import "./tabla.css"
import Cabezal from './Cabezal'
import RowProduct from './RowProduct'
import { Link, Route, Switch } from "react-router-dom";
import RowCategory from './RowCategory';

function Tabla(props){

    return(
        <div className="conteiner-table">
            <table className="table"> 
                <caption>{props.titulo}</caption>
                <Cabezal band = {props.band}/>
                
                <Route path='/products' component={RowProduct}/> 
                <Route path='/categories' component={RowCategory}/>
           {/*      <Route path='/user' component={RowUser}> </Route> */}
                
                
            </table>
        </div>
    )
}
export default Tabla;
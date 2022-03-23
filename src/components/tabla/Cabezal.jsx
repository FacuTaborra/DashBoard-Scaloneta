import React from "react";
import "./tabla.css"

function Tabla(props){

    let cabezal;

    if(props.band == 1){
        cabezal = 
        <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Descuento</th>
            <th>Detalle</th>
            <th>Stock</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>talle</th>
            <th>imagen</th>
        </tr>
    }else if(props.band == 2){
        cabezal = 
        <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>cantidad Productos</th>
        </tr>
    }else if (props.band == 3){
        cabezal = 
        <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>detalle</th>
            <th>email</th>
        </tr>
    }

    return(
        <thead>
            {cabezal}
        </thead>
    )
}
export default Tabla;
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
    }else{
        cabezal = 
        <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>apellido</th>
            <th>email</th>
            <th>Fecha de Nacimiento</th>
            <th>Genero</th>
            <th>Telefono</th>
            <th>Imagen</th>
        </tr>
    }

    return(
        <thead>
            {cabezal}
        </thead>
    )
}
export default Tabla;
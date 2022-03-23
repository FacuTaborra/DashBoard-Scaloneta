import React from "react";
import { Link, Route, Router, Switch } from 'react-router-dom';
import Tabla from "../tabla/Cabezal";
import './users.css'

function Users(){
    return (
        <Tabla titulo = "Usuarios" band = "3"/>
    );
}

export default Users;
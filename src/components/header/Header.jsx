import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import logo from './logo4.png'
import './header.css'


function Header(){
    return (
        <header className="header">
            <div className="header-ontop">
                <div className = "content">
                    <h3>Scaloneta DashBoard</h3>
                </div>
            </div>

            <div class="header-top">
                <div class="header-left">
                    <img src={logo} alt="" class="logo"/>
                </div>
                <div className="links">
                    <Link to = "/products">Productos</Link>
                    <Link to = "/categories">Categorias</Link>
                    <Link to = "/users">Usuarios</Link>
                </div>
                <div class="header-center-simple">
                    <h4>SCALONETA SHOP</h4>
                </div>
            </div>
        </header>
    );
}

export default Header;
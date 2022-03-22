import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import logo from './logo4.png'
import './header.css'
import Products from "../products/Products.jsx";
import Users from "../users/Users.jsx";
import Categories from "../categories/Categories.jsx";

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
                    <Route path = "/products" component={Products} />
                    <Route path = "/categories" component={Categories}/>
                    <Route path = "/users" component={Users} />
                </div>
                <div class="header-center-simple">
                    <h4>SCALONETA SHOP</h4>
                </div>
            </div>
        </header>
    );
}

export default Header;
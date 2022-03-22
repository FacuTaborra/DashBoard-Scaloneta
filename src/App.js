import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.js'
import Products from "./components/products/Products.jsx";
import Users from "./components/users/Users.jsx";
import Categories from "./components/categories/Categories.jsx";

function App() {
  return (
      <div>
        <Header/>
        <Switch>
          <Route path = "/products" component={Products} />
          <Route path = "/categories" component={Categories}/>
          <Route path = "/users" component={Users} />
        </Switch>
        <Footer/>
      </div>
  );
}

export default App;

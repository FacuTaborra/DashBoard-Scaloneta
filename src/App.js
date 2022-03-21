import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import products from './components/products/Products.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path='/Header' component={Header}/>
      <Route  exact path='/' component={Footer}/>
      <span>hola</span>
    </div>
  );
}

export default App;

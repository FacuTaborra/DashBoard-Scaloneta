import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.jsx'
//import Footer from './components/footer/Footer.js'
//import products from './components/products/Products.js'

function App() {
  return (
      <Switch>
        <Route path="/" component = {Header}/>
      </Switch>
  );
}

export default App;

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer.jsx'
//import products from './components/products/Products.js'

function App() {
  return (
      <Switch>
        
        <Route exact path="/" component = {Header}/>
        
      </Switch>
  );
}

export default App;

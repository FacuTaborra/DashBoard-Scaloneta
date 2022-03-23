import React from 'react';
/* import { Link, Route, Switch } from 'react-router-dom'; */
import './App.css';
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import ContentProducts from './components/contentTop/ContentProducts.jsx';
import ContentTop from './components/contentTop/contentTop';
//import products from './components/products/Products.js'

function App() {
  return (
      <div>
        <Header/>
        <ContentTop/>
        <Footer/>
      </div>
  );
}

export default App;

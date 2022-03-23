import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Products from "./components/products/Products.jsx";
import Users from "./components/users/Users.jsx";
import Categories from "./components/categories/Categories.jsx";
import TotalProductsApi from "./components/total/TotalProductsApi.jsx";
import TotalUserApi from "./components/total/TotalUserApi.jsx";
import TotalCategoryApi from "./components/total/TotalCategoryApi.jsx";
import LastProduct from "./components/lastProduct/LastProduct.jsx";
import LastUser from "./components/lastUser/LastUser.jsx";

function App() {
  return (
    <div>
      <Header />

      <div className="conteiner-full">
        <TotalProductsApi />
        <TotalUserApi />
        <TotalCategoryApi />
      </div>
      <div className="conteiner-ultP">
        <LastProduct />
        <LastUser />
      </div>

      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/categories" component={Categories} />
        <Route path="/users" component={Users} />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;

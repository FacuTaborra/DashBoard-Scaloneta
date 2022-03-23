import React, { Component } from "react";
import "./lastProduct.css";

class LastProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastProduct: "",
    };
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => consecuencia(data))
      .catch((error) => console.log(error));
  }

  showLastProduct = (data) => {
    this.setState({
      lastProduct: data.products.pop(),
    });
  };

  componentDidMount() {
    this.apiCall("http://localhost:3000/api/products", this.showLastProduct);
  }

  componentDidUpdate() {
    this.apiCall("http://localhost:3000/api/products/", this.showLastProduct);
  }

  render() {
    let contenido;
    if (this.state.lastProduct == "") {
      contenido = <p>Buscando en base de datos...</p>;
    } else {
      contenido = (
        <div className="lastProduct">
          <form action="" className="form-lastProduct">
            <h4>Ultimo Producto cargado</h4>
            <label htmlFor="">Nombre: {this.state.lastProduct.name}</label>
            <label htmlFor="">
              Descuento: {this.state.lastProduct.discount}
            </label>
            <label htmlFor="">Detalle: {this.state.lastProduct.detail}</label>
            <label htmlFor="">Stock: {this.state.lastProduct.stock}</label>
            <label htmlFor="">
              Categoria: {this.state.lastProduct.category}
            </label>
            <label htmlFor="">Precio: ${this.state.lastProduct.price}</label>
          </form>
        </div>
      );
    }

    return <div>{contenido}</div>;
  }
}

export default LastProduct;

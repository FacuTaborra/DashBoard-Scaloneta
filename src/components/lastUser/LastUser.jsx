import React, { Component } from "react";
import "./lastUser.css";

class LastUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUser: "",
    };
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => consecuencia(data))
      .catch((error) => console.log(error));
  }

  showLastUser = (data) => {
    this.setState({
      lastUser: data.users.pop(),
    });
  };

  componentDidMount() {
    this.apiCall("http://localhost:3000/api/users", this.showLastUser);
  }

  componentDidUpdate() {
    this.apiCall("http://localhost:3000/api/users/", this.showLastUser);
  }

  render() {
    let contenido;
    if (this.state.lastUser == "") {
      contenido = <p>Buscando en base de datos...</p>;
    } else {
      contenido = (
        <div className="lastUser">
          <form action="" className="form-lastUser">
            <h4>Ultimo Usuario cargado</h4>
            <label htmlFor="">Nombre: {this.state.lastUser.name}</label>
            <label htmlFor="">Email: {this.state.lastUser.email}</label>
          </form>
        </div>
      );
    }

    return <div>{contenido}</div>;
  }
}

export default LastUser;

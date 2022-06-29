import React, { Component } from "react";
import Button from "@mui/material/Button";

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    /* console.log("sumando")
    console.log(this) */
    this.setState({
        contador: this.state.contador + 1,
    })
  }
  restar(e) {
    console.log("restando")
    console.log(this)
    this.setState({
        contador: this.state.contador - 1,
    })
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clase</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <Button onClick={this.sumar}>+</Button>
          <Button onClick={this.restar}>-</Button>
        </nav>
      </div>
    );
  }
}

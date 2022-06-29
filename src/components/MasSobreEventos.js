import { Button } from "@mui/material";
import { Component } from "react";

/* function Boton(props) {
    return(<button onClick={props.myOnClick}>Botón hecho componente</button>)
} */

const Boton = ({myOnClick}) => (
    <button onClick={myOnClick}>Botón hecho componente</button>
);

export default class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    /* console.log(e.target);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(msg) */
  };

  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <Button
          onClick={(e) =>
            this.handleClick(e, "Hola, pasando parámetro desde un evento")
          }
        >
          Saludar
        </Button>
        {/* {Evento personalizado} */}
        <Boton myOnClick={(e) =>
            this.handleClick(e, "Hola, pasando parámetro desde un evento personalizado")
          }  />
      </div>
    );
  }
}

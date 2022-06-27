/* import logo from './logo.svg'; */
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <section>
        <Componente msg="Hola soy un componente funcional expresado desde una prop" />
        <Propiedades 
          cadena="Esto es una cadena" 
          numero={20} 
          booleano={true}
          arreglo={[1,2,3]}
          objeto={{nombre: "Julián", correo: "juliuis23@gmail.com"}}
          funcion={(num) => num*num}
          elementoReact={<i>Este es un elemento React</i>}
          componenteReact={<Componente msg="Componente pasado como prop" />}
          />
      </section>
    </div>
  );
}

export default App;

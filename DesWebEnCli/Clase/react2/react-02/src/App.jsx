import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './Components/Cabecera/cabecera'
import Cambiar from './Components/Cambiar/Cambiar'

function App() {
  
  const [variable, setVariable] = useState(0);

  
  function sumar(numero) {
    setVariable(variable+numero);
  }

  function cambiar(numero) {
    setVariable(variable+numero);
  }

  const [personas, setPersonas] = useState([]);
  const [persona, setPersona] = useState("");

  function addPersonas() {
    let temporal = [...personas];
    temporal.push(persona);
    setPersonas(temporal);
  }

  return (
    <>
      <Cabecera parametro="Test"></Cabecera>
      <Cambiar cambiar={cambiar}></Cambiar>
      <h3>La variable es {variable}</h3>
      <button onClick={() => {sumar(3)}}>Sumar</button>
      <button onClick={() => {sumar(-1)}}>Restar</button>
      <h3>Personas: {personas}</h3>
      <input type="text" onChange={
        (e) => {
          setPersona(e.target.value);
        }
      }/>
      <button onClick={addPersonas}>Add</button>
    </>
  )
}

export default App

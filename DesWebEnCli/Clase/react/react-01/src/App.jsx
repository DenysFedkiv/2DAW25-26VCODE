import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CabeceraComponente from './components/cabecera/CabeceraComponente'

function App() {
  let nombre = "Mundo";
  function concatenar(a, b) {
    return a + b;
  }

  function recoger(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <CabeceraComponente nombre ={nombre}/>
      <h1 class="cabecera">
          Hola Mundo {nombre == "Jose" ? concatenar(nombre, " Tu") : "No"}
      </h1>
      <button onClick={aumentar}>Aumentar</button>
      <input type="text" onChange={recoger} id='texto'/>
    </>
  )
}

export default App

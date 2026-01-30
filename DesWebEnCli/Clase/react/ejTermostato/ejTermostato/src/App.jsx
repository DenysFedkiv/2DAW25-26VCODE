import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PanelControl from './components/PanelControl'
import Termometro from './components/Termometro'
import Alerta from './components/Alerta'

function App() {
  const [apagado, setApagado] = useState(true);
  const [temperatura, setTemperatura] = useState(20);
  const [estado, setEstado] = useState("");

  function apagar() {
    setApagado(true);
    console.log("Apagado");
  }
  
  function encender() {
    setApagado(false);
    console.log("Encendido");
  }

  function cambiarTemperatura(numero) {
    setTemperatura(temperatura+numero);
    actualizrEstado(temperatura);
  }

  function actualizrEstado(temperatura) {
    if(temperatura <= 15) setEstado("frio");
    else if(temperatura >= 28) setEstado("calor");
    else setEstado("");
  }


  return (
    <>
      <div id='main'>
        <PanelControl apagado={apagado} apagar={apagar} encender={encender} cambiarTemperatura={cambiarTemperatura}></PanelControl>
        <h1>{apagado ? "Apagado" : ""}</h1>
        {!apagado && (<Termometro temperatura={temperatura}></Termometro>)}
        {!apagado && (<Alerta estado={estado}></Alerta>)}
      </div>
    </>
  )
}

export default App

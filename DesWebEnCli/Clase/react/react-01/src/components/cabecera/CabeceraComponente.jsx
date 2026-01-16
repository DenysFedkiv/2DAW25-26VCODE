function CabeceraComponente({nombre}) {
    let contador = 0;
    function aumentar() {
        contador++;
        console.log(contador);
    }
    
    return (
        <>
            <h1>Cabecera:{contador}</h1>
            <button onClick={aumentar}>Aumentar {nombre}</button>
        </>
    )
}

export default CabeceraComponente;
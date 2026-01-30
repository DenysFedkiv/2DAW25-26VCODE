import "./Termometro.css"

function Termometro(props) {
    
    let clase = "temp-normal";
    if(props.temperatura <= 15) clase = "temp-frio";
    else if(props.temperatura >= 28) clase = "temp-calor";
    else clase = "temp-normal";

    return (
        <>
            <h2 className={clase}>{props.temperatura}</h2>
        </>
    );
}

export default Termometro;
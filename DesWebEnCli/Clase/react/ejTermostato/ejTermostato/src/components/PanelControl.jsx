import "./PanelControl.css";

function PanelControl(props) {
    
    
    return (
        <>
            <button onClick={props.apagado ? props.encender : props.apagar}>{props.apagado ? "Encender" : "Apagar"}</button>
            {!props.apagado && (
                <div>
                    <button onClick={() => {props.cambiarTemperatura(1)}}>+</button>
                    <button onClick={() => {props.cambiarTemperatura(-1)}}>-</button>
                </div>
            )}
        </>
    );
}

export default PanelControl;
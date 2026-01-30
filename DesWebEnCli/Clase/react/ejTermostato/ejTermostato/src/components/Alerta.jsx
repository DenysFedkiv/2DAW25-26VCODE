function Alerta(props) {
    
    return (
        <>
            {(props.estado == "frio" || props.estado == "calor") && (<p className={"alerta-" + props.estado}>Hace mucho {props.estado}</p>)}
        </>
    );
}

export default Alerta;
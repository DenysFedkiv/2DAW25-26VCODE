function Cambiar( {cambiar} ) {
    return (
        <>
            <button onClick={()=>{
                cambiar(+1)
            }}>+1</button>
            <button onClick={()=>{
                cambiar(-1)
            }}>-1</button>
        </>
    );
}

export default Cambiar;
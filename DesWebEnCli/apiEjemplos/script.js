function obtenerFutbolistasAPI() {
    return fetch('http://localhost:3000/api/futbolistas')
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error('Error al obtener futbolistas');
            }
            return respuesta.json();
        });
}

function mostrarFutbolistas() {
    let contenedor = document.getElementById('contenedor-futbolistas');
    // Mostramos mensaje de carga
    contenedor.innerHTML = '<p>Cargando...</p>';
    // Llamamos a la API
    obtenerFutbolistasAPI()
        .then(function (datos) {
            // 'datos' es el array de futbolistas
            // Limpiamos el contenedor
            // Recorremos los datos y creamos tarjetas
        })
        .catch(function (error) {
            // Mostramos mensaje de error
        });
}

function crearFutbolistaAPI(futbolista) {
    return fetch('http://localhost:3000/api/futbolistas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(futbolista)
    })
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error('Error al crear futbolista');
            }
            return respuesta.json();
        });
}
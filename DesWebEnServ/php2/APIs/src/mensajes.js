

/*************************************************
 * 1. REFERENCIAS AL DOM
*************************************************/

// Referencia al <ul> donde se mostrarán los mensajes
const lista = document.getElementById("listaMensajes");


// Referencia al input de texto
const input = document.getElementById("texto");


// Referencia al botón de enviar
const btn = document.getElementById("btnEnviar");
        


        /*************************************************
         * 2. FUNCIÓN GET → CARGAR MENSAJES
         *************************************************/

        /*
            Crear una función async llamada cargarMensajes

            Pasos:
            1. Hacer fetch a la API (GET)
            2. Convertir la respuesta a JSON
            3. Limpiar el contenido del <ul>
            4. Si data.exito === true:
                - Recorrer el array de mensajes
                - Crear un <li> por cada mensaje
                - Insertarlo en el <ul>
        */

        const apiUrl = "http://localhost:8080/mensajes.php";
            
        async function cargarMensajes() {
            lista.innerHTML = "";
            try {
                const respuesta = await fetch(apiUrl);
                console.log(respuesta.ok);
                console.log(respuesta.status);
                const datos = await respuesta.json();
                console.log(datos);
                if(datos.exito) {
                    datos.mensaje.forEach(element => {
                        let nuevoLi = document.createElement("li");
                        nuevoLi.innerText = element.texto;
                        lista.append(nuevoLi);
                    });
                }
            }
            catch {
                console.error("Hubo un error");
            }
        }



        /*************************************************
         * 3. FUNCIÓN POST → ENVIAR MENSAJE
         *************************************************/

        /*
            Crear una función async llamada enviarMensaje

            Pasos:
            1. Obtener el texto del input
            2. Hacer fetch con method: "POST"
            3. Enviar el texto en el body (JSON)
            4. Si exito === true:
                - Crear un <li> con el nuevo mensaje
                - Añadirlo al <ul>
                - Limpiar el input
        */

        async function enviarMensaje() {
            const txt = input.value;
            try {
                const respuesta = await fetch(apiUrl, {
                    method : "POST",
                    headers : {"Content-Type" : "application/json"},
                    body : JSON.stringify({texto:txt})
                });
                const datos = await respuesta.json();
                if(datos.exito) {
                    console.log("POST con exito");
                    const li = document.createElement("li");
                    li.innerText = datos.mensaje.texto;
                    lista.append(li);
                    input.value = "";
                }
            }
            catch (e) {
                console.log(e);
            }
        }



        /*************************************************
         * 4. EVENTOS Y CARGA INICIAL
         *************************************************/

        // Cargar los mensajes al iniciar la página
        document.addEventListener("DOMContentLoaded", cargarMensajes);
        btn.addEventListener("click", enviarMensaje);

        // Asociar el botón al evento click

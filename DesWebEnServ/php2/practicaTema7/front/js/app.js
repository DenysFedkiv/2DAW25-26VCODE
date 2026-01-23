const API_URL = 'http://localhost:8080/api-tareas.php';
let paginaActual = 1;
let modoEdicion = false;

function configurarEventos() {
    // Obtener el formulario por su ID
    const formulario = document.getElementById('form-tarea');
    // Escuchar el evento 'submit' del formulario del modal
    formulario.addEventListener('submit', guardarTarea);
    // Cerrar modal al hacer clic fuera
    document.getElementById('modal').addEventListener('click', (e) => {

    if (e.target.id === 'modal') {
        cerrarModal();
        }
    });
}

async function cargarTareas(pagina = 1) {
    try {
    // HACER: Construir parámetros de la URL con URLSearchParams
    //en la variable params. Ver ejemplo ya hecho en la página 16 de los
    //apuntes de la unidad 7
        const id = document.getElementById('tarea-id').value;//input oculto
        const titulo = document.getElementById("busqueda").value;
        const prioridad = document.getElementById("filtro-prioridad").value;
        const completada = document.getElementById("filtro-estado").value;
        const orden = document.getElementById("orden").value;
        
        const params = new URLSearchParams({
            buscar: titulo,
            prioridad : prioridad,
            estado: completada,
            orden: orden,
            direccion: 'ASC',
            pagina: pagina,
            limit: 10
        });
        
    // HACER: petición fetch
    // HACER: Convertir respuesta en JSON a OBJETO JS
    // HACER: Si la respuesta fue con éxito
        let tareas = {};
        let paginacion = {};

        console.log(`${API_URL}?${params.toString()}`);
        

        const response = await fetch(`${API_URL}?${params.toString()}`);
        const datos = await response.json();
        if(response.ok) {
            console.log(datos);
            tareas = datos["tareas"];
            paginacion = datos["paginacion"];
            mostrarTareas(tareas);
            mostrarPaginacion(paginacion);
            paginaActual = pagina;
        }
        else {
            mostrarAlerta('error', 'Error de conexión: ' + error.message);
        }

    // HACER: si no fue con éxito, llamar a mostrarAlerta('error',
    //data.mensaje). En data tenemos el objeto js con los datos.
    //}
    } catch (error) {
        mostrarAlerta('error', 'Error de conexión: ' + error.message);
    }
}

async function toggleCompletada(id, completada) {
    try {
        // HACER: petición fetch a la api (${API_URL}?id=${id}) para
        //obtener todos los datos de la tarea con id
        const response = await fetch(`${API_URL}?id=${id}`);
        const datos = await response.json();

        if(response.ok) {
            console.log(datos);
            datos["tarea"]["completada"] = datos["tarea"]["completada"] == 1 ? 0 : 1;
        }
        // HACER: Convertir respuesta en JSON a OBJETO JS
        // HACER: Si la respuesta fue con éxito
        // HACER: Cambiar el estado completada en el array que tiene los datos de la tarea

        const response2 = await fetch((API_URL), {
            method : "PUT",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(datos["tarea"])
        });
        const datos2 = await response2.json();
        if(response2.ok) {
            console.log(datos2, "ok");
            cargarTareas(paginaActual);
        }

        // HACER: Enviar UPDATE con todos los datos actualizados (otro fetch con método PUT y usando stringify para pasar los datos)
        // HACER: Convertir respuesta en JSON a OBJETO JS
        // HACER: Recargar lista para ver cambios. Llamar a cargarTareas con paginaActual como argumento.
    } catch (error) {
        mostrarAlerta('error', 'Error: ' + error.message);
    }
}

async function eliminarTarea(id) {
    try {
        // HACER: petición fetch a la api (${API_URL}?id=${id}) con el método DELETE
        // HACER: Convertir respuesta en JSON a OBJETO JS
        // HACER: Si la respuesta fue con éxito

        const response = await fetch(API_URL, {
            method : "DELETE",
            headers: {
            'Content-Type': 'application/json'
            },
            body : JSON.stringify({id : id})
        });
        const data = await response.json();

        if(response.ok) {
            console.log(data);
            cargarTareas(paginaActual);
        }
        else {
            mostrarAlerta('error', 'Error: ' + data.mensaje);
        }

        // HACER: Llamar a la función mostrarAlerta
        // HACER: llamar a cargarTareas con la paginaActual
        // HACER: En caso de no éxito, mostrar en alertas un mensaje

    } catch (error) {
        mostrarAlerta('error', 'Error: ' + error.message);
    }
}

async function editarTarea(id) {
    try {
        // HACER: petición fetch a la api (${API_URL}?id=${id})para obtener en la variable data los datos de la tarea .
        // HACER: Convertir respuesta en JSON a OBJETO JS en la variable
        const response = await fetch(`${API_URL}?id=${id}`);
        const data = await response.json();
        if (response.ok) {
            const tarea = data.tarea;
            document.getElementById('modal-titulo').textContent = 'Editar Tarea';
            // HACER: Rellenar los inputs con los datos. NO OLVIDAR EL INPUT OCULTO CON EL ID DE LA TAREA.
            document.getElementById('tarea-id').value = tarea["id"];//input oculto
            document.getElementById("tarea-titulo").value = tarea["titulo"];
            document.getElementById("tarea-descripcion").value = tarea["descripcion"];
            document.getElementById("tarea-prioridad").value = tarea["prioridad"];
            document.getElementById("tarea-completada").checked = tarea["completada"] == 1 ? true : false;

            modoEdicion = true;
            abrirModalEdicion();
        } else {
            mostrarAlerta('error', data.mensaje);
        }
    } catch (error) {
        mostrarAlerta('error', 'Error al cargar tarea: ' + error.message);
    }
}

async function guardarTarea(e) {
    e.preventDefault();//para que no se recargue la página
    ocultarAlertas();
    const id = document.getElementById('tarea-id').value;//input oculto
    const titulo = document.getElementById("tarea-titulo").value;
    const descripcion = document.getElementById("tarea-descripcion").value;
    const prioridad = document.getElementById("tarea-prioridad").value;
    const completada = document.getElementById("tarea-completada").checked ? 1 : 0;
    
    let method = modoEdicion ? "PUT" : "POST";

    const datos = method == "PUT" ? {
    id : id,
    titulo: titulo,
    descripcion: descripcion,
    prioridad: prioridad,
    completada: completada
    } : {
    titulo: titulo,
    descripcion: descripcion,
    prioridad: prioridad,
    completada: completada
    };

    console.log(JSON.stringify(datos));
    console.log(datos);
    

    console.log(titulo, descripcion, prioridad, completada);
    
    try {
        // HACER: Almacenar en las variables url y method (PUT/POST) el
        //valor adecuado según si modoEdicion es true o false (es decir,
        //dependiendo de si estamos creando una nueva tarea o editando una
        //existente)
        const response = await fetch(API_URL, {
            method: method,
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const data = await response.json();
        if (response.ok) {
            mostrarAlerta('success', data.mensaje);
            cerrarModal();
            cargarTareas(paginaActual);
        } else {
            mostrarAlerta('error', data.mensaje, data.errores);
        }
    } catch (error) {
        mostrarAlerta('error', 'Error de conexión: ' + error.message);
    }
}

function mostrarTareas(tareas) {
    const container = document.getElementById('tareas-container');
    if (tareas.length === 0) {
        container.innerHTML = `
        <div class="empty-state">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24

        24">

        <path stroke-linecap="round" stroke-
        linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002

        2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2
        2 0 012-2h2a2 2 0 012 2"/>
        </svg>
        <h3>No hay tareas</h3>
        <p>Crea una nueva tarea para comenzar</p>
        </div>
        `;
        return;
    }
    // Variable para acumular el HTML
    let html = '';
    // Bucle for clásico
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        html += `
        <div class="tarea-card ${tarea.completada ? 'completada' : ''}">
            <div class="tarea-header">
                <div class="tarea-titulo">${escapeHtml(tarea.titulo)}</div>
            </div>
        ${tarea.descripcion ? `<div class="tarea-descripcion">${escapeHtml(tarea.descripcion)}</div>` : ''}
        <div class="tarea-meta">
            <span class="badge badge-prioridad-
                ${tarea.prioridad}">
                ${tarea.prioridad.toUpperCase()}
            </span>
            <span class="badge badge-fecha">
                ${formatearFecha(tarea.fecha_creacion)}
            </span>
        </div>
            <div class="tarea-acciones">
                <button class="btn-info btn-sm" onclick="toggleCompletada(${tarea.id}, ${!tarea.completada})"> ${tarea.completada ? ' Desmarcar' : 'Completar'}</button>
                <button class="btn-warning btn-sm" onclick="editarTarea(${tarea.id})">Editar</button>
                <button class="btn-danger btn-sm" onclick="confirmarEliminar(${tarea.id}, '${escapeHtml(tarea.titulo)}')">Eliminar</button>
            </div>
        </div>
        `;
    }
    // Insertar todo el HTML acumulado
    container.innerHTML = html;
}

function confirmarEliminar(id, titulo) {
    // Mostrar confirmación nativa del navegador
    if (confirm(`¿Estás seguro de eliminar la tarea "${titulo}"?`)) {
        eliminarTarea(id);
    }
}

function abrirModal() {
    document.getElementById('modal').classList.add('active');
    document.getElementById('form-tarea').reset(); // Limpiar
    document.getElementById('modal-titulo').textContent = 'Nueva Tarea';
    document.getElementById('tarea-id').value = '';
    modoEdicion = false;
}

function abrirModalEdicion() {
    document.getElementById('modal').classList.add('active');
    document.getElementById('modal-titulo').textContent = 'Editar Tarea';
    modoEdicion = true;
}

function cerrarModal() {
    document.getElementById('modal').classList.remove('active');
}

function mostrarLoading(mostrar) {
    const loading = document.getElementById('loading');
    const container = document.getElementById('tareas-container');
    if (mostrar) {
        loading.style.display = 'block';
        container.style.display = 'none';
    } else {
        loading.style.display = 'none';
        container.style.display = 'block';
    }
}

function mostrarAlerta(tipo, mensaje, errores = []) {
    const container = document.getElementById('alertas');

    const clase = tipo === 'success' ? 'alert-success' : 'alert-error';
    let html = `<div class="alert ${clase}">`;
    html += `<strong>${mensaje}</strong>`;
    // Si hay errores de validación, mostrarlos
    if (errores.length > 0) {
        html += '<ul style="margin: 10px 0 0 20px;">';
        for (let i = 0; i < errores.length; i++) {
            html += `<li>${errores[i]}</li>`;
        }
        html += '</ul>';
    }
    html += '</div>';
    container.innerHTML = html;
    // Auto-ocultar después de 2 segundos
    setTimeout(() => {
        container.innerHTML = '';
    }, 3000);
}

function ocultarAlertas() {
    document.getElementById('alertas').innerHTML = '';
}

function mostrarPaginacion(paginacion) {
    const container = document.getElementById('paginacion');
    // Si solo hay 1 página, no mostrar controles
    if (paginacion.total_paginas <= 1) {
        container.style.display = 'none';
        return;
    }
    container.style.display = 'flex';
    container.innerHTML = `
    <button class="btn-secondary btn-sm" onclick="cambiarPagina(${paginacion.pagina_actual - 1})"${!paginacion.tiene_anterior ? 'disabled' : ''}>← Anterior</button>
    Fase 3: práctica – Lista de tareas UT7: AJAX-PHP DWES – 2oDAW
    <span>Página ${paginacion.pagina_actual} de ${paginacion.total_paginas}</span>
    <button class="btn-secondary btn-sm" onclick="cambiarPagina(${paginacion.pagina_actual + 1})"${!paginacion.tiene_siguiente ? 'disabled' : ''}>Siguiente →</button>
    `;
}

function cambiarPagina(pagina) {
    cargarTareas(pagina);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll suave arriba
}

function aplicarFiltros() {
    cargarTareas(1); // Volver a página 1 al filtrar
}

function limpiarFiltros() {
    document.getElementById('busqueda').value = '';
    document.getElementById('filtro-estado').value = '';
    document.getElementById('filtro-prioridad').value = '';
    document.getElementById('orden').value = 'id';
    cargarTareas(1);
}

// Prevenir XSS (Cross-Site Scripting)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
// Formatear fecha legible
function formatearFecha(fecha) {
    const date = new Date(fecha);
    const opciones = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
    };
    return date.toLocaleDateString('es-ES', opciones);
}

document.addEventListener('DOMContentLoaded', () => {
    cargarTareas();
    configurarEventos();
});
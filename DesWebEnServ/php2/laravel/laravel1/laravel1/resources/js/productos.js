async function borrar(id) {
    // 1. Confirmación de seguridad
    if (!confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        return; 
    }

    try {
        // 2. Llamada AJAX con fetch
        const response = await fetch('/productos/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        }
        });
        // 3. Verificar respuesta HTTP
        if (!response.ok) {
            throw new Error('Error en la petición');
        }
        // 4. Convertir respuesta a objeto js
        const data = await response.json();
        // 5. Si el servidor confirma, eliminamos la fila
        if (data.success) {
            const fila = document.getElementById('fila-' + id);
            fila.style.backgroundColor = '#fee2e2';
            setTimeout(() => {fila.remove();}, 500);
        } else {
            alert('No se pudo eliminar el producto.');
        }

    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al intentar borrar.');
    }
}
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Lista de Avatars</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light p-4">
    <div class="container">
        <div class="card shadow">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="mb-0">Avatars</h1>
                    <a href="{{ route('avatars.create') }}" class="btn btn-primary">+ Crear Nuevo</a>
                </div>
                <table class="table table-hover align-middle">
                    <thead class="table-light">
                        <tr>
                            <th>Imagen</th>
                            <th>Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($avatars as $avatar)
                        <tr id="fila-{{ $avatar->id }}">
                            <td>
                            <img src="{{ asset('storage/' . $avatar->imagen) }}"
                                alt="{{ $avatar->usuario }}"
                                class="rounded"
                                width="60">
                            </td>
                            <td>
                                <div class="fw-bold">{{ $avatar->usuario }}</div>
                                <div class="text-muted small">
                                    {{ Str::limit($avatar->imagen, 40) }}
                                </div>
                            </td>
                            <td>
                                <div class="d-flex gap-2 mt-3">
                                <a href="{{ route('avatars.edit', $avatar->id) }}" class="btn btn-outline-primary btn-sm">Editar</a>
                                <button type="button" class="btn btn-outline-danger btn-sm" onclick="borrar({{ $avatar->id }})">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="mt-3">
                    {{ $avatars->links() }}
                </div>
            </div>
        </div>
    </div>

    <script>
        async function borrar(id) {
        // 1. Confirmación de seguridad
            if (!confirm('¿Estás seguro de que quieres eliminar este producto?')) {
                return; 
            }

            try {
                // 2. Llamada AJAX con fetch
                const response = await fetch('/avatars/' + id, {
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
                    window.location.reload();
                } else {
                    alert('No se pudo eliminar el producto.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Ocurrió un error al intentar borrar.');
            }
        }
    </script>

</body>

</html>
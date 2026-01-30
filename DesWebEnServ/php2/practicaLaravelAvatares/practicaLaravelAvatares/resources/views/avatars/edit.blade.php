<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Crear producto</title>
    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light p-4">

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-body">
                        <h2 class="card-title mb-4 text-center">Nuevo usuario</h2>
                        <form action="{{ route('avatars.update', $avatar->id) }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            @method("PUT");
                            <!-- Usuario -->
                            <div class="mb-3">
                                <label class="form-label fw-bold">Usuario</label>
                                <!-- se usa pattern para no permitir strings con espacios -->
                                <input type="text" name="usuario" class="form-control" pattern="^\S+$" title="No se permiten espacios en este campo" value="{{ old('usuario', $avatar->usuario) }}">
                                @error('usuario')
                                <div class="text-danger small">{{ $message }}</div>
                                @enderror
                            </div>
                            <!-- Imagen -->
                            <div class="mb-4">
                                <label class="form-label fw-bold">Avatar(imagen)</label>
                                <input type="file" name="imagen" class="form-control" accept="image/*" onchange="previewImagen(event)" value="{{ old('imagen', $avatar->imagen) }}">
                                @error('imagen')
                                <div class="text-danger small">{{ $message }}</div>
                                @enderror
                                <div class="mt-3 text-center">
                                    <img id="preview" class="img-thumbnail d-none" style="max-height:150px">
                                </div>
                            </div>
                            <!-- Botones -->
                            <div class="d-flex justify-content-end gap-2">
                                <a href="{{ route('avatars.index') }}" class="btn btn-secondary">Cancelar</a>
                                <button type="submit" class="btn btn-primary">Guardar usuario</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/avatars.js') }}"></script>
</body>

</html>
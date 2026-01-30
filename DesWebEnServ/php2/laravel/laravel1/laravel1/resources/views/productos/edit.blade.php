<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Crear producto</title>
    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/boot
strap.min.css" rel="stylesheet">
</head>

<body class="bg-light p-4">

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-body">
                        <h2 class="card-title mb-4 text-center">Nuevo producto</h2>
                        <form action="{{ route('productos.update', $producto->id) }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <!-- Nombre -->
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nombre</label>
                                <input type="text" name="nombre" class="form-control" value="{{ old('nombre', $producto->nombre) }}">
                                @error('nombre')
                                <div class="text-danger small">{{ $message }}</div>
                                @enderror
                            </div>
                            <!-- Precio -->
                            <div class="mb-3">
                                <label class="form-label fw-bold">Precio</label>
                                <input type="number" step="0.01" name="precio" class="form-control" value="{{ old('precio', $producto->precio) }}">
                                @error('precio')
                                <div class="text-danger small">{{ $message }}</div>
                                @enderror
                            </div>
                            <!-- Stock -->
                            <div class="mb-3">
                                <label class="form-label fw-bold">Stock</label>
                                <input type="number" name="stock" class="form-control" value="{{ old('stock', $producto->stock) }}">
                                @error('stock')
                                <div class="text-danger small">{{ $message }}</div>
                                @enderror
                            </div>
                            <!-- Descripción -->
                            <div class="mb-3">
                                <label class="form-label fw-bold">Descripción</label>
                                <textarea name="descripcion" rows="3" class="form-control">{{ old('descripcion', $producto->descripcion) }}</textarea>
                            </div>
                            <!-- Imagen -->
                            <div class="mb-4">
                                <label class="form-label fw-bold">Imagen del producto</label>
                                <input type="file" name="imagen" class="form-control" accept="image/*" onchange="previewImagen(event)">
                                @error('imagen')
                                <div class="text-danger small">{{ $message }}</div>
                                @enderror
                                <div class="mt-3 text-center">
                                    <img id="preview" class="img-thumbnail d-none" style="max-height:150px">
                                </div>
                            </div>
                            <!-- Botones -->
                            <div class="d-flex justify-content-end gap-2">
                                <a href="{{ route('productos.index') }}" class="btn btn-secondary">Cancelar</a>
                                <button type="submit" class="btn btn-primary">Guardar Producto</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/productos.js') }}"></script>
</body>

</html>
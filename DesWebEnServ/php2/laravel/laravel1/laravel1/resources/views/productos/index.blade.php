@extends('layouts.app')
@section('title', 'Productos')
@section('content')
    <!—AQUÍ PONEMOS EL CÓDIGO CON LA CREACIÓN DE LAS CARDS→
    <h1>Listado de productos</h1>

        <style>
        body {
            background-color: #f8f9fa;
        }
        .card-producto {
            transition: transform 0.2s, box-shadow 0.2s;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
        }
        .card-producto:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .card-img-top {
            object-fit: contain;
            height: 160px; /* altura uniforme para todas las imágenes */
           
  
    width: 100%;
        }
        .card-body {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
              justify-content: space-between; /* distribuye los elementos verticalmente */
    align-items: center; /* centra horizontalmente */
    text-align: center;
            
        }
        .precio {
            font-size: 1.1rem;
            font-weight: bold;
            color: #28a745;
        }
        .descripcion {
            font-size: 0.9rem;
            color: #6c757d;
            margin-bottom: auto;
        }
        .badge-stock {
            font-size: 0.85rem;
        }
    </style>

<div class="container">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="mb-0">Inventario de Productos</h1>
        <a href="{{ route('productos.create') }}" class="btn btn-primary">+ Crear Nuevo</a>
    </div>

    <div class="row g-4">
        @foreach ($productos as $producto)
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card p-3 card-producto shadow-sm" id="fila-{{ $producto->id }}">
                <img src="{{ asset('storage/' . $producto->imagen) }}" class="card-img-top" alt="{{ $producto->nombre }}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{ $producto->nombre }}</h5>
                    <p class="descripcion">{{ Str::limit($producto->descripcion, 60) }}</p>
                    <div class="precio mb-2">${{ number_format($producto->precio, 2) }}</div>
                    <div class="mb-2">
                        @if($producto->stock > 0)
                            <span class="badge bg-primary badge-stock">{{ $producto->stock }} disponibles</span>
                        @else
                            <span class="badge bg-danger badge-stock">Agotado</span>
                        @endif
                    </div>
                    <div class="d-flex gap-2 mt-3">
                        <a href="{{ route('productos.edit', $producto->id) }}" class="btn btn-outline-primary btn-sm">Editar</a>
                        <button type="button" class="btn btn-outline-danger btn-sm" onclick="borrar({{ $producto->id }})">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="mt-4 d-flex justify-content-center">
        {{ $productos->links() }}
    </div>
</div>

<script>
async function borrar(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar este producto?')) return;

    try {
        const response = await fetch('/productos/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            }
        });

        if (!response.ok) throw new Error('Error en la petición');

        const data = await response.json();

        if (data.success) {
            const card = document.getElementById('fila-' + id);
            card.style.opacity = 0.5;
            setTimeout(() => card.remove(), 500);
            window.location.reload();
        } else {
            alert('No se pudo eliminar el producto.');
        }

    } catch (error) {
        console.error(error);
        alert('Ocurrió un error al intentar borrar.');
    }
}
</script>

<script src="../../js/productos.js"></script>
@endsection
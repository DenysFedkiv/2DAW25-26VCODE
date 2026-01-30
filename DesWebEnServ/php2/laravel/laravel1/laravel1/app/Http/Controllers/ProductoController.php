<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use Illuminate\Support\Facades\Storage;

class ProductoController extends Controller
{
    public function index() {
        // Eloquent: "Traeme productos, ordenados por los más nuevos, de 10 en 10"
        $productos = Producto::orderBy('created_at', 'desc')->paginate(10);
        // Retornamos la vista y le pasamos la variable $productos
        return view('productos.index', compact('productos'));
    }

    public function destroy($id) {
        $producto = Producto::find($id); // 1. Buscamos el producto

        if ($producto) {
            $producto->delete(); // 2. Lo eliminamos de la BD
            // 3. Devolvemos JSON para que Javascript sepa que todo salió bien
            return response()->json([
                'success' => true,
                'message' => 'Producto eliminado'
            ]);
        }
        return response()->json(['success' => false], 404);
    }

    public function create() {
        return view('productos.create');
    }

    public function store(Request $request) {
        // 1. VALIDACIÓN AUTOMÁTICA
        // Si esto falla, Laravel detiene el código aquí y devuelve al usuario atrás.
        $validated = $request->validate([
        'nombre' => 'required|string|max:255',
        'precio' => 'required|numeric|min:0',
        'stock' => 'required|integer|min:0',
        'descripcion' => 'nullable|string',
        'imagen' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        // 2. GUARDAR IMAGEN Y RUTA
        //Con el if preguntamos a Laravel:¿En el formulario se ha enviado
        //un archivo llamado imagen?”
        if ($request->hasFile('imagen')) {
            $validated['imagen'] = $request->file('imagen') //Devuelve un objeto UploadedFile
                                            ->store('productos', 'public'); //guarda el archivo en el
            //servidor con un nombre único en storage/app/public/productos,
            //devuelve la ruta del archivo, por ejemplo,
            //productos/a8374937293.png
        } else {
            $validated['imagen'] = null;
        }
        // 3. GUARDAR
        Producto::create($validated);
        // 4. REDIRECCIONAR
        return redirect()->route('productos.index');
    }

    public function edit($id) {
        $producto = Producto::findOrFail($id);
        return view('productos.edit', compact('producto'));
    }

    public function update(Request $request, $id) {
        // Validación (puedes copiar la de store, o ajustarla)
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'precio' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'descripcion' => 'nullable|string',
            'imagen' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048'
        ]);
        $producto = Producto::findOrFail($id);
        if ($request->hasFile('imagen')) {
            // Borrar imagen anterior si existe
            if ($producto->imagen) {
                Storage::disk('public')->delete($producto->imagen);
            }
            // Guardar nueva imagen
            $validated['imagen'] = $request->file('imagen')->store('productos', 'public'); // // Lo guarda en storage/app/public/productos
        }
        // Actualiza solo los campos que validamos
        $producto->update($validated);
        return redirect()->route('productos.index');
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

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
}

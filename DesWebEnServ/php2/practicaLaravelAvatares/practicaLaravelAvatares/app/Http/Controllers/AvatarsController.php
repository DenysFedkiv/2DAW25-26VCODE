<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Avatar;
use Illuminate\Support\Facades\Storage;

class AvatarsController extends Controller
{
    public function index() {
        $avatars = Avatar::orderBy("id", "asc")->paginate(10);

        return view("avatars.index", compact("avatars"));
    }

    public function destroy($id) {
        $avatar = Avatar::find($id); // 1. Buscamos el producto
        if ($avatar) {
            $avatar->delete(); // 2. Lo eliminamos de la BD
            // 3. Devolvemos JSON para que Javascript sepa que todo salió bien
            return response()->json([
                'success' => true,
                'message' => 'Avatar eliminado'
            ]);
        }
        return response()->json(['success' => false], 404);
    }

    public function create() {
        return view('avatars.create');
    }

    public function store(Request $request) {
        // 1. VALIDACIÓN AUTOMÁTICA
        // Si esto falla, Laravel detiene el código aquí y devuelve al usuario atrás.
        $validated = $request->validate([
            'usuario' => 'required|string|max:255',
            'imagen' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        // 2. GUARDAR IMAGEN Y RUTA
        //Con el if preguntamos a Laravel:¿En el formulario se ha enviado
        //un archivo llamado imagen?”
        if ($request->hasFile('imagen')) {
            $validated['imagen'] = $request
            ->file('imagen') //Devuelve un objeto UploadedFile
            ->store('avatars', 'public'); //guarda el archivo en el servidor con un nombre único en storage/app/public/avatars, devuelve la ruta del archivo, por ejemplo, avatars/a8374937293.png
        } else {
            $validated['imagen'] = null;
        }
        // 3. GUARDAR
        // array_filter() permite que cuando no se elige una imagen no se manda un null para que base de datos utiliza valor por defecto que tiene, sin array_filter() da un error que el campo no puede ser null y no usa valor por defecto
        Avatar::create(array_filter($validated));
        // 4. REDIRECCIONAR
        return redirect()->route('avatars.index');
    }

    public function edit($id) {
        $avatar = Avatar::findOrFail($id);
        return view('avatars.edit', compact('avatar'));
    }

    public function update(Request $request, $id) {
        // Validación (puedes copiar la de store, o ajustarla)
        $validated = $request->validate([
            'usuario' => 'required|string|max:255',
            'imagen' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);
        $avatar = Avatar::findOrFail($id);
        if ($request->hasFile('imagen')) {
            // Borrar imagen anterior si existe
            if ($avatar->imagen) {
                Storage::disk('public')->delete($avatar->imagen);
            }

            // Guardar nueva imagen
            $validated['imagen'] = $request
                ->file('imagen')
                ->store('avatars', 'public'); // // Lo guarda en storage/app/public/avatars
        }
        // Actualiza solo los campos que validamos
        $avatar->update($validated);
        return redirect()->route('avatars.index');
    }
}

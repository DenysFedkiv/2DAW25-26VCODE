<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController; // No olvides importar esto arriba

Route::get('/productos', [ProductoController::class, 'index'])->name('productos.index');

Route::get('/', function () {
    return view('welcome');
});

Route::delete('/productos/{id}', [ProductoController::class, 'destroy'])->name('productos.destroy');
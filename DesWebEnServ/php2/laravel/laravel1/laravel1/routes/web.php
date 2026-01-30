<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    # Route::get('/productos', [ProductoController::class, 'index'])->name('productos.index');
    # Route::delete('/productos/{id}', [ProductoController::class, 'destroy'])->name('productos.destroy');
    # Route::get('/productos/crear', [ProductoController::class, 'create'])->name('productos.create');
    # Route::get('/productos/crear', [ProductoController::class, 'create'])->name('productos.create');
    # Route::get('/productos/{id}/editar', [ProductoController::class, 'edit'])->name('productos.edit');
    # Route::put('/productos/{id}', [ProductoController::class, 'update'])->name('productos.update');
    Route::resource('productos', ProductoController::class);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::redirect('/dashboard', '/productos')->middleware('auth');
    
require __DIR__.'/auth.php';

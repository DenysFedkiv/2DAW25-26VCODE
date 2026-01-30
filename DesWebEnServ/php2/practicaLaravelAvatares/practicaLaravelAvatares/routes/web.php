<?php

use Illuminate\Support\Facades\Route;
use App\Models\Avatar;
use App\Http\Controllers\AvatarsController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/avatars', function () {
    return Avatar::all();
});

Route::get('/avatars', [AvatarsController::class, 'index'])->name('avatars.index');

Route::delete('/avatars/{id}', [AvatarsController::class, 'destroy'])->name('avatars.destroy');

Route::get('/avatars/crear', [AvatarsController::class, 'create'])->name('avatars.create');

Route::post('/avatars', [AvatarsController::class, 'store'])->name('avatars.store');

Route::get('/avatars/{id}/editar', [AvatarsController::class, 'edit'])->name('avatars.edit');

Route::put('/avatars/{id}', [AvatarsController::class, 'update'])->name('avatars.update');
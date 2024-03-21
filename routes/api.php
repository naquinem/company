<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpareController;
use App\Http\Controllers\PassportController;

Route::post('/register', [PassportController::class, 'register']);
Route::post('/login', [PassportController::class, 'login']);
Route::get('/show', [SpareController::class, 'index']);

Route::middleware(['auth:api'])->group(function(){
    Route::post('/logout', [PassportController::class, 'logout']);
    Route::post('/spare', [SpareController::class, 'store']);
});

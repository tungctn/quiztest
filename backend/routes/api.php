<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login']);


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/profile', [AuthController::class, 'userProfile']);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::post('/create', [DocumentController::class, 'store']);
    Route::get('/test', [TestController::class, 'index']);
    Route::post('/point', [TestController::class, 'point']);
    Route::get('/rank', [ResultController::class, 'index']);
    Route::get('/rank/{id}', [ResultController::class, 'show']);
    Route::get('/number', [TestController::class, 'test']);
});

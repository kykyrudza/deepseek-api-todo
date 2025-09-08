<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function (){

    Route::group(['middleware' => 'auth:sanctum'], function () {

    });

    Route::group(['middleware' => 'guest:sanctum'], function () {
        Route::get('/ping', function () {
            return response()->json([
                'status' => 'error',
                'data' => 123,
            ]);
        });
    });
});

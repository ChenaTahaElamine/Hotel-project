<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArticleBlogController;
use App\Http\Controllers\ChambreController;
use App\Http\Controllers\CommentateurController;
use App\Http\Controllers\ImageOrVidioController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;





Route::controller(UserController::class)->prefix("user")->group(function () {
    Route::post("/login", "LoginUser");
    Route::get("/logoutUser", "logoutUser");
    Route::post("/register", "RegisterUser");
});


Route::middleware(['auth:sanctum', "user"])->prefix("CotesUser")->group(function () {

    Route::controller(ImageOrVidioController::class)->prefix('image-or-vidio')->group(function () {
        Route::get('/showFileName/{filename}', 'showFileName');
    });

    Route::controller(MessageController::class)->prefix('message')->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::put('/update/{id}', 'update');
        Route::delete('/delete/{id}', 'destroy');
        Route::post("/add", "store");
    });

    Route::controller(RestaurantController::class)->prefix('restaurant')->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::get("/search/{searchParam}", "searchRestaurant");
    });
    Route::controller(ChambreController::class)->prefix('chambre')->group(function () {
        Route::get('/index', "index");
        Route::get('/show/{id}', "show");
        Route::get("/search/{searchParam}", "searchChambre");
    });
    Route::controller(CommentateurController::class)->prefix('commentateur')->group(function () {
        Route::get('/index', "index");
        Route::post('/store-restaurant', 'storeCommentateurRestaurant');
        Route::post('/store-article-blog', 'storeCommentateurArticleBlog');
        Route::post('/store-chambre', 'storeCommentateurChambre');
    });
});


Route::controller(AdminController::class)->prefix("admin")->group(function () {
    Route::post("/login", "LoginAdmin");
    Route::middleware(['auth:sanctum', "admin"])->get("/logout", "LogoutAdmin");
});

Route::middleware(['auth:sanctum', "admin"])->prefix("admin")->group(function () {

    Route::controller(UserController::class)->prefix("users")->group(function () {
        Route::get('/index', 'index');
        Route::get('/search/{searchParam}', 'searchUser');
        Route::get('/show/{id}', 'show');
    });

    Route::controller(RestaurantController::class)->prefix('restaurant')->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::put('/update/{id}', 'update');
        Route::delete('/delete/{id}', "destroy");
        Route::post("/add", "store");
        Route::get("/search/{searchParam}", "searchRestaurant");
    });
    Route::controller(ChambreController::class)->prefix('chambre')->group(function () {
        Route::get('/index', "index");
        Route::get('/show/{id}', "show");
        Route::put('/update/{id}', "update");
        Route::delete('/delete/{id}', "destroy");
        Route::post("/add", "store");
        Route::get("/search/{searchParam}", "searchChambre");
    });

    Route::controller(ArticleBlogController::class)->prefix('article-blog')->group(function () {
        Route::get('/index', "index");
        Route::get('/show/{id}', "show");
        Route::put('/update/{id}', "update");
        Route::delete('/delete/{id}', "destroy");
        Route::post("/add", "store");
        Route::get('/search/{searchParam}', 'searchArticleBlog');
    });

    Route::controller(CommentateurController::class)->prefix('commentateur')->group(function () {
        Route::get('/index', "index");
        Route::get('/show/{id}', "show");
        Route::post('/store-restaurant', 'storeCommentateurRestaurant');
        Route::post('/store-article-blog', 'storeCommentateurArticleBlog');
        Route::post('/store-chambre', 'storeCommentateurChambre');
        Route::get('/edit/{id}', 'edit');
        Route::put('/update/{id}', 'update');
        Route::delete('/delete/{id}', 'destroy');
    });

    Route::controller(MessageController::class)->prefix('message')->group(function () {
        Route::get('/index', 'index');
        Route::get('/show/{id}', 'show');
        Route::put('/update/{id}', 'update');
        Route::delete('/delete/{id}', 'destroy');
        Route::post("/add", "store");
    });

    Route::controller(ImageOrVidioController::class)->prefix('image-or-vidio')->group(function () {
        Route::get('/index', 'index');
        Route::get('/showFileName/{filename}', 'showFileName');
        Route::get('/show/{id}', 'show');
        Route::post('/store-img-chambre/{id_chambre}', 'storeImgChambre');
        Route::post('/store-img-article-blog/{id_article_blog}', 'storeImgArticle_blog'); //
        Route::post('/store-img-restaurant/{id_restaurant}', 'storeImgRestaurant');
        Route::put('/update/{id}', 'update');
        Route::delete('/delete/{fileName}', 'destroy');
    });
});



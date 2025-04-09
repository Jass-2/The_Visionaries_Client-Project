<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/letters', 'LetterController@index');
$router->get('/letters/{id}', 'LetterController@show');

$router->get('/events', 'EventController@index');
$router->get('/events/{id}', 'EventController@show');

$router->get('/news', 'NewsController@index');
$router->get('/news/{id}', 'NewsController@show');

$router->get('/timeline', 'TimelineController@index');
$router->get('/timeline/{id}', 'TimelineController@show');

$router->get('/wall', 'WallController@index');
$router->get('/wall/{id}', 'WallController@show');
$router->post('/wall', 'WallController@store');

$router->get('/testimonials', 'TestimonialController@index');
$router->get('/testimonials/{id}', 'TestimonialController@show');
$router->post('/testimonials', 'TestimonialController@store');

$router->post('/contact', 'ContactController@store');
$router->get('/contact', 'ContactController@index');
$router->get('/contact/{id}', 'ContactController@show');



<?php
Route::post('/deleteClosedAndCancelledOrders',
	'uses' => 'HomeController@postDeleteClosedAndCancelledOrders',
	'middleware' => 'auth'

	]);
Route::post('/deleteuser/{id}', [
	'as' => 'Home', 'middleware' => 'auth',
	'uses' => 'HomeController@postDeleteUser',
	'middleware' => 'auth'
]);
Route::get('/', [
	'as' => 'Home', 'middleware' => 'auth',
	'uses' => 'HomeController@getIndex'
]);
Route::get('/home', [
	'as' => 'Home', 'middleware' => 'auth',
	'uses' => 'HomeController@getIndex'
]);
Route::get('/ondelivery', [
	'as' => 'Home', 'middleware' => 'auth',
	'uses' => 'HomeController@getOnDelivery'
]);

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');


Route::get('/products/{id?}', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getProducts'
]);
Route::post('/products/{id?}', [
	'middleware' => 'auth',
	'uses' => 'HomeController@postProducts'
]);
Route::get('/addproduct', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getaddProduct'
]);
Route::post('/addproduct', [
	'middleware' => 'auth',
	'uses' => 'HomeController@postaddProduct'
]);
Route::get('/addcategory', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getaddCategory'
]);
Route::get('/categories', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getCategories'
]);
Route::get('/reports', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getReports'
]);
Route::get('/users', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getUsers'
]);
Route::get('/myaccount', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getMyAccount'
]);
//do post/save
Route::post('/myaccount', [
	'middleware' => 'auth',
	'uses' => 'HomeController@postMyAccount'
]);
Route::get('/newuser', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getNewUser'
]);
Route::post('/newuser', [
	'middleware' => 'auth',
	'uses' => 'HomeController@postNewUser'
]);
Route::post('/deletephoto/{id}', [
	'middleware' => 'auth',
	'uses' => 'HomeController@postDeletePhoto'
]);

Route::get('/order/{id}', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getOrder'
]);
Route::post('/order/{id}', [
	'middleware' => 'auth',
	'uses' => 'HomeController@postOrder'
]);
Route::get('/pending', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getPending'
]);
Route::get('/onProcess', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getonProcess'
]);
Route::get('/cancelled', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getCancelled'
]);
Route::get('/closed', [
	'middleware' => 'auth',
	'uses' => 'HomeController@getClosed'
]);

?>
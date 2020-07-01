<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::any('/admin/{any?}', 'Calendar\CalendarController@index')->where('any','.*')->middleware('auth');

Route::get('/', function () {
    return Redirect::to('/admin/calendar');
});

Route::get('/admin/calendar', function () {
    return view('welcome');
});

Route::get('/all-events','Calendar\CalendarController@getEvents');
Route::post('/update-event','Calendar\CalendarController@updateEvent');
Route::delete('/delete-event/{id}','Calendar\CalendarController@deleteEvent');


Auth::routes();



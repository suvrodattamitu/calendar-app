<?php

use Illuminate\Support\Facades\Route;



Route::get('/', ['middleware' =>'guest', function(){
    return view('pages.home.home');
}]);

Auth::routes();

// Route::get('/', function () {
//     return Redirect::to('/admin');
// });

Route::any('/admin/{any?}', 'Calendar\CalendarController@index')->where('any','.*')->middleware('auth');

Route::get('/all-events','Calendar\CalendarController@getEvents');
Route::post('/update-event','Calendar\CalendarController@updateEvent');
Route::post('/create-event','Calendar\CalendarController@createEvent');
Route::delete('/delete-event/{id}','Calendar\CalendarController@deleteEvent');




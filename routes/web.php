<?php

use Illuminate\Support\Facades\Route;

Route::get('/', ['middleware' =>'guest', function(){
    return view('pages.home.home');
}]);

Auth::routes();

Route::any('/admin/{any?}', 'Calendar\CalendarController@index')->where('any','.*')->middleware('auth');

//dashboard
Route::get('/get-dashboard-credentials','Dashboard\DashboardController@getDashboardCredentials');

//calendar
Route::get('/all-events','Calendar\CalendarController@getEvents');
Route::post('/update-event','Calendar\CalendarController@updateEvent');
Route::post('/create-event','Calendar\CalendarController@createEvent');
Route::delete('/delete-event/{id}','Calendar\CalendarController@deleteEvent');

//todos
Route::get('/all-projects','Todos\ProjectController@getTodoProjects');
Route::post('/add-project','Todos\ProjectController@addTodoProject');
Route::get('/project/{slug}','Todos\ProjectController@editTodoProject');
Route::post('/project/{slug}','Todos\ProjectController@updateTodoProject');
Route::get('/get-project-tasks','Todos\ProjectController@showTodoProjectTasks');
Route::delete('/project/delete/{project_slug}','Todos\ProjectController@deleteTodoProject');
Route::post('/projects/delete-multiple','Todos\ProjectController@deleteMultipleTodoProjects');

Route::post('/add-task','Todos\TaskController@addTodoTask');
Route::post('/project/task/{task_slug}','Todos\TaskController@editTodoTask');
Route::post('/task/delete/{task_slug}','Todos\TaskController@deleteTodoTask');
Route::post('/tasks/delete-multiple','Todos\TaskController@deleteMultipleTodoTasks');



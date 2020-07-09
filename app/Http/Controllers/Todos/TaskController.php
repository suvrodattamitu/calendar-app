<?php

namespace App\Http\Controllers\Todos;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class TaskController extends Controller
{

    public function editTodoTask($task_slug,Request $request){

        $project = Auth::user()->projects()->where('slug',$request->project_slug)->first();
        $task    = $project->tasks()->where('slug',$task_slug)->first();

        return response()->json([

            'message'   => 'Task found successfully!',
            'task'      =>  $task,

        ]);

    }

    public function addTodoTask(Request $request){
        
        try {
            $request->validate([
                'name'          =>  'required',
                'description'   =>  'required',
                'duedate'       =>  'required',
            ]);

            $slug = Str::slug($request->name);
            $project_slug = $request->slug;
            
            $project = Auth::user()->projects()->where('slug',$project_slug)->first();
            $project->tasks()->create([
                'name'          => $request->name,
                'slug'          => $slug,
                'description'   => $request->description,
                'duedate'       => $request->duedate,
            ]);

            return response()->json([
                'message'   => 'New Task created',
                'status'    => 'success'
            ],201);

        }catch (ValidationException $exception) {
            return response()->json([
                'status' => 'error',
                'msg'    => 'Error',
                'errors' => $exception->errors(),
            ], 422);
        }

    }

    public function deleteTodoTask($task_slug,Request $request){

        $project_slug = $request->project_slug;

        $project = Auth::user()->projects()->where('slug',$project_slug)->first();
        $task    = $project->tasks()->where('slug',$task_slug)->delete();

        return response()->json([

            'message'  =>  'Task deleted successfully!',
            'task'     =>  $task,

        ],200);

    }

    public function deleteMultipleTodoTasks(Request $request) {
        
        $tasks          = $request->rows;
        $project_slug   = $request->project_slug;

        foreach($tasks as $task) {
            $project = Auth::user()->projects()->where('slug',$project_slug)->first();
            $task    = $project->tasks()->where('slug',$task['slug'])->delete();
        }

        return response()->json([

            'message'       =>  'Tasks deleted successfully!',
            'project_slug'  => $project_slug,

        ],200);

    }

}

<?php

namespace App\Http\Controllers\Todos;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use App\Model\Project;


class ProjectController extends Controller
{

    public function getTodoProjects(){

        $paginate = isset($_REQUEST['paginate'])?$_REQUEST['paginate']:10;
        $search   = isset($_REQUEST['s'])?$_REQUEST['s']:'';

        $Query   = Auth::user()->projects();

        if (!empty($search)) {

            $Query = $Query->where('name', 'LIKE', "%{$search}%");
            $Query = $Query->orWhere('description', 'LIKE', "%{$search}%");
            $Query = $Query->orWhere('completed', 'LIKE', "%{$search}%");
            $Query->orWhere('id', 'LIKE', "%{$search}%");
          
        }

        $total            = $Query->count();
        $all_projects     = $Query->orderBy('id', 'desc')->paginate($paginate);

        return response()->json([

            'message'   => 'Projects found successfully!',
            'projects'  =>  $all_projects,
            'total'     =>  $total,
            'search'    =>  $search

        ]);

    }

    public function addTodoProject(Request $request) {
        try {
            $request->validate([
                'name'          =>  'required',
                'description'   =>  'required',
                'duedate'       =>  'required',
            ]);

            $slug = Str::slug($request->name);

            Auth::user()->projects()->create([
                'name'          => $request->name,
                'slug'          => $slug,
                'description'   => $request->description,
                'duedate'       => $request->duedate,
            ]);

            return response()->json([
                'message'   => 'Category created',
                'data'      => $request->all(),
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

    public function editTodoProject($slug){

        
        $project = Auth::user()->projects()->where('slug',$slug)->first();

        return response()->json([

            'message'   => 'Projects found successfully!',
            'project'  =>  $project,

        ]);

    }

    public function updateTodoProject($slug,Request $request){

        try {
            
            $request->validate([
                'name'          =>  'required',
                'description'   =>  'required',
                'duedate'       =>  'required',
            ]);

            $project = Auth::user()->projects()->where('slug',$slug)->first();

            $project->update([
                'name'          => $request->name,
                'description'   => $request->description,
                'duedate'       => $request->duedate,
            ]);

            return response()->json([

                'message'   => 'Projects found successfully!',
                'project'  =>  $project,

            ]);

        }catch (ValidationException $exception) {
            return response()->json([
                'status' => 'error',
                'msg'    => 'Error',
                'errors' => $exception->errors(),
            ], 422);
        }


    }

    public function showTodoProjectTasks(){

        $paginate = isset($_REQUEST['paginate'])?$_REQUEST['paginate']:10;
        $search   = isset($_REQUEST['s'])?$_REQUEST['s']:'';
        $slug     = isset($_REQUEST['slug'])?$_REQUEST['slug']:'';

        $project    = Auth::user()->projects()->with(['tasks','user'])->where('slug',$slug)->first();

        return response()->json([

            'message'   =>  'Projects found successfully!',
            'project'   =>  $project,
            'slug'      =>  $slug

        ]);

    }

    public function deleteTodoProject($project_slug){

        $project = Auth::user()->projects()->where('slug',$project_slug)->delete();

        return response()->json([

            'message'   =>  'Project deleted successfully!',
            'project'   =>  $project,
            'slug'      =>  $project_slug

        ],200);

    }

    public function deleteMultipleTodoProjects(Request $request){

        $projects = $request->rows;

        foreach($projects as $project){
            $project = Auth::user()->projects()->where('slug',$project['slug'])->delete();
        }

        return response()->json([

            'message'   =>  'Projects deleted successfully!',

        ],200);

    }

}

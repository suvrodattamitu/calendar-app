<?php

namespace App\Http\Controllers\Todos;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
//use App\Model\Project;

class ProjectController extends Controller
{
    public function getTodoProjects(){

        $projects = Auth::user()->projects()->get();
        return response()->json([

            'projects'  => $projects

        ],200);

    }
}

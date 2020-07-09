<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Calendar;
use Auth;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function getDashboardCredentials(){

        //Customers::whereDate('date_of_birth', '<=', Carbon::today()->addDays(7))->get();

        $userId = auth()->user()->id;
        $events = Calendar::where('user_id',$userId)
                    ->whereDate('start', '<=', Carbon::today()->addDays(7))
                    ->whereDate('end', '<=', Carbon::today()->addDays(100000))
                    ->take(7)->get();

        $projects = Auth::user()->projects()->whereDate('duedate', '<=', Carbon::today()->addDays(7))->take(7)->get();

        return response()->json([
            'status'    => 'success',
            'events'    => $events,
            'projects'  => $projects
        ],200);


    }
}

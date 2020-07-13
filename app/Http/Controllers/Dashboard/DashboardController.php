<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Calendar;
use App\Model\Income;
use App\Model\Expense;

use Auth;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function getDashboardCredentials(){

        $userId =   auth()->user()->id;

        $events1 =   Calendar::where('user_id',$userId)
                    ->whereDate('start', '>', Carbon::today())
                    ->whereDate('end', '<=', Carbon::today()->addDays(7))
                    ->take(4)->get();
                    
        $events2 =   Calendar::where('user_id',$userId)
                    ->whereDate('start', '<=', Carbon::today())
                    ->whereDate('end', '>=', Carbon::today())
                    ->take(4)->get();
        
        $events = array_merge($events1->toArray(), $events2->toArray()); 

        $projects = Auth::user()->projects()
                    ->whereDate('duedate', '>=', Carbon::today())
                    ->take(8)->get();

        $income = Income::whereDate('income_date','>=',Carbon::today()->subDays(7))
                    ->sum('amount');

        $expense = Expense::whereDate('expense_date', '>=', Carbon::today()->subDays(7))
                    ->sum('amount');

        return response()->json([

            'status'    => 'success',
            'events'    => $events,
            'projects'  => $projects,
            'income'    => $income,
            'expense'   => $expense

        ],200);


    }
}

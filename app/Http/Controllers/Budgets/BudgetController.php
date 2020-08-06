<?php

namespace App\Http\Controllers\Budgets;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Income;
use App\Model\Expense;
use Carbon\Carbon;
use DB;

class BudgetController extends Controller
{
    public function getBudgets(){

        $userId = auth()->user()->id;
        //get monthly income expense //7 as it is true
        $monthlyIncome  = Income::where('user_id',$userId)->whereMonth('income_date', Carbon::now()->month)->sum('amount');
        $monthlyExpense = Expense::where('user_id',$userId)->whereMonth('expense_date', Carbon::now()->month)->sum('amount');

        //get weekly income expense //start and end date
        $weeklyIncome     = Income::where('user_id',$userId)->whereDate('income_date', '>=', substr(Carbon::now()->subDays(7),0,10))
                            ->whereDate('income_date', '<=', substr(Carbon::now(),0,10))
                            ->sum('amount');
        $weeklyExpense    = Expense::where('user_id',$userId)->whereDate('expense_date', '>=', substr(Carbon::now()->subDays(7),0,10))
                            ->whereDate('expense_date', '<=', substr(Carbon::now(),0,10))
                            ->sum('amount');

        
        //get daily income expense
        $dailyIncome    = Income::where('user_id',$userId)->whereDate('income_date', substr(Carbon::today(),0,10))->sum('amount');
        $dailyExpense   = Expense::where('user_id',$userId)->whereDate('expense_date', substr(Carbon::today(),0,10))->sum('amount');

        $monthWiseIncomes = Income::where('user_id',$userId)->select(DB::raw("(sum(amount)) as amount"),DB::raw("MONTHNAME(income_date) as monthname"))
            ->whereYear('income_date', date('Y'))
            ->groupBy('monthname')
            ->get();

        $monthWiseExpenses = Expense::where('user_id',$userId)->select(DB::raw("(sum(amount)) as amount"),DB::raw("MONTHNAME(expense_date) as monthname"))
            ->whereYear('expense_date', date('Y'))
            ->groupBy('monthname')
            ->get();
        
        $months = array(
            'January'   => null,
            'February'  => null,
            'March'     => null,
            'April'     => null,
            'May'       => null,
            'June'      => null,
            'July'      => null,
            'August'    => null,
            'September' => null,
            'October'   => null,
            'November'  => null,
            'December'  => null,
        );

        $incomes  = $months;
        $expenses = $months;

        foreach($monthWiseIncomes as $income){
            $incomes[$income->monthname] = $income->amount;
        }

        foreach($monthWiseExpenses as $expense){
            $expenses[$expense->monthname] = $expense->amount;
        }

        return response()->json([


            'incomes'           => $incomes,
            'expenses'          => $expenses,

            //monthly 
            'monthlyIncome'    => $monthlyIncome,
            'monthlyExpense'   => $monthlyExpense,

            //month wise
            'monthWiseIncome'   => $incomes,
            'monthWiseExpense'  => $monthWiseExpenses,

            //weekly
            'weeklyIncome'      => $weeklyIncome,
            'weeklyExpense'     => $weeklyExpense,

            //daily
            'dailyIncome'       => $dailyIncome,
            'dailyExpense'      => $dailyExpense,

        ],200);

    }
}

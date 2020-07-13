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

        //get monthly income expense
        $monthlyIncome  = Income::whereMonth('income_date', Carbon::now()->month)->sum('amount');
        $monthlyExpense = Expense::whereMonth('expense_date', Carbon::now()->month)->sum('amount');

        //get weekly income expense
        $weeklyIncome     = Income::where('income_date', '>', Carbon::now()->subDays(7)->startOfDay())
                        ->sum('amount');
        $weeklyExpense    = Expense::where('expense_date', '>', Carbon::now()->subDays(7)->startOfDay())
                        ->sum('amount');
        //get daily income expense
        $dailyIncome    = Income::whereDate('income_date', Carbon::today())->sum('amount');
        $dailyExpense   = Expense::whereDate('expense_date', Carbon::today())->sum('amount');

        //get yearly income expense

        $yearlyIncome   = Income::whereYear('income_date', date('Y'))->sum('amount');
        $yearlyExpense  = Expense::whereYear('expense_date', date('Y'))->sum('amount');


        $monthWiseIncomes = Income::select(DB::raw("(sum(amount)) as amount"),DB::raw("MONTHNAME(income_date) as monthname"))
            ->whereYear('income_date', date('Y'))
            ->groupBy('monthname')
            ->get();

        $monthWiseExpenses = Expense::select(DB::raw("(sum(amount)) as amount"),DB::raw("MONTHNAME(expense_date) as monthname"))
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
            'Septermber'=> null,
            'October'   => null,
            'November'  => null,
            'December'  => null,
        );

        $incomes  = $months;
        $expenses = $months;
            //'ijan'=>null,'ifeb'=>null,'imar'=>null,'iapr'=>null,'imay'=>null,'ijun'=>null,null,null,null,null,null,null,null,null);

        foreach($monthWiseIncomes as $income){
            $incomes[$income->monthname] = $income->amount;
        }

        foreach($monthWiseExpenses as $expense){
            $expenses[$expense->monthname] = $expense->amount;
        }

        // $newIncomes =  collect($monthWiseIncomes)->keyBy('monthname')->map(function ($item) {
        //     $item->monthname = \Carbon\Carbon::parse($item->monthname);
    
        //     return $item;
        // });
        //get total income expense

        return response()->json([

            'incomes'           => $incomes,
            'expenses'          => $expenses,

            //monthly 
            'monthly_income'    => $monthlyIncome,
            'monthly_expense'   => $monthlyExpense,

            //month wise
            'monthWiseIncome'   => $incomes,
            'monthWiseExpense'  => $monthWiseExpenses,

            //weekly
            'weeklyIncome'      => $weeklyIncome,
            'weeklyExpense'     => $weeklyExpense,

            //daily
            'dailyIncome'       => $dailyIncome,
            'dailyExpense'      => $dailyExpense,

            //yearly
            'yearlyIncome'      => $yearlyIncome,
            'yearlyExpense'     => $yearlyExpense

        ],200);

    }
}

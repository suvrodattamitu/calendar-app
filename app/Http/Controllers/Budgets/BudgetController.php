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

    public function budgetReports(Request $request){

        $fromDate   = $request->from;
        $toDate     = $request->to;

        $from   = date('Y-m-d', strtotime(substr($fromDate,0,10)));
        $to     = date('Y-m-d', strtotime(substr($toDate,0,10)));

        $rangeExpense = Expense::whereBetween('created_at', [$from.' 00:00:00',$to. ' 23:59:59'])
                        ->sum('amount');
        
        $rangeSell    = Income::whereBetween('created_at', [$from.' 00:00:00', $to. ' 23:59:59'])
                        ->sum('amount');

        return response()->json([

            'message'        => 'Reports found',
            'range_sell'      => $rangeSell,
            'range_expense'   => $rangeExpense,
            'range_profit'    => ( $rangeSell-$rangeExpense )

        ]);

        // $fromToOrders   = DB::table('orders')
        //                 ->select(
        //                     DB::raw('YEAR(created_at) as year'),
        //                     DB::raw('MONTH(created_at) as month'),
        //                     DB::raw('DAY(created_at) as day'),
        //                     DB::raw('SUM(paid) as sum')
        //                 )
        //                 ->whereYear('created_at', '=', Carbon::now()->year)
        //                 ->orWhereYear('created_at', '=', Carbon::now()->subYear()->year)
        //                 ->groupBy('year', 'month','day')
        //                 ->get();

        // $fromToExpenses = DB::table('expenses')
        //                 ->select(
        //                     DB::raw('YEAR(created_at) as year'),
        //                     DB::raw('MONTH(created_at) as month'),
        //                     DB::raw('DAY(created_at) as day'),
        //                     DB::raw('SUM(total_expense) as sum')
        //                 )
        //                 ->whereYear('created_at', '=', Carbon::now()->year)
        //                 ->orWhereYear('created_at', '=', Carbon::now()->subYear()->year)
        //                 ->groupBy('year', 'month','day')
        //                 ->get(); 

        // return response()->json([

        //     'message'       => 'Reports found',
        //     'from'  => $from,
        //     'to'    => $to,
        //     'range_expense'     => $rangeExpense,
        //     'range_sell'        => $rangeSell,
        //     'fromToOrders'      => $fromToOrders,
        //     'fromToExpenses'    => $fromToExpenses,
        //     'request'   => $request->all()

        // ]);

    }
}

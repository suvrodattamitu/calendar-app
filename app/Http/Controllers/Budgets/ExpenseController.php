<?php

namespace App\Http\Controllers\Budgets;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Model\Expense;
use Illuminate\Validation\ValidationException;

class ExpenseController extends Controller
{
    public function getBudgetExpenses(){

        $paginate = isset($_REQUEST['paginate'])?$_REQUEST['paginate']:10;
        $search   = isset($_REQUEST['s'])?$_REQUEST['s']:'';

        $userId = auth()->user()->id;
        $Query = Expense::where('user_id',$userId);

        if (!empty($search)) {

            $Query = $Query->where('name', 'LIKE', "%{$search}%");
            $Query = $Query->orWhere('description', 'LIKE', "%{$search}%");
            $Query = $Query->orWhere('amount', 'LIKE', "%{$search}%");
            $Query = $Query->orWhere('note', 'LIKE', "%{$search}%");
            $Query->orWhere('id', 'LIKE', "%{$search}%");
          
        }

        $total            = $Query->count();
        $all_expenses     = $Query->orderBy('id', 'desc')->paginate($paginate);

        return response()->json([

            'message'   => 'Expenses found successfully!',
            'expenses'  =>  $all_expenses,
            'total'     =>  $total,
            'search'    =>  $search

        ]);

    }

    public function addBudgetExpense(Request $request){

        try {
            $request->validate([
                'name'          =>  'required',
                'description'   =>  'required',
                'amount'        =>  'required',
                'expense_date'   =>  'required',
                'note'          =>  'required',
            ]);

            $userId = auth()->user()->id;
            Expense::create([
                'user_id'       => $userId,
                'name'          => $request->name,
                'note'          => $request->note,
                'amount'        => $request->amount,
                'description'   => $request->description,
                'expense_date'   => $request->expense_date,
            ]);

            return response()->json([
                'message'   => 'Expense created',
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

    public function editBudgetExpense($expense_id){

        $userId = auth()->user()->id;
        $expense = Expense::where('user_id',$userId)->where('id',$expense_id)->first();

        return response()->json([

            'message'   => 'Expense found successfully!',
            'expense'  =>  $expense,

        ]);

    }

    public function updateBudgetExpense(Request $request,$expense_id){

        try {
            $request->validate([
                'name'          =>  'required',
                'description'   =>  'required',
                'amount'        =>  'required',
                'expense_date'   =>  'required',
                'note'          =>  'required',
            ]);

            $userId = auth()->user()->id;

            $expense = Expense::where('user_id',$userId)->where('id',$expense_id)->first();

            $expense->update([
                'user_id'       => $userId,
                'name'          => $request->name,
                'note'          => $request->note,
                'amount'        => $request->amount,
                'description'   => $request->description,
                'expense_date'   => $request->expense_date,
            ]);

            return response()->json([
                'message'   => 'Expense created',
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

    public function deleteBudgetExpense($expense_id){

        $userId = auth()->user()->id;
        $expense = Expense::where('user_id',$userId)->where('id',$expense_id)->delete();

        return response()->json([

            'message'   => 'Expense deleted successfully!',
            'expense'    =>  $expense,

        ]);

    }

    public function deleteMultipleTodoExpense(Request $request){

        $expenses = $request->rows;
        $userId = auth()->user()->id;
        
        foreach($expenses as $expense){
            $expense = Expense::where('user_id',$userId)->where('id',$expense['id'])->delete();
        }

        return response()->json([

            'message'   =>  'Expenses deleted successfully!',

        ],200);

    }
}

<?php

namespace App\Http\Controllers\Budgets;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Income;
use Illuminate\Validation\ValidationException;

class IncomeController extends Controller
{
    public function getBudgetIncomes(){

        $paginate = isset($_REQUEST['paginate'])?$_REQUEST['paginate']:10;
        $search   = isset($_REQUEST['s'])?$_REQUEST['s']:'';

        //$Query   = Auth::user()->projects();
        $userId = auth()->user()->id;
        $Query = Income::where('user_id',$userId);

        if (!empty($search)) {

            $Query = $Query->where('name', 'LIKE', "%{$search}%");
            $Query = $Query->orWhere('description', 'LIKE', "%{$search}%");
            $Query = $Query->orWhere('amount', 'LIKE', "%{$search}%");
            $Query = $Query->orWhere('note', 'LIKE', "%{$search}%");
            $Query->orWhere('id', 'LIKE', "%{$search}%");
          
        }

        $total            = $Query->count();
        $all_incomes     = $Query->orderBy('id', 'desc')->paginate($paginate);

        return response()->json([

            'message'   => 'Projects found successfully!',
            'incomes'  =>  $all_incomes,
            'total'     =>  $total,
            'search'    =>  $search

        ]);

    }

    public function addBudgetIncome(Request $request){

        try {
            $request->validate([
                'name'          =>  'required',
                'description'   =>  'required',
                'amount'        =>  'required',
                'income_date'   =>  'required',
                'note'          =>  'required',
            ]);

            $userId = auth()->user()->id;
            Income::create([
                'user_id'       => $userId,
                'name'          => $request->name,
                'note'          => $request->note,
                'amount'        => $request->amount,
                'description'   => $request->description,
                'income_date'   => $request->income_date,
            ]);

            return response()->json([
                'message'   => 'Income created',
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

    public function editBudgetIncome($income_id){

        $userId = auth()->user()->id;
        $income = Income::where('user_id',$userId)->where('id',$income_id)->first();

        return response()->json([

            'message'   => 'Income found successfully!',
            'income'  =>  $income,

        ]);

    }

    public function updateBudgetIncome(Request $request,$income_id){

        try {
            $request->validate([
                'name'          =>  'required',
                'description'   =>  'required',
                'amount'        =>  'required',
                'income_date'   =>  'required',
                'note'          =>  'required',
            ]);

            $userId = auth()->user()->id;

            $income = Income::where('user_id',$userId)->where('id',$income_id)->first();

            $income->update([
                'user_id'       => $userId,
                'name'          => $request->name,
                'note'          => $request->note,
                'amount'        => $request->amount,
                'description'   => $request->description,
                'income_date'   => $request->income_date,
            ]);

            return response()->json([
                'message'   => 'Income created',
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

    public function deleteBudgetIncome($income_id){

        $userId = auth()->user()->id;
        $income = Income::where('user_id',$userId)->where('id',$income_id)->delete();

        return response()->json([

            'message'   => 'Income deleted successfully!',
            'income'    =>  $income,

        ]);

    }

    public function deleteMultipleTodoIncome(Request $request){

        $incomes = $request->rows;
        $userId = auth()->user()->id;
        
        foreach($incomes as $income){
            $income = Income::where('user_id',$userId)->where('id',$income['id'])->delete();
        }

        return response()->json([

            'message'   =>  'Projects deleted successfully!',

        ],200);

    }
}

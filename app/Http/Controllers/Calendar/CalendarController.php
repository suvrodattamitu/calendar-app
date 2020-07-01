<?php

namespace App\Http\Controllers\Calendar;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Calendar;
use Auth;

class CalendarController extends Controller
{
    public function index(){
        return view('welcome');
    }

    public function getEvents() {
        $userId = auth()->user()->id;
        $events = Calendar::where('user_id',$userId)->get();
        return response()->json([
            'status'    => 'success',
            'events'    => $events,
            'userid'    => Auth::user()
        ],200);
    }

    public function updateEvent(Request $request) {
        $userId = auth()->user()->id;
        Calendar::where('user_id',$userId)->where('id',$request->id)->update([
            'user_id'   => $userId,
            'name'      => $request->name,
            'details'   => $request->details,
            'start'     => $request->start,
            'end'       => $request->end,
            'color'     => $request->color
        ]);
        return response()->json([
            'status'    => 'success',
            'message'   => 'Updated successfully!'
        ],200);
    }

    public function deleteEvent($id) {
        $userId = auth()->user()->id;
        Calendar::where('user_id',$userId)->where('id',$id)->delete();
        return response()->json([
            'status'    => 'success',
            'message'   => 'Deleted successfully!',
        ]);
    }

}

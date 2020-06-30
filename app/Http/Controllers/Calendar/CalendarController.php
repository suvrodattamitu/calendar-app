<?php

namespace App\Http\Controllers\Calendar;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Calendar;

class CalendarController extends Controller
{
    public function getEvents() {

        $events = Calendar::all();
        return response()->json([
            'status'    => 'success',
            'events'    => $events
        ],200);

    }

    public function updateEvent(Request $request){

        return response()->json([
            'status'    => 'success',
            'request'   => $request->all()
        ],200);

    }

}

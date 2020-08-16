<?php

namespace App\Http\Controllers\Notes;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Model\Note;

class NoteController extends Controller
{

    public function allNotes() {

        $paginate = intval( isset($_REQUEST['paginate'])?$_REQUEST['paginate']:10 );

        $userId = auth()->user()->id;
        $Query = Note::where('user_id',$userId);
        $total = $Query->count();
        $notes = $Query->paginate($paginate);

        return response()->json([

            'message'   => 'Notes found successfully!',
            'notes'     => $notes,
            'total'     => $total,

        ],200);

    }

    public function updateNote(Request $request) {

        $noteId = $request->note_id;
        $userId = auth()->user()->id;

        Note::where('id',$noteId)->where('user_id',$userId)->update([

            'title'     => $request->title,
            'content'   => $request->content,
            'color'     => $request->color

        ]);

        return response()->json([

            'message'   => 'success',
            'request'   => $request->all()

        ],200);

    }

    public function saveNewNote(Request $request) {

        $userId = auth()->user()->id;
        Note::create([

            'user_id'   => $userId,
            'title'     => $request->title,
            'content'   => $request->content,
            'color'     => $request->color

        ]);
        return response()->json([

            'status'    => 'success',
            'message'   => 'Saved successfully!',
            'request'   => $request->all()

        ],200);


    }

    public function deleteNote($id) {

        $userId = auth()->user()->id;
        Note::where('user_id',$userId)->where('id',$id)->delete();
        return response()->json([

            'status'    => 'success',
            'message'   => 'Deleted successfully!',

        ],200);

    }

}

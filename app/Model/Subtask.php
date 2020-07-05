<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Carbon\Carbon;

class Subtask extends Model
{

    protected $table = 'subtasks';
    protected $dates = ['deleted_at'];
    protected $fillable = ['name','slug','description','duedate','completed'];

    public function setDuedateAttribute($date){
        $this->attributes['duedate'] = Carbon::parse($date);
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function task(){
        return $this->belongsTo('App\Model\Task');
    }
}

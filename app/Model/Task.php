<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Carbon\Carbon;
class Task extends Model
{
    use SoftDeletes;

    protected $table = 'tasks';
    protected $dates = ['deleted_at'];
    protected $fillable = ['name','slug','description','duedate','completed'];

    public function setDuedateAttribute($date){
        $this->attributes['duedate'] = Carbon::parse($date);
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function project(){
        return $this->belongsTo('App\Model\Project');
    }

    public function subtasks(){
        return $this->hasMany('App\Model\Subtask');
    }

}

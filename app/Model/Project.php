<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Carbon\Carbon;

class Project extends Model
{
    use SoftDeletes;
    
    protected $table = 'projects';
    // protected $dates = ['deleted_at'];
    protected $fillable = ['name','slug','description','duedate','completed'];

    public function setDuedateAttribute($date){
        $this->attributes['duedate'] = Carbon::parse($date);
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function tasks(){
        return $this->hasMany('App\Model\Task');
    }

    public function subtasks(){
        return $this->hasManyThrough('App\Model\Subtask','App\Model\Task');
    }
 
}

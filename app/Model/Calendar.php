<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    protected $fillable = ['user_id','name','details','start','end','color'];

}

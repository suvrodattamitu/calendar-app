<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    protected $table    = 'settings';
    protected $casts    = ['settings' => 'array'];
    protected $fillable = [ 'name','settings' ];

}

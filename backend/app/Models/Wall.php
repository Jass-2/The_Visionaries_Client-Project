<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wall extends Model
{
    protected $table = 'wall';

    protected $fillable = ['name', 'message'];

    public $timestamps = false;
}

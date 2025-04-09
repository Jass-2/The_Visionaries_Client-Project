<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Timeline extends Model
{
    protected $table = 'timeline';

    protected $fillable = ['title', 'timespan', 'desc', 'img_url'];

    public $timestamps = false;
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Letter extends Model
{
    protected $table = 'letters';
    protected $fillable = ['flname', 'letter', 'date'];
    public $timestamps = false;
}
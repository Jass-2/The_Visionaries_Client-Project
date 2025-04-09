<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MediaEvent extends Model
{
    protected $table = 'media_events';
    protected $fillable = [
        'media_name',
        'media_type',
        'media_url',
        'event_id',
    ];

    public $timestamps = false;
}

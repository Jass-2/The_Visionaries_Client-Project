<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = 'events';
    protected $fillable = [
        'title',
        'place',
        'date',
        'description',
        'article_1',
        'posted_at',
    ];
    public function media()
        {
            return $this->hasMany(\App\Models\MediaEvent::class, 'event_id');
        }

    public $timestamps = false;
}

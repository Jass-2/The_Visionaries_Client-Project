<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MediaNews extends Model
{
    protected $table = 'media_news';

    protected $fillable = [
        'media_name',
        'media_type',
        'media_url',
        'news_id',
    ];

    public $timestamps = false;
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'news';

    protected $fillable = [
        'title',
        'place',
        'date',
        'description',
        'article_1',
        'posted_at',
    ];

    public $timestamps = false;

    public function media()
    {
        return $this->hasMany(\App\Models\MediaNews::class, 'news_id');
    }
}

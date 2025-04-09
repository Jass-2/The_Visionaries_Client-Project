<?php

namespace App\Http\Controllers;

use App\Models\News;

class NewsController extends Controller
{
    public function index()
    {
        return response()->json(News::with('media')->get());
    }

    public function show($id)
    {
        $news = News::with('media')->find($id);

        if (!$news) {
            return response()->json(['message' => 'News article not found'], 404);
        }

        return response()->json($news);
    }
}

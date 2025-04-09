<?php

namespace App\Http\Controllers;

use App\Models\Timeline;

class TimelineController extends Controller
{
    public function index()
    {
        return response()->json(Timeline::all());
    }

    public function show($id)
    {
        $item = Timeline::find($id);

        if (!$item) {
            return response()->json(['message' => 'Timeline entry not found'], 404);
        }

        return response()->json($item);
    }
}

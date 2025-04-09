<?php

namespace App\Http\Controllers;

use App\Models\Letter;

class LetterController extends Controller
{
    public function index()
    {
        return response()->json(Letter::all());
    }

    public function show($id)
    {
        $letter = Letter::find($id);
        if (!$letter) {
            return response()->json(['message' => 'Letter not found'], 404);
        }
        return response()->json($letter);
    }
}

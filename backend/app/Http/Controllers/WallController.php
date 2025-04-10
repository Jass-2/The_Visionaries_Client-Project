<?php

namespace App\Http\Controllers;

use App\Models\Wall;
use Illuminate\Http\Request;

class WallController extends Controller
{

    public function index()
    {
        return response()->json(Wall::all());
    }
    public function show($id)
    {
        $entry = Wall::find($id);
        if (!$entry) {
            return response()->json(['error' => 'Message not found'], 404);
        }
        return response()->json($entry);
    }

    public function store(Request $request)
    {
        $data = $request->only(['name', 'message']);
        $entry = Wall::create($data);
        return response()->json($entry, 201);
    }
}

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
            return response()->json(['message' => 'Wall entry not found'], 404);
        }

        return response()->json($entry);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $wall = Wall::create([
            'name' => $request->input('name'),
            'message' => $request->input('message'),
        ]);

        return response()->json($wall, 201);
    }
}

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

    public function update($id, Request $request)
    {
        $letter = Letter::find($id);
        $this->validate($request, [
            'flname' => 'required|string|max:255',
            'date' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $letter->flname = $request->input('flname');
        $letter->date = $request->input('date');
        $letter->message = $request->input('message');
        $letter->save();

        return response()->json($letter);
    }

    public function destroy($id)
    {
        $letter = Letter::find($id);
        $letter->delete();
        return response()->json(['message' => 'Letter deleted successfully']);
    }

}

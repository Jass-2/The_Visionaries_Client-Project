<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        return response()->json(Testimonial::all());
    }

    public function show($id)
    {
        $item = Testimonial::find($id);

        if (!$item) {
            return response()->json(['message' => 'Testimonial not found'], 404);
        }

        return response()->json($item);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'flname' => 'required|string|max:99',
            'amount' => 'required|string|max:50', // example: "CAD $500"
        ]);

        $testimonial = Testimonial::create($request->only('flname', 'amount'));

        return response()->json($testimonial, 201);
    }

    public function destroy($id)
    {
        $item = Testimonial::find($id);

        if (!$item) {
            return response()->json(['message' => 'Testimonial not found'], 404);
        }

        $item->delete();

        return response()->json(['message' => 'Testimonial deleted']);
    }
}

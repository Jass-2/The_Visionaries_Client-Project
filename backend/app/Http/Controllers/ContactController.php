<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return response()->json(Contact::all());
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'fname' => 'required|string|max:99',
            'lname' => 'required|string|max:99',
            'email' => 'required|email',
            'phone' => 'required|string|max:30',
            'message' => 'required|string',
            'inquiry' => 'required|in:general,volunteer',
            'country' => 'nullable|string|max:99',
            'wants_updates' => 'nullable|boolean',
        ]);

        $contact = Contact::create($request->only([
            'fname', 'lname', 'email', 'phone', 'message', 'inquiry', 'country', 'wants_updates'
        ]));

        return response()->json($contact, 201);
    }
    public function show($id)
    {
        $contact = \App\Models\Contact::find($id);

        if (!$contact) {
            return response()->json(['message' => 'Contact not found'], 404);
        }

        return response()->json($contact);
    }

}

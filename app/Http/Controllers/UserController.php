<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class UserController extends Controller
{
    public function show()
    {
        return Inertia::render('User/index');
    }
}

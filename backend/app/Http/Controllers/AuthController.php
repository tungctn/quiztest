<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function login(Request $request)
    {

        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'success' => 'false',
                'message' => 'Incorrect email or password'
            ]);
        }

        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        return response()->json([
            'success' => 'true',
            'message' => 'Login successfully',
            'token' => $token,
            'user' => $user
        ]);
    }

    public function userProfile()
    {
        $user = User::where('email', '=', auth()->user()->email)->get();

        return response()->json([
            "status" => 0,
            "msg" => "Acerca del perfil de usuario",
            "user" => $user,
            "id" => auth()->user()->id,
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            "status" => 1,
            "msg" => "Log out successful",
        ]);
    }
}

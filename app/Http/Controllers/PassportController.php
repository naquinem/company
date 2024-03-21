<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;

class PassportController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        if($data){
            $user = User::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'birth_date' => $data['birth_date'],
                'address' => $data['address'],
                'contact_number' => $data['contact_number'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);
            $token = $user->createToken('token')->accessToken;
            return response()->json([
                'status' => 200,
                'message' => 'Successfully registred info',
                'token' => $token,
                'user' => $user
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Please provide a valid credentials'
            ]);
        }

    }
    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        if($data) {
            $user = User::where('email', $data['email'])->first();
            if(!$user){
                return response()->json([
                    'status' => 422,
                    'error' => 'Email is not correct',
                ], 422);
            } elseif(!Hash::check($data['password'], $user->password)){
                return response()->json([
                    'status' => 422,
                    'password' => 'Password is not correct',
                ], 422);
            } else {
                $token = $user->createToken('token')->accessToken;
                return response()->json([
                    'status' => 200,
                    'token' => $token,
                    'user' => $user,
                ], 200);
            }
        } else {
            return response()->json([
                'message' => 'No credentials found in database'
            ]);
        }
    }
    public function logout()
    {
        //$request->user()->token()->delete();
        auth()->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logout',
        ]);
    }
}

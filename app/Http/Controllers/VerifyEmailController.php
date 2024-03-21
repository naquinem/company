<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//
use Illuminate\Routing\Contoller;
use Illuminate\Auth\Event\Verified;
use Illuminate\Http\RedirectResponse;

//
class VerifyEmailController extends Controller
{
    public function verify(Request $request): RedirectResponse
    {
        $user = User::find($request->route('id'));
        if($user->hasVerifiedEmail()) {
            return redirect(env('FRONT_URL') . '/email/verify/adready-success');
        }
        if($user->markEmailAsVerified()) {
            event(new Verified($user));
        }
        return redirect(env('FRONT_URL') . '/email/verify/success');
    }
}

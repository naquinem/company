<?php

namespace App\Http\Controllers;

use App\Models\Spare;
use App\Http\Requests\StoreSpareRequest;
use App\Http\Requests\UpdateSpareRequest;

class SpareController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Spare::all();
        if(!$data) {
            return response()->json([
                'message' => 'No spare parts found in database'
            ]);
        } else {
            return response()->json([
                'data' => $data
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id)
    {
        $data = Spare::find($id);
        if(!$data) {
            return response()->json([
                'message' => 'Missing spare parts in database'
            ]);
        } else {
            return response()->json([
                'data' => $data
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSpareRequest $request)
    {
        $data = $request->validated();
        if(!$data) {
            return response()->json([
                'message' => 'No spare parts found database'
            ]);
        } else {

            $spare = Spare::create([
                'item_code' => $data['item_code'],
                'description' => $data['description'],
                'quantity' => $data['quantity'],
                'price' => $data['price'],
                'image' => $data['image'] = $request->file('image')->store('image')
            ]);
            return response()->json([
                'spare' => $spare,
                'message' => 'Successfully submitted'
            ]);
        }

    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Spare $spare)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSpareRequest $request, int $id)
    {
        $data = $request->validated();
        $parts = Spare::find($id);
        if(!$parts || !$data) {
            return response()->json([
                'message' => 'No data found in database'
            ]);
        } else {
            //$image_path = $request->file('image')->store('image', 'public');
            $parts->update([
                'item_code' => $data['item_code'],
                'description' => $data['description'],
                'quantity' => $data['quantity'],
                'price' => $data['price'],
                'image' => $date['image'],
            ]);
            return response()->json([
                'spare' => $spare,
                'message' => 'Successfully edited data'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $data = Spare::find($id);
        if(!$data) {
            return response()->json([
                'message' => 'No spare parts found'
            ]);
        } else {
            $data->delete();
            return response()->json([
                'message' => 'Successfully edited data'
            ]);
        }
    }
}

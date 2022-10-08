<?php

namespace App\Http\Controllers;

use App\Models\Result;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ResultController extends Controller
{
    public function index()
    {
        return response([
            'data' => Result::all(),
        ]);
    }

    public function show($id)
    {
        $result = DB::table('result')->where('id', '=', $id)->get()->toArray();
        return response([
            'data' => $result,
        ]);
    }
}

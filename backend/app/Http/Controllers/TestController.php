<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    public function index()
    {
        $document = Document::all();
        $number = floor(sizeof($document) / 15);
        $level_1 = DB::table('document')->where('level', '=', 1)->get()->toArray();
        $level_2 = DB::table('document')->where('level', '=', 2)->get()->toArray();
        $level_3 = DB::table('document')->where('level', '=', 3)->get()->toArray();
        $level_4 = DB::table('document')->where('level', '=', 4)->get()->toArray();

        $level_1_test = [];
        $level_2_test = [];
        $level_3_test = [];
        $level_4_test = [];
        $level_1_index = array_rand($level_1, 7);
        $level_2_index = array_rand($level_2, 3);
        $level_3_index = array_rand($level_3, 3);
        $level_4_index = array_rand($level_4, 2);

        for ($i = 0; $i < sizeof($level_1_index); $i++) {
            $level_1_test[$i] = $level_1[$level_1_index[$i]];
            $level_1_test[$i]->answer = '';
        }

        for ($i = 0; $i < sizeof($level_2_index); $i++) {
            $level_2_test[$i] = $level_2[$level_2_index[$i]];
            // $level_2_test[$i]['answer'] = '';
            $level_2_test[$i]->answer = '';
        }

        for ($i = 0; $i < sizeof($level_3_index); $i++) {
            $level_3_test[$i] = $level_3[$level_3_index[$i]];
            // $level_3_test[$i]['answer'] = '';
            $level_3_test[$i]->answer = '';
        }

        for ($i = 0; $i < sizeof($level_4_index); $i++) {
            $level_4_test[$i] = $level_4[$level_4_index[$i]];
            // $level_4_test[$i]['answer'] = '';
            $level_4_test[$i]->answer = '';
        }

        $test = array_merge($level_1_test, $level_2_test, $level_3_test, $level_4_test);

        return response([
            // 'message' => $document,  
            'number' => $number,
            'test' => $test,
        ]);
    }

    public function point(Request $request)
    {
        $document = Document::all();
        $data = $request->all();
        $point = 0;
        for ($i = 0; $i < sizeof($data); $i++) {
            for ($j = 0; $j < sizeof($document); $j++) {
                if (
                    $data[$i]['id'] == $document[$j]['id']
                    && $data[$i]['answer'] == $document[$j]['answer']
                ) {
                    $point = $point + 1;
                }
            }
        }
        DB::table('result')->insert([
            'email' => auth()->user()->email,
            'point' => $point,
            'courseId' => 1,
            'memberId' => auth()->user()->id,
            'created_at' => Carbon::now()->format('Y-m-d'),
            'updated_at' => Carbon::now()->format('Y-m-d'),
        ]);

        return response([
            'data' => $request->all(),
            'document' => $document,
            'point' => $point,
        ]);
    }

    public function test()
    {
        $data = DB::table('document')->get()->toArray();
        $length = sizeof($data);
        $number = floor($length / 15);
        return response([
            'data' => $number,
        ]);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    public $table = "result";

    protected $fillable = [
        'email',
        'point',
        'courseId',
        'memberId',
    ];
}

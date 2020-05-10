<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class farmer_product extends Model
{
    protected $connection = 'inspectors';
    
    protected $table = 'products';
}

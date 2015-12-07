<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
class inventory extends Model{
	protected $table = 'inventory';
	protected $fillable = ['product_id', 'quantity'];	 
}
?>
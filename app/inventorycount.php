<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
class inventorycount extends Model{
	protected $table = 'inventorycount';
	 protected $fillable = [
	 	 'id','product_id', 'type', 'amount'
	 ];

}
?>
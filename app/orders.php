<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
class orders extends Model{
	protected $table = 'orders';
	 protected $fillable = [
	 	 'id','purchaseorders_id', 'product_id', 'productName', 'quantity','created_at','updated_at','amount'
	 ];
}
?>
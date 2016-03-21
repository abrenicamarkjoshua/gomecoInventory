<?php
namespace App;
use App\inventorycount;
use Illuminate\Database\Eloquent\Model;
class products extends Model{
	protected $table = 'products';
	 protected $fillable = [
	 'productName',
	 'productDesc',
	 'sellingprice',
	 'category_id',
	 'picture'
	 ];
	 public function gettotalQuantity(){
	 	$inventorycountReplenish = inventorycount::where('product_id', $this->id)->where('type', 'replenish')->sum('amount');
	 	$inventorycountWithdraw = inventorycount::where('product_id', $this->id)->where('type', 'withdraw')->sum('amount');
	 	return $inventorycountReplenish - $inventorycountWithdraw;
	 }
}
?>
<?php
namespace App;

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
}
?>
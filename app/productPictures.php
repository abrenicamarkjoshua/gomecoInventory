<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
class productPictures extends Model{
	protected $table = 'productpictures';
	 protected $fillable = [
		'product_id',
		'picture'
	 ];
}
?>
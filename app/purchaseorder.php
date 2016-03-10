<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class purchaseorder extends Model{
	protected $table = 'purchaseorders';
	 protected $fillable =  [
	 'id', 'status', 'customer_name', 'customer_address', 'customer_mobile', 'customer_email', 'deadline', 'user_id', 'remarks', 'userverified'
	 ];
    public function orders()
    {
        return $this->hasMany('App\orders');
    }
}
?>
<?php

namespace App\Http\Controllers;
use Illuminate\View\View;
use Illuminate\Database\Eloquent\Model;
use App\products;
use App\inventory;
use App\productPictures;
use Illuminate\Http\Request;
use Auth;
use Hash;
use DB;
use App\orders;
use App\purchaseorder;
use DateTime;
use App\configStrategy;
use App\User;
use App\audittrail;
class HomeController extends Controller{
	public function postDeleteClosedAndCancelledOrders(){
		$orders = purchaseorder::where('status', 'cancelled')->orWhere('status', 'closed')->delete();

		return redirect('/')->with('affirm', 'Closed and cancelled orders successfully deleted');
	}
	public function postDeleteUser($id){
		
		$user = User::find($id);
		if(Auth::user()->id == $user->id){
			return redirect('/users')-with('error', 'you cannot delete your account while logged in');
		}
		$user->forceDelete();
		return redirect('/users')->with('affirm', 'user deleted successfully');
	}
	public function getIndex(){
		
		$purchaseordersPendingDelivery = purchaseorder::where('status', 'pending')->orWhere('status','on-delivery-process')->get();
		$purchaseordersClosed_cancelled =purchaseorder::where('status', 'closed')->orWhere('status','cancelled')->get();

		$data['orders_pending_delivery'] = $purchaseordersPendingDelivery;
		$data['orders_closed_cancelled'] = $purchaseordersClosed_cancelled;
		if(Auth::user()->userType == ""){
			Auth::logout();
			return redirect(configStrategy::getGomecoWebsite());
		}
		
		return view('home', $data);
	}
	public function getOnDelivery(){

		
		$purchaseorderDelivery = purchaseorder::where('status','on-delivery-process')->get();
		
		$data['orders_delivery'] = $purchaseorderDelivery;
		
		return view('delivery', $data);
	}

	// public function getProducts(){
	// 	$product = products::get()->first();
	// 	$data = [
	// 	'product' => ($product) ? $product : new products()
	// 	];
	// 	return view('products',$data);
	// }
	public function getProducts($id = null){
		if($id){
			$product = products::find($id);
		}else{
			$product = products::all()->last();
		}

		if($product){

		}else{
			return redirect('addproduct');
		}
		$pictures = productPictures::where('product_id', $product->id)->get();
		if($pictures){

		} else{
			$pictures = new productPictures();
		}
		$inventory = inventory::where('product_id', $product->id)->first();
		$next = (products::where('id','<', $product->id)->get()->first()) ? products::where('id','<', $product->id)->orderBy('id','desc')->first()->id : $product->id . "#";

		$previous = (products::where('id','>', $product->id)->get()->first()) ? products::where('id','>', $product->id)->orderBy('id','asc')->first()->id : $product->id . "#";
		$first = products::all()->first()->id;
		$last = products::all()->last()->id;
		$data = [
		'product' => $product,
		'productphotos' =>$pictures,
		'inventory' => $inventory,
		'next' => $next,
		'previous' => $previous,
		'first' => $first,
		'last' => $last
		];
		
		return view('products',$data);
	}
	
	//save or update or search
	public function postProducts(Request $request){
		//post functions
		$product = products::find($request->product_id);
		if(isset($_POST['btnDelete'])){
			$varproductid = $product->id;
			$product->delete();
			return redirect('/products/')->with('affirm', 'product with product id: ' . $varproductid . ' successfully deleted');
		}

		if(isset($_POST['search'])){

		}
		if(isset($_POST['save'])){
			
			$inventory = inventory::where('product_id', $request->product_id)->get()->first();
			$inventory->quantity = $request->numberOfStocks;
			
			$inventory->save();
			$product->category_id = $request->category;
			$product->productName = $request->productName;
			$product->productDesc = $request->productDesc;
			$product->sellingprice = $request->sellingprice;
			$product->save();

		}
		if(isset($_POST['btnSaveProduct'])){
			if($request->hasFile('uploadphoto')){
				for($i = 0; $i <= count($request->file('uploadphoto')) - 1; $i++){
					//upload
					if(strlen($request->file('uploadphoto')[$i]->getClientOriginalName()) > 0){
						$request->file('uploadphoto')[$i]->move('images/', $request->file('uploadphoto')[$i]->getClientOriginalName());
						//save to db
						$picture = new productPictures();
						$picture->picture = 'images/' . $request->file('uploadphoto')[$i]->getClientOriginalName();
						$picture->product_id = $request->product_id;
						$picture->save();
					}
				}
			}
		}
		if(isset($_POST['deletephoto'])){
			return $this->postDeletePhoto($request->productpicture_id);
		}
		if(isset($_POST['btnSetAsFeaturedPicture'])){
			$product = products::find($request->product_id);
			$product->picture = productPictures::where('id',$request->productpicture_id)->get()->first()->picture;
			$product->save();
		}
		return redirect('products/'.$request->product_id)->with('affirm', 'saving successful');
	}
	public function postDeletePhoto($id){
		$photo = productPictures::find($id);
		$product_id = $photo->product_id;
		$photo->forceDelete();
		return redirect('products/' . $product_id);
	}
	public function getaddProduct(){
		$data = [
		'product' => new products(),
		'productphotos' => new productPictures(),
		'inventory' => new inventory()
		];
		return view('addproduct', $data);
	}
	public function postaddProduct(Request $request){
		//save
		$product = "";
		if(isset($_POST['save'])){
			$product = new products();
			$product->productName = $request->productName;
			$product->productDesc = $request->productDesc;
			$product->sellingprice = $request->sellingprice;
			$product->category_id = $request->category;
			$product->save();

			$inventory = new inventory();
			$inventory->product_id = $product->id;
			$inventory->quantity = $request->numberOfStocks;
			$inventory->save();
		}
		return redirect('products/'.$product->id);
	}
	public function getaddCategory(){
		return view('addcategory');
	}
	public function getCategories(){
		return view('categories');
	}
	public function getReports(){
		$data['productInventories'] = DB::table('inventory')->join('products', 'inventory.product_id', '=', 'products.id')->get();
		return view('reports', $data);
	}
	public function getUsers(){
		$data['users'] = User::where('userType', '!=', '')->get();
		return view('users', $data);
	}
	public function getMyAccount(){
		
		$data['user'] = Auth::user();
		$data['error'] = "";
		return view('myaccount',$data);
	}
	public function postMyAccount(request $request){
		$error = "";
		
		$user = Auth::user();
		
		if(isset($_POST['save'])){
			$user->lastname = $request->lastname;
			$user->name = $request->username;
			$user->firstname = $request->firstname;
			$user->lastname = $request->lastname;
			$user->middleName = $request->middlename;
			$user->mobileNumber = $request->mobilenumber;
			$user->email = $request->email;
			$user->save();
			$_SESSION['affirm'] = "User profile saved successfully!";
		}

		
		else{
			if(isset($_POST['changepassword'])){
				if(Hash::check($request->oldpassword, $user->password) == false){
					$error ="Change password failed. Wrong input of old password.";
					//$2y$10$TliCsgcgCs7QKW/Trn1WruWc7LFGc8Ek.yDlh389d4r7PbBQVN1QO

				}else{
					if($request->newpassword != $request->confirmnewpassword){
						$error ="Change password failed. Passwords must match";
					}else{
						$user->password = bcrypt($request->newpassword);
						$user->save();
						$_SESSION['affirm'] = "Password successfully changed.";
					}
				}
			}
		}
		$data['user'] = $user;

		$data['error'] = $error;
		return view('myaccount',$data);
	}
	public function getNewUser(){
		return view('newuser');
	}

	public function postNewUser(Request $request){
		if($request->password != $request->retypepassword){
			return redirect("/newuser")->with('error', 'passwords must match');
		}

		$existingUser = User::where('email', $request->email)->first();
		if($existingUser){
			$errorMessage = "";
			return redirect("/newuser")->with('error', 'Email address already exist in database');
		}
		$existingUserByUsername = User::where('name', $request->username)->first();
		if($existingUserByUsername){
			$errorMessage = "";
			return redirect("/newuser")->with('error', 'user name already exist in database');
		}
		$user = User::create(
			[
			'name' => $request->username,
			'lastname' => $request->lastname,
			'firstname' => $request->firstname,
			'middleName' => $request->middlename,
			'mobileNumber' => $request->mobilenumber,
			'userType' => "Inventory staff",
			'email' => $request->email,
			'password' => bcrypt($request->password),
			'active' => 1
			]
			);
		return redirect("/newuser")->with('affirm', 'user successfully added');
	}
	public function postOrder(Request $request){
		//update here
		$purchaseorder = purchaseorder::find($request->purchaseorders_id);
		if(isset($_POST['saveStatus'])){


		// if(isset($_POST['btnProcessDelivery'])){
		// 	$purchaseorder->status = "on-delivery-process";
		// 	$purchaseorder->save();
		// }
		// if(isset($_POST['btnClose'])){
		// 	$purchaseorder->status = "closed";
		// 	$purchaseorder->save();
		// }
		
		$trail = new audittrail();
		$trailmessage = "";
		if($purchaseorder->status != $request->newstatus){
			$trailmessage .= "Admin updated order status to : " . $request->newstatus . ";";
		}
		if($purchaseorder->remarks != $request->remarks){
			$trailmessage .= " remarked: '" . $request->remarks . "'";
		}
		if($purchaseorder->status != $request->newstatus || $purchaseorder->remarks != $request->remarks ){
			$trail->purchaseorder_id = $purchaseorder->id;
			$trail->trail = $trailmessage;
			$trail->save();

		}
		
		$purchaseorder->status = $request->newstatus;
		$purchaseorder->remarks = $request->remarks;
		$purchaseorder->save();

		return redirect('/order/' . $request->purchaseorders_id)->with('affirm', 'Status updated successfully');
		}
		if(isset($_POST['saveCustomerDetails'])){
			
			
			if($purchaseorder->customer_name != $request->customer_name ||
				$purchaseorder->customer_mobile != $request->mobilenumber ||
				$purchaseorder->customer_email != $request->email ||
				$purchaseorder->customer_address != $request->address ||
				$purchaseorder->userverified != $request->customerStatus){

				$trail = new audittrail();
					if($purchaseorder->customer_name != $request->customer_name){
						$trail->trail .= " updated customer name to " . $request->customer_name . ";";
					}
					if($purchaseorder->customer_mobile != $request->mobilenumber){
						$trail->trail .= " updated customer number to " . $request->mobilenumber . ";";
					}
					if($purchaseorder->customer_email != $request->email ){
						$trail->trail .= " updated customer email to " . $request->email . ";";
					}
					if($purchaseorder->customer_address != $request->address ){
						$trail->trail .= " updated customer email to " . $request->email . ";";
					}
					if($purchaseorder->userverified == "" || $purchaseorder->userverified == "unverified" ){
						if($purchaseorder->userverified != $request->customerStatus){
							$trail->trail .= " updated user status to : " . $request->customerStatus;
						}
					}else{
						if($purchaseorder->userverified != $request->customerStatus){
							$trail->trail .= " updated user status to : " . $request->customerStatus . ";";
						}
					}

				$trail->purchaseorder_id = $purchaseorder->id;
				$trail->save();
			}
			$purchaseorder->customer_name = $request->customer_name;
			$purchaseorder->customer_mobile = $request->mobilenumber;
			$purchaseorder->customer_email = $request->email;
			$purchaseorder->customer_address = $request->address;
			$purchaseorder->userverified = $request->customerStatus;
			$purchaseorder->save();
			return redirect('/order/' . $request->purchaseorders_id)->with('affirm', 'Customer details for this order updated successfully');

		}

	}
	
	public function getOrder($id){
		$data['orders'] = orders::where('purchaseorders_id',$id)->get();
		$previousOrder = "";
		$nextOrder = "";
		$data['previousOrder'] = $previousOrder;
		$data['nextOrder'] = $nextOrder;
		$data['total'] = $data['orders']->sum('amount');
		$data['totalquantity'] = orders::where('purchaseorders_id',$id)->count();
		$purchaseorder = purchaseorder::find($id);
		$data['purchaseOrder'] = $purchaseorder;
		$status = "";
		$form = "";
		// switch($data['purchaseOrder']->status){
		// 	case "pending":
		// 		$status = "<b style = 'color:orange'>pending</b>";
		// 		$form = "<form action = '' method = 'post'>
		// 			".csrf_field()."
		// 			<input type = 'hidden' name = 'purchaseorders_id' value = '".$id."'/>
		// 			<input type = 'submit' name = 'btnProcessDelivery' value = 'Process delivery' />
		// 		</form>";
		// 	break;
		// 	case "cancelled":
		// 		$status = "<b style = 'color:orange'>cancelled</b>";
		// 		$form = "";
		// 	break;
		// 	case "on-delivery-process":
		// 		$status = "<b style = 'color:green'>on-delivery-process</b>";
		// 		$form = "<form action = '' method = 'post'>
		// 			".csrf_field()."
		// 			<input type = 'hidden' name = 'purchaseorders_id' value = '".$id."'/>
		// 			<input type = 'submit' name = 'btnClose' value = 'Close' />
		// 		</form>";
		// 	break;
		// 	case "closed":
		// 		$status = "<b style = 'color:green'>closed</b>";
		// 		$form = "";
		// 	break;
		// }
		
		$data['status'] = $status;
$deadlineColor = "black";
if($purchaseorder->status == "pending" || $purchaseorder->status == "on-delivery-process"){

		$datetime1 = new DateTime(date("Y-m-d"));
		$datetime2 = new DateTime($purchaseorder->deadline);
		$interval = $datetime1->diff($datetime2);
		$days =$interval->days;


		if($days < 3){
			$deadlineColor = "red";
		}else if($days < 5){
			$deadlineColor = "orange";

		}
		else if($days == 7){
			$deadlineColor = "green";

		}
}
		$data['deadlineColor'] = $deadlineColor;
		$data['audittrails'] = audittrail::where('purchaseorder_id', $purchaseorder->id)->get();
		return view('orderdetails', $data);
	}
	public function getPending(){
			$previousRecord = "";
		$data['previousRecord'] = $previousRecord;
			$nextRecord = "";
		$data['nextRecord'] = $nextRecord;
			$purchaseordersCount = purchaseorder::where('status', 'pending')->count();
		$data['purchaseordersCount'] = $purchaseordersCount;
		$data['orderType'] = "pending";
			$purchaseorders = purchaseorder::where('status', 'pending')->get();
		$data['purchaseorders'] = $purchaseorders;
		
		return view("tablelayout", $data);
	}
	public function getonProcess(){
			$previousRecord = "";
		$data['previousRecord'] = $previousRecord;
			$nextRecord = "";
		$data['nextRecord'] = $nextRecord;
			$purchaseordersCount = purchaseorder::where('status', 'on-delivery-process')->count();
		$data['purchaseordersCount'] = $purchaseordersCount;
		$data['orderType'] = "on-delivery-process";
			$purchaseorders = purchaseorder::where('status', 'on-delivery-process')->get();
		$data['purchaseorders'] = $purchaseorders;
		
		return view("tablelayout", $data);
	}
	public function getCancelled(){
			$previousRecord = "";
		$data['previousRecord'] = $previousRecord;
			$nextRecord = "";
		$data['nextRecord'] = $nextRecord;
			$purchaseordersCount = purchaseorder::where('status', 'cancelled')->count();
		$data['purchaseordersCount'] = $purchaseordersCount;
		$data['orderType'] = "cancelled";
			$purchaseorders = purchaseorder::where('status', 'cancelled')->get();
		$data['purchaseorders'] = $purchaseorders;
		
		return view("tablelayout", $data);
	}
	public function getClosed(){
			$previousRecord = "";
		$data['previousRecord'] = $previousRecord;
			$nextRecord = "";
		$data['nextRecord'] = $nextRecord;
			$purchaseordersCount = purchaseorder::where('status', 'closed')->count();
		$data['purchaseordersCount'] = $purchaseordersCount;
		$data['orderType'] = "closed";
			$purchaseorders = purchaseorder::where('status', 'closed')->get();
		$data['purchaseorders'] = $purchaseorders;
		
		return view("tablelayout", $data);
	}
}
?>
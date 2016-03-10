@extends('layout.main')

@section('content')
	<h1>Order details</h1>

	
	<fieldset>
		<legend>Order Summary ({{$totalquantity}} item{{($totalquantity > 1) ? 's':''}})</legend>
		<table  class="pure-table" style = "margin-bottom:15px;">
		<thead>
			<th>Product</th>
			<th>Quantity</th>
			<th>Price</th>
			
		</thead>
		@foreach($orders as $order)
			<tr>
				<td>{{$order->productName}}</td>
				<td>{{$order->quantity}}</td>
				<td>₱{{$order->amount}}</td>
			</tr>
		@endforeach
		</table>

		

		@if($purchaseOrder->status != "cancelled" && $purchaseOrder->status != "closed")
        <form action = '' method = 'post' class = "pure-form pure-form-aligned">
		
			<div class="pure-control-group">
	            <label for="name">Total:</label>
	           
				<b>₱{{formatMoney($total, true)}}</b>
	    	</div>
	    	<div class="pure-control-group">
				<div class = 'pure-control-group'>
	    			<label>Deadline:</label>

	    		 	<b style = "color:{{$deadlineColor}}">{!! $purchaseOrder->deadline !!}</b><br>
	            </div>

	            <div class = 'pure-control-group'>
					<label>Status:</label> 
					<b>{!! $purchaseOrder->status !!}</b>
	            
	        	</div>
	        </div>
					{!! csrf_field() !!}
					<?php
					$selectedpending = ($purchaseOrder->status == "pending") ? "selected" : "";
					$selectedondeliveryprocess = ($purchaseOrder->status == "on-delivery-process") ? "selected" : "";
					$selectedclosed = ($purchaseOrder->status == "closed") ? "selected" : "";
					$selectedcancelled = ($purchaseOrder->status == "cancelled") ? "selected" : "";
					?>
		    <div class = 'pure-control-group'>
		    	<label>Status: </label>
				
				<input type = 'hidden' name = 'purchaseorders_id' value = '{{$purchaseOrder->id}}'/>
				<select name = 'newstatus'>
				<option value = 'pending' {{$selectedpending}}>pending</option>
				<option value = 'on-delivery-process' {{$selectedondeliveryprocess}}>on-delivery-process</option>
				<option value = 'closed' {{$selectedclosed}}>closed</option>
				<option value = 'cancelled' {{$selectedcancelled}}>cancelled</option>

     
				</select>
			</div>
		    <div class = 'pure-control-group'>
			    <label for='name'>Remarks:</label>	
	        	<textarea name = 'remarks' placeholder = 'remarks'>{{$purchaseOrder->remarks}}</textarea>
			</div>
			<input type = 'submit' name = 'saveStatus' value = 'Update Order status' />
		</form>
		@else
		<div class = "pure-form pure-form-aligned">
		
			<div class="pure-control-group">
	            <label for="name">Total:</label>
	           
				<b>₱{{formatMoney($total, true)}}</b>
	    	</div>
	    	<div class="pure-control-group">
				<div class = 'pure-control-group'>
	    			<label>Deadline:</label>

	    		 	<b style = "color:{{$deadlineColor}}">{!! $purchaseOrder->deadline !!}</b><br>
	            </div>

	            <div class = 'pure-control-group'>
					<label>Status:</label> 
					<b>{!! $purchaseOrder->status !!}</b>
	            
	        	</div>
	        </div>
			
		</div>
    	@endif

    	
	</fieldset>
	@if($purchaseOrder->status != "cancelled" && $purchaseOrder->status != "closed")
	<fieldset>
		<legend>Customer information</legend>
		<div class="pure-form pure-form-aligned">
			<input type = 'hidden' name = 'purchaseorders_id' value = '{{$purchaseOrder->id}}'/>
				
			<div class="pure-control-group">
	            <label for="name">Complete name:</label>
	            
	            <input required type = 'text'  name = 'customer_name' value = '{{$purchaseOrder->customer_name}}'/>
	        </div> 
	       
	 		<div class="pure-control-group">
	            <label for="name">Mobile number:</label>
	            <input required class = "pure-input-1-3"  name = "mobilenumber" type="number" placeholder="mobile number" value = '{{$purchaseOrder->customer_mobile}}'>
	        </div>
	 		<div class="pure-control-group">
	            <label for="name">Email address:</label>
	            <input required class = "pure-input-1-3"  name = "email" type="email" placeholder="middle name" value = '{{$purchaseOrder->customer_email}}'>
	        </div>
	        <div class="pure-control-group">
	            <label for="name">Complete address:</label>
	            <textarea required class = "pure-input-1-3"  name = "address">{{$purchaseOrder->customer_address}}</textarea>
	        </div>

	        <div class = "pure-control-group">
	            <label for="userstatus">User Status:</label>
	            <select name = "customerStatus" class = "pure-input-1-3">
	            	<option value = "unverified"{{ ($purchaseOrder->userverified == "" || $purchaseOrder->userverified == "Unverified" ) ? "selected":""}}>Unverified</option>
	            	<option value = "Verified thru email" {{ ($purchaseOrder->userverified == "Verified thru email") ? "selected":"" }}>Verified thru email</option>
	            	<option value = "Verified thru phone" {{($purchaseOrder->userverified == "Verified thru phone") ? "selected":""}}>Verified thru phone call</option>
	            	
	            </select>
	        
	        </div>

	        <input type = 'submit' name = 'saveCustomerDetails' value = 'Update Customer details for this order' />
		
	        </div>
	</fieldset>
	@else
<fieldset>
		<legend>Customer information</legend>
		<div class="pure-form pure-form-aligned">
		
			<input type = 'hidden' name = 'purchaseorders_id' value = '{{$purchaseOrder->id}}'/>
				
			<div class="pure-control-group">
	            <label for="name">Complete name:</label>
	            
	            <input readonly required type = 'text'  name = 'customer_name' value = '{{$purchaseOrder->customer_name}}'/>
	        </div> 
	       
	 		<div class="pure-control-group">
	            <label for="name">Mobile number:</label>
	            <input readonly required class = "pure-input-1-3"  name = "mobilenumber" type="number" placeholder="mobile number" value = '{{$purchaseOrder->customer_mobile}}'>
	        </div>
	 		<div class="pure-control-group">
	            <label for="name">Email address:</label>
	            <input readonly required class = "pure-input-1-3"  name = "email" type="email" placeholder="middle name" value = '{{$purchaseOrder->customer_email}}'>
	        </div>
	        <div class="pure-control-group">
	            <label for="name">Complete address:</label>
	            <textarea readonly required class = "pure-input-1-3"  name = "address">{{$purchaseOrder->customer_address}}</textarea>
	        </div>

	        <div class = "pure-control-group">
	            <label for="userstatus">User Status:</label>
	            <select readonly name = "customerStatus" class = "pure-input-1-3">
	            	<option value = "unverified"{{ ($purchaseOrder->userverified == "" || $purchaseOrder->userverified == "Unverified" ) ? "selected":""}}>Unverified</option>
	            	<option value = "Verified thru email" {{ ($purchaseOrder->userverified == "Verified thru email") ? "selected":"" }}>Verified thru email</option>
	            	<option value = "Verified thru phone" {{($purchaseOrder->userverified == "Verified thru phone") ? "selected":""}}>Verified thru phone call</option>
	            	
	            </select>
	        
	        </div>
	     </div>
	</fieldset>
	@endif

@stop
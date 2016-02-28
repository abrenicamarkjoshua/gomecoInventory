@extends('layout.main')

@section('content')
	<legend>{{$orderType}} orders ({{$purchaseordersCount}})</legend>
	<table  class="pure-table">
		<thead>
			<th>Order number</th>
			<th>Date ordered</th>
			<th>Deadline</th>
			<th>Customer name</th>
			<th>Contact number</th>
			<th>email address</th>
			<th>address</th>
			<th>Status</th>
			<th>Action</th>
		</thead>
@foreach($purchaseorders as $purchaseorder)
<?php
$deadlineColor = "";
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
?>
	<tr  style = "display:table-row;color:{{$deadlineColor}}"><td>{{$purchaseorder->id}}</td>
		<td>{{$purchaseorder->created_at->format("Y-m-d")}}</td>
		<td>{{$purchaseorder->deadline}}</td>
		<td>{{$purchaseorder->customer_name}}</td>
		<td>{{$purchaseorder->customer_mobile}}</td>
		<td>{{$purchaseorder->customer_email}}</td>
		<td style="max-width: 300px; width: 300px;">{{$purchaseorder->customer_address}}</td>
		<td>{{$purchaseorder->status}}</td>
		<td>
			<a href = "/order/{{$purchaseorder->id}}">View order details</a>
		</td>
	</tr>
@endforeach
	</table>

	
@stop
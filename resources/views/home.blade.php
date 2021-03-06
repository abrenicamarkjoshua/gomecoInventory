@extends('layout.main')

@section('content')
	<legend>Pending and on-the-way orders ({{$orders_pending_delivery->count()}})</legend>
	 
	<table  class="pure-table">
		<thead>
			<th>Order number</th>
			<th>Date ordered</th>
			<th>Customer name</th>
			<th>Contact number</th>
			<th>email address</th>
			<th>address</th>
			<th>Status</th>
			<th>Action</th>
		</thead>
@foreach($orders_pending_delivery as $purchaseorder)
	<tr style = "display:table-row;"><td>{{$purchaseorder->id}}</td>
		<td>{{$purchaseorder->created_at}}</td>
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

	<legend style = "margin-top:30px;">Closed and cancelled orders ({{$orders_closed_cancelled->count()}})</legend>
	<form action = '/deleteClosedAndCancelledOrders' method = 'post' style = "margin-bottom:20px;">
		{!! csrf_field() !!}
		<input type = 'submit' name = 'btnDelete' value = 'Clear closed and cancelled orders' onclick="return confirm('Are you sure you want to delete all these records?');"/>
	
	</form>
	<table  class="pure-table">
		<thead>
			<th>Order number</th>
			<th>Date ordered</th>
			<th>Customer name</th>
			<th>Contact number</th>
			<th>email address</th>
			<th>address</th>
			<th>Status</th>
			<th>Action</th>
		</thead>
@foreach($orders_closed_cancelled as $purchaseorder)
	<tr style = "display:table-row;"><td>{{$purchaseorder->id}}</td>
		<td>{{$purchaseorder->created_at}}</td>
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
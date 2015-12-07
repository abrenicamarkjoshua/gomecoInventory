@extends('layout.main')

@section('content')
	<legend>Pending and on-the-way orders ({{$orders_pending_delivery->count()}})</legend>
	 <a href = "/pending">view all pending</a>&nbsp&nbsp&nbsp<a href = "/ondelivery">view all on-the-way</a>
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

	<legend>Closed and cancelled orders</legend>
	
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
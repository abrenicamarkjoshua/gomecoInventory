@extends('layout.main')

@section('content')
	<legend>On-the-way orders ({{$orders_delivery->count()}})</legend>
	
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
@foreach($orders_delivery as $purchaseorder)
	<tr><td>{{$purchaseorder->id}}</td>
		<td>{{$purchaseorder->created_at}}</td>
		<td>{{$purchaseorder->customer_name}}</td>
		<td>{{$purchaseorder->customer_mobile}}</td>
		<td>{{$purchaseorder->customer_email}}</td>
		<td>{{$purchaseorder->customer_address}}</td>
		<td>{{$purchaseorder->status}}</td>
		<td><form action = '' method = 'post'>
			{!! csrf_field() !!}
			<input type = 'submit' name = 'view' value = 'view order'/>

		</form></td>
	</tr>
@endforeach
	</table>

	
@stop
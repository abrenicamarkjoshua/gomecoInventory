@extends('layout.main')

@section('content')
<H1>Reports</H1>
<a href = "/replenish">Replenish inventory</a>
<table  class="pure-table">
	<thead>
		<th>
			product id
		</th>
		<th>
			product name
		</th>
		<th>
			quantity
		</th>
	</thead>
	<?php
		$i =0;
	?>
@foreach($products as $product)
<tr <?php $i++; echo ($i % 2 == 0) ? 'class="pure-table-odd"' : ""; ?>>
	
	<td>
		{{$product->id}}
	</td>
	<td>
		{{$product->productName}}
	</td>
	<td>
		{{$product->gettotalQuantity()}}
	</td>
</tr>
@endforeach
</table

@stop
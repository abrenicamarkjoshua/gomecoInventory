@extends('layout.main')

@section('content')
<H1>Reports</H1>
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
@foreach($productInventories as $productInventory)
<tr <?php $i++; echo ($i % 2 == 0) ? 'class="pure-table-odd"' : ""; ?>>
	
	<td>
		{{$productInventory->id}}
	</td>
	<td>
		{{$productInventory->productName}}
	</td>
	<td>
		{{$productInventory->quantity}}
	</td>
</tr>
@endforeach
</table

@stop
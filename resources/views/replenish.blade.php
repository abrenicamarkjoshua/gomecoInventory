@extends('layout.main')

@section('content')
<H1>Replenish</H1>
<form class="pure-form pure-form-aligned" enctype="multipart/form-data" style = "margin-top:30px" action = '' method = 'post'>
	{!! csrf_field() !!}
	
    <fieldset>
        <div class="pure-control-group">
            <label for="name">Inventory item:</label>
            <select name = 'product'>
            @foreach($products as $product)
            	<option value = "{{$product->id}}">{{$product->productName}}</option>
            @endforeach
            </select>
        </div>
        <div class="pure-control-group">
            <label for="name">Quantity:</label>
            <input type = 'number' min='1' required name = 'amount'/>
        </div>
        <div class="pure-control-group">
            <button name="btnReplenish" type="submit" class="pure-button pure-button-primary">Replenish</button>
        </div>
	</fieldset>
</form>

@stop
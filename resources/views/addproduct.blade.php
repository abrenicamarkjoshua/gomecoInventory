@extends('layout.main')

@section('content')
<H1>Add new product</H1>
<form class="pure-form pure-form-aligned" style = "margin-top:30px" action = '' method = 'post'>
	{!! csrf_field() !!}
    <fieldset>
    	
    	
        <div class="pure-control-group">
            <label for="name">Product name:</label>
            <input class = "pure-input-1-3" id="productname" name = "productName" type="text" placeholder="product name" value = '{{$product->productName}}'>
        </div>

        <div class="pure-control-group">
            <label for="password">Product description:</label>
            <textarea name = 'productDesc' cols='50' rows='4'>{{$product->productDesc}}</textarea>
        </div>
		<div class="pure-control-group">
            <label for="name">Selling price: ₱</label>
            <input class = "pure-input-1-3" id="productname" name = "sellingprice" type="text" placeholder="selling price" value = '{{$product->sellingprice}}'>
        </div>
        <div class="pure-control-group">
            <label for="name">Number of stocks: ₱</label>
            <input class = "pure-input-1-3" name = "numberOfStocks" type="number" placeholder="quantity" value = '{{$inventory->quantity}}'>
        </div>
        <div class="pure-control-group">
            <label for="name">Category</label>
            <select name = 'category'>
                <?php echo App\viewStrategy::optionCategories(); ?>
            </select>    
        </div>
        <div class="pure-controls">
            
            <button name = 'save' type="submit" class="pure-button pure-button-primary">Save</button>
        </div>
    </fieldset>
</form>

@stop
@extends('layout.main')

@section('content')
<H1>Products management</H1>
<div class="pure-menu pure-menu-horizontal grey">
    <a href="../addproduct" class="pure-menu-heading pure-menu-link">Add New product</a>
    <ul class="pure-menu-list">

       <li class="pure-menu-item"><a href="../products/{{$first}}" class="pure-menu-link">|<</a></li>
        <li class="pure-menu-item"><a href="../products/{{$next}}" class="pure-menu-link"><</a></li>
        <li class="pure-menu-item"><a href="../products/{{$previous}}" class="pure-menu-link">></a></li>
       <li class="pure-menu-item"><a href="../products/{{$last}}" class="pure-menu-link">>|</a></li>
        
        <li class="pure-menu-item">
        <!-- <form class="pure-form">{!! csrf_field() !!}
		    <input type="text" class="pure-input-rounded" placeholder="type product code">
		    <button type="submit" class="pure-button">Select product</button>
			<button type="submit" class="pure-button">Advanced search/filter</button>
		</form> -->
		</li>
    </ul>
</div>


<form class="pure-form pure-form-aligned" enctype="multipart/form-data" style = "margin-top:30px" action = '' method = 'post'>
	{!! csrf_field() !!}
    <fieldset>
    	<legend>Product information</legend>
    	<div class="pure-control-group">
            <label for="name">Product Id:</label>
            {{($product->id) ? $product->id:""}}
            <input type = 'hidden' name = 'product_id' value = '{{$product->id}}'/>
        </div>
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
            <input class = "pure-input-1-3" name = "numberOfStocks" type="text" placeholder="quantity" value = '{{$inventory->quantity}}'>
        </div>
        <div class="pure-control-group">
            <label for="name">Category</label>
            <select name = 'category'>
                <?php echo App\viewStrategy::optionCategories($product->category_id); ?>
            </select>    
        </div>
        <div class="pure-controls">
            
            <button name = 'save' type="submit" class="pure-button pure-button-primary">Save</button>
        </div>
    </fieldset>
</form>
<div class="pure-form pure-form-aligned" action = '' method = 'post'>
    <fieldset>
    	<legend>Product gallery</legend>
    	<div class="pure-g" style = "margin-bottom:60px;">
	    	@foreach($productphotos as $productphoto)
	    	<form action = '' method = 'post'>
	    		{!! csrf_field() !!}
	    			<div class="pure-u-2-3">
                        <div style = "width:300px; margin:10px">
                            <input type = 'hidden' name = 'product_id' value = '{{$product->id}}'/>
    	    				<img width = '300px' src = "{{asset($productphoto->picture)}}"/><input type = 'hidden' name = 'productpicture_id' value = '{{$productphoto->id}}'/><input type = 'submit' name = 'deletephoto' value = 'delete' style = "margin-right:20px;"/>
    	    			    @if($product->picture != $productphoto->picture)
                            <input type = 'submit' name = 'btnSetAsFeaturedPicture' value = 'Set as featured Picture'></input>
                            @else
                            Featured Picture
                            @endif
                        </div>
                    </div>
	    
				
	    		
	    	</form>

	    	@endforeach
    	</div>
        <form action = '' method = 'post' enctype="multipart/form-data">{!! csrf_field() !!}
            <input type = 'hidden' name = 'product_id' value = '{{$product->id}}'/>
        	<div id = "uploadPictureArea">
    		
		    	<div class="pure-control-group" id = "addmorephotoshere">
		            <label for="uploadphoto[]">Select photo:</label>

		            <input type = 'file' name = "uploadphoto[]" accept="image/gif, image/jpeg, image/png" />
		        	
		        </div><br>
	    	</div>
	    	<button class="pure-button pure-button-secondary" type = 'button' name = 'addmorephotos' id = 'addmorepictures'>Add more photos</button> <button name = 'btnSaveProduct' type="submit" class="pure-button pure-button-primary">Upload photos</button> 
    	</form>
    	
    </fieldset>
</div>
@stop
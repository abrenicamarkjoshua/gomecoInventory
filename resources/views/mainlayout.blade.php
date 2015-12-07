@extends('layout.main')

@section('content')
<div class="mens">    
  <div class="main">
     <div class="wrap">
		<div class="cont span_2_of_3">
		  	<h2 class="head">{{$title}}</h2>
		  	<div class="mens-toolbar">
              <div class="sort">
               	<div class="sort-by">
		            <label>Sort By</label>
		            <select>
		                            <option value="">
		                    Position                </option>
		                            <option value="">
		                    Name                </option>
		                            <option value="">
		                    Price                </option>
		            </select>
		            <a href=""><img src="images/arrow2.gif" alt="" class="v-middle"></a>
               </div>
    		</div>
        <div class="pager">   
        	<div class="limiter visible-desktop">
            <label>Show</label>
            <select>
                            <option value="" selected="selected">
                    9                </option>
                            <option value="">
                    12                </option>
                            <option value="">
                    15                </option>
                        </select> per page        
             </div>
       		<ul class="dc_pagination dc_paginationA dc_paginationA06">
			    <li><a href="#" class="previous">Pages</a></li>
			    <li><a href="#">1</a></li>
			    <li><a href="#">2</a></li>
		  	</ul>
	   		<div class="clear"></div>
    	</div>
     	<div class="clear"></div>
	</div>
			<div class="top-box">
				<?php
				foreach($products as $product){
				?>
				<div class="col_1_of_3 span_1_of_3">
				 <a href="../product/{{$product->id}}">
				  <div class="inner_content clearfix">
					<div class="product_image">
						<img src="{{App\configStrategy::getGomecoInventoryWebsite()$product->picture}}" alt=""/>
					</div>
                    <div class="sale-box"><span class="on_sale title_shop">New</span></div>	
                    <div class="price">
					   <div class="cart-left">
							<p class="title">{{$product->productName}}</p>
							<div class="price1"> <span class="actual">Php {{$product->sellingprice}}</span> </div>
					  </div>
						
						<div class="clear"></div>
				    </div>				
                 </div>
                  </a>
				</div>

				
				<?php
				}
				?>

				<div class="clear"></div>
			</div>	
           <!--  
			<div class="top-box">
			 <div class="col_1_of_3 span_1_of_3"> 
			   <a href="single.html">
				<div class="inner_content clearfix">
					<div class="product_image">
						<img src="images/pic.jpg" alt=""/>
					</div>
                    <div class="sale-box"><span class="on_sale title_shop">New</span></div>	
                    <div class="price">
					   <div class="cart-left">
							<p class="title">Lorem Ipsum simply</p>
							<div class="price1"> <span class="actual">Php</span> </div>
					  </div>
						
						<div class="clear"></div>
				  </div>				
               </div>
               </a>
			  </div>
			   <div class="col_1_of_3 span_1_of_3">
			   	 <a href="single.html">
					<div class="inner_content clearfix">
					<div class="product_image">
						<img src="images/pic1.jpg" alt=""/>
					</div>
                    <div class="sale-box"><span class="on_sale title_shop">New</span></div>
                    <div class="price">
					   <div class="cart-left">
							<p class="title">Lorem Ipsum simply</p>
							<div class="price1"> <span class="actual">Php</span> </div>
					  </div>
						
						<div class="clear"></div>
					 </div>				
                   </div>
                 </a>
			  </div>
				<div class="col_1_of_3 span_1_of_3">
				 <a href="single.html">
				  <div class="inner_content clearfix">
					<div class="product_image">
						<img src="images/pic2.jpg" alt=""/>
					</div>
                    <div class="sale-box"><span class="on_sale title_shop">New</span></div>	
                    <div class="price">
					   <div class="cart-left">
							<p class="title">Lorem Ipsum simply</p>
							<div class="price1">
							  <span class="actual">Php</span>
							</div>
					  </div>
						
						<div class="clear"></div>
				    </div>				
                 </div>
                  </a>
				</div>
				<div class="clear"></div>
			</div>	 -->
            <!--
			<div class="top-box">
			 <div class="col_1_of_3 span_1_of_3"> 
			   <a href="single.html">
				<div class="inner_content clearfix">
					<div class="product_image">
						<img src="images/pic.jpg" alt=""/>
					</div>
                    <div class="sale-box"><span class="on_sale title_shop">New</span></div>	
                    <div class="price">
					   <div class="cart-left">
							<p class="title">Lorem Ipsum simply</p>
							<div class="price1"> <span class="actual">Php</span> </div>
					  </div>
						
						<div class="clear"></div>
				  </div>				
               </div>
               </a>
			  </div>
			   <div class="col_1_of_3 span_1_of_3">
			   	 <a href="single.html">
					<div class="inner_content clearfix">
					<div class="product_image">
						<img src="images/pic1.jpg" alt=""/>
					</div>
                    <div class="sale-box"><span class="on_sale title_shop">New</span></div>
                    <div class="price">
					   <div class="cart-left">
							<p class="title">Lorem Ipsum simply</p>
							<div class="price1"> <span class="actual">Php</span> </div>
					  </div>
						
						<div class="clear"></div>
					 </div>				
                   </div>
                 </a>
			  </div>
				<div class="col_1_of_3 span_1_of_3">
				 <a href="single.html">
				  <div class="inner_content clearfix">
					<div class="product_image">
						<img src="images/pic2.jpg" alt=""/>
					</div>
                    <div class="sale-box"><span class="on_sale title_shop">New</span></div>	
                    <div class="price">
					   <div class="cart-left">
							<p class="title">Lorem Ipsum simply</p>
							<div class="price1">
							  <span class="actual">Php</span>
							</div>
					  </div>
						
						<div class="clear"></div>
				    </div>				
                 </div>
                  </a>
				</div>
				<div class="clear"></div>
			</div>-->
		</div>
		<div class="clear"></div>
			</div>
		   </div>
		</div>
@stop
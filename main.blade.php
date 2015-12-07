<?php $user = current_user(); ?>
<!DOCTYPE html>
  <html lang="en">
    <head>

    <title>JDR ARCEGAS TRADING</title>
   <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
	
	<link href="./bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
    <link href="./bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">
    <link href="./dist/css/timeline.css" rel="stylesheet">
    
    <link href="./bower_components/morrisjs/morris.css" rel="stylesheet">
    <link href="./bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="libs/css/main.css" />
	
	
<script type="text/javascript">
 function timedMsg()
  {
    var t=setInterval("change_time();",1000);
  }
 function change_time()
 {
   var d = new Date();
   var curr_hour = d.getHours();
   var curr_min = d.getMinutes();
   var curr_sec = d.getSeconds();
   if(curr_hour > 12)
     curr_hour = curr_hour - 12;
   document.getElementById('Hour').innerHTML =curr_hour+':';
    document.getElementById('Minut').innerHTML=curr_min+':';
    document.getElementById('Second').innerHTML=curr_sec;
 }
timedMsg();   
</script>
	
  </head>
  <body>
  <?php  if ($session->isUserLoggedIn(true)): ?>
    <header id="header">
      <a href="home.php" id="menu-action">
       <img src="images/logo1.png" style="width:70px;height:40px;padding:2px;"/>
      </a>
      <div class="logo">
         JDR ARCEGAS TRADING 
      </div>
      <div id="logout" class="pull-right clearfix">
        <a href="logout.php">
         <span class="glyphicon glyphicon-off"></span> <?php echo remove_junk(ucfirst($user['name'])); ?> 
        </a>
      </div>
    </header>
    <div class="sidebar">
 
      <ul>
        <li>
          <a href="home.php">
            <i class="glyphicon glyphicon-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-th-large"></i>
            <span>Product</span>
          </a>
		<?php if($user['user_level'] == 1 || $user['user_level'] == 2){ ?>   
          <ul class="nav submenu">
			<li><a href="product.php">Manage Product</a> </li>
			<!-- <li><a href="accessories.php">Add Accessories</a> </li> -->
            <li><a href="add_product.php">Add Product</a> </li>
			<li><a href="categorie.php" >Add Categories</a></li>
         </ul>
		<?php } else{ ?>
		  <ul class="nav submenu">
			<li><a href="product.php">Manage product</a> </li>
		  </ul>
		<?php } ?>
        </li>
		<li>
          <a href="supplier.php">
            <i class="glyphicon glyphicon-road"></i>
            <span>supplier</span>
          </a>
        </li>
		<li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-remove-sign"></i>
             <span>Bad Order</span>
            </a>
            <ul class="nav submenu">
               <li><a href="manage_bad_order.php">Manage Bad Order</a> </li>
               <li><a href="bad_order.php">Add Bad Order</a> </li>
           </ul>
        </li>
		<li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-refresh"></i>
             <span>Return/Exchange</span>
            </a>
            <ul class="nav submenu">
               <li><a href="manage_return.php" style="font-size: 13px">Manage Return</a> </li>
			   <li><a href="manage_exchange.php" style="font-size: 13px">Manage Exchange</a> </li>
               <li><a href="add_return.php" style="font-size: 13px">Add Return</a> </li>
			   <li><a href="product_exchange.php" style="font-size: 13px">Add Exchange</a> </li>
           </ul>
        </li>
        <li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-shopping-cart"></i>
             <span>Sale</span>
            </a>
            <ul class="nav submenu">
               <li><a href="sales.php">Manage Sale</a> </li>
               <li><a href="add_sale.php">Add Sale</a> </li>
           </ul>
        </li>
        <?php if($user['user_level'] == 1){ ?>
		<li>
          <a href="sales_report.php">
            <i class="glyphicon glyphicon-signal"></i>
            <span>Report</span>
          </a>
        </li>
		<li>
			<a href="comment.php">
				<i class="glyphicon glyphicon-comment"></i>
				<span>Comments</span>
          </a>
		</li>
		<li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-lock"></i>
            <span>Audit</span>
          </a>
          <ul class="nav submenu">
            <li><a href="audit_product.php">Audit Products</a> </li>
             <li><a href="audit_bad_order.php">Audit Bad Order</a> </li>
			 <li><a href="audit_exchange.php">Audit Exchange</a> </li>
			 <li><a href="audit_user.php">Audit User</a> </li>
         </ul>
        </li>
		<li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-save"></i>
            <span>Backup & Restore </span>
          </a>
          <ul class="nav submenu">
            <li><a href="backup.php">Backup</a> </li>
            <li><a href="#">Restore</a> </li>

         </ul>
        </li>
		<li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-user"></i>
            <span>User Management</span>
          </a>
          <ul class="nav submenu">
            <li><a href="users.php">Manage user</a> </li>
             <li><a href="edit_account.php">My account</a> </li>
             <li><a href="change_password.php">Change Password</a> </li>
             <li><a href="add_user.php">New User</a> </li>
         </ul>
        </li>
		<li>
          <a href="visitors_counter.php">
            <i class="glyphicon glyphicon-indent-right"></i>
            <span>Visitors Counter</span>
          </a>
        </li>
		<li>
          <a href="mission_vision.php">
            <i class="glyphicon glyphicon-signal"></i>
            <span>Mission Vision</span>
          </a>
        </li>
		<li>
          <a href="add_faq.php">
            <i class="glyphicon glyphicon-signal"></i>
            <span>FAQ</span>
          </a>
        </li>
		<?php } elseif($user['user_level'] == 2){ ?>
		<li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-lock"></i>
            <span>Audit</span>
          </a>
          <ul class="nav submenu">
            <li><a href="audit_product.php">Audit Products</a> </li>
             <li><a href="audit_bad_order.php">Audit Bad Order</a> </li>
			 <li><a href="audit_exchange.php">Audit Exchange</a> </li>
         </ul>
        </li>
		<li>
          <a href="sales_report.php">
            <i class="glyphicon glyphicon-signal"></i>
            <span>Report</span>
          </a>
        </li>

		<?php } else { } ?>
      </ul>
   </div>
<?php endif; ?>

<div class="page">
  <div class="container-fluid">
	


@yield('content')
		
     </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js"></script>
  <script type="text/javascript" src="libs/js/functions.js"></script>
  </body>
</html>

<?php if (isset($connection)) {  mysqli_close($con); } ?>


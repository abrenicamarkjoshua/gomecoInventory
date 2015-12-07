
<!DOCTYPE html>
  <html lang="en">
    <head>

    <title>GOMECO Inventory management system</title>
   <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
	
	<link href="{{asset('bower_components/bootstrap/dist/css/bootstrap.css')}}" rel="stylesheet">
    <link href="{{asset('bower_components/metisMenu/dist/metisMenu.min.css')}}" rel="stylesheet">
    <link href="{{asset('bower_components/dist/css/timeline.css')}}" rel="stylesheet">
    
    <link href="{{asset('bower_components/morrisjs/morris.css')}}" rel="stylesheet">
    <link href="{{asset('bower_components/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{asset('libs/css/main.css')}}" />
    <link rel="stylesheet" href="{{asset('css/pure-min.css')}}" />
    <link rel="stylesheet" href="{{asset('css/custom.css')}}" />
    
	
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
  <?php  //if ($session->isUserLoggedIn(true)): ?>
    <header id="header">
      <a href="/" id="menu-action">
       <img src="{{asset('images/logo.png')}}" style="width:70px;height:40px;padding:2px;"/>
      </a>
      <div class="logo">
         GOMECO Inventory Management System 
      </div>
      <div id="logout" class="pull-right clearfix">
        <a href="auth/logout">
         <span class="glyphicon glyphicon-off"></span> <?php //echo remove_junk(ucfirst($user['name'])); ?> 
        </a>
      </div>
    </header>
    <div class="sidebar">
 
      <ul>
        <li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-th-large"></i>
            <span>Home</span>
          </a>
             <ul class="nav submenu">
            <li><a href="/">Dashboard</a></li>
            <li><a href="/pending">Pending orders</a> </li>
            <li><a href="/pending">On-delivery orders</a> </li>
            <li><a href="/pending">cancelled orders</a> </li>
            <li><a href="/pending">closed orders</a> </li>
      
         </ul>
          </a>
        </li>
        <li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-th-large"></i>
            <span>Product</span>
          </a>
		<?php //if($user['user_level'] == 1 || $user['user_level'] == 2){ ?>   
          <ul class="nav submenu">
      			<li><a href="/products">Manage Product</a> </li>
      			<!-- <li><a href="accessories.php">Add Accessories</a> </li> -->
            <li><a href="addproduct">Add Product</a> </li>
			
         </ul>
	
        </li>
		
		<li>
          <a href="/reports">
            <i class="glyphicon glyphicon-signal"></i>
            <span>Report</span>
          </a>
        </li>
		
		<li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-user"></i>
            <span>User Management</span>
          </a>
          <ul class="nav submenu">
            <li><a href="/users">Manage user</a> </li>
             <li><a href="/myaccount">My account</a> </li>
             <li><a href="/newuser">New User</a> </li>
         </ul>
        </li>
		

		<?php //} else { } ?>
      </ul>
   </div>
<?php //endif; ?>

<div class="page">
  <div class="container-fluid">
	


@yield('content')
		
     </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js"></script>
  <script type="text/javascript" src="{{asset('libs/js/functions.js')}}"></script>
  <script type="text/javascript" src="{{asset('js/jquery.min.js')}}"></script>
  <script type="text/javascript" src="{{asset('js/custom.js')}}"></script>
  </body>
</html>



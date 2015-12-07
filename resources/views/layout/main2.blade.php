
<!DOCTYPE html>
  <html lang="en">
    <head>

    <title>GOMECO Inventory management system</title>
   <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
	
	<link href="../bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">
    <link href="../bower_components/dist/css/timeline.css" rel="stylesheet">
    
    <link href="../bower_components/morrisjs/morris.css" rel="stylesheet">
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="../libs/css/main.css" />
	
	
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
      <a href="home.php" id="menu-action">
       <img src="../images/logo.png" style="width:70px;height:40px;padding:2px;"/>
      </a>
      <div class="logo">
         GOMECO Inventory Management System 
      </div>
      
    </header>
    
<?php //endif; ?>

<div class="page">
  <div class="container-fluid">
	


@yield('content')
		
     </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js"></script>
  <script type="text/javascript" src="../libs/js/functions.js"></script>
  </body>
</html>



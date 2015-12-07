<?php $member = current_member(); ?>
<?php $all_categories = all_catgories(); ?>

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
    
    <link href="../bower_components/morrisjs/morris.css" rel="stylesheet">
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

<?php

if(!isset($_SESSION['isLoggedIn']) || !($_SESSION['isLoggedIn']))
{
	//code for authentication comes here
	//ASSUME USER IS VALID
	$_SESSION['isLoggedIn'] = true;
	/////////////////////////////////////////
	$_SESSION['timeOut'] = 9000;
	$logged = time();
	$_SESSION['loggedAt']= $logged;	
	showLoggedIn();
}
else
{
	require 'timecheck/timeCheck.php';
	$hasSessionExpired = checkIfTimedOut();
	if($hasSessionExpired)
	{
		session_unset();
		header("Location:login.php");
		exit;
	}
	else
	{
		$_SESSION['loggedAt']= time();// update last accessed time
		showLoggedIn();
	}

}
	function showLoggedIn()
	{

//Include the database connection filezz
include "includes/connect.php";


//Check to be sure that a valid session has been created
if(isset($_SESSION["VALID_USER_ID"]))
{
	
	//Check the database table for the logged in user information
	$check_user_details = mysql_query("select * from `members` where `username` = '".mysql_real_escape_string($_SESSION["VALID_USER_ID"])."'");
	//Validate created session
	if(mysql_num_rows($check_user_details) < 1)
	{
		session_unset();
		session_destroy();
		header("location: login.php");
	}
	else
	{
	
	//Get all the logged in user information from the database users table
	$get_user_details = mysql_fetch_array($check_user_details);
	
		$id = strip_tags($get_user_details['id']);
		$username = strip_tags($get_user_details['username']);
		$passwd = strip_tags($get_user_details['password']);
		$first_name = strip_tags($get_user_details['first_name']);
		$last_name = strip_tags($get_user_details['last_name']);
		
	}

		$_SESSION['id'] = $id;
?>
  
  <body>
	
	
    <header id="header">
      <a href="main.php" id="menu-action" style="padding-top: 5px;">
		<img src="images/logo1.png" style="width:70px;height:40px;padding:2px;"/>
      </a>
      <div class="logo">
         JDR ARCEGAS TRADING 
      </div>
	
	<div id="logout" class="pull-right clearfix">
		<div class="dropdown">
			<a href="#.php" class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">
				<strong><span class="glyphicon glyphicon-user"></span>&nbsp;<?php echo $first_name; ?> &nbsp;<?php echo $last_name; ?></strong> <span class="caret"></span>
			</a>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenu1" >
				<li><a href="main_cart.php" style="text-style: #000;">My Cart</a></li>
				<li><a href="main_account.php?id=<?php echo $id; ?>" style="text-decoration: #000;">My Account</a></li>
				<li role="separator" class="divider"></li>
				<li><a href="main_logout.php" style="text-decoration: #000;">Logout</a></li>
			</ul>
		</div>
		
	</div>

	</header>
<?php  } else {?>
	
	<header id="header">
      <a href="main.php" id="menu-action" style="padding-top: 5px;">
       <img src="images/logo1.png" style="width:70px;height:40px;padding:2px;"/>
      </a>
      <div class="logo">
         JDR ARCEGAS TRADING
      </div>
	
	<div id="logout" class="pull-right clearfix">
        <a href="main_login.php">
         <strong><span class="glyphicon glyphicon-user"></span>&nbsp;Login</strong>
        </a>
		<a href="add_member.php">
         <span class=""></span>&nbsp;<strong>Register</strong>
        </a>
    </div>
		
	</header>
<?php } }?>
	
    </header>

    <div class="sidebar">
 
      <ul>
        <li>
          <a href="main.php">
            <i class="glyphicon glyphicon-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" class="submenu-toggle">
            <i class="glyphicon glyphicon-th-large"></i>
            <span>Categories</span>
          </a> 
          <ul class="nav submenu">
			<?php  foreach ($all_categories as $cat): ?>
			<li><a href="main_categories.php?id=<?php echo $cat['id'] ?>"><?php echo $cat['name'] ?></a></li>
			<?php endforeach?>
         </ul>
        </li>
		<li>
          <a href="_main_about.php">
            <i class="glyphicon glyphicon-indent-left"></i>
            <span>About us</span>
          </a>
        </li>
		<li>
          <a href="main_about.php">
            <i class="glyphicon glyphicon-phone"></i>
            <span>Contact us</span>
          </a>
        </li>
		<li>
          <a href="terms.php">
            <i class="glyphicon glyphicon-file"></i>
            <span>Terms & Condition</span>
          </a>
        </li>
		<li>
          <a href="FAQ.php">
            <i class="glyphicon glyphicon-pushpin"></i>
            <span>FAQ</span>
          </a>
        </li>
      </ul>
   </div>


<div class="page">
  <div class="container-fluid">
	

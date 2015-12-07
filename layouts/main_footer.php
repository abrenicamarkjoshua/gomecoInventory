<?php $cat_id; ?>
     </div>
    </div>
<div class="panel-footer">&copy JDR trading - <?php echo date('Y'); ?> 
	<div class="pull-right">
		<strong>Like us on</strong> <a href="https://www.facebook.com/JDR-Arcegas-Trading-286649921438481/timeline/"><img src="images/facebook.png" style="width:30px;height:30px;padding:2px;border:1px solid #d4d4d4;"/></a>
	</div>
	<br>
	<br>
	<div class="center-block">
		<p> 
			<strong> <a href="main.php"> HOME </a> </strong> |
			<strong> <a href="main_categories.php?id=<?php echo $cat_id; ?>"> CATEGORIES </a> </strong> |
			<strong> <a href="_main_about.php?id=<?php echo $cat_id; ?>"> ABOUT US </a> </strong> |
			<strong> <a href="main_about.php?id=<?php echo $cat_id; ?>"> CONTACT US </a> </strong> |
			<strong> <a href="terms.php?id=<?php echo $cat_id; ?>"> TERMS AND CONDITION </a> </strong> |
			<strong> <a href="FAQ.php?id=<?php echo $cat_id; ?>"> FAQ </a> </strong> |
		</p>
	</div>
</div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js"></script>
  <script type="text/javascript" src="libs/js/functions.js"></script>
  </body>
</html>

<?php if (isset($connection)) {  mysqli_close($con); } ?>


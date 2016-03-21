@extends('layout.main')

@section('content')
<H1>My account</H1>


<form class="pure-form pure-form-aligned" enctype="multipart/form-data" style = "margin-top:30px" action = '' method = 'post'>
	{!! csrf_field() !!}
	
    <fieldset>
    	@if($error != "")
        <p style = "color:red;">{!! $error !!}</p>
        @endif
        @if(isset($_SESSION['affirm']))
        <p style ="color:green">{!! $_SESSION['affirm'] !!}</p>
            <?php unset($_SESSION['affirm']); ?>
        @endif
       
        <legend>User information</legend>
    	
    	<div class="pure-control-group">
            <label for="name">Employee number:</label>
            {{$user->id}}
           <input type = 'hidden' name = 'employeenumber' value = '{{$user->id}}'/>
        </div>
        <div class="pure-control-group">
            <label for="name">Username:</label>
            
            <input type = 'text' name = 'username' value = '{{$user->name}}'/>
        </div>
        <div class="pure-control-group">
            <label for="name">Last name:</label>
            <input class = "pure-input-1-3" name = "lastname" type="text" placeholder="lastname name" value = '{{$user->lastname}}'>
        </div>
 		<div class="pure-control-group">
            <label for="name">First name:</label>
            <input class = "pure-input-1-3" name = "firstname" type="text" placeholder="first name" value = '{{$user->firstname}}'>
        </div>
 		<div class="pure-control-group">
            <label for="name">Middle name:</label>
            <input class = "pure-input-1-3"  name = "middlename" type="text" placeholder="middle name" value = '{{$user->middleName}}'>
        </div>
 		<div class="pure-control-group">
            <label for="name">Mobile number:</label>
            <input class = "pure-input-1-3"  name = "mobilenumber" type="number" placeholder="mobile number" value = '{{$user->mobileNumber}}'>
        </div>
 		<div class="pure-control-group">
            <label for="name">Email address:</label>
            <input class = "pure-input-1-3"  name = "email" type="email" placeholder="middle name" value = '{{$user->email}}'>
        </div>
        <div class="pure-controls">
            
            <button name = 'save' type="submit" class="pure-button pure-button-primary">Save</button>
        </div>
    	
    </fieldset>
</form>
<form class="pure-form pure-form-aligned" enctype="multipart/form-data" style = "margin-top:30px" action = '' method = 'post'>
	{!! csrf_field() !!}
    <fieldset>
    	<legend>Change password</legend>
    	<div class="pure-control-group">
            <label for="name">Old password:</label>
            <input class = "pure-input-1-3" required name = "oldpassword" type="password" />
        </div>
        <div class="pure-control-group">
            <label for="name">New password:</label>
            <input class = "pure-input-1-3" required name = "newpassword" type="password" />
        </div>
        <div class="pure-control-group">
            <label for="name">Confirm new password:</label>
            <input class = "pure-input-1-3" required name = "confirmnewpassword" type="password" />
        </div>
        <div class="pure-controls">
            
            <button name = 'changepassword' type="submit" class="pure-button pure-button-primary">Change password</button>
        </div>
    </fieldset>

</div>
@stop
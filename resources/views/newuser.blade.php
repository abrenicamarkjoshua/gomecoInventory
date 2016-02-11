@extends('layout.main')

@section('content')
<H1>New user</H1>


<form class="pure-form pure-form-aligned" enctype="multipart/form-data" style = "margin-top:30px" action = '' method = 'post'>
	{!! csrf_field() !!}
	
    <fieldset>
    	@if (session('affirm'))
		    <div class="alert alert-success">
		        {{ session('affirm') }}
		    </div>
		@endif	
        @if (session('error'))
            <div class="alert alert-error" style = "color:red;">
                {{ session('error') }}
            </div>
        @endif  
        <legend>Personal information</legend>
    	
    	
        <div class="pure-control-group">
            <label for="name">Username:</label>
            
            <input required type = 'text' name = 'username' value = '{{old("username")}}'/>
        </div>
        <div class="pure-control-group">
            <label for="name">Password:</label>
            
            <input required type = 'password' name = 'password' value = ''/>
        </div>
        <div class="pure-control-group">
            <label for="name">Retype Password:</label>
            
            <input required type = 'password' name = 'retypepassword' value = ''/>
        </div>
        <div class="pure-control-group">
            <label for="name">Last name:</label>
            <input required class = "pure-input-1-3" name = "lastname" type="text" placeholder="lastname name" value = '{{old("lastname")}}'/>
        </div>
 		<div class="pure-control-group">
            <label for="name">First name:</label>
            <input required class = "pure-input-1-3" name = "firstname" type="text" placeholder="first name" value = '{{old("firstname")}}'/>
        </div>
 		<div class="pure-control-group">
            <label for="name">Middle name:</label>
            <input required class = "pure-input-1-3"  name = "middlename" type="text" placeholder="middle name" value = '{{old("middlename")}}'>
        </div>
 		<div class="pure-control-group">
            <label for="name">Mobile number:</label>
            <input required class = "pure-input-1-3"  name = "mobilenumber" type="number" placeholder="mobile number" value = '{{old("mobilenumber")}}'>
        </div>
 		<div class="pure-control-group">
            <label for="name">Email address:</label>
            <input required class = "pure-input-1-3"  name = "email" type="email" placeholder="email" value = '{{old("email")}}'>
        </div>
        <div class="pure-controls">
            
            <button name = 'save' type="submit" class="pure-button pure-button-primary">Register</button>
        </div>
    	
    </fieldset>
</form>
@stop
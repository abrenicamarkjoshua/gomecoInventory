@extends('layout.main')

@section('content')
<H1>Users</H1>
<a href = "/newuser">Add new user</a>
<table  class="pure-table">
		<thead>
			<th>Username</th>
			<th>Last name</th>
			<th>First name</th>
			<th>Middle name</th>
			<th>email address</th>
			<th>mobile number</th>
			
			<th>Action</th>
		</thead>
@foreach($users as $user)
	<tr><td>{{$user->name}}</td>
		<td>{{$user->lastname}}</td>
		<td>{{$user->firstname}}</td>
		<td>{{$user->middlename}}</td>
		<td>{{$user->email}}</td>
		<td>{{$user->mobileNumber}}</td>
		
		<td><form action = '../deleteuser/{{$user->id}}' method = 'post'>
			{!! csrf_field() !!}
			<input type = 'submit' name = 'btnDelete' value = 'Delete'  onclick="return confirm('Are you sure you want to delete this user?');"/>

		</form></td>
	</tr>
@endforeach
	</table>

@stop
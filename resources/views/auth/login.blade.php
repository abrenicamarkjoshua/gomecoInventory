@extends('layout.main2')
@section('content')
<div class="login-page">
    <div class="text-center">
       <h1>Welcome</h1>
       <p>Sign in to start your session</p>
     </div>
   
      <form method="post" action="/auth/login" class="clearfix">
        <div class="form-group">
    @if (count($errors) > 0)
        <ul>
            @foreach ($errors->all() as $error)
                <li style ="color:red">{{ $error }}</li>
            @endforeach
        </ul>
    @endif
    @if (session('affirmRegistration'))
          <b style = "color:green;font-size:25px">{{session('affirmRegistration')}}</b>
          
    @endif
          {!! csrf_field() !!}
              <label for="username" class="control-label">Username</label>
              <input type="name" required class="form-control" name="name" placeholder="Username">
        </div>
        <div class="form-group">
            <label for="Password" class="control-label">Password</label>
            <input type="password" required name= "password" class="form-control" placeholder="password">
        </div>
        <div class="form-group">
                <input type="hidden" name="submitted" value="yes" />
				<input type="submit" name="submit" value="Log in"></button>
        </div>
    </form>
</div>
@stop

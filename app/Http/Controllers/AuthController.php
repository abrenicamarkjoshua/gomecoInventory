<?php

namespace App\Http\Controllers;
use Illuminate\View\View;
class AuthController extends Controller{

	public function getIndex(){
		return view('login');
	}
	public function postIndex(){
		$rule= array(
			'name' => 'required',
			'password' => 'required'

			);
		$validator = \Validator::make(
			\Input::all(), $rule
			);
		if($validator->fails()){
			return \Redirect::route('login')->withErrors($validator);
		} 
		$auth = \Auth::attempt(
			array(
				'name' => \Input::get('name'),
				'password' => \Input::get('password')
			),
			false
		);
		if(!$auth){
			return \Redirect::route('login')->withErrors(
				array('Invalid credentials were provided')
			);
		}
		return \Redirect::route('home');
	}

}
?>
<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    
/**
     * Run the database seeds.
     *
     * @return void
     */
    
public function run(){
DB::table('users')->delete();
$users = array(
	array(
	'name' => 'gomeco',
	'password' => Hash::make('gomeco'),
	'email' => 'abrenicamarkjoshua@gmail.com',
	'lastname' => 'Abrenica',
	'firstname' => 'Mark Joshua',
	'middleName' => 'Rivera'
	)
);
DB::table('users')->insert($users);
}//end of run
}//end of class

<?php

use Illuminate\Database\Seeder;

class ItemsTableSeeder extends Seeder
{
    
/**
     * Run the database seeds.
     *
     * @return void
     */
    
public function run()
    {

DB::table('items')->delete();
$items = array(
array(
	'owner_id' => 1,
	'name' => 'pick up milk',
	'done' => false
),

array(
	'owner_id' => 1,
	'name' => 'walk the dog',
	'done' => false
),

array(
	'owner_id' => 1,
	'name' => 'learn laravel',
	'done' => true
)

);
DB::table('items')->insert($items);
}//end of run

}//end of class

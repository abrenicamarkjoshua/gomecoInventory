<?php

use Illuminate\Database\Seeder;

class productSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('products')->delete();
$product = array(
	array(
	'name' => 'gomeco',
	'price' => '128.00',
	'category' => ''
	)
);
DB::table('products')->insert($product);
    }
}

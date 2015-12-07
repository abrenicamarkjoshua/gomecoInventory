<?php

use Illuminate\Database\Seeder;

class studentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
		DB::table('student')->delete();
        for($i = 0;$i < 5; $i++)
		{
			 DB::table('student')->insert([
            'studentno' => str_random(6),
            'lastname' =>  str_random(60),
            'firstname' => str_random(60),
            'middlename' => str_random(60)
            ]);
		}
    }
}

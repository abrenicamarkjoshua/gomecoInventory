<?php

use Illuminate\Database\Seeder;

class examinationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('examination')->delete();
		//$faker = Faker\Factory::create();
		$students = DB::table('student')->get(); 
		
		$results = DB::table('result_type')->get(); 
		
		$examination_types = DB::table('examination_type')->get(); 
		for($i = 0;$i < 10; $i++)
		{
			$student = array_rand($students, 1);
			$result = array_rand($results, 1);
			$examination_type = array_rand($examination_types, 1);
			 DB::table('examination')->insert([
            'examination_id' => $examination_types[$examination_type]->id,
            'studentno' => $students[$student]->studentno,
            'result' => $results[$result]->id,
            ]);
		}
    }
}

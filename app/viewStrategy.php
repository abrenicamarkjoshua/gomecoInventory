<?php


namespace App;

use Illuminate\Database\Eloquent\Model;
class viewStrategy{
	public static function optionCategories($selectedOption = null){
		$output = "";
		$selected = "";
		$categories = categories::all();
		if($selectedOption){
			foreach($categories as $category){
				if($category->id == $selectedOption){
					$selected = "selected";
				} else{
					$selected = "";
				}
				$output .= "<option $selected value = '$category->id'>$category->category</option>";
			}
		} else{
			foreach($categories as $category){
				
				$output .= "<option $selected value = '$category->id'>$category->category</option>";
			}
		}
		return $output;
	}
}
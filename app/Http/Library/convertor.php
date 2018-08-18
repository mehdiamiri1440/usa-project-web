<?php 
 namespace App\Http\Library ;

class convertor 
{
    public function convert_persian_numbers_to_latin($persian_number_string)
    {
        $persian = array('۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹');
        $num = range(0, 9);
        return (int)str_replace($persian, $num, $persian_number_string);
    }
    
    public function convert_latin_numbers_to_persian($latin_number_string)
    {
        $latin = array('0','1','2','3','4','5','6','7','8','9');
        $num = array('۰','۱','۲','۳','۴','۵','۶','۷','۸','۹');
        return str_replace($latin,$num,$latin_number_string);
    }
    
    public function convert_jalali_date_with_latin_numbers_to_jalali_date_with_persian_numbers($date_string)
    {
        $date = explode('/',$date_string);
        
        $year = $this->convert_latin_numbers_to_persian($date[0]);
        $month = $this->convert_latin_numbers_to_persian($date[1]);
        $day = $this->convert_latin_numbers_to_persian($date[2]);
        
        $converted_date  = $year.'/'.$month.'/'.$day ;
        
        return $converted_date;
        
    }
    
}
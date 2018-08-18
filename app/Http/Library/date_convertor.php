<?php
 namespace App\Http\Library ;
use App\Http\Library\convertor;

class date_convertor 
{
        private function  div($a,$b) { 
        	return (int) ($a / $b); 
        } 

        private function gregorian_to_jalali ($g_y, $g_m, $g_d,$str) 
        { 
            $g_days_in_month = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
            $j_days_in_month = array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29); 


           $gy = $g_y-1600; 
           $gm = $g_m-1; 
           $gd = $g_d-1; 

           $g_day_no = 365*$gy+$this->div($gy+3,4)- $this->div($gy+99,100)+ $this->div($gy+399,400); 

           for ($i=0; $i < $gm; ++$i) 
              $g_day_no += $g_days_in_month[$i]; 
           if ($gm>1 && (($gy%4==0 && $gy%100!=0) || ($gy%400==0))) 
              /* leap and after Feb */ 
              $g_day_no++; 
           $g_day_no += $gd; 

           $j_day_no = $g_day_no-79; 

           $j_np = $this->div($j_day_no, 12053); /* 12053 = 365*33 + 32/4 */ 
           $j_day_no = $j_day_no % 12053; 

           $jy = 979+33*$j_np+4* $this->div($j_day_no,1461); /* 1461 = 365*4 + 4/4 */ 

           $j_day_no %= 1461; 

           if ($j_day_no >= 366) { 
              $jy += $this->div($j_day_no-1, 365); 
              $j_day_no = ($j_day_no-1)%365; 
           } 

           for ($i = 0; $i < 11 && $j_day_no >= $j_days_in_month[$i]; ++$i) 
              $j_day_no -= $j_days_in_month[$i]; 
           $jm = $i+1; 
           $jd = $j_day_no+1; 
         if($str) return $jy.'/'.$jm.'/'.$jd ;
           return array($jy, $jm, $jd); 
        } 
 
        private function jalali_to_gregorian($j_y, $j_m, $j_d,$str) 
        { 
            $g_days_in_month = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); 
            $j_days_in_month = array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29); 


           $jy = (int)($j_y)-979; 
           $jm = (int)($j_m)-1; 
           $jd = (int)($j_d)-1; 

           $j_day_no = 365*$jy + $this->div($jy, 33)*8 + $this->div($jy%33+3, 4); 

           for ($i=0; $i < $jm; ++$i) 
              $j_day_no += $j_days_in_month[$i]; 

           $j_day_no += $jd; 

           $g_day_no = $j_day_no+79; 

           $gy = 1600 + 400* $this->div($g_day_no, 146097); /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */ 
           $g_day_no = $g_day_no % 146097; 

           $leap = true; 
           if ($g_day_no >= 36525) /* 36525 = 365*100 + 100/4 */ 
           { 
              $g_day_no--; 
              $gy += 100* $this->div($g_day_no,  36524); /* 36524 = 365*100 + 100/4 - 100/100 */ 
              $g_day_no = $g_day_no % 36524; 

              if ($g_day_no >= 365) 
                 $g_day_no++; 
              else 
                 $leap = false; 
           } 

           $gy += 4* $this->div($g_day_no, 1461); /* 1461 = 365*4 + 4/4 */ 
           $g_day_no %= 1461; 

           if ($g_day_no >= 366) { 
              $leap = false; 

              $g_day_no--; 
              $gy += $this->div($g_day_no, 365); 
              $g_day_no = $g_day_no % 365; 
           } 

           for ($i = 0; $g_day_no >= $g_days_in_month[$i] + ($i == 1 && $leap); $i++) 
              $g_day_no -= $g_days_in_month[$i] + ($i == 1 && $leap); 
           $gm = $i+1; 
           $gd = $g_day_no+1; 
            if($str) return $gy.'/'.$gm.'/'.$gd ;
            return array($gy, $gm, $gd); 
        } 
       
        private function comparedate($_date_mix_jalaly,$_date_mix_gregorian)//unused for now refactor later
        {
          $_date_arr_jalaly = explode('/', $_date_mix_jalaly);
          $_date_arr_gregorian = explode('/', $_date_mix_gregorian);		

          $arr_jtg = jalali_to_gregorian($_date_arr_jalaly[0],$_date_arr_jalaly[1],$_date_arr_jalaly[2]);

          if($_date_arr_gregorian[0]> $arr_jtg[0])
            {
             return  false;
            }

            else if($_date_arr_gregorian[0]== $arr_jtg[0] && $_date_arr_gregorian[1]>$arr_jtg[1])
            {
             return false;
            }
            else if($_date_arr_gregorian[0]== $arr_jtg[0] && $_date_arr_gregorian[1]==$arr_jtg[1] && $_date_arr_gregorian[2]>$arr_jtg[2])
            {
             return false;
            }
          return true ;	
        }
    
        public function get_persian_date($georgian_timeDate)
        {
            //
            //$georgian_timeDate = explode(' ',$georgian_timeDate)[0];
            $date = $georgian_timeDate;
            $splited_date = explode('-',$date);
            
            $year = $splited_date[0];
            $month = $splited_date[1];
            $day = explode(' ',$splited_date[2])[0];
            $str='true';// to return string format
            $persianDate = $this->gregorian_to_jalali($year,$month,$day,$str);
            
            $convertor_object = new convertor();
            
            return $convertor_object->convert_jalali_date_with_latin_numbers_to_jalali_date_with_persian_numbers($persianDate) ;
            
        }
    
        public function get_georgian_date($year,$month,$day)
        {
            $str = 'true';
            $georgian_date = $this->jalali_to_gregorian($year,$month,$day,$str);
            
            return $georgian_date;
        }
	
		public function get_persian_date_with_month_name($georgian_timeDate)
		{
			$persianDate = $this->get_persian_date($georgian_timeDate);
			
			$formatted_persian_date = $this->change_date_format_to_year_month_name_day($persianDate);
			
			return $formatted_persian_date;
		}
	
		private function change_date_format_to_year_month_name_day($persianDate_string)
		{			
        	$num = array('۱','۲','۳','۴','۵','۶','۷','۸','۹','۱۰','۱۱','۱۲');
			$month = array('فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند');       	
			
			$splited_date = explode('/',$persianDate_string);
			
			$month_name = str_replace($num,$month,$splited_date[1]);
			
			$final_format = $splited_date[2].'  '.$month_name.' , '.$splited_date[0];
			
			return $final_format;
		}
    
        public  function get_georgian_date_from_standard_persian_date_string($persiad_date_string)
        {
            $splited_date = explode('/',$persiad_date_string);
            
            $year = $splited_date[0];
            $month = $splited_date[1];
            $day = $splited_date[2];
            
            return $this->get_georgian_date($year,$month,$day);
        }
}
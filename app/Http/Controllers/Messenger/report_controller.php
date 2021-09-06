<?php

namespace App\Http\Controllers\Messenger;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\report_option;
use App\Models\report;
use DB;

class report_controller extends Controller
{
    //////////////////////////
    public function get_report_options()
    {
        $report_options = DB::table('report_options')
                                ->select('id','option_text','is_description_needed')
                                ->get();

        return response()->json([
            'status' => true,
            'options' => $report_options
        ],200);
    }

    //////////////////////////
    public function send_user_report(Request $request)
    {
        $rules = $this->set_report_validation_rules($request);
        $this->validate($request,$rules);

        $reporter_id = session('user_id');
        $reported_id = $request->reported_id;
        
        $report_record = report::where([
                                    ['reporter_id' ,'=', $reporter_id],
                                    ['reported_id' ,'=', $reported_id]
                                ])->first();

        if($report_record){

            $report_record->option_id = $request->option_id;

            if($request->has('description')){
                $report_record->description = $request->description;
            }
            
            $report_record->save();

            return response()->json([
                'status' => true,
                'msg' => 'report updated'
            ],200);
        }
        else{

            $report_record = new report();
            
            $report_record->reporter_id = $reporter_id;
            $report_record->reported_id = $reported_id;

            $report_record->option_id   = $request->option_id;

            if($request->has('description')){
                $report_record->description = $request->description;
            }

            $report_record->save();

            return response()->json([
                'status' => true,
                'msg' => 'report received'
            ],201);
        }

    }

    protected function set_report_validation_rules($request)
    {
        $rules = [
            'reported_id' => 'required|integer|exists:myusers,id',
            'option_id' => 'required|integer|exists:report_options,id',
        ];

        $this->validate($request,$rules);

        if($request->has('option_id')){
            if(is_integer($request->option_id)){// these two above conditions were tested in validate part

                $report_option_record = DB::table('report_options')
                                            ->where('id',$request->option_id)
                                            ->get();

                if($report_option_record){

                    if($report_option_record->first()->is_description_needed){
                        
                        $rules['description'] = 'required|string';
                        return $rules;
                    }

                    return $rules;
                }

            }
            else{
                return $rules;
            }
        }
        else{
            return $rules;
        }
    }
}

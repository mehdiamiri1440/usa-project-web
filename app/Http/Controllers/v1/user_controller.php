<?php

namespace App\Http\Controllers\v1;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

use App\services\v1\userService;

class user_controller extends Controller
{
	public $users;
	
	public function __construct(userService $service)
	{
		$this->users = $service;
	}
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->users->get_users();
		
		return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
		 $rules = array(
			'first_name' => 'required|regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\- ]+$/u',
			'last_name' => 'required|regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\- ]+$/u',
			'phone' => ['required','regex:/^((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))$/u','unique:myusers'],
			'password' => 'string',
            // 'user_name' => 'required|alpha_dash|unique:myusers',
			'sex' => 'required',
			'province' => 'required',
			'city' => 'required',
            'category_id' => 'required|integer|min:1',
            'activity_type' => 'required',
            //'national_code' => 'unique:myusers',
		);
		$this->validate($request,$rules);
		
        return $this->users->register_user($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

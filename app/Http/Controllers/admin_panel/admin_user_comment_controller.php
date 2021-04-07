<?php

namespace App\Http\Controllers\admin_panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use App\Models\user_comment;

class admin_user_comment_controller extends Controller
{
    public function load_unconfirmed_comments()
    {
        $comments = DB::table('user_comments')
                            ->join('myusers as a','a.id','=','user_comments.myuser_id')
                            ->join('myusers as b','b.id','=','user_comments.commenter_id')
                            ->where('confirmed',false)
                            ->select([
                                'a.first_name as f_name',
                                'a.last_name as l_name',
                                'b.first_name as commenter_f_name',
                                'b.last_name as commenter_l_name',
                                'user_comments.text',
                                'user_comments.created_at',
                                'user_comments.id as id',
                            ])
                            ->orderBy('user_comments.created_at','desc')
                            ->paginate(10);

        return view('admin_panel.userComment',[
            'comments' => $comments
        ]);
    }

    public function get_user_comment_by_id($id)
    {
        // if(is_integer($id)){
            $comment = DB::table('user_comments')
                        ->join('myusers as a','a.id','=','user_comments.myuser_id')
                        ->join('myusers as b','b.id','=','user_comments.commenter_id')
                        ->where('user_comments.id',$id)
                        ->select([
                            'a.first_name as f_name',
                            'a.last_name as l_name',
                            'a.user_name as user_name',
                            'b.first_name as commenter_f_name',
                            'b.last_name as commenter_l_name',
                            'b.user_name as commenter_user_name',
                            'user_comments.text',
                            'user_comments.created_at',
                            'user_comments.rating_score',
                            'user_comments.id as id',
                        ])
                        ->first();

            return view('admin_panel.userCommentDetail',[
                'comment' => $comment
            ]);
        // }
        

    }

    public function confirm_user_comment_by_id(Request $request)
    {
        $this->validate($request,[
            'comment_id' => 'required|exists:user_comments,id'
        ]);

        $comment_id = $request->comment_id;

        $comment = user_comment::find($comment_id);

        $comment->confirmed = true;

        $comment->save();

        return response()->json([
            'status' => true,
            'msg' => 'comment confirmed'
        ],200);
    }
}

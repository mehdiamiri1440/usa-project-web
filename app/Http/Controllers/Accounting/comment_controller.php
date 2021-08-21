<?php

namespace App\Http\Controllers\Accounting;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Carbon\Carbon;

class comment_controller extends Controller
{
    public function post_comment(Request $request)
    {
        $this->validate($request,[
            'text' => 'string|required_without:rating_score',
            'rating_score' => 'integer|min:1|max:5|required_without:text',
            'user_id' => 'required|exists:myusers,id'
        ]);

        $commenter_id = session('user_id');
        $user_id = $request->user_id;

        if($this->is_user_authorized($user_id,$commenter_id) == false)
        {
            return response()->json([
                'status' => false,
                'msg' => 'permission denied!'
            ]);
        }

        $comment = [];

        if($request->filled('text')){
            $comment['text'] = strip_tags($request->text);
        }
        if($request->filled('rating_score')){
            $comment['rating_score'] = $request->rating_score;
        }


        $comment['commenter_id'] = $commenter_id;
        $comment['myuser_id'] = $request->user_id;
        $comment['created_at'] = $comment['updated_at'] = Carbon::now();

        DB::table('user_comments')
                ->insert($comment);

        return response()->json([
            'status' => true,
            'msg' => 'comment submitted!'
        ],201);
    }

    public function get_user_comments(Request $request)
    {
        
        $this->validate($request,[
            'user_id' => 'required|exists:myusers,id'
        ]);

        $user_id = $request->user_id;

        $comments = DB::table('user_comments')
                        ->join('myusers','myusers.id','=','user_comments.commenter_id')
                        ->where([
                            ['user_comments.myuser_id','=',$user_id],
                            ['user_comments.confirmed','=',true],
                            ['user_comments.deleted_by_owner','=',false]
                        ])
                        // ->whereNotNull('user_comments.text')
                        ->select([
                            'myusers.id as user_id',
                            'myusers.first_name',
                            'myusers.last_name',
                            'myusers.city',
                            'myusers.province',
                            'user_comments.id as c_id',
                            'user_comments.created_at',
                            'user_comments.text',
                            'user_comments.rating_score'
                        ])
                        ->orderBy('user_comments.created_at','desc')
                        ->get();

        $comments->each(function($item){
            $likes_info = $this->get_comment_likes_count($item->c_id);
            $item->likes = $likes_info['likes'];
            $item->already_liked = $likes_info['already_liked'];
        });

        $deleted_comments_count = $this->get_deleted_comments_count($user_id);

        $rating_score_array = $this->get_user_avg_rating_score($user_id);

        return response()->json([
            'status' => true,
            'comments' => $comments,
            'deleted_count' => $deleted_comments_count,
            'rating' => $rating_score_array
        ],200);
    }

    public function get_pure_user_comments($user_id)
    {
        $comments = DB::table('user_comments')
                        ->join('myusers','myusers.id','=','user_comments.commenter_id')
                        ->where([
                            ['user_comments.myuser_id','=',$user_id],
                            ['user_comments.confirmed','=',true],
                            ['user_comments.deleted_by_owner','=',false]
                        ])
                        // ->whereNotNull('user_comments.text')
                        ->select([
                            'myusers.id as user_id',
                            'myusers.first_name',
                            'myusers.last_name',
                            'myusers.city',
                            'myusers.province',
                            'user_comments.id as c_id',
                            'user_comments.created_at',
                            'user_comments.text',
                            'user_comments.rating_score'
                        ])
                        ->orderBy('user_comments.created_at','desc')
                        ->get();

        $comments->each(function($item){
            $likes_info = $this->get_comment_likes_count($item->c_id);
            $item->likes = $likes_info['likes'];
            $item->already_liked = $likes_info['already_liked'];
        });

        return $comments;
    }

    protected function get_comment_likes_count($comment_id)
    {
        $records = DB::table('user_comment_likes')
                                // ->selectRaw('count(distinct(myuser_id)) as likes')
                                ->where('comment_id',$comment_id)
                                ->get();

        $result['likes'] = $records->count();
        if(session()->has('user_id')){
            $user_id = session('user_id');

            $tmp = $records->filter(function($comment) use($user_id){
                return $comment->myuser_id == $user_id;
            });

            if($tmp->count() > 0){
                $result['already_liked'] = true;
            }
            else{
                $result['already_liked'] = false;
            }
        }
        else{
            $result['already_liked'] = null;
        }
         

        return $result;
    }

    protected function get_deleted_comments_count($user_id)
    {
        $cnt = DB::table('user_comments')
                ->where('myuser_id',$user_id)
                ->where('deleted_by_owner',true)
                ->where('confirmed',true)
                ->select('commenter_id')
                ->distinct()
                ->count();

        return $cnt;
    }

    public function do_like_actions(Request $request)
    {
        $this->validate($request,[
            'comment_id' => 'required|exists:user_comments,id',
            'action' => 'required|boolean'
        ]);

        $user_id = session('user_id');
        $comment_id = $request->comment_id;
        
        if($this->did_user_already_like_the_comment($user_id,$comment_id) == true && $request->action == 1){
            return response()->json([
                'status' => false,
                'msg' => 'you already liked this!'
            ],200);
        }

        if($request->action == 1){
            $now = Carbon::now();

            DB::table('user_comment_likes')
                    ->insert([
                        'created_at' => $now,
                        'updated_at' => $now,
                        'myuser_id' => $user_id,
                        'comment_id' => $comment_id
                    ]);
        }
        else if($request->action == 0){
            DB::table('user_comment_likes')
                            ->where([
                                ['myuser_id','=',$user_id],
                                ['comment_id','=',$comment_id]
                            ])->delete();
        }

        return response()->json([
            'status' => true,
            'msg' => 'done!'
        ],200);
        
    }

    protected function did_user_already_like_the_comment($user_id,$comment_id)
    {
        $likes_record = DB::table('user_comment_likes')
                            ->where([
                                ['myuser_id','=',$user_id],
                                ['comment_id','=',$comment_id]
                            ])->first();

        if($likes_record){
            return true;
        }

        return false;
    }

    public function is_user_authorized_to_post_comment_on_the_user(Request $request)
    {
        $this->validate($request,[
            'user_id' => 'required|exists:myusers,id'
        ]);

        $user_id = $request->user_id;
        $commenter_id = session('user_id');

        $msg_records = DB::table('messages')
            ->where([
                ['sender_id','=',$commenter_id],
                ['receiver_id','=',$user_id]
            ])->orWhere([
                ['sender_id','=',$user_id],
                ['receiver_id','=',$commenter_id]
            ])->get();

        if($msg_records->count() > 0)
        {
            $comment_record = DB::table('user_comments')
                                    ->where([
                                        ['commenter_id','=',$commenter_id],
                                        ['myuser_id','=',$user_id]
                                    ])
                                    ->first();
            
            if($comment_record){
                return response()->json([
                    'status' => true,
                    'is_allowed' => false
                ],200);
            }

            return response()->json([
                'status' => true,
                'is_allowed' => true
            ],200);
        }     
        else{
            return response()->json([
                'status' => true,
                'is_allowed' => false
            ],200);
        } 
    }

    protected function is_user_authorized($user_id,$commenter_id)
    {
        $msg_records = DB::table('messages')
            ->where([
                ['sender_id','=',$commenter_id],
                ['receiver_id','=',$user_id]
            ])->orWhere([
                ['sender_id','=',$user_id],
                ['receiver_id','=',$commenter_id]
            ])->get();

        if($msg_records->count() > 0)
        {
            $comment_record = DB::table('user_comments')
                                    ->where([
                                        ['commenter_id','=',$commenter_id],
                                        ['myuser_id','=',$user_id]
                                    ])
                                    ->first();
            if($comment_record){
                return false; // user already had left a comment on this user
            }

            return true;
        }     
        else{
            return false;
        } 
    }

    public function get_user_avg_rating_score($user_id)
    {
        $records = DB::table('user_comments')
                        ->where([
                            ['myuser_id','=',$user_id],
                            ['rating_score','>',0],
                        ])->select('rating_score')
                        ->get();
        
        
        $result = [
            'total_count' => $records->count(),
            'avg_score' => round($records->avg('rating_score'),1)
        ];

        return $result;
    }

    public function delete_comment(Request $request)
    {
        $this->validate($request,[
            'c_id' => 'required|exists:user_comments,id'
        ]);

        $comment_id = $request->c_id;

        $page_owner_user_id = session('user_id');

        DB::table('user_comments')
                ->where('id',$comment_id)
                ->where('myuser_id',$page_owner_user_id)
                ->update([
                    'deleted_by_owner' => true
                ]);

        return response()->json([
            'status' => true,
            'msg' => 'you deleted the comment!'
        ],200);
    }
}

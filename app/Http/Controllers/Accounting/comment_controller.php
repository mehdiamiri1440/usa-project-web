<?php

namespace App\Http\Controllers\Accounting;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Carbon\Carbon;

class comment_controller extends Controller
{
    // name violation this end point set rating or text comment or both and this is not what its name tell  
    public function post_comment(Request $request)
    {
        $this->validate($request,[
            'text' => 'string|required_without:rating_score',
            'rating_score' => 'integer|min:1|max:5|required_without:text',
            'user_id' => 'required|exists:myusers,id'
        ]);

        $commenter_id = session('user_id');
        $user_id = $request->user_id;// better name is commentee_id

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
        $comment['myuser_id'] = $request->user_id; // clould use $user_id insted
        $comment['created_at'] = $comment['updated_at'] = Carbon::now();

        DB::table('user_comments')
                ->insert($comment);

        return response()->json([
            'status' => true,
            'msg' => 'comment submitted!'
        ],201);
    }

    // what kind of authorizathion would you mean ?
    protected function is_user_authorized($user_id,$commenter_id)
    {
        // indention
        $msg_records = DB::table('messages')
            ->where([
                ['sender_id','=',$commenter_id],
                ['receiver_id','=',$user_id]
            ])->orWhere([
                ['sender_id','=',$user_id],
                ['receiver_id','=',$commenter_id]
            ])->get();
        // count of records could have been gotten out of query builder some cpu or interpreter instractions wont heppen this way
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

    ////////////////////////////////////////////////////////////

    // name violation can not understand if this end point return the comments who the given user id sends to others or the comments who the others put for this user by the name of this function
    public function get_user_comments(Request $request)
    {
        
        $this->validate($request,[
            'user_id' => 'required|exists:myusers,id'
        ]);

        $user_id = $request->user_id;

        // this query can have limitations for performance reasons
        $comments = DB::table('user_comments')
                        ->join('myusers','myusers.id','=','user_comments.commenter_id')
                        ->where([
                            ['user_comments.myuser_id','=',$user_id],
                            ['user_comments.confirmed','=',true],
                            ['user_comments.deleted_by_owner','=',false]
                        ])
                        ->whereNotNull('user_comments.text')
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
            // the following function can happens inside subquery in this we dont need to query database for every record
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
    // name violation this end point do something more than returning like counts in already_liked part
    protected function get_comment_likes_count($comment_id)
    {
        $records = DB::table('user_comment_likes')
                                // ->selectRaw('count(distinct(myuser_id)) as likes')
                                ->where('comment_id',$comment_id)
                                ->get();

        $result['likes'] = $records->count();
        // question why do we need to find if user logged in here unless proper middleware wont work
        // two following lines can get combine
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
        // could return instantly without putting in a variable
        $cnt = DB::table('user_comments')
                ->where('myuser_id',$user_id)
                ->where('deleted_by_owner',true)
                ->where('confirmed',true)
                ->select('commenter_id')
                ->distinct()
                ->count();

        return $cnt;
    }
    // name violation this end point returns avrage rating score and total count of scores
    // this method did not call in route part and should be protected
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

    //////////////////////////////////////////////////////

    // name violation action in likes can interprete as something other than like or dislike something (like do some actions with current likes that we have now)
    public function do_like_actions(Request $request)
    {
        $this->validate($request,[
            'comment_id' => 'required|exists:user_comments,id',
            'action' => 'required|boolean'
        ]);

        $user_id = session('user_id');
        $comment_id = $request->comment_id;
        
        // at first seen i could not recognize the word action here can be mean like or dislike
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
                            ])->delete();// warning hard delete likes
        }

        return response()->json([
            'status' => true,
            'msg' => 'done!' // this response message in this file does not follow general rules (there is no rule for positive and negative messages alongside each other)
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

    //////////////////////////////////////////////////

    // name of the following function did not sence specially on_the_user part
    public function is_user_authorized_to_post_comment_on_the_user(Request $request)
    {
        $this->validate($request,[
            'user_id' => 'required|exists:myusers,id'
        ]);

        $user_id = $request->user_id;
        $commenter_id = session('user_id');
        // this query also happens in (is_user_authorized()) part of this controller too
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
            // this query also happens in (is_user_authorized()) part of this controller too
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

    //////////////////////////////////////////////////////////////

    // name violation i can not understand this function will delete a user comment by request of the user or this comment will delete by admin for some reason also it is soft delete
    public function delete_comment(Request $request)
    {
        // validation response in the time that this comment is not present in the database at all is difrent from when the comment is soft deleted becuase 
        // validation checks whether the comment id is present in the database or not but doesnt care about soft delete flag

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
/*
    conclusion :
    
    this file can be convert into three different controllers with one trait


*/ 
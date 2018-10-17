<?php

namespace App\Http\Controllers;

use App\Http\Request;
use App\wp_post;

class  index_controller extends Controller
{
    public function get_wp_posts()
    {
        $posts = wp_post::where('post_status','publish')
            ->orderBy('id','desc')
            ->take(3)
            ->get();
        
        
        $posts->each(function($post){
           $post_record = wp_post::where('post_parent',$post->ID)
                                    ->where('post_type','attachment')
                                    ->get()
                                    ->last();
            
            $post['img_url'] = $post_record['guid'];
        });
        
        return response()->json([
           'posts' => $posts, 
        ]);
    }
}
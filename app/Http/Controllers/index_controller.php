<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\wp_post;
use Carbon\Carbon;
use DB;
use App\Models\product_media;
use App\Models\category;
use App\Http\Library\date_convertor;
use App\Http\Middleware\login;
use Illuminate\Support\Facades\Cache;


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
            
            $post['img_url'] = $this->remove_http($post_record['guid']);
        });
        
        return response()->json([
           'posts' => $posts, 
        ]);
    }
    
    public function remove_http($url) {
       $disallowed = array('http://');
       foreach($disallowed as $d) {
          if(strpos($url, $d) === 0) {
             return str_replace($d, 'https://', $url);
          }
       }
       return $url;
    }

    public function load_home_page_blade(Request $request)
    {
      if($this->_bot_detected() == false){
         if (!$request->session()->has('user_id')) {
             $user_phone = $request->cookie('user_phone');
             $user_hashed_password = $request->cookie('user_password');
     
             if ($user_phone && $user_hashed_password) {
                 $login_middleware_object = new login();
                 $status = $login_middleware_object->set_user_session($user_phone, $user_hashed_password);
             }
         }
     
         return  view('layout.master');
     }

      $products = $this->get_sample_products();

      $buyAds = $this->get_sample_buyAds();

      $categories = $this->get_all_categories();

      return view('layout.index',[
         'sample_products' => $products,
         'sample_buyAds' =>$buyAds,
         'categories' => $categories
      ]);
    }

    protected function _bot_detected() {

      return (
        isset($_SERVER['HTTP_USER_AGENT'])
        && preg_match('/bot|crawl|slurp|spider|mediapartners/i', $_SERVER['HTTP_USER_AGENT'])
      );
  }

   protected function get_sample_products()
   {
      $until_date = Carbon::now();
      $from_date = Carbon::now()->subDays(10); // last 2 weeks

      $products = DB::table('products')
                              ->join('myusers','myusers.id','=','products.myuser_id')
                              ->leftJoin('cities', 'cities.id', '=', 'products.city_id')
                              ->leftJoin('provinces', 'provinces.id', '=', 'cities.province_id')
                              ->where('products.confirmed', true)
                              ->whereBetween('products.created_at', [$from_date, $until_date])
                              ->select(['products.id', 'products.product_name', 'products.category_id', 'products.stock','myusers.first_name','myusers.last_name','cities.city_name','provinces.province_name','myusers.is_verified'])
                              ->orderBy('products.created_at', 'desc')
                              ->limit(10)
                              ->get()
                              ->shuffle()
                              ->slice(0, 9);

      $products->map(function ($product) {
         $category_info = $this->get_category_and_subcategory_name($product->category_id);

         $product->category_name = $category_info['category_name'];
         $product->subcategory_name = $category_info['subcategory_name'];
         $product->photo = product_media::where('product_id', $product->id)
                                             ->get()
                                             ->first()
                                             ->file_path ?? null;
      });

      return $products;
   }

   public function get_sample_buyAds()
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(7); // last 2 weeks

        $buyAds = DB::table('buy_ads')
                            ->join('myusers','myusers.id','=','buy_ads.myuser_id')
                            ->where('buy_ads.confirmed', true)
                            ->whereBetween('buy_ads.created_at', [$from_date, $until_date])
                            ->select(['buy_ads.id', 'buy_ads.name', 'buy_ads.requirement_amount', 'buy_ads.created_at', 'buy_ads.category_id','myusers.first_name','myusers.last_name'])
                            ->orderBy('buy_ads.created_at', 'desc')
                            ->limit(10)
                            ->get()
                            ->shuffle()
                            ->slice(0, 6);

        $date_convertor_object = new date_convertor();

        $buyAds->map(function ($buyAd) use ($date_convertor_object) {
            $category_info = $this->get_category_and_subcategory_name($buyAd->category_id);

            $buyAd->category_name = $category_info['category_name'];
            $buyAd->subcategory_name = $category_info['subcategory_name'];

            $buyAd->register_date = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);
        });

        return $buyAds;
    }

    protected function get_category_and_subcategory_name($subcategory_id)
    {
        $subcategory_record = category::where('id', $subcategory_id)
            ->select('category_name', 'parent_id')
            ->get()
            ->first();

        $category_record = category::where('id', $subcategory_record->parent_id)
            ->select('category_name')
            ->get()
            ->first();

        return [
            'category_name' => $category_record->category_name,
            'subcategory_name' => $subcategory_record->category_name,
        ];
    }

    protected function get_all_categories()
    {
        $all_categories = Cache::remember(md5('categories'),1,function(){
            return DB::table('categories')
                        ->leftJoin('products','products.category_id','=','categories.id')
                        ->select('categories.*',DB::raw('count(products.id) as score'))
                        ->groupBy('categories.id','categories.created_at','categories.updated_at','categories.category_name','categories.parent_id')
                        ->orderByRaw('score desc, categories.id')
                        ->get();
        });

        $categories = $all_categories->filter(function($category){
            return $category->parent_id == null;
        });

        $categories->each(function ($item) use($all_categories){
            // $item['subcategories'] = category::where('parent_id', $item->id)
            //     ->get();
            $other = null;
            $item->subcategories = $all_categories->filter(function($category) use($item,&$other){
                if($category->parent_id == $item->id && $category->category_name == 'سایر'){
                    $other = $category;
                    return false;
                }

                return $category->parent_id == $item->id;
            });

            $item->subcategories->each(function($item) use($all_categories){
                $other = null;
                $item->subcategories = $all_categories->filter(function($category) use($item,&$other){
                    if($category->parent_id == $item->id && $category->category_name == 'سایر'){
                        $other = $category;
                        return false;
                    }

                    return $category->parent_id == $item->id;
                });
            });
            

            if(! is_null($other)){
                ($item->subcategories)[] = $other;
            }
        });

        return $categories;
    }
}
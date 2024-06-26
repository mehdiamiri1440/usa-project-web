<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>{{url("/product-list/")}}</loc>
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
</url>

<url>
  <loc>{{url("about-us")}}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>

<url>
  <loc>{{url("privacy-and-policy")}}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>

<url>
  <loc>{{url("login")}}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.5</priority>
</url>

<url>
  <loc>{{url("register")}}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.5</priority>
</url>

@foreach($categories as $item)
    <url>
      <loc>{{url("product-list/category/".$item)}}</loc>
      <changefreq>daily</changefreq>
      <priority>0.5</priority>
    </url>
@endforeach
    
    
@foreach($products as $product)
    <url>
      <loc>{{url("product-view/" ."خرید-عمده-" . str_replace(' ','-',$product->sub_category_name)."/". str_replace(' ','-',$product->category_name) . "/" . $product->id)}}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
@endforeach

</urlset>

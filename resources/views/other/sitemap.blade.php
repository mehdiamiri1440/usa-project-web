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
      <loc>{{url("product-list/category/".$item->category_name)}}</loc>
      <changefreq>daily</changefreq>
      <priority>0.5</priority>
    </url>
@endforeach
    
    
@foreach($products as $product)
    <url>
      <loc>{{url("product-view/".str_replace(' ','-',$product['main']->category_name)."/"."خرید-عمده-".str_replace(' ','-',$product['main']->sub_category_name)."/".$product['main']->id)}}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
@endforeach

</urlset>

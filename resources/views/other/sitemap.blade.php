<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>{{url("master/product-list/")}}</loc>
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
  <changefreq>daily</changefreq>
  <priority>0.5</priority>
</url>

<url>
  <loc>{{url("register")}}</loc>
  <changefreq>daily</changefreq>
  <priority>0.5</priority>
</url>
    
@foreach($user_names as $user_name)
    <url>
      <loc>{{url("profile/".$user_name->user_name)}}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
@endforeach

</urlset>
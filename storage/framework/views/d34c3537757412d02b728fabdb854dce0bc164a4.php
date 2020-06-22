<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc><?php echo e(url("/product-list/")); ?></loc>
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
</url>

<url>
  <loc><?php echo e(url("about-us")); ?></loc>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>

<url>
  <loc><?php echo e(url("privacy-and-policy")); ?></loc>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>

<url>
  <loc><?php echo e(url("login")); ?></loc>
  <changefreq>monthly</changefreq>
  <priority>0.5</priority>
</url>

<url>
  <loc><?php echo e(url("register")); ?></loc>
  <changefreq>monthly</changefreq>
  <priority>0.5</priority>
</url>

<?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <url>
      <loc><?php echo e(url("product-list/category/".$item->category_name)); ?></loc>
      <changefreq>daily</changefreq>
      <priority>0.5</priority>
    </url>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    
    
<?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <url>
      <loc><?php echo e(url("product-view/".str_replace(' ','-',$product['main']->category_name)."/"."خرید-عمده-".str_replace(' ','-',$product['main']->sub_category_name)."/".$product['main']->id)); ?></loc>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

</urlset>
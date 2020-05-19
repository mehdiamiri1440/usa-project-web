
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v3').then((cache) => {
        return cache.addAll([
        //   '/assets/js/',
        //   'assets/js/bootstrap.min.js',
          '/assets/js/jquery-3.3.1.min.js',
          '/assets/js/jquery-ui.min.js',
          '/assets/css/placeholder-content.css',
          '/assets/css/bootstrap.min.css',
          '/assets/css/owl.carousel.min.css',
          '/css/app.css',
          '/assets/css/master/style.css',
          '/assets/js/ResizeSensor.js',
          '/index/js/jquery.magnific-popup.min.js',
          '/index/js/owl.carousel.min.js',
          '/assets/cdn/axios.js',
          '/assets/img/gif/prload.gif',
          '/assets/img/logo-Inco-mobile.png',
          '/assets/img/logo_dark.png',
          '/assets/img/new-logo-buskool.png',
          '/',
        ]);
      })
    );
  });


  self.addEventListener('fetch', (event) => {
    
    if(cacheSearchRequired(event.request.url) == true){
        console.log(event.request.url);
        event.respondWith(
            caches.match(event.request).then((response) => {
              return response || fetch(event.request);
            })
          );
    }
    
  });

  function cacheSearchRequired(url){
    if(url.includes('/js/') || url.includes('/css/') || url.includes('/fonts/') || url.includes('/cdn/') || url.includes('/assets/img/')){
        return true;
    }
    return false;
  }
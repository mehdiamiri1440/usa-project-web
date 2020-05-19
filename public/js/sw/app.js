// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js',{scope: '/'})
//     .then((reg) => {
//       // registration worked
//       if(reg.installing) {
//         console.log('Service worker installing');
//       } else if(reg.waiting) {
//         console.log('Service worker installed');
//       } else if(reg.active) {
//         // navigator.serviceWorker.unregister('../../sw.js',{scope: '../assets/js/'});
//         console.log('Service worker active',reg.scope);
//       }
//     }).catch((error) => {
//       // registration failed
//         console.log('Registration failed with ' + error);
//     });
//   }
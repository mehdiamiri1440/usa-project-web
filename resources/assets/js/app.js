
import Vue from 'vue'
import Axios from 'axios'
import Meta from 'vue-meta'
import store from './store'

require('./bootstrap');
//// require('./imageuploadify.min');
//// require('./owl.carousel.min.js');
//// require('./jquery.magnific-popup.min');
//// require('./stickySidebar');
// require('./ResizeSensor.js');
//// require('./sweetalert.min.js');



require('../css/placeholder-content.css')
require('../css/fontiran.css')
require('../css/all.min.css')
require('../css/bootstrap.min.css')
require('../css/bootstrap-theme.min.css')
require('../css/owl.carousel.min.css')
require('../css/owl.theme.default.min.css')
require('../css/magnific-popup.css')
require('../css/owl-custom-style.css')
require('../css/imageuploadify.min.css')
require('../css/cropper.css')
require('../css/master/style.css')
require('../css/popup.css')
require('../css/sweetalert.css')
require('../css/custom-animation.css')


window.Vue = require('vue');

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(require('vue-jalali-moment'));
Vue.use(Meta);


import RouteComponent from './router/components/route';

new Vue({
    el: '#app',
    store,
    components: {
        RouteComponent
    }
});



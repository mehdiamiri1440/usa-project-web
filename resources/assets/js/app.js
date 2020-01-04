
import Vue from 'vue'
import Axios from 'axios'
import Meta from 'vue-meta'
import store from './store'

require('./bootstrap');
require('./imageuploadify.min');
require('./jquery.magnific-popup.min');
require('./owl.carousel.min.js');

window.Vue = require('vue');

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(require('vue-jalali-moment'));
Vue.use(Meta);


import RouteComponent from './router/components/route'

new Vue({
    el: '#app',
    store,
    components: {
        RouteComponent
    }
});



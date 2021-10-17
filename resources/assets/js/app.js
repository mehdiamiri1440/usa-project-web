import Vue from 'vue'
window.axios = require('axios')
import Meta from 'vue-meta'
import LazyLoadDirective from "./directives/LazyLoadDirective";

window.$ = window.jQuery = require('jquery');
require('./custom.bootstrap.min.js')

Vue.config.productionTip = false;
Vue.use(require('vue-jalali-moment'));
Vue.use(Meta);
Vue.directive("lazyload", LazyLoadDirective);


import RouteComponent from './router/components/route';

new Vue({
    el: '#app',
    components: {
        RouteComponent
    }
});


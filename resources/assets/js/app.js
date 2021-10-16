import Vue from 'vue'
window.axios = require('axios')
import Meta from 'vue-meta'


window.$ = window.jQuery = require('jquery');


Vue.config.productionTip = false;
Vue.use(require('vue-jalali-moment'));
Vue.use(Meta);


import RouteComponent from './router/components/route';

new Vue({
    el: '#app',
    components: {
        RouteComponent
    }
});


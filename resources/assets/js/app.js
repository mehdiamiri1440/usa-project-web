
import Vue from 'vue'
import Axios from 'axios'
import Meta from 'vue-meta'
// import VueAB from 'vue-a2b'

require('./bootstrap');

window.Vue = require('vue');

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(require('vue-jalali-moment'));
Vue.use(Meta);
// Vue.use(VueAB)


import RouteComponent from './router/components/route';

new Vue({
    el: '#app',
    components: {
        RouteComponent
    }
});



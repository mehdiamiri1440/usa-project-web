
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./imageuploadify.min');
require('./jquery.magnific-popup.min');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


import loginCom from './components/login/Login.vue';
import headerDashSeller from './components/dashboard/seller/header/header.vue';
import headerDashBuyer from './components/dashboard/buyer/header/header.vue';
import productBasic from './components/dashboard/seller/product/product-basic.vue';
import mySellOffers from './components/dashboard/seller/request/my-sell-offers.vue';
import profileBasic from './components/dashboard/seller/profile/profile_basic.vue'
import transitionSeller from './components/dashboard/seller/transaction/transaction.vue';
import router from './router/seller_route'
import routerB from './router/buyer_route'




Vue.component('step1', {
    template: '#step1',
    props: [
        'currentStep',
        'step1'
    ]
});
Vue.component('step2', {
    template: '#step2',
    props: [
        'currentStep',
        'step2'
    ]
});
Vue.component('step3', {
    template: '#step3',
    props: [
        'currentStep',
        'step1',
        'step2'
    ]
});
Vue.component('step4', {
    template: '#step3',
    props: [
        'currentStep',
        'step1',
        'step2'
    ]
});
Vue.component('step1S1', {
    template: '#step1S1'
});

Vue.component('step1S2', {
    template: '#step1S2'
});

Vue.component('step1S3', {
    template: '#step1S3'
});




export const eventBus = new Vue();

const app = new Vue({
    el: '#app',
    router,
    routerB,
    components:{
        profileBasic,
        loginCom,
        headerDashSeller,
        headerDashBuyer,
        productBasic,
        mySellOffers,
        transitionSeller
    }
});

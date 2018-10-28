
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

import Axios from 'axios'
Vue.prototype.$http = Axios;

import loginComponent from './components/login/Login.vue';
import registerComponent from './components/register/register.vue';
import headerDashSeller from './components/dashboard/seller/header/header.vue';
import headerDashBuyer from './components/dashboard/buyer/header/header.vue';
import profileBasic from './components/dashboard/seller/profile/profile_basic.vue'
import router from './router/dashboard_router'



router.push({
    response(resp) {
        // Check if the user is no longer signed in,
        // if so then we need them to sign back in.
        if (resp.status === 302) {
            window.location.href = '/login';

            return;
        }

        return resp;
    }
});


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




function checkProfileConfermation(){
    axios.post('/user/profile_info',{
        confirmed : true
    })
        .then(function(response){
            if(response.data.profile.confirmed == false){

                console.log("toye yek");
                return false;
                // $('#myModal-1').modal('show');
            }
            else if(response.data.user_info.contract_confirmed == false){
                // $('#myModal-1').modal('show');
                console.log("toye do");
                return false;
            }
            else{
                console.log("toye se");
                // window.location.href = url;
                return true;
            }

        });
}


export const eventBus = new Vue();

const app = new Vue({
    el: '#app',
    router,
    components:{
        profileBasic,
        loginComponent,
        registerComponent,
        headerDashSeller,
        headerDashBuyer,
    }
});

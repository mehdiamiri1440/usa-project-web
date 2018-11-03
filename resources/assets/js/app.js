


import Vue from 'vue'
import router from './router/dashboard_router'
import Axios from 'axios'
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
import loginComponent from './components/login/Login.vue';
import registerComponent from './components/register/register.vue';
import headerDashSeller from './components/dashboard/seller/header/header.vue';
import headerDashBuyer from './components/dashboard/buyer/header/header.vue';
import AppSeller from './components/AppSeller'
import AppBuyer from './components/AppBuyer'

/*

new Vue({
    components:{
        profileBasic,
        loginComponent,
        registerComponent,
        headerDashSeller,
        headerDashBuyer,
    },
    router,
}).$mount('#app');

*/

 new Vue({
    components:{
        loginComponent,
        registerComponent,
        headerDashSeller,
        headerDashBuyer,
    },
    router,
}).$mount('#app');





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


    $( window ).on( "load", function() {
        console.log( "window loaded" );
    });




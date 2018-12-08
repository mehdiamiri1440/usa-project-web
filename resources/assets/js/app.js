


import Vue from 'vue'
import router from './router/dashboard_router'
import Axios from 'axios'

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;


import AppSeller from './components/AppSeller'
import AppBuyer from './components/AppBuyer'
import loginComponent from './components/login/Login.vue';
import registerComponent from './components/register/register.vue';






 new Vue({
     el:'#app',
    components:{
        loginComponent,
        registerComponent,
    },
    router,
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




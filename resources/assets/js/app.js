


import Vue from 'vue'
import router from './router/dashboard_router'
import Axios from 'axios'
import Meta from 'vue-meta'

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(require('vue-jalali-moment'));
Vue.use(Meta);

import AppSeller from './components/AppSeller'
import AppBuyer from './components/AppBuyer'
import AppLayouts from './components/AppLayouts'
import loginComponent from './components/login/Login.vue';
import registerComponent from './components/register/register.vue';
// import productVue from './components/product_view'



var visible = false;
new Vue({
    el: '#app',
    components: {
        loginComponent,
        registerComponent,
        // productVue
    },
    methods: {
        collapseDropDown: function () {
            $(".profile-list").fadeIn("slow", function () {
                visible = true;
            });
        },
        collapseDropDownList: function () {
            $(".icon-header-list").fadeIn("slow", function () {
                visible = true;
            });
        },
        documentClick(e) {
            if (visible) {
                $('.profile-list').fadeOut("slow");
                $('.icon-header-list').fadeOut("slow");
                visible = false;
            }
        },
    },
    created() {
        document.addEventListener('click', this.documentClick)
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




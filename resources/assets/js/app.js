// const Vue = require('vue');
import { createApp } from 'vue'
import Axios from 'axios'
import { createMetaManager } from 'vue-meta'
import { createRouter, createWebHistory } from "vue-router";
import routes from './router/router.js'
import $ from "jquery";
require('./bootstrap');

import RouteComponent from './router/components/route.vue';
// import RouteComponent from './router/components/route-test.vue';


const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        // if (savedPosition) {
        //     JSON.stringify(localStorage.setItem('scroll', savedPosition.y));
        //     return savedPosition
        // }
        return { x: 0, y: 0 };
    },
})

const app = createApp({
    components: {
        RouteComponent
    }
})

app.provide('$http', Axios)
app.config.productionTip = false;
// app.use(require('vue-jalali-moment'));
app.use(createMetaManager());
app.use(router);



app.mount("#app")



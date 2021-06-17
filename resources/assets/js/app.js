import { createApp } from 'vue'
import Axios from 'axios'
import store from "./store"
import vue3JalaliMoment from "vue3-jalali-moment"
import router from './router/router.js'

require('./bootstrap');

import RouteComponent from './router/components/route.vue';

const app = createApp({
    components: {
        RouteComponent
    }
})

app.provide('$http', Axios)
app.config.productionTip = false;
app.use(vue3JalaliMoment);


// set default meta before route to dynamic pages
router.beforeEach((to, from, next) => {
    store.commit('routeStore/setMeta', { meta: store.state.routeStore.defaultMetaInfo })
    next();
})


app.use(store);
app.use(router);


app.mount("#app")



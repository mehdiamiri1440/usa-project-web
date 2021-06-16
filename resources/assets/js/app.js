import { createApp } from 'vue'
import Axios from 'axios'
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'
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

app.use(store);
app.use(vue3JalaliMoment);
app.use(createMetaManager())
app.use(metaPlugin)
app.use(router);

app.mount("#app")



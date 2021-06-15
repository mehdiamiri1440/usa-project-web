import { createStore } from 'vuex';

import routeStore from './modules/route.store';
import messagesStore from './modules/messages.store';
import dashboardStore from './modules/dashboard.store';

export default createStore({
    modules: {
        routeStore,
        messagesStore,
        dashboardStore
    },
})
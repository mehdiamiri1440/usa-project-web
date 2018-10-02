import Vue from 'vue'
import Router from 'vue-router'

// components

// profile components
import profileBasic from '../components/dashboard/seller/profile/profile_basic.vue'
import compelementry from '../components/dashboard/seller/profile/profile_complete.vue'
import profileContract from '../components/dashboard/seller/profile/profile_contract.vue'
import buyAdRequests from '../components/dashboard/seller/request/buyAd-requests.vue'
import mySellOffers from '../components/dashboard/seller/request/my-sell-offers.vue'
import registerProduct from '../components/dashboard/seller/product/product-basic.vue'
import myTransactions from '../components/dashboard/buyer/transaction/my-transactions.vue';
import myTerminatedTransactions from '../components/dashboard/seller/transaction/my-terminated-transactions.vue';
import guide from '../components/dashboard/seller/guide.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'profileBasic',
            component: profileBasic,
        }
        , {
            path: '/complementry',
            name: 'compelementry',
            component: compelementry,
        },{
            path: '/profile_contract',
            name: 'profileContract',
            component: profileContract,
        },{
            path: '/buyAd-requests',
            name: 'buyAdRequests',
            component: buyAdRequests,
        }
        , {
            path: '/my-sell-offers',
            name: 'mySellOffers',
            component: mySellOffers,
        }
        , {
            path: '/register-product',
            name: 'registerProduct',
            component: registerProduct,
        }
        , {
            path: '/transaction-list',
            name: 'myTransactions',
            component: myTransactions,
        }
        , {
            path: '/my-terminated-transactions',
            name: 'myTerminatedTransactions',
            component: myTerminatedTransactions,
        }
        , {
            path: '/guide',
            name: 'guide',
            component: guide,
        }

    ],
})

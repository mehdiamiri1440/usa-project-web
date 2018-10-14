import Vue from 'vue'
import buyerRouter from 'vue-router'

// components

// profile components
import profileBasic from '../components/dashboard/buyer/profile/profile_basic.vue'
import compelementry from '../components/dashboard/buyer/profile/profile_complete.vue'
import profileContract from '../components/dashboard/buyer/profile/profile_contract.vue'
import buyAdRequests from '../components/dashboard/buyer/request/buyAd-requests.vue'
import buyAdRequestsDetail from '../components/dashboard/buyer/request/buyAd-requests-detail.vue'
import mySellOffers from '../components/dashboard/buyer/request/my-sell-offers.vue'
import registerProduct from '../components/dashboard/buyer/product/product-basic.vue'
import myTransactions from '../components/dashboard/buyer/transaction/my-transactions.vue';
import myTerminatedTransactions from '../components/dashboard/buyer/transaction/my-terminated-transactions.vue';
import transactionDetail from '../components/dashboard/buyer/transaction/transaction.vue';
import transactionReport from '../components/dashboard/buyer/transaction/transactionReport';
import guide from '../components/dashboard/buyer/guide.vue';
Vue.use(buyerRouter);

export default new buyerRouter({
    routes: [
        {
            path: '/',
            name: 'profileBasic',
            component: profileBasic,
            params:{
                active : 1
            }
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
            props: true
        },{
            path: '/buyAd-request-detail/:id',
            name: 'buyAdRequestsDetail',
            component: buyAdRequestsDetail,
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
            path: '/terminated-transaction-list',
            name: 'myTerminatedTransactions',
            component: myTerminatedTransactions,
        }
        ,{
            path: '/transaction-detail/:id',
            name: 'transactionDetail',
            component: transactionDetail,
        }
        ,{
            path: '/transaction-report/:id',
            name: 'transactionReport',
            component: transactionReport,
        }
        , {
            path: '/guide',
            name: 'guide',
            component: guide,
        }

    ],
})

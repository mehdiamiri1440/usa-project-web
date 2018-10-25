import Vue from 'vue'
import routerSeller from 'vue-router'

// components

// profile components
import profileBasic from '../components/dashboard/seller/profile/profile_basic.vue'
import password from '../components/dashboard/seller/profile/forgat_password.vue'
import compelementry from '../components/dashboard/seller/profile/profile_complete.vue'
import profileContract from '../components/dashboard/seller/profile/profile_contract.vue'
import buyAdRequests from '../components/dashboard/seller/request/buyAd-requests.vue'
import buyAdRequestsDetail from '../components/dashboard/seller/request/buyAd-requests-detail.vue'
import mySellOffers from '../components/dashboard/seller/request/my-sell-offers.vue'
import registerProduct from '../components/dashboard/seller/product/product-basic.vue'
import myTransactions from '../components/dashboard/seller/transaction/my-transactions.vue';
import myTerminatedTransactions from '../components/dashboard/seller/transaction/my-terminated-transactions.vue';
import transactionDetail from '../components/dashboard/seller/transaction/transaction.vue';
import transactionReport from '../components/dashboard/seller/transaction/transactionReport';
import guide from '../components/dashboard/seller/guide.vue';
import NotFound from '../components/dashboard/page-not-found.vue';
Vue.use(routerSeller);




export default new routerSeller({
    routes: [
        {
            path: '*',
            name: 'pageNotFound',
            component: NotFound

        }
        , {
            path: '/password',
            name: 'password',
            component: password,
            params:{
                active : 1
            }
        }
        , {
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
        }
        , {
            path: '/profile_contract',
            name: 'profileContract',
            component: profileContract,
        }
        , {
            path: '/buyAd-requests',
            name: 'buyAdRequests',
            component: buyAdRequests,
            props: true
        }
        , {
            path: '/buyAd-request-detail/:id',
            name: 'buyAdRequestsDetail',
            component: buyAdRequestsDetail,
            params:{
                active : 2
            }
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
        , {
            path: '/transaction-detail/:id',
            name: 'transactionDetail',
            component: transactionDetail,
            params:{
                active : 4
            }
        }
        , {
            path: '/transaction-report/:id',
            name: 'transactionReport',
            component: transactionReport,
            params:{
                active : 5
            }
        }
        , {
            path: '/guide',
            name: 'guide',
            component: guide,
        }

    ],
})

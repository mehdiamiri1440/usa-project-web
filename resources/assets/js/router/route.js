import Vue from 'vue'
import router from 'vue-router'



// Seller Components
import sellerProfileBasic from '../components/dashboard/seller/profile/profile_basic.vue'
import sellerChangePassword from '../components/dashboard/seller/profile/forgat_password.vue'
import sellerCompelementry from '../components/dashboard/seller/profile/profile_complete.vue'
import sellerProfileContract from '../components/dashboard/seller/profile/profile_contract.vue'
import sellerBuyAdRequests from '../components/dashboard/seller/request/buyAd-requests.vue'
import sellerBuyAdRequestsDetail from '../components/dashboard/seller/request/buyAd-requests-detail.vue'
import sellerMySellOffers from '../components/dashboard/seller/request/my-sell-offers.vue'
import sellerRegisterProduct from '../components/dashboard/seller/product/product-basic.vue'
import sellerMyTransactions from '../components/dashboard/seller/transaction/my-transactions.vue';
import sellerMyTerminatedTransactions from '../components/dashboard/seller/transaction/my-terminated-transactions.vue';
import sellerTransactionDetail from '../components/dashboard/seller/transaction/transaction.vue';
import sellerTransactionReport from '../components/dashboard/seller/transaction/transactionReport';
import sellerGuide from '../components/dashboard/seller/guide.vue';
import sellerNotFound from '../components/dashboard/page-not-found.vue';

// profile components
import profileBasic from '../components/dashboard/seller/profile/profile_basic.vue'
import password from '../components/dashboard/seller/profile/change_password.vue'
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



// Buyer Components
import buyerProfileBasic from '../components/dashboard/buyer/profile/profile_basic.vue'
import buyerChangePassword from '../components/dashboard/seller/profile/forgat_password.vue'
import buyerCompelementry from '../components/dashboard/buyer/profile/profile_complete.vue'
import buyerProfileContract from '../components/dashboard/buyer/profile/profile_contract.vue'
import buyerBuyAdRequests from '../components/dashboard/buyer/request/buyAd-requests.vue'
import buyerBuyAdRequestsDetail from '../components/dashboard/buyer/request/buyAd-requests-detail.vue'
import buyerMySellOffers from '../components/dashboard/buyer/request/my-sell-offers.vue'
import buyerRegisterProduct from '../components/dashboard/buyer/product/product-basic.vue'
import buyerMyTransactions from '../components/dashboard/buyer/transaction/my-transactions.vue';
import buyerMyTerminatedTransactions from '../components/dashboard/buyer/transaction/my-terminated-transactions.vue';
import buyerTransactionDetail from '../components/dashboard/buyer/transaction/transaction.vue';
import buyerTransactionReport from '../components/dashboard/buyer/transaction/transactionReport';
import buyerGuide from '../components/dashboard/buyer/guide.vue';


Vue.use(router);


export default new router({
    routes: [
        {
            path: '*',
            name: 'pageNotFound',
            components: {
                seller: sellerNotFound,
            },

        }
        , {
            path: '/password',
            name: 'password',
            components: {
                seller: sellerChangePassword,
                buyer: buyerChangePassword,
            },
            params: {
                active: 1
            }
        }
        , {
            path: '/',
            name: 'profileBasic',
            components: {
                seller: sellerProfileBasic,
                buyer: buyerProfileBasic,
            },
            params: {
                active: 1
            }
        }
        , {
            path: '/complementry',
            name: 'compelementry',
            components: {
                seller: sellerCompelementry,
                buyer: buyerCompelementry,
            },
        }
        , {
            path: '/profile_contract',
            name: 'profileContract',
            components: {
                seller: sellerProfileContract,
                buyer: buyerProfileContract,
            },
        }
        , {
            path: '/buyAd-requests',
            name: 'buyAdRequests',
            components: {
                seller: sellerBuyAdRequests,
                buyer: buyerBuyAdRequests,
            },
            props: true
        }
        , {
            path: '/buyAd-request-detail/:id',
            name: 'buyAdRequestsDetail',
            components: {
                seller: sellerBuyAdRequestsDetail,
                buyer: buyerBuyAdRequestsDetail,
            },
            params: {
                active: 2
            }
        }
        , {
            path: '/my-sell-offers',
            name: 'mySellOffers',
            components: {
                seller: sellerMySellOffers,
                buyer: buyerMySellOffers,
            },
        }
        , {
            path: '/register-product',
            name: 'registerProduct',
            components: {
                seller: sellerRegisterProduct,
                buyer: buyerRegisterProduct,
            },
        }
        , {
            path: '/transaction-list',
            name: 'myTransactions',
            components: {
                seller: sellerMyTransactions,
                buyer: buyerMyTransactions,
            },
        }
        , {
            path: '/terminated-transaction-list',
            name: 'myTerminatedTransactions',
            components: {
                seller: sellerMyTerminatedTransactions,
                buyer: buyerMyTerminatedTransactions,
            },
        }
        , {
            path: '/transaction-detail/:id',
            name: 'transactionDetail',
            components: {
                seller: sellerTransactionDetail,
                buyer: buyerTransactionDetail,
            },
            params: {
                active: 4
            }
        }
        , {
            path: '/transaction-report/:id',
            name: 'transactionReport',
            components: {
                seller: sellerTransactionReport,
                buyer: buyerTransactionReport,
            },
            params: {
                active: 5
            }
        }
        , {
            path: '/guide',
            name: 'guide',
            components: {
                seller: sellerGuide,
                buyer: buyerGuide,
            },
        }

    ],
})

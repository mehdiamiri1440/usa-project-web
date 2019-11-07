import Vue from 'vue'
import Router from 'vue-router'

window.Vue = require('vue');

Vue.use(Router);


// Layout Components
import indexPage from '../components/layouts/main/index'
import productList from '../components/layouts/main/product_list'
import productCategory from '../components/layouts/main/product_category'
import productView from '../components/layouts/main/product_components/product_view'
import indexPrivacyAndPolicy from '../components/layouts/main/privacy_and_policy'
import indexAboutUs from '../components/layouts/main/about_us'
import help from '../components/layouts/main/help'
import contactUs from '../components/layouts/main/contact_us'
import profile from '../components/layouts/main/profile'
import pricingTable from '../components/layouts/main/pricing-page'

// Login & Register Components
import register from '../components/register/register'
import login from '../components/login/Login'


// Seller Components
import sellerProfileBasic from '../components/dashboard/seller/profile/profile_basic.vue'
import sellerChangePassword from '../components/dashboard/seller/profile/change_password.vue'
import sellerComplementary from '../components/dashboard/seller/profile/profile_complete.vue'
import sellerProfileContract from '../components/dashboard/seller/profile/profile_contract.vue'
import sellerBuyAdRequests from '../components/dashboard/seller/request/buyAd-requests.vue'
import sellerBuyAdRequestsDetail
    from '../components/dashboard/seller/request/buyAd-requests-detail.vue'
import sellerMySellOffers from '../components/dashboard/seller/request/my-sell-offers.vue'
import sellerRegisterProduct from '../components/dashboard/seller/product/product-basic.vue'
import sellerMyTransactions from '../components/dashboard/seller/transaction/my-transactions.vue';
import sellerMyTerminatedTransactions
    from '../components/dashboard/seller/transaction/my-terminated-transactions.vue';
import sellerTransactionDetail from '../components/dashboard/seller/transaction/transaction.vue';
import sellerTransactionReport from '../components/dashboard/seller/transaction/transactionReport';
import sellerGuide from '../components/dashboard/seller/guide.vue';
import myProducts from '../components/dashboard/seller/product/my_products';
import sellerStatus from '../components/dashboard/seller/dashboard/status.vue';


// Buyer Components
import buyerProfileBasic from '../components/dashboard/buyer/profile/profile_basic.vue'
import buyerChangePassword from '../components/dashboard/seller/profile/change_password.vue'
import buyerComplementary from '../components/dashboard/buyer/profile/profile_complete.vue'
import buyerProfileContract from '../components/dashboard/buyer/profile/profile_contract.vue'
//import buyerRequests from '../components/dashboard/buyer/request/request'
import buyerMyBuyAd from '../components/dashboard/buyer/request/my-buyAd'
import buyerRgisterRequest from '../components/dashboard/buyer/request/register-request'
import buyerSellOfferDetail from '../components/dashboard/buyer/request/sell-offer-detail'
import buyerMyTransactions from '../components/dashboard/buyer/transaction/my-transactions.vue';
import buyerPayedFactorList from '../components/dashboard/buyer/transaction/payed-factor-list';
import buyerFactorDetail from '../components/dashboard/buyer/transaction/factor-detail';
import buyerPaymentError from '../components/dashboard/buyer/transaction/payment-error';
import buyerMyTerminatedTransactions
    from '../components/dashboard/buyer/transaction/my-terminated-transactions.vue';
import buyerTransactionDetail from '../components/dashboard/buyer/transaction/transaction.vue';
import buyerTransactionReport
    from '../components/dashboard/buyer/transaction/transaction-report-detail';
import buyerGuide from '../components/dashboard/buyer/guide.vue';

// dashboard main
import messages from '../components/dashboard/message'
import dashboardPricingTable from '../components/dashboard/dashboard-pricing-table';


import MasterRoute from './components/masterRoute'
import BuyerDashboard from './components/buyerDashboard'
import SellerDashboard from './components/sellerDashboard'


// Errors Components
import notFound from '../components/errors/404'


export const eventBus = new Vue();


const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/seller',
            components: {
                seller: SellerDashboard
            },
            redirect: '/404',
            children: [
                 {
                     path: 'password',
                     name: 'passwordSeller',
                     components: {
                         default: sellerChangePassword,
                     },
                 },
                {
                    path: 'status',
                    name: 'statusSeller',
                    components: {
                        default: sellerStatus,
                    }

                },
                {
                    path: 'pricing',
                    name: 'dashboardPricingTableSeller',
                    components: {
                        default: dashboardPricingTable,
                    },
                },
                {
                    path: 'profile',
                    name: 'profileBasicSeller',
                    components: {
                        default: sellerProfileBasic,
                    },
                }
                , {
                    path: 'complementary',
                    name: 'complementarySeller',
                    components: {
                        default: sellerComplementary,
                    },
                },
                {
                    path: 'messages',
                    name: 'messagesSeller',
                    components: {
                        default: messages,
                    },
                },
                {
                    path: 'buyAd-requests',
                    name: 'buyAdRequestsSeller',
                    components: {
                        default: sellerBuyAdRequests,
                    },
                },
                {
                    path: 'my-products',
                    name: 'myProductsSeller',
                    components: {
                        default: myProducts,
                    },
                }, {
                    path: 'buyAd-request-detail/:id',
                    name: 'buyAdRequestsDetailSeller',
                    components: {
                        default: sellerBuyAdRequestsDetail,
                    },
                }
                , {
                    path: 'my-sell-offers',
                    name: 'mySellOffersSeller',
                    components: {
                        default: sellerMySellOffers,
                    },
                }
                , {
                    path: 'register-product',
                    name: 'registerProductSeller',
                    components: {
                        default: sellerRegisterProduct,
                    },
                }
                , {
                    path: 'transaction-list',
                    name: 'myTransactionsSeller',
                    components: {
                        default: sellerMyTransactions,
                    },
                }
                , {
                    path: 'terminated-transaction-list',
                    name: 'myTerminatedTransactionsSeller',
                    components: {
                        default: sellerMyTerminatedTransactions,
                    },
                }
                , {
                    path: 'transaction-detail/:id',
                    name: 'transactionDetailSeller',
                    components: {
                        default: sellerTransactionDetail,
                    }
                },
                {
                    path: 'instant-transaction-detail/:id',
                    name: 'instantTransactionDetailSeller',
                    components: {
                        default: sellerTransactionDetail,
                    },
                },
                {
                    path: 'transaction-report/:id',
                    name: 'transactionReportSeller',
                    components: {
                        default: sellerTransactionReport,
                    }
                },
                {
                    path: 'instant-transaction-report/:id',
                    name: 'instantTransactionReportSeller',
                    components: {
                        default: sellerTransactionReport,
                    }
                },
                {
                    path: 'guide',
                    name: 'guideSeller',
                    components: {
                        default: sellerGuide,
                    },
                }
            ],
            beforeEnter: (to, from, next) => {
                var userId = window.localStorage.getItem('userId');
                var userType = window.localStorage.getItem('userType');
                if (userId && userType == 1) next();
                else next('/login');
            }
        },
        {
            path: '/buyer',
            components: {
                buyer: BuyerDashboard
            },
            redirect: '/404',
            children: [
                 {
                     path: 'password',
                     name: 'passwordBuyer',
                     components: {
                         default: buyerChangePassword,
                     },
                 },
                {
                    path: 'profile',
                    name: 'profileBasicBuyer',
                    components: {
                        default: buyerProfileBasic,
                    },
                },
                {
                    path: 'complementary',
                    name: 'complementaryBuyer',
                    components: {
                        default: buyerComplementary,
                    },
                },
                {
                    path: 'messages',
                    name: 'messagesBuyer',
                    components: {
                        default: messages,
                    },
                },
                {
                    path: 'register-request',
                    name: 'registerRequestBuyer',
                    components: {
                        default: buyerRgisterRequest,
                    },
                },
                 {
                    path: 'sell-offer-detail/:id',
                    name: 'buyerSellOfferDetailBuyer',
                    components: {
                        default: buyerSellOfferDetail,
                    },

                },
                {
                    path: 'my-buyAds',
                    name: 'myBuyAdsBuyer',
                    components: {
                        default: buyerMyBuyAd,
                    },
                }

                , {
                    path: 'transaction-list',
                    name: 'myTransactionsBuyer',
                    components: {
                        default: buyerMyTransactions,
                    },
                }
                , {
                    path: 'terminated-transaction-list',
                    name: 'myTerminatedTransactionsBuyer',
                    components: {
                        default: buyerMyTerminatedTransactions,
                    },
                }
                , {
                    path: 'payed-factor-list',
                    name: 'PayedFactorListBuyer',
                    components: {
                        default: buyerPayedFactorList,
                    },
                }
                , {
                    path: 'factor-detail/:id',
                    name: 'buyerFactorDetailBuyer',
                    components: {
                        default: buyerFactorDetail,
                    },
                }
                , {
                    path: 'instant-factor-detail/:id',
                    name: 'buyerInstantFactorDetailBuyer',
                    components: {
                        default: buyerFactorDetail,
                    },
                }
                , {
                    path: 'transaction-detail/:id',
                    name: 'transactionDetailBuyer',
                    components: {
                        default: buyerTransactionDetail,
                    }
                },
                {
                    path: 'instant-transaction-detail/:id',
                    name: 'instantTransactionDetailBuyer',
                    components: {
                        default: buyerTransactionDetail,
                    },
                },
                {
                    path: 'transaction-report/:id',
                    name: 'transactionReportBuyer',
                    components: {
                        default: buyerTransactionReport,
                    }
                },
                {
                    path: 'instant-transaction-report/:id',
                    name: 'instantTransactionReportBuyer',
                    components: {
                        default: buyerTransactionReport,
                    }
                },
                {
                    path: 'guide',
                    name: 'guideBuyer',
                    components: {
                        default: buyerGuide,
                    },
                }
            ],
            beforeEnter: (to, from, next) => {
                var userId = window.localStorage.getItem('userId');
                var userType = window.localStorage.getItem('userType');
                 if (userId && userType == 0 ) next();
                else next('/login');
            }
        },
        {
            path: '/',
            components: {
                default: MasterRoute,
            },
            children: [
                {
                    path: '/',
                    name: 'indexPage',
                    components: {
                        default: indexPage,
                    }
                },
                {
                    path: 'about-us',
                    name: 'aboutUs',
                    components: {
                        default: indexAboutUs,
                    },
                },
                {
                    path: 'help',
                    name: 'help',
                    components: {
                        default: help,
                    },
                },
                {
                    path: 'contact-us',
                    name: 'contactUs',
                    components: {
                        default: contactUs,
                    },
                },
                {
                    path: 'privacy-and-policy',
                    name: 'privacyAndPolicy',
                    components: {
                        default: indexPrivacyAndPolicy,
                    },
                },
                {
                    path: 'product-list',
                    name: 'productList',
                    components: {
                        default: productList,
                    },
                },
                {
                    path: 'product-view/:categoryName/:subCategoryName/:id',
                    name: 'productView',
                    components: {
                        default: productView,
                    },
                },
                {
                    path: 'product-list/:searchText',
                    name: 'productListSearch',
                    components: {
                        default: productList,
                    },
                },
                {
                    path: 'product-list/category/:categoryName',
                    name: 'productCategory',
                    components: {
                        default: productCategory,
                    },
                },
                {
                    path: 'profile/:user_name',
                    name: 'profile',
                    components: {
                        default: profile,
                    },
                },
                {
                    path: 'login',
                    name: 'login',
                    components: {
                        default: login,
                    },
                },
                {
                    path: 'register',
                    name: 'register',
                    components: {
                        default: register,
                    },
                },
                {
                    path: 'pricing',
                    name: 'pricing',
                    components: {
                        default: pricingTable,
                    },
                },
            ],
        },
        {
            path: '/404',
            name: 'notFound',
            components: {
                default: notFound,
            },
        },
        {
            path: '/*',
            beforeEnter: (to, from, next) => {
                next('/404')
            }
        },

    ],
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }


});
export default router;




import Vue from 'vue'
import Router from 'vue-router'



require('../bootstrap');
require('../imageuploadify.min');
require('../jquery.magnific-popup.min');
require('../owl.carousel.min.js');
window.Vue = require('vue');

// Seller Components
import sellerProfileBasic from '../components/dashboard/seller/profile/profile_basic.vue'
import sellerChangePassword from '../components/dashboard/seller/profile/change_password.vue'
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
import myProducts from '../components/dashboard/seller/product/my_products';


// Buyer Components
import buyerProfileBasic from '../components/dashboard/buyer/profile/profile_basic.vue'
import buyerChangePassword from '../components/dashboard/seller/profile/change_password.vue'
import buyerCompelementry from '../components/dashboard/buyer/profile/profile_complete.vue'
import buyerProfileContract from '../components/dashboard/buyer/profile/profile_contract.vue'
//import buyerRequests from '../components/dashboard/buyer/request/request'
import buyerMyBuyAd from '../components/dashboard/buyer/request/my-buyAd'
import buyerRgisterRequest from '../components/dashboard/buyer/request/register-request'
import buyerSellOfferDetail from '../components/dashboard/buyer/request/sell-offer-detail'
import buyerMyTransactions from '../components/dashboard/buyer/transaction/my-transactions.vue';
import buyerPayedFactorList from '../components/dashboard/buyer/transaction/payed-factor-list';
import buyerFactorDetail from '../components/dashboard/buyer/transaction/factor-detail';
import buyerPaymentError from '../components/dashboard/buyer/transaction/payment-error';
import buyerMyTerminatedTransactions from '../components/dashboard/buyer/transaction/my-terminated-transactions.vue';
import buyerTransactionDetail from '../components/dashboard/buyer/transaction/transaction.vue';
import buyerTransactionReport from '../components/dashboard/buyer/transaction/transaction-report-detail';
import buyerGuide from '../components/dashboard/buyer/guide.vue';


import messages from '../components/dashboard/message'

// Layout Components
import indexPage from '../components/layouts/main/index'
import productList from '../components/layouts/main/product_list'
import productView from '../components/layouts/main/product_view'
import indexPrivacyAndPolicy from '../components/layouts/main/privacy_and_policy'
import indexAboutUs from '../components/layouts/main/about_us'
import help from '../components/layouts/main/help'
import contactUs from '../components/layouts/main/contact_us'
import profile from '../components/layouts/main/profile'
import pricing from '../components/layouts/main/pricing_page'


// Login & Register Components
import register from '../components/register/register'
import login from '../components/login/Login'



// Errors Components
import notFound from '../components/errors/404'




Vue.use(Router);


export const eventBus = new Vue();

const myRouter =  new Router({
    mode:'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/',
            name: 'indexPage',
            components: {
                layouts: indexPage,
            },
        },
        {
            path: '/about-us',
            name: 'aboutUs',
            components: {
                layouts: indexAboutUs,
            },
        },
        {
            path: '/help',
            name: 'help',
            components: {
                layouts: help,
            },
        },
        {
            path: '/contact-us',
            name: 'contactUs',
            components: {
                layouts: contactUs,
            },
        },
        {
            path: '/privacy-and-policy',
            name: 'privacyAndPolicy',
            components: {
                layouts: indexPrivacyAndPolicy,
            },
        },
        {
            path: '/product-list',
            name: 'productList',
            components: {
                layouts: productList,
            },
        },
        {
            path: '/product-view/:categoryName/:subCategoryName/:id',
            name: 'productView',
            components: {
                layouts: productView,
            },
        },
        {
            path: '/product-list/:searchText',
            name: 'productListSearch',
            components: {
                layouts: productList,
            },
        },
        {
            path: '/profile/:user_name',
            name: 'profile',
            components: {
                layouts: profile,
            },
        },
      {
            path: '/dashboard/password',
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
            path: '/dashboard/profile',
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
            path: '/dashboard/complementry',
            name: 'compelementry',
            components: {
                seller: sellerCompelementry,
                buyer: buyerCompelementry,
            },
        },
        {
            path: '/dashboard/messages',
            name: 'messages',
            components: {
                seller: messages,
                buyer: messages,
            },
        },

//        {
//            path: '/profile_contract',
//            name: 'profileContract',
//            components: {
//                seller: sellerProfileContract,
//                buyer: buyerProfileContract,
//            },
//            beforeEnter: async (to, from, next) => {
//
//                axios.post('/user/profile_info',{
//                    confirmed : true
//                })
//                .then(function(response){
//                    if(response.data.profile.confirmed == false){
//                        next(false);
//                        // $('#myModal-1').modal('show');
//                    }
//                    else{
//                        next();
//                    }
//
//                });
//            },
//        },
         {
            path: '/dashboard/buyAd-requests',
            name: 'buyAdRequests',
            components: {
                seller: sellerBuyAdRequests,
            },
            props: true,
//            beforeEnter: async (to, from, next) => {
//                console.log('test');
//                axios.post('/is_allowed_to_access_buyAd_requests')
//                .then(function(response){
//                    if(response.data.access_to_buyAd_requests == false){
//                        next(false);
//                    $('#myModal-2').modal('show');
//                    }
//                    else{
//                        next();
//                    }
//
//                });
//            },
        }
        , {
            path: '/dashboard/register-request',
            name: 'registerRequest',
            components: {
                buyer: buyerRgisterRequest,
            },
            props: true
        },
        {
            path: '/dashboard/my-products',
            name: 'myProducts',
            components: {
                seller: myProducts,
            },
        },{
            path: '/dashboard/buyAd-request-detail/:id',
            name: 'buyAdRequestsDetail',
            components: {
                seller: sellerBuyAdRequestsDetail,
            },
            params: {
                active: 2
            }
        }
        , {
            path: '/dashboard/sell-offer-detail/:id',
            name: 'buyerSellOfferDetail',
            components: {
                buyer: buyerSellOfferDetail,
            },
            params: {
                active: 2
            }
        },
        {
            path: '/dashboard/my-buyAds',
            name: 'myBuyAds',
            components: {
                buyer: buyerMyBuyAd,
            },
            params: {
                active: 3
            },
        }
        , {
            path: '/dashboard/my-sell-offers',
            name: 'mySellOffers',
            components: {
                seller: sellerMySellOffers,
            },
        }
        , {
            path: '/dashboard/register-product',
            name: 'registerProduct',
            components: {
                seller: sellerRegisterProduct,
            },
        }
        , {
            path: '/dashboard/transaction-list',
            name: 'myTransactions',
            components: {
                seller: sellerMyTransactions,
                buyer: buyerMyTransactions,
            },
        }
        , {
            path: '/dashboard/terminated-transaction-list',
            name: 'myTerminatedTransactions',
            components: {
                seller: sellerMyTerminatedTransactions,
                buyer: buyerMyTerminatedTransactions,
            },
        }
        , {
            path: '/dashboard/payed-factor-list',
            name: 'PayedFactorList',
            components: {
                buyer: buyerPayedFactorList,
            },
        }
        , {
            path: '/dashboard/factor-detail/:id',
            name: 'buyerFactorDetail',
            components: {
                buyer: buyerFactorDetail,
            },
        }
        , {
            path: '/dashboard/instant-factor-detail/:id',
            name: 'buyerInstantFactorDetail',
            components: {
                buyer: buyerFactorDetail,
            },
        }
        , {
            path: '/dashboard/transaction-detail/:id',
            name: 'transactionDetail',
            components: {
                seller: sellerTransactionDetail,
                buyer: buyerTransactionDetail,
            },
            params: {
                active: 4,
            }
        },
        {
            path: '/dashboard/instant-transaction-detail/:id',
            name: 'instantTransactionDetail',
            components: {
                seller: sellerTransactionDetail,
                buyer: buyerTransactionDetail,
            },
            params: {
                active: 4,
            },
        }
        , {
            path: '/dashboard/transaction-report/:id',
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
            path: '/dashboard/instant-transaction-report/:id',
            name: 'instantTransactionReport',
            components: {
                seller: sellerTransactionReport,
                buyer: buyerTransactionReport,
            },
            params: {
                active: 5
            }
        }
        , {
            path: '/dashboard/guide',
            name: 'guide',
            components: {
                seller: sellerGuide,
                buyer: buyerGuide,
            },
        },
        {
            path: '/login',
            name: 'login',
            components: {
                seller: login,
                buyer: login,
                layouts: login,
            },
        },
        {
            path: '/register',
            name: 'register',
            components: {
                seller: register,
                buyer: register,
                layouts: register,
            },
        },
        {
            path: '/pricing',
            name: 'pricing',
            components: {
                seller: pricing,
                buyer: pricing,
                layouts: pricing,
            },
        },
        {
            path: '/404',
            name: 'notFound',
            components: {
                layouts: notFound,
            },
        },
        {
            path: '/*',
            redirect: '/404'
        },

    ],
});
/*
myRouter.beforeEach((to,from,next) => {
      switch(to.name){
          case 'profileBasic' :
              next();
              break;
          case 'compelementry' :
              next();
              break;
          default :
            axios.post('/user/profile_info',{
                    confirmed : true
                })
            .then(function(response){
                if(response.data.profile.confirmed == false){
                    $('#myModal-1').modal('show');
                    next(false);
                }
                else if(to.name == 'profileContract'){
                    next();
                }
//                else if(response.data.user_info.contract_confirmed == false){
//                    $('#contractModalWrapper').modal('show');
//                    next(false);
//                }
                else{
                    // window.location.href = url;
                    next();
                }

            });

      }
});
*/


//myRouter.afterEach((to, from,next ) => {
//
////    if ("gtag" in window) {
////        console.log(to.path);
////        gtag("pageview",to.path);
////    }
//
//  if ("ga" in window) {
//    var tracker = ga.getAll()[0];
////    console.log('size : ' + tracker.length);
//    if (tracker){
//        console.log(to.path);
//        tracker.set('page',to.path);
//        tracker.send('pageview');
////        tracker.send('event', 'categoryName', 'ActionName','LabelName');
//  }
//  }
//
//});

export default myRouter;





import Vue from 'vue'
import router from 'vue-router'



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
import sellerNotFound from '../components/dashboard/page-not-found.vue';


// Buyer Components
import buyerProfileBasic from '../components/dashboard/buyer/profile/profile_basic.vue'
import buyerChangePassword from '../components/dashboard/seller/profile/change_password.vue'
import buyerCompelementry from '../components/dashboard/buyer/profile/profile_complete.vue'
import buyerProfileContract from '../components/dashboard/buyer/profile/profile_contract.vue'
import buyerRequests from '../components/dashboard/buyer/request/request'
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


Vue.use(router);

const myRouter =  new router({
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
        }, 
        {
            path: '/profile_contract',
            name: 'profileContract',
            components: {
                seller: sellerProfileContract,
                buyer: buyerProfileContract,
            },
            beforeEnter: async (to, from, next) => {
                
                axios.post('/user/profile_info',{
                    confirmed : true
                })
                .then(function(response){
                    if(response.data.profile.confirmed == false){
                        next(false);
                        // $('#myModal-1').modal('show');
                    }
                    else{
                        next();
                    }

                });
            },
        }
        , {
            path: '/buyAd-requests',
            name: 'buyAdRequests',
            components: {
                seller: sellerBuyAdRequests,
            },
            props: true
        }
        , {
            path: '/register-request',
            name: 'registerRequest',
            components: {
                buyer: buyerRgisterRequest,
            },
            props: true
        }
        , {
            path: '/buyAd-request-detail/:id',
            name: 'buyAdRequestsDetail',
            components: {
                seller: sellerBuyAdRequestsDetail,
            },
            params: {
                active: 2
            }
        }
        , {
            path: '/sell-offer-detail/:id',
            name: 'buyerSellOfferDetail',
            components: {
                buyer: buyerSellOfferDetail,
            },
            params: {
                active: 2
            }
        }
        , {
            path: '/my-buyAds',
            name: 'myBuyAds',
            components: {
                buyer: buyerMyBuyAd,
            },
            params: {
                active: 3
            }
        }
        , {
            path: '/my-sell-offers',
            name: 'mySellOffers',
            components: {
                buyer: sellerMySellOffers,
            },
        }
        , {
            path: '/register-product',
            name: 'registerProduct',
            components: {
                seller: sellerRegisterProduct,
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
            path: '/payed-factor-list',
            name: 'PayedFactorList',
            components: {
                buyer: buyerPayedFactorList,
            },
        }
        , {
            path: '/factor-detail/:id',
            name: 'buyerFactorDetail',
            components: {
                buyer: buyerFactorDetail,
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
});

myRouter.beforeEach((to,from,next) => {
      switch(to.name){
          case 'profileBasic' :
              next();
          case 'compelementry' :
              next();
          case 'profileContract':
              next();
          default :
            axios.post('/user/profile_info',{
                    confirmed : true
                })
            .then(function(response){
                if(response.data.profile.confirmed == false){
                    next(false);
                    // $('#myModal-1').modal('show');
                }
                else if(response.data.user_info.contract_confirmed == false){
                    // $('#myModal-1').modal('show');
                    next(false);
                }
                else{
                    // window.location.href = url;
                    next();
                }

            });
      
      }
});


export default myRouter;
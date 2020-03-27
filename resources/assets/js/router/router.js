import Vue from "vue";
import Router from "vue-router";

window.Vue = require("vue");

Vue.use(Router);

// Layout Components
// import indexPage from '../components/layouts/main/index'
// import productList from '../components/layouts/main/product_list.vue'
// import productCategory from '../components/layouts/main/product_category.vue'
// import productView from '../components/layouts/main/product_components/product_view.vue'
// import indexPrivacyAndPolicy from '../components/layouts/main/privacy_and_policy.vue'
// import indexAboutUs from '../components/layouts/main/about_us.vue'
// import help from '../components/layouts/main/help.vue'
// import contactUs from '../components/layouts/main/contact_us.vue'
// import profile from '../components/layouts/main/profile.vue'
// import pricingTable from '../components/layouts/main/pricing-page.vue'

// Login & Register Components
// import register from '../components/register/register.vue'
// import login from '../components/login/Login.vue'

// Seller Components
// import sellerProfileBasic from '../components/dashboard/seller/profile/profile_basic.vue'
// import sellerChangePassword from '../components/dashboard/seller/profile/change_password.vue'
// import sellerComplementary from '../components/dashboard/seller/profile/profile_complete.vue'
// import sellerProfileContract from '../components/dashboard/seller/profile/profile_contract.vue'
// import sellerBuyAdRequests from '../components/dashboard/seller/request/buyAd-requests.vue'
// import sellerBuyAdRequestsDetail from '../components/dashboard/seller/request/buyAd-requests-detail.vue'
// import sellerMySellOffers from '../components/dashboard/seller/request/my-sell-offers.vue'
// import sellerRegisterProduct from '../components/dashboard/seller/product/product-basic.vue'
// import sellerMyTransactions from '../components/dashboard/seller/transaction/my-transactions.vue';
// import sellerMyTerminatedTransactions from '../components/dashboard/seller/transaction/my-terminated-transactions.vue';
// import sellerTransactionDetail from '../components/dashboard/seller/transaction/transaction.vue';
// import sellerTransactionReport from '../components/dashboard/seller/transaction/transactionReport';
// import sellerGuide from '../components/dashboard/seller/guide.vue';
// import myProducts from '../components/dashboard/seller/product/my_products';
// import sellerStatus from '../components/dashboard/seller/dashboard/status.vue';

// Buyer Components
// import buyerProfileBasic from '../components/dashboard/buyer/profile/profile_basic.vue'
// import buyerChangePassword from '../components/dashboard/seller/profile/change_password.vue'
// import buyerComplementary from '../components/dashboard/buyer/profile/profile_complete.vue'
// import buyerProfileContract from '../components/dashboard/buyer/profile/profile_contract.vue'
//import buyerRequests from '../components/dashboard/buyer/request/request'
// import buyerMyBuyAd from '../components/dashboard/buyer/request/my-buyAd'
// import buyerRgisterRequest from '../components/dashboard/buyer/request/register-request'
// import specialProducts from '../components/dashboard/buyer/products/special-products'
// import buyerSellOfferDetail from '../components/dashboard/buyer/request/sell-offer-detail'
// import buyerMyTransactions from '../components/dashboard/buyer/transaction/my-transactions.vue';
// import buyerPayedFactorList from '../components/dashboard/buyer/transaction/payed-factor-list';
// import buyerFactorDetail from '../components/dashboard/buyer/transaction/factor-detail';
// import buyerPaymentError from '../components/dashboard/buyer/transaction/payment-error';
// import buyerMyTerminatedTransactions from '../components/dashboard/buyer/transaction/my-terminated-transactions.vue';
// import buyerTransactionDetail from '../components/dashboard/buyer/transaction/transaction.vue';
// import buyerTransactionReport from '../components/dashboard/buyer/transaction/transaction-report-detail';
// import buyerGuide from '../components/dashboard/buyer/guide.vue';

// dashboard main
// import messages from '../components/dashboard/messages'
// import dashboardPricingTable from '../components/dashboard/dashboard-pricing-table';

// import MasterRoute from './components/masterRoute'
// import BuyerDashboard from './components/buyerDashboard'
// import SellerDashboard from './components/sellerDashboard'

// Errors Components
import notFound from "../components/errors/404";

export const eventBus = new Vue();

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/seller",
      components: {
        seller: getComponent("sellerDashboard")
      },
      redirect: "/404",
      children: [
        {
          path: "password",
          name: "passwordSeller",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/seller/profile/change_password.vue"
              ], resolve);
            }
          }
        },
        {
          path: "status",
          name: "statusSeller",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/seller/dashboard/status.vue"
              ], resolve);
            }
          }
        },
        {
          path: "pricing",
          name: "dashboardPricingTableSeller",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/dashboard-pricing-table"
              ], resolve);
            }
          }
        },
        {
          path: "profile",
          name: "profileBasicSeller",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/seller/profile/profile_basic.vue"
              ], resolve);
            }
          }
        },
        // , {
        //     path: 'complementary',
        //     name: 'complementarySeller',
        //     components: {
        //         default: (resolve) => {
        //             require([ '../components/layouts/main/index.vue'], resolve);
        //         }
        //     },
        // },
        {
          path: "messages",
          name: "messagesSeller",
          components: {
            default: resolve => {
              require(["../components/dashboard/messages"], resolve);
            }
          }
        },
        {
          path: "group-messages",
          name: "groupMessagesSeller",
          components: {
            default: resolve => {
              require(["../components/dashboard/group-messages"], resolve);
            }
          }
        },
        {
          path: "buyAd-requests",
          name: "buyAdRequestsSeller",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/seller/request/buyAd-requests.vue"
              ], resolve);
            }
          }
        },
        {
          path: "my-products",
          name: "myProductsSeller",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/seller/product/my_products"
              ], resolve);
            }
          }
        },
        ,
        // {
        //     path: 'buyAd-request-detail/:id',
        //     name: 'buyAdRequestsDetailSeller',
        //     components: {
        //         default: (resolve) => {
        //             require([ '../components/layouts/main/index.vue'], resolve);
        //         }
        //     },
        // }
        // , {
        //     path: 'my-sell-offers',
        //     name: 'mySellOffersSeller',
        //     components: {
        //         default: (resolve) => {
        //             require([ '../components/layouts/main/index.vue'], resolve);
        //         }
        //     },
        // }
        {
          path: "register-product",
          name: "registerProductSeller",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/seller/product/product-basic.vue"
              ], resolve);
            }
          }
        },
        // , {
        //     path: 'transaction-list',
        //     name: 'myTransactionsSeller',
        //     components: {
        //         default: (resolve) => {
        //             require([ '../components/layouts/main/index.vue'], resolve);
        //         }
        //     },
        // }
        // , {
        //     path: 'terminated-transaction-list',
        //     name: 'myTerminatedTransactionsSeller',
        //     components: {
        //         default: sellerMyTerminatedTransactions,
        //     },
        // }
        // , {
        //     path: 'transaction-detail/:id',
        //     name: 'transactionDetailSeller',
        //     components: {
        //         default: sellerTransactionDetail,
        //     }
        // },
        // {
        //     path: 'instant-transaction-detail/:id',
        //     name: 'instantTransactionDetailSeller',
        //     components: {
        //         default: sellerTransactionDetail,
        //     },
        // },
        // {
        //     path: 'transaction-report/:id',
        //     name: 'transactionReportSeller',
        //     components: {
        //         default: sellerTransactionReport,
        //     }
        // },
        // {
        //     path: 'instant-transaction-report/:id',
        //     name: 'instantTransactionReportSeller',
        //     components: {
        //         default: sellerTransactionReport,
        //     }
        // },
        {
          path: "guide",
          name: "guideSeller",
          components: {
            default: resolve => {
              require(["../components/dashboard/seller/guide.vue"], resolve);
            }
          }
        }
      ],
      beforeEnter: (to, from, next) => {
        var userId = window.localStorage.getItem("userId");
        var userType = window.localStorage.getItem("userType");
        if (userId && userType == 1) next();
        else next("/login");
      }
    },
    {
      path: "/buyer",
      components: {
        buyer: getComponent("buyerDashboard")
      },
      redirect: "/404",
      children: [
        {
          path: "password",
          name: "passwordBuyer",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/seller/profile/change_password.vue"
              ], resolve);
            }
          }
        },
        {
          path: "profile",
          name: "profileBasicBuyer",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/buyer/profile/profile_basic.vue"
              ], resolve);
            }
          }
        },
        // {
        //     path: 'complementary',
        //     name: 'complementaryBuyer',
        //     components: {
        //         default: (resolve) => {
        //             require([ '../components/dashboard/seller/profile/change_password.vue'], resolve);
        //         }
        //     },
        // },
        {
          path: "messages",
          name: "messagesBuyer",
          components: {
            default: resolve => {
              require(["../components/dashboard/messages"], resolve);
            }
          }
        },
        {
          path: "group-messages",
          name: "groupMessagesBuyer",
          components: {
            default: resolve => {
              require(["../components/dashboard/group-messages"], resolve);
            }
          }
        },
        {
          path: "register-request",
          name: "registerRequestBuyer",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/buyer/request/register-request"
              ], resolve);
            }
          }
        },
        {
          path: "special-products",
          name: "specialProducts",
          components: {
            default: resolve => {
              require([
                "../components/dashboard/buyer/products/special-products"
              ], resolve);
            }
          }
        },
        // {
        //     path: 'sell-offer-detail/:id',
        //     name: 'buyerSellOfferDetailBuyer',
        //     components: {
        //         default: buyerSellOfferDetail,
        //     },

        // },
        // {
        //     path: 'my-buyAds',
        //     name: 'myBuyAdsBuyer',
        //     components: {
        //         default: buyerMyBuyAd,
        //     },
        // },

        //  {
        //     path: 'transaction-list',
        //     name: 'myTransactionsBuyer',
        //     components: {
        //         default: buyerMyTransactions,
        //     },
        // }
        // , {
        //     path: 'terminated-transaction-list',
        //     name: 'myTerminatedTransactionsBuyer',
        //     components: {
        //         default: buyerMyTerminatedTransactions,
        //     },
        // }
        // , {
        //     path: 'payed-factor-list',
        //     name: 'PayedFactorListBuyer',
        //     components: {
        //         default: buyerPayedFactorList,
        //     },
        // }
        // , {
        //     path: 'factor-detail/:id',
        //     name: 'buyerFactorDetailBuyer',
        //     components: {
        //         default: buyerFactorDetail,
        //     },
        // }
        // , {
        //     path: 'instant-factor-detail/:id',
        //     name: 'buyerInstantFactorDetailBuyer',
        //     components: {
        //         default: buyerFactorDetail,
        //     },
        // }
        // , {
        //     path: 'transaction-detail/:id',
        //     name: 'transactionDetailBuyer',
        //     components: {
        //         default: buyerTransactionDetail,
        //     }
        // },
        // {
        //     path: 'instant-transaction-detail/:id',
        //     name: 'instantTransactionDetailBuyer',
        //     components: {
        //         default: buyerTransactionDetail,
        //     },
        // },
        // {
        //     path: 'transaction-report/:id',
        //     name: 'transactionReportBuyer',
        //     components: {
        //         default: buyerTransactionReport,
        //     }
        // },
        // {
        //     path: 'instant-transaction-report/:id',
        //     name: 'instantTransactionReportBuyer',
        //     components: {
        //         default: buyerTransactionReport,
        //     }
        // },
        {
          path: "guide",
          name: "guideBuyer",
          components: {
            default: resolve => {
              require(["../components/dashboard/buyer/guide.vue"], resolve);
            }
          }
        }
      ],
      beforeEnter: (to, from, next) => {
        var userId = window.localStorage.getItem("userId");
        var userType = window.localStorage.getItem("userType");
        if (userId && userType == 0) next();
        else next("/login");
      }
    },
    {
      path: "/",
      components: {
        default: getComponent("masterRoute")
      },
      children: [
        {
          path: "/",
          name: "indexPage",
          components: {
            default: resolve => {
              require(["../components/layouts/main/index.vue"], resolve);
            }
          }
        },
        {
          path: "about-us",
          name: "aboutUs",
          components: {
            default: resolve => {
              require(["../components/layouts/main/about_us.vue"], resolve);
            }
          }
        },
        {
          path: "help",
          name: "help",
          components: {
            default: resolve => {
              require(["../components/layouts/main/help.vue"], resolve);
            }
          }
        },
        {
          path: "contact-us",
          name: "contactUs",
          components: {
            default: resolve => {
              require(["../components/layouts/main/contact_us.vue"], resolve);
            }
          }
        },
        {
          path: "privacy-and-policy",
          name: "privacyAndPolicy",
          components: {
            default: resolve => {
              require([
                "../components/layouts/main/privacy_and_policy.vue"
              ], resolve);
            }
          }
        },
        {
          path: "product-list",
          name: "productList",
          components: {
            default: resolve => {
              require(["../components/layouts/main/product_list.vue"], resolve);
            }
          },
          props: true
        },
        {
          path: "product-view/:categoryName/:subCategoryName/:id",
          name: "productView",
          components: {
            default: resolve => {
              require([
                "../components/layouts/main/product_components/product_view.vue"
              ], resolve);
            }
          }
        },
        {
          path: "product-list/:searchText",
          name: "productListSearch",
          components: {
            default: resolve => {
              require(["../components/layouts/main/index.vue"], resolve);
            }
          }
        },
        {
          path: "product-list/category/:categoryName",
          name: "productCategory",
          components: {
            default: resolve => {
              require([
                "../components/layouts/main/product_category.vue"
              ], resolve);
            }
          }
        },
        {
          path: "profile/:user_name",
          name: "profile",
          components: {
            default: resolve => {
              require(["../components/layouts/main/profile.vue"], resolve);
            }
          }
        },
        {
          path: "login",
          name: "login",
          components: {
            default: resolve => {
              require(["../components/login/Login.vue"], resolve);
            }
          }
        },
        {
          path: "register",
          name: "register",
          components: {
            default: resolve => {
              require(["../components/register/register.vue"], resolve);
            }
          }
        }
        // {
        //     path: 'pricing',
        //     name: 'pricing',
        //     components: {
        //         default: pricingTable,
        //     },
        // },
      ]
    },
    {
      path: "/404",
      name: "notFound",
      components: {
        default: notFound
      }
    },
    {
      path: "/*",
      beforeEnter: (to, from, next) => {
        next("/404");
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //     JSON.stringify(localStorage.setItem('scroll', savedPosition.y));
    //     return savedPosition
    // }
    return { x: 0, y: 0 };
  }
});

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function getComponent(name) {
  return function(resolve) {
    require([`./components/${name}.vue`], resolve);
  };
}

export default router;

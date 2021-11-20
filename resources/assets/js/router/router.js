import Vue from "vue";
import Router from "vue-router";
// import { abtest } from 'vue-a2b'

// const abTestingOption = abtest('product-category', { "first": 50, "second": 50 });

window.Vue = require("vue");

Vue.use(Router);


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
        seller: (resolve) => {
          require(["./components/sellerDashboard.vue"], resolve);
        },
      },
      redirect: "/404",
      children: [
        {
          path: "my-buskool",
          name: "myBuskoolSeller",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/my-buskool/my-buskool.vue",
              ], resolve);
            },
          },
        },
        {
          path: "password",
          name: "passwordSeller",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/profile/change_password.vue",
              ], resolve);
            },
          },
        },
        {
          path: "status",
          name: "statusSeller",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/dashboard/status.vue",
              ], resolve);
            },
          },
        },
        {
          path: "referral",
          name: "referralSeller",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/referral/referral.vue",
              ], resolve);
            },
          },
        },
        {
          path: "invited-users",
          name: "invitedUsers",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/referral/invited-users.vue",
              ], resolve);
            },
          },
        },
        {
          path: "phone-viewers",
          name: "sellerViewer",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/seller-viewer.vue",
              ], resolve);
            },
          },
        },
        {
          path: "pricing",
          name: "dashboardPricingTableSeller",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/dashboard-pricing-table",
              ], resolve);
            },
          },
        },
        {
          path: "product-pricing",
          name: "dashboardProductPricing",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/pricing-seller-page/product-pricing.vue",
              ], resolve);
            },
          },
        },
        {
          path: "buyad-pricing",
          name: "dashboardBuyAdPricing",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/pricing-seller-page/buyad-pricing.vue",
              ], resolve);
            },
          },
        },
        {
          path: "profile",
          name: "profileBasicSeller",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/profile/profile_basic.vue",
              ], resolve);
            },
          },
        },
        {
          path: "profile/verification",
          name: "profileBasicSellerVeficiation",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/profile/profile_verification.vue",
              ], resolve);
            },
          },
        },
        {
          path: "messenger",
          components: {
            default: (resolve) => {
              require(["../components/dashboard/messenger.vue"], resolve);
            },
          },
          children: [
            {
              path: "contacts",
              name: "messagesSeller",
              components: {
                "messenger-list": (resolve) => {
                  require(["../components/dashboard/messages-components/my-contact-list.vue"], resolve);
                },
              },
            },
            {
              path: 'buy-ads',
              name: "messagesRequestSeller",
              components: {
                "messenger-list": (resolve) => {
                  require(["../components/dashboard/messages-components/my-buyad-list.vue"], resolve);
                },
              },
            },
          ],
        },
        {
          path: "buyAd-requests",
          name: "buyAdRequestsSeller",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/request/buyAd-requests.vue",
              ], resolve);
            },
          },
        },

        {
          path: "my-products",
          name: "myProductsSeller",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/product/my_products",
              ], resolve);
            },
          },
        },
        {
          path: "register-product",
          name: "registerProductSeller",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/product/product-basic.vue",
              ], resolve);
            },
          },
          children: [
            {
              path: "success",
              name: "successRegisterProduct",
              components: {
                default: (resolve) => {
                  require([
                    "../components/dashboard/seller/product/product-basic.vue",
                  ], resolve);
                },
              },
            },
          ]
        },
        {
          path: "guide",
          name: "guideSeller",
          components: {
            default: (resolve) => {
              require(["../components/dashboard/seller/guide.vue"], resolve);
            },
          },
        },
        {
          path: "introduction-delsa",
          name: "introductionDelsaSeller",
          components: {
            default: (resolve) => {
              require(["../components/dashboard/seller/introduction-delsa.vue"], resolve);
            },
          },
        },
        {
          path: "show-number-guide",
          name: "showNumberGuideSeller",
          components: {
            default: (resolve) => {
              require(["../components/dashboard/seller/show-number-guide.vue"], resolve);
            },
          },
        },
        {
          path: "support",
          name: "supportSeller",
          components: {
            default: (resolve) => {
              require(["../components/dashboard/seller/support.vue"], resolve);
            },
          },
        },
      ],
      beforeEnter: (to, from, next) => {
        var userId = window.localStorage.getItem("userId");
        var userType = window.localStorage.getItem("userType");
        if (userId && userType == 1) next();
        else next("/login");
      },
    },
    {
      path: "/buyer",
      components: {
        buyer: (resolve) => {
          require(["./components/buyerDashboard.vue"], resolve);
        },
      },
      redirect: "/404",
      children: [
        {
          path: "password",
          name: "passwordBuyer",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/seller/profile/change_password.vue",
              ], resolve);
            },
          },
        },
        {
          path: "my-buskool",
          name: "myBuskoolBuyer",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/my-buskool/my-buskool.vue",
              ], resolve);
            },
          },
        },
        {
          path: "profile",
          name: "profileBasicBuyer",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/buyer/profile/profile_basic.vue",
              ], resolve);
            },
          },
        },
        {
          path: "profile/verification",
          name: "profileBasicBuyerVeficiation",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/buyer/profile/profile_verification.vue",
              ], resolve);
            },
          },
        },
        {
          path: "messenger",
          components: {
            default: (resolve) => {
              require(["../components/dashboard/messenger.vue"], resolve);
            },
          },
          children: [
            {
              path: "contacts",
              name: "messagesBuyer",
              components: {
                "messenger-list": (resolve) => {
                  require(["../components/dashboard/messages-components/my-contact-list.vue"], resolve);
                },
              },
            },
          ],
        },
        {
          path: "register-request",
          name: "registerRequestBuyer",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/buyer/request/register-request",
              ], resolve);
            },
          },
        },
        {
          path: "special-products",
          name: "specialProducts",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/buyer/products/special-products",
              ], resolve);
            },
          },
        },
        {
          path: "my-buyAd-requests",
          name: "myBuyAdRequestsBuyer",
          components: {
            default: (resolve) => {
              require([
                "../components/dashboard/buyer/my-requests/buyAd-requests.vue",
              ], resolve);
            },
          },
        },
        {
          path: "guide",
          name: "guideBuyer",
          components: {
            default: (resolve) => {
              require(["../components/dashboard/buyer/guide.vue"], resolve);
            },
          },
        },
        {
          path: "support",
          name: "supportBuyer",
          components: {
            default: (resolve) => {
              require(["../components/dashboard/buyer/support.vue"], resolve);
            },
          },
        },
      ],
      beforeEnter: (to, from, next) => {
        var userId = window.localStorage.getItem("userId");
        var userType = window.localStorage.getItem("userType");
        if (userId && userType == 0) next();
        else next("/login");
      },
    },
    {
      path: "/",
      components: {
        default: (resolve) => {
          require(["./components/masterRoute.vue"], resolve);
        },
      },
      children: [
        {
          path: "/",
          name: "indexPage",
          components: {
            default: (resolve) => {
              require(["../components/layouts/main/index.vue"], resolve);
            },
          },
        },
        {
          path: "about-us",
          name: "aboutUs",
          components: {
            default: (resolve) => {
              require(["../components/layouts/main/about_us.vue"], resolve);
            },
          },
        },
        {
          path: "help",
          name: "help",
          components: {
            default: (resolve) => {
              require(["../components/layouts/main/help.vue"], resolve);
            },
          },
        },
        {
          path: "contact-us",
          name: "contactUs",
          components: {
            default: (resolve) => {
              require(["../components/layouts/main/contact_us.vue"], resolve);
            },
          },
        },
        {
          path: "verification",
          name: "verificationInfo",
          components: {
            default: (resolve) => {
              require(["../components/layouts/main/verification-info.vue"], resolve);
            },
          },
        },
        {
          path: "privacy-and-policy",
          name: "privacyAndPolicy",
          components: {
            default: (resolve) => {
              require([
                "../components/layouts/main/privacy_and_policy.vue",
              ], resolve);
            },
          },
        },
        {
          path: "product-list",
          name: "productList",
          components: {
            default: (resolve) => {
              require([
                "../components/layouts/main/product_list.vue",
              ], resolve);
            },
          },
          props: true,
        },
        
        {
          path: "product-view",
          name: "productViewRoute",
          components: {
            default: (resolve) => {
              require([
                "../components/layouts/main/product_components/product-view-route.vue",
              ], resolve);
            },
          },
          children: [
            {
              path: ":categoryName/:subCategoryName/:id",
              name: "productView",
              components: {
                default: (resolve) => {
                  require([
                    "../components/layouts/main/product_components/product-view/product-view.vue",
                  ], resolve);
                },
              },
            }
          ]
        },
        {
          path: "product-list/:searchText",
          name: "productListSearch",
          components: {
            default: (resolve) => {
              require(["../components/layouts/main/index.vue"], resolve);
            },
          },
        },
        {
          path: "product-list/category/:categoryName",
          name: "productCategory",
          components: {

            default: (resolve) => {
              require([
                "../components/layouts/main/product_category.vue"
              ], resolve);
            },
          },
        },
        {
          path: "profile/:user_name",
          name: "profile",
          components: {
            default: (resolve) => {
              require(["../components/layouts/main/profile.vue"], resolve);
            },
          },
        },
        {
          path: "buyAd-requests",
          name: "mainBuyAdRequests",
          components: {
            default: (resolve) => {
              require([
                "../components/layouts/main/buyAd-requests.vue",
              ], resolve);
            },
          },
        },
        {
          path: "login",
          name: "login",
          components: {
            default: (resolve) => {
              require(["../components/login/Login.vue"], resolve);
            },
          },
        },
        {
          path: "register",
          name: "register",
          components: {
            default: (resolve) => {
              require(["../components/register/register.vue"], resolve);
            },
          },
        },
        {
          path: "register-request",
          name: "mainRegisterRequest",
          components: {
            default: (resolve) => {
              require([
                "../components/layouts/main/main_components/main-register-request.vue",
              ], resolve);
            },
          },
        },
        // {
        //   path: "register-inquiry",
        //   name: "registerInquiry",
        //   components: {
        //     default: (resolve) => {
        //       require([
        //         "../components/layouts/main/main_components/register-inquiry.vue",
        //       ], resolve);
        //     },
        //   },
        // },
        {
          path: "invite/:userName",
          name: "invite",
          components: {
            default: (resolve) => {
              require(["../components/layouts/main/invite.vue"], resolve);
            },
          },
          beforeEnter: (to, from, next) => {
            var userId = window.localStorage.getItem("userId");
            if (!userId) next();
            else next("/login");
          },
        },
      ],
    },
    {
      path: "/404",
      name: "notFound",
      components: {
        default: notFound,
      },
    },
    {
      path: "/*",
      beforeEnter: (to, from, next) => {
        next("/404");
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // if (savedPosition) {
    //     JSON.stringify(localStorage.setItem('scroll', savedPosition.y));
    //     return savedPosition
    // }
    return { x: 0, y: 0 };
  },
});


export default router;

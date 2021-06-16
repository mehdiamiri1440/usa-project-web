
// Errors Components
import notFound from "../components/errors/404";



export default
    [
        {
            path: "/seller",
            components: {
                seller: () => import("./components/sellerDashboard.vue")
            },
            redirect: "/404",
            children: [
                {
                    path: "/password",
                    name: "passwordSeller",
                    components: {
                        default: () => import("../components/dashboard/seller/profile/change_password.vue")
                    },
                },
                {
                    path: "/status",
                    name: "statusSeller",
                    components: {
                        default: () => import("../components/dashboard/seller/dashboard/status.vue")
                    },
                },
                {
                    path: "/phone-viewers",
                    name: "sellerViewer",
                    components: {
                        default: () => import("../components/dashboard/seller/seller-viewer.vue")
                    },
                },
                {
                    path: "/pricing",
                    name: "dashboardPricingTableSeller",
                    components: {
                        default: () => import("../components/dashboard/dashboard-pricing-table")
                    },
                },
                {
                    path: "/product-pricing",
                    name: "dashboardProductPricing",
                    components: {
                        default: () => import("../components/dashboard/seller/pricing-seller-page/product-pricing.vue")
                    },
                },
                {
                    path: "/buyad-pricing",
                    name: "dashboardBuyAdPricing",
                    components: {
                        default: () => import("../components/dashboard/seller/pricing-seller-page/buyad-pricing.vue")
                    },
                },
                {
                    path: "/profile",
                    name: "profileBasicSeller",
                    components: {
                        default: () => import("../components/dashboard/seller/profile/profile_basic.vue")
                    },
                },
                {
                    path: "/profile/verification",
                    name: "profileBasicSellerVeficiation",
                    components: {
                        default: () => import("../components/dashboard/seller/profile/profile_verification.vue")
                    },
                },
                {
                    path: "/messenger",
                    components: {
                        default: () => import("../components/dashboard/messenger.vue")
                    },
                    children: [
                        {
                            path: "/contacts",
                            name: "messagesSeller",
                            components: {
                                "messenger-list": () => import("../components/dashboard/messages-components/my-contact-list.vue")
                            },
                        },
                        {
                            path: '/buy-ads',
                            name: "messagesRequestSeller",
                            components: {
                                "messenger-list": () => import("../components/dashboard/messages-components/my-buyad-list.vue")
                            },
                        },
                        // {
                        //   path: "group-messages",
                        //   name: "groupMessagesSeller",
                        //   components: {
                        //     "group-list": resolve => {
                        //       require([
                        //         "../components/dashboard/group-messages.vue"
                        //       ], resolve);
                        //     }
                        //   }
                        // }
                    ],
                },
                {
                    path: "/buyAd-requests",
                    name: "buyAdRequestsSeller",
                    components: {
                        default: () => import("../components/dashboard/seller/request/buyAd-requests.vue")
                    },
                },
                {
                    path: "/my-products",
                    name: "myProductsSeller",
                    components: {
                        default: () => import("../components/dashboard/seller/product/my_products")
                    },
                },
                {
                    path: "/register-product",
                    name: "registerProductSeller",
                    components: {
                        default: () => import("../components/dashboard/seller/product/product-basic.vue")
                    },
                    children: [
                        {
                            path: "/success",
                            name: "successRegisterProduct",
                            components: {
                                default: () => import(
                                    "../components/dashboard/seller/product/product-basic.vue"
                                )
                            },
                        },
                    ]
                },
                {
                    path: "/guide",
                    name: "guideSeller",
                    components: {
                        default: () => import("../components/dashboard/seller/guide.vue")
                    },
                },
                {
                    path: "/show-number-guide",
                    name: "showNumberGuideSeller",
                    components: {
                        default: () => import("../components/dashboard/seller/show-number-guide.vue")
                    },
                },
                // {
                //   path: "/wallet",
                //   name: "walletSeller",
                //   components: {
                //     default: (resolve) => {
                //       require(["../components/dashboard/seller/wallet.vue"], resolve);
                //     },
                //   },
                // },
                {
                    path: "/support",
                    name: "supportSeller",
                    components: {
                        default: () => import("../components/dashboard/seller/support.vue")
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
                buyer: () => import("./components/buyerDashboard.vue")
            },
            redirect: "/404",
            children: [
                {
                    path: "/password",
                    name: "passwordBuyer",
                    components: {
                        default: () => import("../components/dashboard/seller/profile/change_password.vue")
                    },
                },
                {
                    path: "/profile",
                    name: "profileBasicBuyer",
                    components: {
                        default: () => import("../components/dashboard/buyer/profile/profile_basic.vue")
                    },
                },
                {
                    path: "/profile/verification",
                    name: "profileBasicBuyerVeficiation",
                    components: {
                        default: () => import("../components/dashboard/buyer/profile/profile_verification.vue")
                    },
                },
                {
                    path: "/messenger",
                    components: {
                        default: () => import("../components/dashboard/messenger.vue")
                    },
                    children: [
                        {
                            path: "/contacts",
                            name: "messagesBuyer",
                            components: {
                                "messenger-list": () => import("../components/dashboard/messages-components/my-contact-list.vue")
                            },
                        },
                        // {
                        //   path: "/group-messages",
                        //   name: "groupMessagesBuyer",
                        //   components: {
                        //     "group-list": resolve => {
                        //       require([
                        //         "../components/dashboard/group-messages.vue"
                        //       ], resolve);
                        //     }
                        //   }
                        // }
                    ],
                },
                {
                    path: "register-request",
                    name: "registerRequestBuyer",
                    components: {
                        default: () => import("../components/dashboard/buyer/request/register-request")
                    },
                },
                {
                    path: "/special-products",
                    name: "specialProducts",
                    components: {
                        default: () => import("../components/dashboard/buyer/products/special-products")
                    },
                },
                {
                    path: "/my-buyAd-requests",
                    name: "myBuyAdRequestsBuyer",
                    components: {
                        default: () => import("../components/dashboard/buyer/my-requests/buyAd-requests.vue")
                    },
                },
                {
                    path: "/guide",
                    name: "guideBuyer",
                    components: {
                        default: () => import("../components/dashboard/buyer/guide.vue")
                    },
                },
                {
                    path: "/support",
                    name: "supportBuyer",
                    components: {
                        default: () => import("../components/dashboard/buyer/support.vue")
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
                default: () => import("./components/masterRoute.vue")
            },

            children: [
                {
                    path: "/",
                    name: "indexPage",
                    components: {
                        default: () => import("../components/layouts/main/index.vue")
                    },
                },

                {
                    path: "/about-us",
                    name: "aboutUs",
                    components: {
                        default: () => import("../components/layouts/main/about_us.vue")
                    },
                },
                {
                    path: "/help",
                    name: "help",
                    components: {
                        default: () => import("../components/layouts/main/help.vue")
                    },
                },
                {
                    path: "/contact-us",
                    name: "contactUs",
                    components: {
                        default: () => import("../components/layouts/main/contact_us.vue")
                    },
                },
                {
                    path: "/verification",
                    name: "verificationInfo",
                    components: {
                        default: () => import("../components/layouts/main/verification-info.vue")
                    },
                },
                {
                    path: "/privacy-and-policy",
                    name: "privacyAndPolicy",
                    components: {
                        default: () => import("../components/layouts/main/privacy_and_policy.vue")
                    },
                },
                {
                    path: "/product-list",
                    name: "productList",
                    components: {
                        default: () => import("../components/layouts/main/product_list.vue")
                    },
                    props: true,
                },
                {
                    path: "/product-view",
                    name: "productViewRoute",
                    components: {
                        default: () => import("../components/layouts/main/product_components/product-view-route.vue")
                    },
                    children: [
                        {
                            path: ":categoryName/:subCategoryName/:id",
                            name: "productView",
                            components: {
                                default: () => import(
                                    "../components/layouts/main/product_components/product-view/product-view.vue"
                                )
                            },
                        }
                    ]
                },
                {
                    path: "/product-list/:searchText",
                    name: "productListSearch",
                    components: {
                        default: () => import("../components/layouts/main/index.vue")
                    },
                },
                {
                    path: "/product-list/category/:categoryName",
                    name: "productCategory",
                    components: {
                        default: () => import("../components/layouts/main/product_category.vue")
                    },
                },
                {
                    path: "/profile/:user_name",
                    name: "profile",
                    components: {
                        default: () => import("../components/layouts/main/profile.vue")
                    },
                },
                {
                    path: "/login",
                    name: "login",
                    components: {
                        default: () => import("../components/login/Login.vue")
                    },
                },
                {
                    path: "/register",
                    name: "register",
                    components: {
                        default: () => import("../components/register/register.vue")
                    },
                },
                {
                    path: "/register-request",
                    name: "mainRegisterRequest",
                    components: {
                        default: () => import("../components/layouts/main/main_components/main-register-request.vue")
                    },
                },
                {
                    path: "/register-inquiry",
                    name: "registerInquiry",
                    components: {
                        default: () => import("../components/layouts/main/main_components/register-inquiry.vue")
                    },
                },
                // {
                //     path: '/pricing',
                //     name: 'pricing',
                //     components: {
                //         default: pricingTable,
                //     },
                // },
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
    ]


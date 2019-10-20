<style>

    .wrapper-bg {

        background: #fff;

        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

        border-radius: 4px;

        padding: 15px;

    }
</style>

<style scoped>
    #main {
        padding-top: 100px;
    }

    .main-content {
        margin-bottom: 30px;
    }

    .main-content > h4 {
        margin: 30px auto;
    }

    .buttons-wrapper {
        margin: 15px auto;
        text-align: center;
    }

    .buttons-wrapper .green-button {
        width: initial;
        font-size: 16px;
        padding: 8px 20px;

    }

    @media screen and (max-width: 767px) {

        #main {

            padding-top: 80px;

        }

    }
</style>

<template>
    <div class="container">
        <main id="main" class="row">

            <div class="col-xs-12 col-lg-9 pull-right">

                <section class="main-content">
                    <div class="row">
                        <ProductContents/>
                        <div class="buttons-wrapper  hidden-xs  hidden-sm hidden-md">
                            <a href="/product-list" class="green-button blue-button">
                                مشاهده همه محصولات
                            </a>
                        </div>
                    </div>
                </section>

            </div>

            <div class="col-xs-12 col-lg-3 pull-left">

                <UserInfo/>

                <div class="buttons-wrapper  hidden-lg">
                    <a href="/product-list" class="green-button blue-button">
                        مشاهده همه محصولات
                    </a>
                </div>
            </div>
        </main>
    </div>
</template>


<script>
    import ProductContents from "./product-view/product";
    import UserInfo from "./product-view/user_info";
    import {eventBus} from "../../../../../js/router/dashboard_router";

    export default {
        components: {
            ProductContents,
            UserInfo
        },
        props:
            [
                "str",
                "defultimg",
                "loading_img"
            ],
        data: function () {
            return {
                currentUser: {
                    profile: "",
                    user_info: ""
                },
                product: {
                    main: {
                        category_name: "",
                        sub_category_name: "",
                    },
                    user_info: "",
                    profile_info: {
                        profile_photo: ""
                    },
                    photos: [],
                },
                errors: "",
                popUpMsg: "",
                submiting: false,
                loading: false,
                isMyProfile: false,
            };
        },
        methods: {
            init: function () {

                var self = this;
                axios.post("/user/profile_info").then(function (response) {

                    self.currentUser = response.data;
                    axios
                        .post("/get_product_by_id", {
                            product_id: self.$route.params.id
                        })
                        .then(function (response) {
                            self.product = response.data.product;
                            self.loading = false;
                            if (self.currentUser.user_info) {
                                if (self.currentUser.user_info.id === self.product.main.myuser_id) {
                                    self.isMyProfile = true;
                                    self.$emit('isMyProfile', self.isMyProfile);
                                }
                            }
                        })
                        .catch(function (err) {
                            window.location.href = "/404";
                        });
                });
            },
            openChat: function (product) {
                this.registerComponentStatistics('product', 'openChat', 'click on open chatBox');

                var contact = {
                    contact_id: product.user_info.id,
                    first_name: product.user_info.first_name,
                    last_name: product.user_info.last_name,
                    profile_photo: product.profile_info.profile_photo,
                    user_name: product.user_info.user_name,
                };

                if (this.currentUser.user_info) {
                    if (this.currentUser.user_info.id !== product.user_info.id) {
                        axios.post('/set_last_chat_contact', contact)
                            .then(function (response) {
                                window.location.href = '/dashboard/messages';
                            })
                            .catch(function (e) {
                                alert('Error');
                            });
                    }
                    else {
                        this.popUpMsg = 'شما نمیتوانید به خودتان پیام دهید.';
                        eventBus.$emit('submitSuccess', this.popUpMsg);
                        $('#custom-main-modal').modal('show');
                    }
                }
                else {
                    this.popUpMsg = 'اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    eventBus.$emit('submitSuccess', this.popUpMsg);
                    $('#auth-popup').modal('show');
                }
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
            getProductUrl: function () {

                return '/product-view/خرید-عمده-'
                    + this.product.main.sub_category_name.replace(' ', '-')
                    + '/'
                    + this.product.main.category_name.replace(' ', '-')
                    + '/'
                    + this.product.main.id;

            },
            copyProductLinkToClipBoard: function () {

                this.registerComponentStatistics('product', 'copy-product-link', 'click on copy poduct link');

                if (this.isDeviceMobile()) {

                    var linkElement = document.createElement('a');
                    var Message = "https://incobac.com" + this.getProductUrl();
                    var messageToWhatsApp = encodeURIComponent(Message);
                    var url = "whatsapp://send?text=" + messageToWhatsApp;

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute('data-action', 'share/whatsapp/share');

                    document.body.appendChild(linkElement);

                    linkElement.click();

                    document.body.removeChild(linkElement);

                }
                else {
                    var input = document.createElement('input');
                    input.setAttribute('value', 'https://incobac.com' + this.getProductUrl());
                    document.body.appendChild(input);
                    input.select();
                    var result = document.execCommand('copy');
                    document.body.removeChild(input);
                    if (result) {
                        this.popUpMsg = 'آدرس محصول کپی شد.';
                        eventBus.$emit('submitSuccess', this.popUpMsg);
                        $('#custom-main-modal').modal('show');
                    }
                }

            },
            isDeviceMobile: function () {
                if (navigator.userAgent.match(/Android/i)
                    || navigator.userAgent.match(/webOS/i)
                    || navigator.userAgent.match(/iPhone/i)
                    || navigator.userAgent.match(/iPad/i)
                    || navigator.userAgent.match(/iPod/i)
                    || navigator.userAgent.match(/BlackBerry/i)
                    || navigator.userAgent.match(/Windows Phone/i)
                ) {
                    return true;
                }
                else {
                    return false;
                }
            },
            toLatinNumbers: function (num) {
                if (num == null) {
                    return null;
                }

                return num.toString()
                    .replace(/[\u0660-\u0669]/g, function (c) {
                        return c.charCodeAt(0) - 0x0660;
                    }).replace(/[\u06f0-\u06f9]/g, function (c) {
                        return c.charCodeAt(0) - 0x06f0;
                    });
            },
            editProduct: function (getProductWrapper) {


                this.submiting = true;
                this.errors = '';

                var stock = '#' + getProductWrapper + ' input.stock';
                var getProductId = '#' + getProductWrapper + ' .product-id';
                var minSalePrice = '#' + getProductWrapper + ' input.min-sale-price';
                var maxSalePrice = '#' + getProductWrapper + ' input.max-sale-price';
                var minSaleAmount = '#' + getProductWrapper + ' input.min-sale-amount';
                var description = '#' + getProductWrapper + ' textarea.description';


                stock = this.toLatinNumbers($(stock).val());
                getProductId = this.toLatinNumbers($(getProductId).val());
                minSalePrice = this.toLatinNumbers($(minSalePrice).val());
                maxSalePrice = this.toLatinNumbers($(maxSalePrice).val());
                minSaleAmount = this.toLatinNumbers($(minSaleAmount).val());
                description = $(description).val();


                var request = {
                    product_id: getProductId,
                    stock: stock,
                    min_sale_price: minSalePrice,
                    max_sale_price: maxSalePrice,
                    min_sale_amount: minSaleAmount,
                };


                if (description !== '') {
                    request.description = description;
                }

                var self = this;


                axios.post('/edit_product', request)
                    .then(function (response) {
                        $('.modal').modal('hide');
                        self.popUpMsg = 'محصول شما با موفقیت ویرایش شد.';
                        eventBus.$emit('submitSuccess', self.popUpMsg);
                        setTimeout(function () {
                            $('#custom-main-modal').modal('show');
                            $('#custom-main-modal').on('hidden.bs.modal', function (e) {
                                location.reload();
                            });
                        }, 300);
                        self.registerComponentStatistics('product', 'register-product-edit', 'product-edited-successfully');
                    })
                    .catch(function (err) {
                        self.errors = '';
                        self.errors = err.response.data.self.registerComponentExceptions('Product-component: validation errors in edit product API');
                    });
            },
            stopLoader: function () {
                eventBus.$emit("isLoading", false);
            }
        },
        created() {
            gtag("config", "UA-129398000-1", {page_path: "/product-view"});

            document.addEventListener("click", this.documentClick);
        },
        mounted() {
            this.init();
            var self = this;
            document.onreadystatechange = () => {
                if (document.readyState === "complete") {
                    self.$nextTick(self.stopLoader());
                }
            };
        },
        updated() {
            this.$nextTick(this.stopLoader());
        },
        metaInfo() {
            let productSubCategory = this.product.main.sub_category_name;
            let productName = this.product.main.product_name;
            let productCity = this.product.main.city_name;
            let productProvince = this.product.main.province_name;
            let productOwnerFullName =
                this.product.user_info.first_name +
                " " +
                this.product.user_info.last_name;
            let productStock = this.product.main.stock;
            let productDescription = this.product.main.description
                ? this.product.main.description
                : "";
            //
            return {
                title:
                    "خرید و فروش عمده و قیمت " +
                    productSubCategory +
                    " " +
                    productName +
                    " " +
                    productCity +
                    " " +
                    productProvince +
                    " " +
                    productOwnerFullName,
                titleTemplate: "اینکوباک | %s",
                meta: [
                    {
                        name: "description",
                        content:
                            "خرید و فروش عمده و قیمت " +
                            productSubCategory +
                            " " +
                            productName +
                            " " +
                            productCity +
                            " " +
                            productProvince +
                            " " +
                            "موجودی : " +
                            productStock +
                            " کیلوگرم" +
                            productDescription
                    },
                    {
                        name: "author",
                        content: "اینکوباک"
                    },
                    {
                        property: "og:description",
                        content:
                            "خرید و فروش عمده و قیمت " +
                            productSubCategory +
                            " از بهترین تولیدکنندگان ایران - اینکوباک بازار آنلاین کشاورزی ایران"
                    },
                    {
                        property: "og:site_name",
                        content: "اینکوباک بازارآنلاین خرید و فروش محصولات کشاورزی ایران"
                    },
                    {
                        property: "og:title",
                        content:
                            "اینکوباک | خرید و فروش عمده و قیمت " +
                            productSubCategory +
                            " " +
                            productName +
                            " " +
                            productCity +
                            " " +
                            productProvince +
                            " " +
                            productOwnerFullName
                    }
                ]
            };
        },
        created() {
            gtag("config", "UA-129398000-1", {page_path: "/product-view"});

            document.addEventListener("click", this.documentClick);
        },
        mounted() {
            this.init();
            var self = this;
            document.onreadystatechange = () => {
                if (document.readyState === "complete") {
                    self.$nextTick(self.stopLoader());
                }
            };
        },
        updated() {
            this.$nextTick(this.stopLoader());
        }
    };
</script>

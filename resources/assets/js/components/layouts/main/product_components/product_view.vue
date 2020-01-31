

<style scoped>
    div, p, span{
        line-height: 1.5em;
    }
    #main {
        padding-top: 160px;
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



    .box-content {
        overflow: hidden;
        background: #fff;
        padding: 0;
        text-align: center;
        padding-bottom: 10px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
    }

    .title-box {
        text-align: center;
    }

    .title-box h3 {
        font-size: 17px;
        font-weight: bold;
        color: #4b4b4b;
        margin-bottom: 12px;
    }

    .title-box a {

        margin: 20px auto 10px;

        width: inherit;

        font-size: 14px;

        font-weight: bold;

        padding: 9px 22px 6px;

    }

    .title-section {
        direction: rtl;
        margin-bottom: 8px;
    }

    .title-section h3 {
        font-size: 16px;
        color: #00c569;
        float: right;
    }

    .title-section hr {
        margin: 15px 15px 10px auto;
        position: relative;
    }

    .title-section hr::after {

        content: ' ';
        height: 3px;
        width: 50px;
        background: #00c569;
        position: absolute;
        top: -4px;
        right: 0;

    }

    .section-wrapper {
        margin-top: 30px;
    }

    .section-wrapper .title-box {

        text-align: center;

        margin-top: 35px;

    }

    @media screen and (max-width: 1199px) {


        .default-carousel-item:last-of-type{
            display: none;
        }
    }

    @media screen and (max-width: 992px) {


        .default-carousel-item:nth-child(3){
            display: none;
        }
    }

    @media screen and (max-width: 767px) {

        #main {

            padding-top: 56px;

        }
        .default-carousel-item{
            display: none;
        }


        .default-carousel-item:first-of-type{
            display: block;
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

                    </div>
                </section>

            </div>

            <div class="col-xs-12 col-lg-3 pull-left">

                <UserInfo/>


            </div>




        <section v-if="relatedProducts.length > 0" id="product-section" class="section-wrapper container-fluid">
            <div class=" container">
                <div class="row">
                    <div class=" col-xs-12 ">

                        <div class="title-section col-xs-12">
                            <div class="row">

                                <h3>

                                    محصولات مرتبط

                                </h3>
                                <hr/>

                            </div>
                        </div>

                        <div  class="col-xs-12 products-contents ">

                            <div  class="row">
                                <div class="owl-carousel">

                                     <ProductCarousel
                                            v-for="(product , index) in relatedProducts"
                                            :key="index"
                                            :img="str + '/' + product.photo"
                                            :title="product.product_name"
                                            :stock="product.stock"
                                            :link='getRelatedProductUrl(product)'
                                            column='4'
                                    />

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>

          <section v-show="!relatedProducts"  class="section-wrapper container-fluid">
                    <div class=" container">
                        <div class="row">
                            <div class=" col-xs-12 ">

                                <div class="title-section col-xs-12">


                                        <span class="placeholder-content content-full-width ">


                                        </span>
                                        <br/>

                                </div>

                                <div class="col-xs-12 products-contents ">

                                    <div  class="row">

                                            <div v-for="(item, index) in 4" :class="{ 'hidden-xs' : index >= 2}"
                                                 class="col-lg-3 col-md-4 col-sm-6  col-xs-12 default-carousel-item">

                                                <article class='carousel-item box-content col-xs-12'>

                                                    <span class="default-index-product-image placeholder-content col-xs-12"></span>

                                                    <span class="content-default-width placeholder-content margin-10 col-xs-10 col-xs-offset-1"></span>

                                                    <span class="content-default-width placeholder-content  col-xs-8 col-xs-offset-2"></span>

                                                    <span class="margin-10"></span>

                                                </article>

                                            </div>

                                        </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </section>

            <div class="buttons-wrapper  col-xs-12">
                <router-link :to="{name : 'productList'}" class="green-button blue-button">
                    مشاهده همه محصولات
                </router-link>
            </div>



        </main>
    </div>
</template>


<script>
    import ProductCarousel from '../main_components/product-list-carousel'
    import ProductContents from "./product-view/product";
    import UserInfo from "./product-view/user_info";
    import {eventBus} from "../../../../router/router";

    export default {
        components: {
            ProductContents,
            UserInfo,
            ProductCarousel
        },
        props:
            [
                "str",
                "defultimg",
                "loading_img",
                'userType'
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
                relatedProducts: "",
                errors: "",
                popUpMsg: "",
                submiting: false,
                isLoading: false,
                isMyProfile: false,
            };
        },
        methods: {
            init: function () {
                this.isLoading = true;
                var self = this;
                axios.post("/user/profile_info").then(function (response) {
                    self.currentUser = response.data;
                    axios
                        .post("/get_product_by_id", {
                            product_id: self.$route.params.id
                        })
                        .then(function (response) {
                            self.product = response.data.product;
                            if (self.currentUser.user_info) {
                                if (self.currentUser.user_info.id === self.product.main.myuser_id) {
                                    self.isMyProfile = true;
                                    self.$emit('isMyProfile', self.isMyProfile);
                                }
                            }

                            axios.post('/get_related_products', {
                                product_id : self.product.main.id
                            })
                                .then(function (response) {
                                    self.relatedProducts = response.data.related_products;
                                    self.isLoading = false;
                                });

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

                var self = this;
                if (this.currentUser.user_info) {
                    if (this.currentUser.user_info.id !== product.user_info.id) {
                        eventBus.$emit('ChatInfo',contact);
                    }
                    else {
                        this.popUpMsg = 'شما نمی توانید به خودتان پیام دهید.';
                        eventBus.$emit('submitSuccess', this.popUpMsg);
                        $('#custom-main-modal').modal('show');
                    }
                }
                else {
                    window.localStorage.setItem('contact',JSON.stringify(contact));
                    window.localStorage.setItem('pathname',window.location.pathname);

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

                num = num.toString().replace(/^0+/, '');
                num = num.toString().replace(/^\u0660+/, '');
                num = num.toString().replace(/^\u06f0+/, '');

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
                        self.errors = err.response.data.errors;
                        // self.registerComponentExceptions('Product-component: validation errors in edit product API');
                    });
            },
            stopLoader: function () {
                eventBus.$emit("isLoading", false);
            },
           getRelatedProductUrl: function (product) {

                return '/product-view/خرید-عمده-'
                    + product.subcategory_name.replace(' ', '-')
                    + '/'
                    + product.category_name.replace(' ', '-')
                    + '/'
                    + product.id;

            },
            elevatorEvent:function () {
                eventBus.$emit("elevatorText", "با استفاده از نردبان، محصول شما تا زمان دریافت محصول تازه تر در همان دسته بندی، به عنوان اولین محصول نمایش داده می‌شود.");

                eventBus.$emit("productId", this.product.main.id);
                $("#elevator-modal").modal("show")

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
        watch:{
            $route (to, from){
                this.currentUser = "";
                this.relatedProducts = "";
                this.product.user_info = "";
                this.errors= "";
                this.popUpMsg= "";
                this.submiting= false;
                this.loading= false;
                this.isMyProfile= false;
                this.product.main.id = "";
                this.init();

            }
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

    };
</script>





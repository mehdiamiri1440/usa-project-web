<style scoped>

    .green-button:focus, .green-button:hover {
        color: #fff !important;
    }
    .green-button.edit-product {
        background: #000546;
    }

    .green-button:focus {
        color: #fff;
    }

    .green-button.edit-product:hover {
        background: #000430;
    }

    .main-content-item {
        direction: rtl;
        float: left;
        width: 100%;
        margin: 24px auto;
        border-radius: 5px;
        box-shadow: 0 0 15px #dbdbdb;
        padding: 15px 0;
    }

    .main-article-title {
        margin: 15px auto;
        font-weight: bold;
    }

    .main-article-title a {
        color: #4c5058;
    }

    .main-article-title a:hover {
        color: #444;
    }

    .main-article-content {
        padding: 0 20px 20px;
    }

    .main-article-content p {
        margin-bottom: 15px;
        font-size: 15px;
        font-weight: bold;
    }

    .main-article-content p span {
        font-weight: normal;
    }

    .image-article-content {
        padding: 0;
        padding-top: 10px;
        height: 240px;
        overflow: hidden;
        float: right;
    }

    .image-article-content img {
        height: 100%;
    }

    .buy_details {
        border-top: 2px solid #f0f3f6;
        padding: 15px 0;
        margin: 15px auto;
        display: none;
    }

    .buy_details > div {
        margin: 7px auto;
    }

    .btn-content {
        display: inline-block;
        margin: 0 auto;
    }

    .btn-content img, .btn-content span {
        float: right;
        margin: 0 5px;
    }

    .create_buy_mobile a {
        margin: 0;
    }

    .main-image {
        float: right;
        direction: ltr;
    }

    .load-more-button a {
        direction: rtl;
        color: #666;
        font-size: 18px;
        width: 100%;
        box-shadow: 0 0 5px #bfbfbf;
        background: #f0f3f6 !important;
        overflow: hidden;
        border-radius: 5px;
        position: relative;
        transition: 300ms;
        border: none;
        top: 0;
    }

    .load-more-button a:hover {
        top: -6px;
        color: #333333;
        box-shadow: 0 0 5px #a5a5a5;
        transition: 300ms;
        position: relative;
    }

    .btn-loader {
        height: 38px;

        overflow: hidden;
    }

    .btn-loader img {
        width: 56px;
        margin-top: -15px;
    }

    input[type="text"], select, textarea {
        background: #eff3f6;
        border: 1px solid #cfcfcf;
        border-radius: 3px;
        width: 100% !important;
    }

    input[type="text"], textarea {
        padding: 13px 15px;
    }

    label {
        display: block;
        margin: 9px auto;
    }

    @media screen  and (max-width: 767px) {
        .buy_details {
            padding: 15px 0;
        }

        .main-image, .article-contents {
            padding: 0;
        }

        .main-content-item {
            padding: 15px 0 0;
        }
    }
</style>

<template>
    <div>
        <script v-html="jsonLDObject" type="application/ld+json"></script>

        <article class="main-content-item">
            <ProductUserInfo
                    :profile_photo="product.profile_info.profile_photo"
                    :user_info="product.user_info"
                    :user_full_name="product.user_info.first_name + ' ' +
            product.user_info.last_name"
                    :user_name="product.user_info.user_name"
                    :defultimg="defultimg"
                    :current_user="currentUser"
                    :product_id="product.main.id"
                    :is_my_profile_status="isMyProfile"
            />

            <div class="article-contents col-xs-12  col-sm-9">
                <div class="main-image col-xs-12 col-sm-5">
                    <div class="owl-carousel" v-if="product.photos.length > 0">
                        <OwlCarouselLists @click="registerComponentStatistics('productImageViewer','click','popUp')"
                                          v-for="photo in product.photos"
                                          :key="photo.id"
                                          :base="str + '/'"
                                          :img="photo.file_path"
                                          :alt="'فروش عمده ی ' + product.main.sub_category_name +
                                            ' '  +
                                            product.main.product_name +
                                            ' ' +
                                            product.main.city_name +
                                             ' - ' +
                                            product.main.province_name"
                                          v-on:popUpLoaded=updatePopUpStatus($event)
                        />

                    </div>
                </div>

                <div class="buttom-carousel-items-wrapper hidden-sm hidden-md hidden-lg col-xs-12">
                    <div class="row">
                        <div class="col-xs-6 text-left">
                            <a href="#" @click.prevent="copyProductLinkToClipBoard">
                                <i class="fa fa-share-alt-square"></i>
                            </a>
                        </div>

                        <div class="col-xs-6 text-right"></div>

                    </div>
                </div>

                <div class="main-article-content col-xs-12 col-sm-7">
                    <h2 class="main-article-title">
                        <a :href="productUrl"
                           @click="registerComponentStatistics('product',
                           'show-product-in-seperate-page',
                           'show-product-in-seperate-page')"

                           v-text="product.main.category_name +
                            ' | ' +
                            product.main.sub_category_name">
                        </a>
                    </h2>

                    <p>نوع محصول: <span v-text="product.main.product_name"></span></p>

                    <p>استان / شهر:
                        <span v-text="product.main.province_name +
                         ' - ' +
                          product.main.city_name"
                        ></span>
                    </p>

                    <p>مقدار موجودی: <span v-text="product.main.stock + 'کیلوگرم'"></span>
                    </p>

                    <p>
                        حداقل سفارش:

                        <span v-text="product.main.min_sale_amount"> </span>

                        <span>کیلوگرم</span>
                    </p>

                    <p>قیمت:
                        <span v-text="product.main.min_sale_price +
                         ' - ' +
                         product.main.max_sale_price"
                        >
                        </span>

                        <span>تومان</span>
                    </p>

                    <p>توضیحات: <span v-text="product.main.description"></span>
                    </p>
                </div>

                <div class="col-xs-12">
                    <div class="row">
                        <div class="create_buy_mobile hidden-sm hidden-md hidden-lg">
                            <a v-if="!isMyProfile" class="green-button" href="#" @click.prevent="openChat(product)">

                                <span class="fa fa-comment"></span> ارسال پیام
                            </a>

                            <a v-if="isMyProfile" class="green-button edit-product" href="#"
                               @click="openEditBox($event)">

                                <span class="fa fa-pencil"></span> ویرایش
                            </a>

                        </div>
                    </div>
                </div>

                <div class="buy_details form-group  col-xs-12">
                    <input type="hidden" id="product-id" :value="product.main.id">

                    <div class="col-xs-12 col-sm-6 pull-right">
                        <label for="stock" class="content-label">
                            مقدار موجودی (کیلوگرم):
                        </label>

                        <input id="stock" placeholder="مقدار موجودی" type="text"
                               class=" form-control" :value="product.main.stock">

                        <span class="text-danger" v-if="errors.stock" v-text="errors.stock[0]"></span>
                    </div>

                    <div class="col-xs-12 col-sm-6">
                        <label for="min-sale-amount" class="content-label">
                            حداقل سفارش (کیلوگرم):
                        </label>

                        <input id="min-sale-amount" placeholder="حداقل سفارش" type="text"
                               class=" form-control" :value="product.main.min_sale_amount">

                        <span class="text-danger" v-if="errors.min_sale_amount"
                              v-text="errors.min_sale_amount[0]"></span>
                    </div>

                    <div class="col-xs-12 col-sm-6 pull-right ">
                        <label for="min-sale-price" class="content-label">
                            حداقل قیمت:
                        </label>

                        <input id="min-sale-price" placeholder="حداقل قیمت" type="text" class=" form-control"
                               :value="product.main.min_sale_price">

                        <span class="text-danger" v-if="errors.min_sale_price" v-text="errors.min_sale_price[0]">
                               </span>

                    </div>

                    <div class="col-xs-12 col-sm-6 ">
                        <label for="max-sale-price" class="content-label">
                            حداکثر قیمت:
                        </label>

                        <input id="max-sale-price" placeholder="حداکثر قیمت" type="text" class=" form-control"
                               :value="product.main.max_sale_price">

                        <span class="text-danger" v-if="errors.max_sale_price" v-text="errors.max_sale_price[0]"></span>
                    </div>

                    <div class="col-xs-12 ">
                        <label for="description" class="content-label">
                            توضیحات:
                        </label>

                        <textarea id="description" rows="5" placeholder="ویژگی های لازم محصول را توضیح دهید..."
                                  class=" form-control" :value="product.main.description"></textarea>
                        <span class="text-danger" v-if="errors.description" v-text="errors.description[0]"></span>

                    </div>

                    <div class="hidden-xs col-sm-8"></div>

                    <div class="col-xs-12 col-sm-4">
                        <button @click="editProduct($event)" type="submit" style="border:none"
                                class="green-button">ثبت ویرایش
                        </button>
                    </div>
                </div>
            </div>

            <div class="loading_images  col-xs-12"
                 v-if="loading">
                <img :src="loading_img" style="width:200px;height:200px">
            </div>
        </article>
    </div>
</template>
<script>
    import {eventBus} from "../../../../../js/router/dashboard_router";

    var PopupImage = {
        data: function () {
            return {
                imgSrcs: '',
            };
        },
        props: ['img', 'base'],
        template: '<div>' +
            '<a   :href="base + img">' +
            '<img :src="base + img">' +
            '</a>' +
            '</div>',
        mounted: function () {
            $(this.$el).parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
            });

        }
    };
    var OwlCarouselLists = {
        data: function () {
            return {
                imgSrcs: '',
            };
        },
        props: ['img', 'base', 'popUpLoaded', 'alt'],
        template: '<div class="image-wrapper">' +
            '<a  :href="base + img">' +
            '<img :src="base + img" :alt="alt">' +
            '</a>' +
            '</div>',
        mounted: function () {

            $(".owl-carousel").owlCarousel({
                loop: false,
                items: 1,
                margin: 10,
                nav: false,
                dots: true,
                touchDrag: true,
                mouseDrag: true,
            });
            $(this.$el).parent().parent().parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                callbacks: {
                    open: function () {
                        if (!window.history.state) {
                            window.history.pushState({pushed: true}, '', '/product-list');
                        }

                        $(window).on('popstate', function (e) {
                            $.magnificPopup.close();
                        });
                    },
                }
            });
        },
    };
    import ProductUserInfo from './product_user_info'

    export default {
        components: {
            PopupImage,
            OwlCarouselLists,
            ProductUserInfo,
        },
        props: [
            'product',
            'defultimg',
            'str',
            'loading',
            'loading_img',
            'currentUser',
        ],
        data: function () {
            return {
                submiting: false,
                errors: '',
                popUpMsg: '',
                popUpLoaded: false,
                isMyProfile: false,
                productUrl: '',
                jsonLDObject: '',
            }
        },
        methods: {
            init: function () {
                this.productUrl = this.getProductUrl();

                if (this.currentUser.user_info) {
                    if (this.currentUser.user_info.id === this.product.main.myuser_id) {
                        this.isMyProfile = true;
                        this.$emit('isMyProfile', this.isMyProfile);
                    }
                }

                this.jsonLDObject = this.createJsonLDObject();
            },
            toLatinNumbers: function (num) {
                if (num == null) {
                    return '';
                }
                var numDic = {
                    '۰': '0',
                    '۱': '1',
                    '۲': '2',
                    '۳': '3',
                    '۴': '4',
                    '۵': '5',
                    '۶': '6',
                    '۷': '7',
                    '۸': '8',
                    '۹': '9',
                };

                return num
                    .toString()
                    .replace(/[۰-۹]/g, function (w) {
                        return numDic[w];
                    });
            },
            openEditBox: function (e) {
                e.preventDefault();

                if (this.currentUser.profile) {
                    var event = $(e.target);
                    this.errors = '';
                    var element = (event.parents('article').find('.buy_details'));

                    element.slideToggle("125", "swing");
                    $('.buy_details').not(element).slideUp();

                    this.scrollToTheRequestRegisterBox(element);

                    this.registerComponentStatistics('product', 'open-edit-box', 'click on open edit box');
                }
                else {
                    this.registerComponentExceptions('Product-component: click on open edit box while current user is undefined', true);
                }

            },
            scrollToTheRequestRegisterBox: function (element) {
                var newPosition = $(element).offset();
                $('html, body').stop().animate({scrollTop: newPosition.top - 380}, 1000);
            },
            editProduct: function (e) {
                e.preventDefault();

                this.submiting = true;
                this.errors = '';

                var event = $(e.target);
                var productId = (event.parents('article').find('.buy_details input#product-id'));
                var stock = (event.parents('article').find('.buy_details input#stock'));
                var minSalePrice = (event.parents('article').find('.buy_details input#min-sale-price'));
                var maxSalePrice = (event.parents('article').find('.buy_details input#max-sale-price'));
                var minSaleAmount = (event.parents('article').find('.buy_details input#min-sale-amount'));
                var description = (event.parents('article').find('.buy_details textarea#description'));

                description = description.val();
                stock = this.toLatinNumbers(stock.val());
                minSalePrice = this.toLatinNumbers(minSalePrice.val());
                maxSalePrice = this.toLatinNumbers(maxSalePrice.val());
                minSaleAmount = this.toLatinNumbers(minSaleAmount.val());
                productId = productId.val();

                var request = {
                    product_id: productId,
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
                        self.popUpMsg = 'محصول شما با موفقیت ویرایش شد.';
                        eventBus.$emit('submitSuccess', self.popUpMsg);
                        $('#custom-main-modal').modal('show');

                        self.registerComponentStatistics('product', 'register-product-edit', 'product-edited-successfully');
                    })
                    .catch(function (err) {
                        self.errors = '';
                        self.errors = err.response.data.errors;

                        self.registerComponentExceptions('Product-component: validation errors in edit product API');
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
            updatePopUpStatus: function (popUpOpenStatus) {
                this.popUpLoaded = popUpOpenStatus;
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
                )
                {
                    return true;
                }
                else {
                    return false;
                }
            },
            createJsonLDObject: function () {
                var fullName = this.product.user_info.first_name + ' ' + this.product.user_info.last_name;

                var productOwnerProfilePageUrl = "https://www.incobac.com/profile/" + this.product.user_info.user_name;

                let jsonDL = {
                    "@context": "https://schema.org/",
                    "@type": "Product",
                    "name": this.product.main.name,
                    "image": this.product.photos.map(function (photo) {
                        return 'https://www.incobac.com/storage/' + photo.file_path;
                    }),
                    "description": this.product.main.description,
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.4",
                        "reviewCount": "3"
                    },
                    "offers": {
                        "@type": "Offer",
                        "url": "https://www.incobac.com" + this.getProductUrl(),
                        "priceCurrency": "IRR",
                        "price": this.product.main.min_sale_price * 10,
                        "availability": "https://schema.org/InStock",
                        "seller": {
                            "@type": "Person",
                            "name": fullName,
                            "url": productOwnerProfilePageUrl
                        }
                    }
                };

                return jsonDL;
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
            registerComponentExceptions: function (description, fatal = false) {
                gtag('event', 'exception', {
                    'description': description,
                    'fatal': fatal
                });
            },
        },
        mounted() {
            this.init();
        }
    }
</script>

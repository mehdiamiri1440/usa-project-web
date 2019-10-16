<style scoped>


    .green-button:focus, .green-button:hover {
        color: #fff !important;
    }

    .green-button.edit-product {
        background: #000546;
        width: 100%;
    }

    .green-button:focus {
        color: #fff;
    }

    .green-button.edit-product:hover {
        background: #000430;
    }

    .title-widget {
        font-size: 18px;
        padding: 15px 15px 0 15px;
    }

    .main-content-item {
        direction: rtl;
        margin: 15px auto;
        border-radius: 5px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16);
        padding: 0;
        background: #fff;
    }

    .main-article-title {
        margin: 15px auto;
        font-weight: bold;
        font-size: 32px;
    }

    .main-article-title a {
        color: #4c5058;
    }

    .main-article-title a:hover {
        color: #444;
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
        padding: 0
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

    .valid-user-badge {

        background: #00c569;

        display: inline;

        position: absolute;

        left: 0;

        top: -15px;

        padding: 5px 15px 3px 14px;

        border-top: 3px solid #00B761;

        text-align: center;

        color: #fff;

        width: 54px;

    }

    .valid-user-badge::after {

        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 27px 25px;
        border-color: transparent #00c569 transparent #00c569;
        line-height: 0;
        _border-color: #000000 #000000 #000000 #6980fe;
        _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
        content: "";
        position: absolute;
        left: 0;
        bottom: -24px;

    }

    .valid-user-badge.mobile-view {

        left: initial;

        top: -5px;

        padding: 0 15px 2px 14px;

        text-align: center;

        color: #fff;

        right: 15px;

    }

    .valid-user-badge .wrapper-icon span {

        font-size: 13px;
        display: inherit;

    }

    .valid-user-badge.mobile-view::after {

        border-width: 0 27px 20px;
        bottom: -20px;

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

    .article-seo-title {

        margin-bottom: 15px;
        font-size: 15px;
        font-weight: bold;

    }

    .article-seo-title h2 {

        font-size: 15px;
        font-weight: normal;
        display: inline-block;
        color: #333;

    }

    .is-user-valid {
        border: 2px solid #00c569;
    }

    .modal-content {
        overflow: hidden;
    }
    .text-danger{
        height: 24px;
        font-size: 12px;
    }
    .close-modal{
        font-size: 20px;

        color: red;

        float: right;

        display: block;

        margin-left: 15px;

        margin-top: 8px;
    }

    .modal-title{
        float: right;

        font-size: 23px;

        font-weight: bold;

        color: #474747;
    }

    .green-button {
        border: medium none;

        margin: 15px auto;

        width: initial;

        font-size: 14px;

        font-weight: bold;

        display: block;

    }

</style>

<template>


    <article class="main-content-item" :class="{ 'is-user-valid': product.user_info.active_pakage_type != 0 }">

        <!--article modal-->

        <div v-if="isMyProfile" class="modal fade" :id="'article-modal' + product.main.id" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog " role="document">
                <div class="modal-content">
                    <div class="modal-header">

                        <a class="close-modal" href="#" data-dismiss="modal">
                            <i class="fa fa-times"></i>
                        </a>

                        <div class="modal-title"
                             v-text="'ویرایش ' + product.main.category_name + ' | ' + product.main.sub_category_name ">

                        </div>

                    </div>
                    <div class="modal-body col-xs-12">
                        <div class="row">
                            <input type="hidden" class="product-id" :value="product.main.id">
                            <div class="col-xs-12 col-sm-6 pull-right">
                                <label class="content-label">
                                    مقدار موجودی (کیلوگرم)
                                </label>

                                <input placeholder="مثلا : 5000 کیلوگرم" type="text"
                                       class=" form-control stock" :value="product.main.stock">

                                <div class="text-danger"><span v-if="errors.stock" v-text="errors.stock[0]"></span>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6">
                                <label class="content-label">
                                    حداقل سفارش (کیلوگرم)
                                </label>

                                <input placeholder="مثلا : 200 کیلوگرم" type="text"
                                       class=" form-control min-sale-amount" :value="product.main.min_sale_amount">

                                <div class="text-danger"><span v-if="errors.min_sale_amount"
                                                               v-text="errors.min_sale_amount[0]"></span></div>
                            </div>

                            <div class="col-xs-12 col-sm-6 pull-right ">
                                <label class="content-label">
                                    حداقل قیمت (تومان)
                                </label>

                                <input placeholder="مثلا : 10000 تومان" type="text" class=" form-control min-sale-price"
                                       :value="product.main.min_sale_price">

                                <div class="text-danger">
                                    <span v-if="errors.min_sale_price" v-text="errors.min_sale_price[0]"></span>
                                </div>

                            </div>

                            <div class="col-xs-12 col-sm-6 ">
                                <label class="content-label">
                                    حداکثر قیمت (تومان)
                                </label>

                                <input placeholder="مثلا : 50000 تومان" type="text" class=" form-control max-sale-price"
                                       :value="product.main.max_sale_price">

                                <div class="text-danger">
                                    <span v-if="errors.max_sale_price"
                                          v-text="errors.max_sale_price[0]"></span>
                                </div>
                            </div>
                        </div>
                        <button @click="editProduct('article-modal' + product.main.id)" type="submit"
                                style="border:none"
                                class="green-button">ثبت ویرایش
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!--end article modal-->


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

        <ArticleMainContents/>

        <!--google codes-->
        <script v-html="jsonLDObject" type="application/ld+json"></script>
        <!--end google codes-->

    </article>

</template>
<script>
    import {eventBus} from "../../../../../js/router/dashboard_router";

    import ProductUserInfo from './product-article-components/product_user_info'
    import ArticleMainContents from './product-article-components/article_main_contents'

    export default {
        components: {
            ProductUserInfo,
            ArticleMainContents,
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
                    return null;
                }

                return num.toString()
                    .replace(/[\u0660-\u0669]/g, function (c) {
                        return c.charCodeAt(0) - 0x0660;
                    }).replace(/[\u06f0-\u06f9]/g, function (c) {
                        return c.charCodeAt(0) - 0x06f0;
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
                        }, 300);
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
                ) {
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
                    "name": this.product.main.product_name,
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

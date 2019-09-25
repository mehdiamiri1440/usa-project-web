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
    .title-widget{
        font-size:18px;
        padding: 15px 15px 0 15px;
    }
    .main-content-item {
        direction: rtl;
        float: left;
        width: 100%;
        margin: 15px auto;
        border-radius: 5px;
        box-shadow: 0 0 15px #dbdbdb;
        padding: 15px 0;
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

    .valid-user-badge{

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
        border-color: transparent #00c569  transparent #00c569 ;
        line-height: 0;
        _border-color: #000000 #000000 #000000 #6980fe;
        _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
        content: "";
        position: absolute;
        left: 0;
        bottom: -24px;

    }

    .valid-user-badge.mobile-view{

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

    .valid-user-badge.mobile-view::after  {

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
    
    .article-seo-title h2{


        font-size: 15px;
        font-weight: normal;
        display: inline-block;
        color: #333;

    }

    .text-danger{
        height: 24px
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
   
        

        <article class="main-content-item">
            <script v-html="jsonLDObject" type="application/ld+json"></script>
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

                        <div class="col-xs-6 text-right">
                      
                            <div v-if="product.user_info.active_pakage_type != 0" class="valid-user-badge mobile-view hidden-sm hidden-md hidden-lg">
                                <div class="wrapper-icon">
                                    <svg  width="24.965" height="30.574" viewBox="0 0 24.965 30.574">
                                      <g id="incobac-icon" data-name="incobac" transform="translate(-273.1 -715.025)">
                                        <path id="Subtraction_1" data-name="Subtraction 1" d="M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z" transform="translate(2237.1 709.808)" fill="#fff"/>
                                        <g id="Group_24" data-name="Group 24">
                                          <path id="Rectangle_12" data-name="Rectangle 12" d="M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z" transform="translate(282.389 717.5) rotate(45)" fill="#fff"/>
                                          <path id="Rectangle_13" data-name="Rectangle 13" d="M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z" transform="translate(294.935 718.561) rotate(135)" fill="#fff"/>
                                        </g>
                                      </g>
                                    </svg>
                                    <span >ویژه</span>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="main-article-content col-xs-12 col-sm-7">

                    <div v-if="product.user_info.active_pakage_type != 0"  class="valid-user-badge hidden-xs">
                        <div class="wrapper-icon">
                            <svg  width="24.965" height="30.574" viewBox="0 0 24.965 30.574">
                              <g id="incobac-icon" data-name="incobac" transform="translate(-273.1 -715.025)">
                                <path id="Subtraction_1" data-name="Subtraction 1" d="M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z" transform="translate(2237.1 709.808)" fill="#fff"/>
                                <g id="Group_24" data-name="Group 24">
                                  <path id="Rectangle_12" data-name="Rectangle 12" d="M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z" transform="translate(282.389 717.5) rotate(45)" fill="#fff"/>
                                  <path id="Rectangle_13" data-name="Rectangle 13" d="M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z" transform="translate(294.935 718.561) rotate(135)" fill="#fff"/>
                                </g>
                              </g>
                            </svg>



                        </div>
                    </div>
                    <h1 v-if="$route.params.id" class="main-article-title">
                        <a :href="productUrl"
                           @click="registerComponentStatistics('product',
                           'show-product-in-seperate-page',
                           'show-product-in-seperate-page')"

                           v-text="product.main.category_name +
                            ' | ' +
                            product.main.sub_category_name">
                        </a>
                    </h1>

                    <h3 v-else class="main-article-title">
                        <a :href="productUrl"
                           @click="registerComponentStatistics('product',
                           'show-product-in-seperate-page',
                           'show-product-in-seperate-page')"

                           v-text="product.main.category_name +
                            ' | ' +
                            product.main.sub_category_name">
                        </a>
                    </h3>

                       <div class="article-seo-title" v-if="$route.params.categoryName">
                            نوع محصول: 

                        <h2>
                        <span  v-text="product.main.product_name"></span>
                        </h2>

                       </div>

                        <p v-else>
                            نوع محصول: 
                              <span  v-text="product.main.product_name"></span>

                        </p>

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
                            مقدار موجودی (کیلوگرم)
                        </label>

                        <input id="stock" placeholder="" type="text"
                               class=" form-control" :value="product.main.stock">

                        <div class="text-danger" > <span v-if="errors.stock" v-text="errors.stock[0]" ></span></div>
                    </div>

                    <div class="col-xs-12 col-sm-6">
                        <label for="min-sale-amount" class="content-label">
                            حداقل سفارش (کیلوگرم)
                        </label>

                        <input id="min-sale-amount" placeholder="حداقل سفارش" type="text"
                               class=" form-control" :value="product.main.min_sale_amount">

                        <div class="text-danger"><span  v-if="errors.min_sale_amount"
                              v-text="errors.min_sale_amount[0]"></span></div>
                    </div>

                    <div class="col-xs-12 col-sm-6 pull-right ">
                        <label for="min-sale-price" class="content-label">
                            حداقل قیمت
                        </label>

                        <input id="min-sale-price" placeholder="حداقل قیمت" type="text" class=" form-control"
                               :value="product.main.min_sale_price">

                        <div class="text-danger" >
                            <span v-if="errors.min_sale_price" v-text="errors.min_sale_price[0]"></span>
                        </div>

                    </div>

                    <div class="col-xs-12 col-sm-6 ">
                        <label for="max-sale-price" class="content-label">
                            حداکثر قیمت
                        </label>

                        <input id="max-sale-price" placeholder="حداکثر قیمت" type="text" class=" form-control"
                               :value="product.main.max_sale_price">

                        <div class="text-danger" > <span v-if="errors.max_sale_price" v-text="errors.max_sale_price[0]"></span></div>
                    </div>

                <!--     <div class="col-xs-12 ">
                        <label for="description" class="content-label">
                            توضیحات:
                        </label>

                        <textarea id="description" rows="5" placeholder="ویژگی های لازم محصول را توضیح دهید..."
                                  class=" form-control" :value="product.main.description"></textarea>
                        <span class="text-danger" v-if="errors.description" v-text="errors.description[0]"></span>

                    </div> -->

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
    import OwlCarouselLists from './carousel_image'
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
                
                console.log('Description:' + description);

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

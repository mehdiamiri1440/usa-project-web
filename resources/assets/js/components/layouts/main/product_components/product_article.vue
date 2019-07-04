<style scoped>
    .green_bot.edit-product {
        background: #000546;
    }
    .green_bot:focus {
        color: #fff;
    }

    .green_bot.edit-product:hover {
        background: #000430;
    }

    .main-content-item {
        direction: rtl;
        float: left;
        width: 100%;
        margin: 24px auto;
        border-radius: 5px;
        box-shadow: 0 0 15px #dbdbdb;
        padding: 15px 0 0;
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

    .image-wrapper img {
        transition: 300ms;
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

    @media screen  and (max-width: 768px){
        .buy_details {
            padding: 15px 0;
        }
        .main-image,.article-contents{
            padding:  0;
        }
    }
</style>

<template>
    <div>
        <article class="main-content-item" >
            <product-user-info
                    :profile_photo="product.profile_info.profile_photo"
                    :user_info="product.user_info"
                    :user_full_name="product.user_info.first_name + ' ' +
            product.user_info.last_name"
                    :user_name="product.user_info.user_name"
                    :defultimg="defultimg"
                    :current_user="currentUser"
                    :product_id="product.main.id"
                    :is_my_profile_status="isMyProfile"
            ></product-user-info>
            <div class="article-contents col-xs-12  col-sm-9 ">
                <div class="main-image col-xs-12 col-sm-5">
                    <div class="owl-carousel" v-if="product.photos.length > 0">
                        <image-viewer-list @click="registerComponentStatistics('productImageViewer','click','popUp')"
                                           v-for="photo in product.photos"
                                           :key="photo.id"
                                           :base="str + '/'"
                                           :img="photo.file_path"
                                           :alt="'فروش عمده ی ' + product.main.sub_category_name + ' '  +product.main.product_name + ' ' + product.main.city_name + ' - ' + product.main.province_name"
                                           v-on:popUpLoaded=updatePopUpStatus($event)>
                        </image-viewer-list>
                    </div>
                </div>
                <div class="main-article-content col-xs-12 col-sm-7">
                    <h2 class="main-article-title">
                        <a href="#">{{product.main.category_name + ' | ' +
                            product.main.sub_category_name}}</a>
                    </h2>

                    <p>نوع محصول: <span>{{product.main.product_name}}</span></p>
                    <p>استان / شهر:
                        <span>{{product.main.province_name + ' - ' + product.main.city_name}}</span>
                    </p>
                    <p>مقدار موجودی: <span>{{product.main.stock}} کیلوگرم</span></p>
                    <p>حداقل سفارش: <span>{{product.main.min_sale_amount}} کیلوگرم</span></p>
                    <p>قیمت: <span>{{product.main.min_sale_price + ' - ' + product.main.max_sale_price}}
                                    تومان</span></p>
                    <p>توضیحات: <span>{{product.main.description}}</span></p>

                </div>
                <div class="col-xs-12">
                    <div class="row">
                        <div class="create_buy_mobile hidden-sm hidden-md hidden-lg">
                            <a v-if="!isMyProfile" class="green_bot" href="#" @click.prevent="openChat(product)">
                                <span class="fa fa-comment"></span> ارسال پیام
                            </a>
                            <a v-if="isMyProfile" class="green_bot edit-product"  href="#" @click="openEditBox($event)" >
                                <span class="fa fa-pencil"></span> ویرایش
                            </a>

                        </div>
                    </div>
                </div>
                <div class="buy_details form-group  col-xs-12">
                    <input type="hidden" id="product-id" :value="product.main.id">
                    <div class="col-xs-12 col-sm-6 pull-right">
                        <label for="stock" class="content-lable">
                            مقدار موجودی (کیلوگرم):
                        </label>
                        <input id="stock" placeholder="مقدار موجودی" type="text"
                               class=" form-control" :value="product.main.stock">
                        <span class="text-danger" v-if="errors.stock">{{errors.stock[0]}}</span>
                    </div>

                      <div class="col-xs-12 col-sm-6">
                        <label for="min-sale-amount" class="content-lable">
                            حداقل سفارش  (کیلوگرم):
                        </label>
                        <input id="min-sale-amount" placeholder="حداقل سفارش" type="text"
                               class=" form-control" :value="product.main.min_sale_amount">
                        <span class="text-danger" v-if="errors.min_sale_amount">{{errors.min_sale_amount[0]}}</span>
                    </div>
                     <div class="col-xs-12 col-sm-6 pull-right ">
                               <label for="min-sale-price" class="content-lable">
                                   حداقل قیمت:
                               </label>
                               <input id="min-sale-price" placeholder="حداقل قیمت" type="text" class=" form-control" :value="product.main.min_sale_price">
                               <span class="text-danger" v-if="errors.min_sale_price">{{errors.min_sale_price[0]}}
                               </span>

                    </div>
                    <div class="col-xs-12 col-sm-6 ">

                               <label for="max-sale-price" class="content-lable">
                                   حداکثر قیمت:
                               </label>
                               <input id="max-sale-price" placeholder="حداکثر قیمت" type="text" class=" form-control" :value="product.main.max_sale_price">
                               <span class="text-danger" v-if="errors.max_sale_price">{{errors.max_sale_price[0]}}</span>


                    </div>

                    <div class="col-xs-12 ">
                        <label for="description" class="content-lable">
                            توضیحات:
                        </label>
                        <textarea id="description" rows="5" placeholder="ویژگی های لازم محصول را توضیح دهید..."
                                  class=" form-control" :value="product.main.description"></textarea>
                        <span class="text-danger" v-if="errors.description">{{errors.description[0]}}</span>
                    </div>
                    <div class="hidden-xs col-sm-8">
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <button @click="editProduct($event)" type="submit" style="border:none"
                                class="green_bot">ثبت ویرایش
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
            var self = this;

            $(".owl-carousel").owlCarousel({
                loop: false,
                items: 1,
                margin: 10,
                nav: false,
                dots: true
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
    import productUserInfo from './product_user_info'

    export default {
        props: [
            'product',
            'defultimg',
            'str',
            'loading',
            'loading_img',
        ],

        data: function () {
            return {
                submiting: false,
                errors: '',
                currentUser: {
                    profile: '',
                    user_info: ''
                },
                popUpMsg: '',
                popUpLoaded: false,
                isMyProfile:false,
                products:this.product
            }
        },
        components: {
            "popup": PopupImage,
            'image-viewer-list': OwlCarouselLists,
            "product-user-info": productUserInfo,
        },
        methods: {
            init: function () {
                var self = this;
                axios.post('/user/profile_info')
                    .then(function (response) {
                        self.currentUser = response.data;
                        if (self.currentUser.user_info) {
                            if (self.currentUser.user_info.id === self.product.main.myuser_id) {
                                self.isMyProfile = true;
                                self.$emit('isMyProfile', self.isMyProfile);
                            }
                        }
                    });
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
                if (this.currentUser.profile) {
                    e.preventDefault;
                    var event = $(e.target);

                    this.errors = '';

                    var element = (event.parents('article').find('.buy_details'));

                    element.slideToggle("125", "swing");
                    $('.buy_details').not(element).slideUp();

                    this.scrollToTheRequestRegisterBox(index);
                }
                else {
                    //
                }

            },
            scrollToTheRequestRegisterBox: function (element) {
                var newPosition = $(element).offset();
                $('html, body').stop().animate({scrollTop: newPosition.top - 380}, 1000);
            },
            editProduct: function (e) {
                e.preventDefault;
                var event = $(e.target);

                this.submiting = true;

                this.errors = '';

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

                if(description != '') {
                    request.description = description;
                }

                var self = this;
                axios.post('/edit_product',request)
                    .then(function(response){
                         self.popUpMsg = 'محصول شما با موفقیت ویرایش شد.';
                            eventBus.$emit('submitSuccess', self.popUpMsg);
                            $('#myModal').modal('show');
                    })
                    .catch(function(err){
                        self.errors = '';
                        self.errors = err.response.data.errors;
                    });

//                axios.post('/does_buyer_already_had_requested_the_produtct', {
//                    product_id: productId,
//                })
//                    .then(function (response) {
//
//                        if (response.data.status == false) {
//                            self.RegisterBuyAdRequest(request, productId);
//                            self.submiting = false;
//                        }
//                        else {
//                            self.popUpMsg = 'شما قبلا درخواست خرید این محصول را ثبت کرده اید!';
//                            eventBus.$emit('submitSuccess', self.popUpMsg);
//                            $('#myModal').modal('show');
//                            self.submiting = false;
//
//                            return false;
//                        }
//                    })
//                    .catch(function (e) {
//                        self.popUpMsg = 'حساب کاربری شما از نوع خریداران نیست!';
//                        eventBus.$emit('submitSuccess', self.popUpMsg);
//                        $('#myModal').modal('show');
//
//                        self.submiting = false;
//
//                        return false;
//                    });
//

            },
            RegisterBuyAdRequest: function (request, productId) {
                var self = this;

                axios.post('/user/add_buyAd', request)
                    .then(function (response) {
                        self.popUpMsg = 'درخواست خرید شما ثبت شد!';
                        eventBus.$emit('submitSuccess', self.popUpMsg);
                        $('#myModal').modal('show');

                        axios.post('/register_buyer_request_for_the_product', {
                            product_id: productId,
                        });
                    })
                    .catch(function (err) {
                        self.errors = '';
                        console.log('error');
                        self.errors = err.response.data.errors;
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
                }

                if (this.currentUser.user_info) {
                    if (this.currentUser.user_info.id != product.user_info.id) {
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
                        $('#myModal').modal('show');
                    }

                }
                else {
                    this.popUpMsg = 'اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    eventBus.$emit('submitSuccess', this.popUpMsg);
                    $('#myModal2').modal('show');
                }
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
            updatePopUpStatus: function (popUpOpenStatus) {
                this.popUpLoaded = popUpOpenStatus;
            },
        },
        mounted() {
            this.init();

        }
    }
</script>

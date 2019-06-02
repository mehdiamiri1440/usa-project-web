<style scoped>
    .green_bot.edit-product {
        background: #000546;
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
        padding: 15px;
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


</style>

<template>
    <div>
        <article class="main-content-item" v-for="(product,productIndex) in products"
                 :key="product.main.id">
            <product-user-info
                    :profile_photo="product.profile_info.profile_photo"
                    :user_info="product.user_info"
                    :user_full_name="product.user_info.first_name + ' ' +
            product.user_info.last_name"
                    :product_owner_id="product.main.myuser_id"
                    :user_name="product.user_info.user_name"
                    :defultimg="defultimg"
                    :current_user="currentUser"
                    v-on:isMyProfile="isMyProfileFunction($event)"
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
                    <p>قیمت: <span>{{product.main.min_sale_price + ' - ' + product.main.max_sale_price}}
                                    تومان</span></p>
                    <p>توضیحات: <span>{{product.main.description}}</span></p>
                </div>
                <div class="create_buy_mobile hidden-sm hidden-md hidden-lg">
                    <a v-if="!isMyProfile" class="green_bot" href="#" @click.prevent="openChat(product)">
                        <span class="fa fa-comment"></span> ارسال پیام
                    </a>
                    <a v-if="isMyProfile" class="green_bot edit-product" href="#" @click.prevent="openChat(product)">
                        <span class="fa fa-pencil"></span> ویرایش
                    </a>

                </div>

            </div>
            <div class="buy_details form-group  col-xs-12">
                <input type="hidden" id="product-id" :value="product.main.id">
                <div class="col-xs-12 col-sm-6">
                    <label for="requirement-amount" class="content-lable">
                        مقدار مورد نیاز (کیلوگرم):
                    </label>
                    <input id="requirement-amount" placeholder="مقدار مورد نیاز" type="text"
                           class=" form-control">
                    <span class="text-danger" v-if="errors.requirement_amount">{{errors.requirement_amount[0]}}</span>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <label for="pack-type" class="content-lable">
                        نوع بسته بندی:
                    </label>
                    <input id="pack-type" placeholder=" نوع بسته بندی" type="text" class=" form-control">
                    <span class="text-danger" v-if="errors.pack_type">{{errors.pack_type[0]}}</span>
                </div>
                <div class="col-xs-12 ">
                    <label for="description" class="content-lable">
                        توضیحات:
                    </label>
                    <textarea id="description" rows="5" placeholder="ویژگی های لازم محصول را توضیح دهید..."
                              class=" form-control"></textarea>
                    <span class="text-danger" v-if="errors.description">{{errors.description[0]}}</span>
                </div>
                <div class="hidden-xs col-sm-8">
                </div>
                <div class="col-xs-12 col-sm-4">
                    <button @click="registerRequest($event)" type="submit" style="border:none"
                            class="green_bot">ثبت درخواست
                    </button>
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
                            window.history.pushState({pushed: true}, '', '/master/product-list');
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
            'products',
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
                product:this.products,
                isMyProfile:false
            }
        },
        components: {
            "popup": PopupImage,
            'image-viewer-list': OwlCarouselLists,
            "product-user-info": productUserInfo,
        },
        methods: {
            init: function () {
                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data));

            },
            isMyProfileFunction:function(event){
                this.isMyProfile = event;
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
            getProductById: function (productId) {
                var product = this.products.filter(function (product) {
                    if (product.main.id == productId) {
                        return true;
                    }
                    else return false;
                });

                return product[0];
            },
            openRequestRegisterBox: function (e) {
                if (this.currentUser.profile) {
                    e.preventDefault;
                    var event = $(e.target);

                    this.errors = '';

                    var index = (event.parents('article').index() + 1);
                    var element = $('article:nth-of-type(' + index + ') .buy_details');
                    element.slideToggle("125", "swing");
                    $('.buy_details').not(element).slideUp();

                    this.scrollToTheRequestRegisterBox(element);
                }
                else {
                    this.popUpMsg = 'تنها کاربران تایید شده ی اینکوباک مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    eventBus.$emit('submitSuccess', this.popUpMsg);
                    $('#myModal2').modal('show');
                }

            },
            scrollToTheRequestRegisterBox: function (element) {
                var newPosition = $(element).offset();
                $('html, body').stop().animate({scrollTop: newPosition.top - 380}, 1000);
            },
            registerRequest: function (e) {
                e.preventDefault;
                var event = $(e.target);


                this.submiting = true;

                this.errors = '';

                var index = (event.parents('article').index() + 1);
                var productId = $('article:nth-of-type(' + index + ') .buy_details input#product-id');
                var requirementAmount = $('article:nth-of-type(' + index + ') .buy_details input#requirement-amount');
                var packType = $('article:nth-of-type(' + index + ') .buy_details input#pack-type');
                var description = $('article:nth-of-type(' + index + ') .buy_details textarea#description');

                description = description.val();
                requirementAmount = this.toLatinNumbers(requirementAmount.val());
                packType = packType.val();
                productId = productId.val();

                var product = this.getProductById(productId);

                var request = {
                    requirement_amount: requirementAmount,
                    category_id: product.main.sub_category_id,
                    pack_type: packType,
                    description: description,
                };

                if (product.main.product_name) {
                    request.name = product.main.product_name;
                }

                var self = this;
                //check if product_id there isn't in user product request list
                axios.post('/does_buyer_already_had_requested_the_produtct', {
                    product_id: productId,
                })
                    .then(function (response) {

                        if (response.data.status == false) {
                            self.RegisterBuyAdRequest(request, productId);
                            self.submiting = false;
                        }
                        else {
                            self.popUpMsg = 'شما قبلا درخواست خرید این محصول را ثبت کرده اید!';
                            eventBus.$emit('submitSuccess', self.popUpMsg);
                            $('#myModal').modal('show');
                            self.submiting = false;

                            return false;
                        }
                    })
                    .catch(function (e) {
                        self.popUpMsg = 'حساب کاربری شما از نوع خریداران نیست!';
                        eventBus.$emit('submitSuccess', self.popUpMsg);
                        $('#myModal').modal('show');

                        self.submiting = false;

                        return false;
                    });


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
            formBut: function (link) {
                $index = ($(link).parents('article').index() + 1);
                $element = $('article:nth-of-type(' + $index + ') .buy_details');
                $element.slideToggle("125", "swing");
                $('.buy_details').not($element).slideUp();
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

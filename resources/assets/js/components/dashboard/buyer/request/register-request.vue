<style scoped>
    /*main style*/

    .main-content {
        max-width: 685px;
        background: #fff;
        border-radius: 9px;
        box-shadow: 0 0 10px #c5c5c5;
        position: absolute;
        left: calc(50% - 342px);
        top: 65px;
        margin-bottom: 50px;
        min-height: 500px;
        direction: rtl;
        padding-bottom: 15px;

    }

    .wrapper-progressbar.title h2 {

        font-size: 23px;
        font-weight: bold;
        text-align: center;

    }

    .main-section-wrapper {
        max-width: 420px;
        margin: 50px auto 0;
    }

    .main-section-wrapper-full-width {
        max-width: 100%;
        margin: 25px auto 0;
    }

    /*progressbar styles*/

    .wrapper-progressbar {
        position: relative;
        padding: 15px;
        border-bottom: 2px solid #00c569;
    }

    .progressbar-items {
        display: flex;
        justify-content: space-between;
        direction: rtl;
        position: relative;
    }

    .progrees-item {
        text-align: center;
        color: #BEBEBE;

    }

    .progrees-item p {
        font-size: 12px;
    }

    .progrees-item span {
        width: 20px;
        height: 20px;
        font-size: 13px;
        background: #BEBEBE;
        border-radius: 50px;
        color: #fff;
        display: inline-block;
        margin-bottom: 6px;
        padding-top: 4px;
    }

    .progrees-item.active-item {
        color: #333;

    }

    .progrees-item.active-item p {
        font-weight: bold;
    }

    .progrees-item.active-item span {
        background: #00C569;
    }

    .custom-progressbar {

        display: block;
        height: 3px;
        background: #BEBEBE;
        right: 40px;
        left: 34px;
        position: absolute;
        top: 23px;
        z-index: 0;

    }

    .custom-progressbar.active-item {
        background: #00c569;
        width: 0;
        left: initial;
    }

    .custom-progressbar .progress-bar {
        background: #00c569;
        float: right;
    }

    .active-progress-wrapper {
        position: absolute;

        right: 37px;

        left: 41px;
    }

    .active-progress-wrapper .custom-progressbar {

        right: 0px;
        left: 0px;
        top: 8px !important;

    }

    @media screen and (max-width: 992px){
        .finish-state-main-content{
            padding: 0;
        }
    }

    @media screen and (max-width: 767px) {
        .main-section-wrapper {
            max-width: 600px;
        }

        .main-section-wrapper {
            max-width: 420px;
            margin: 20px auto;
        }

        .main-content {
            max-width: initial;
            background: #fff;
            border-radius: 0;
            box-shadow: none;
            min-height: 500px;
            direction: rtl;
            transform: translate(0, 0);
            height: 100%;
            bottom: 0;
            top: 0;
            width: 100%;
            left: 0;

        }

        .progrees-item p {
            display: none;
        }

        .custom-progressbar {
            right: 30px;
            left: 34px;
        }

        .active-progress-wrapper {

            right: 20px;
            left: 26px;

        }

        .active-progress-wrapper .custom-progressbar {

            right: 0px;
            left: 0px;
            top: 8px;

        }
    }



</style>


<template>
    <div>
       
        <section v-if="!relatedProducts && currentStep <= 2" class="main-content col-xs-12">

            <div class="row">
                <header class="header-section">
                    <div v-if="currentStep <= 1" class="wrapper-progressbar title">

                        <h2>
                            ثبت درخواست خرید
                        </h2>

                    </div>

                     <div v-else class="wrapper-progressbar title">

                        <h2>درخواست شما با موفقیت ثبت شد</h2>

                    </div>

                </header>

                <main class="main-section-wrapper">
                    <StartRegisterRequest v-if="currentStep == 0"/>
                    <RegisterRequest v-else-if="currentStep == 1"/>
                    <FinishRegisterRequest v-else="currentStep == 2"
                    />
                </main>

            </div>

        </section>

         <section v-else-if="currentStep == 2 && relatedProducts" class="finish-state-main-content col-xs-12">

                <main class="finish-state-wrapper">
                    <FinishRegisterRequestRelated
                        :products="relatedProducts"
                        :str="str"
                    />
                </main>

        </section>


    </div>
</template>

<script>
    import {eventBus} from "../../../../router/router";
    import StartRegisterRequest from './register-request-steps/start-register-request'
    import RegisterRequest from './register-request-steps/register-request-content'
    import FinishRegisterRequestRelated from './register-request-steps/fnish-register-request-related'
    import FinishRegisterRequest from './register-request-steps/fnish-register-request'

    export default {
        props:[
          "defimgitem",
          "str"
        ],
        components: {
            StartRegisterRequest,
            RegisterRequest,
            FinishRegisterRequestRelated,
            FinishRegisterRequest
        },
        data: function () {
            return {
                currentStep: 1,
                errors: {
                    categorySelected: '',
                    category_id: '',
                    requirement_amount: '',
                    name: '',
                },
                currentUser: {
                    profile: '',
                    user_info: '',
                },
                buyAd: {
                    name: '',
                    requirement_amount: '',
                    price: '',
                    description: '',
                    address: '',
                    pack_type: '',
                    category_id: '',
                    rules: false,
                    categorySelected:'',
                },
                buyAdFields: [
                    'name',
                    'requirement_amount',
                    'category_id',
                ],
                categorySelected: '',
                categoryList: '',
                subCategoryList: '',
                cities: '',
                buyAdFiles: [],
                popUpMsg: '',
                profileConfirmed: false,
                disableSubmit: false,
                submiting: false,
                relatedProducts: null,
                items: [
                    {
                        message: ' ثبت درخواست جدید',
                        url: 'registerRequest'
                    }
                ]
            };
        },
        methods: {
            init: function () {
                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data));

                axios.post('/get_category_list')
                    .then(response => (this.categoryList = response.data.categories));
            },
            loadSubCategoryList: function (e) {
                e.preventDefault();
                var categoryId = $(e.target).val();
                this.categorySelected = categoryId;

                this.buyAd.categorySelected = categoryId;

                axios.post('/get_category_list', {
                    parent_id: categoryId,
                })
                .then(response => (this.subCategoryList = response.data.categories));

            },
            formValidator: function () {
                if (!this.categorySelected) {
                    this.errors.categorySelected = "دسته بندی الزامی است"
                }
                if (!this.buyAd.category_id) {
                    this.errors.category_id = "نام محصول الزامی است"
                }

                // this.nameValidator(this.buyAd.name);
                //console.log(this.nameValidator(this.buyAd.name));
                this.requirementAmountValidator(this.buyAd.requirement_amount);

                if (!this.errors.categorySelected && !this.errors.category_id && !this.errors.name && !this.errors.requirement_amount) {
                    this.submitBuyAd();
                }
            },
            submitBuyAd: function () {
                this.errors = '';
                var self = this;

                eventBus.$emit('submitingEvent', true);

                let formData = this.getBuyAdFormFields();

                axios.post('/user/add_buyAd', formData)
                    .then(function (response) {
                        if (response.status === 201) {
                            self.disableSubmit = true;
                            self.popUpMsg = 'درخواست شما با موفقیت ثبت شد';

                            eventBus.$emit('submitSuccess', self.popUpMsg);

                            // $('#custom-main-modal').modal('show');

                            eventBus.$emit('submitingEvent', false);

                            self.registerComponentStatistics('buyAd-register', 'buyAd-registered-successfully', 'buyAd-registered-successfully');

                            if (response.data.products) {
                                self.relatedProducts = response.data.products;
                            }

                            self.goToStep(2);

                        }
                        eventBus.$emit('submitingEvent', false);

                    })
                    .catch(function (err) {

                        self.errors = err.response.data.errors;

                        eventBus.$emit('submitingEvent', false);

                        self.registerComponentExceptions('validation error in buyAd-request');

                    });

            },
            getBuyAdFormFields: function () {

                let formData = new FormData();
                let cnt = this.buyAdFields.length;

                for (var i = 0; i < cnt; i++) {
                    formData.append(this.buyAdFields[i], this.toLatinNumbers(this.buyAd[this.buyAdFields[i]]));
                }
                return formData;

            },
            setCategoryId: function (e) {
                e.preventDefault();

                this.buyAd.category_id = $(e.target).val();
            },
            setCityId: function (cityId) {
                this.buyAd.city_id = cityId;
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
            goToStep: function (step) {
                this.currentStep = step;
                this.scrollToTop();
            },
            isOsIOS: function () {
                var userAgent = window.navigator.userAgent.toLowerCase(),
                    safari = /safari/.test(userAgent),
                    ios = /iphone|ipod|ipad/.test(userAgent);

                return ios;
            },
            scrollToTop() {
                window.scrollTo(0, 0);
            },
            nameValidator: function (name) {
                this.toLatinNumbers(name);
                if (!name) {

                    this.errors.name = '';

                } else if (!this.validateRegx(name, /^[\u0600-\u06FF\s\d]+$/)) {
                    this.errors.name = 'نوع محصول فرمت مناسبی نیست';
                }
            },
            requirementAmountValidator: function (number) {
                this.errors.requirement_amount = '';
                var standardNumber = this.toLatinNumbers(number);
                if (standardNumber == '') {
                    this.errors.requirement_amount = 'فیلد میزان نیاز الزامی است';
                } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
                    this.errors.requirement_amount = 'فقط عدد وارد کنید';
                }

            },
            validateRegx: function (input, regx) {
                return regx.test(input);
            },
            reLoadPage() {
                location.reload(true);
            },
            openChat: function (product) {
                this.registerComponentStatistics('productReplyAfterBuyAdRegister', 'openChat', 'click on open chatBox');
                var self = this;

                axios.post('/get_user_last_confirmed_profile_photo', {
                    'user_id': product.myuser_id
                }).then(function (response) {
                    var profile_photo = response.data.profile_photo;

                    var contact = {
                        contact_id: product.myuser_id,
                        first_name: product.first_name,
                        last_name: product.last_name,
                        profile_photo: profile_photo,
                        user_name: product.user_name,
                    };

                    eventBus.$emit("ChatInfo",contact);
                })
                    .catch(function (err) {
                        //
                    });
            },
            getProductUrl: function () {

                return '/product-view/خرید-عمده-'
                    + this.relatedProduct.subcategory_name.replace(' ', '-')
                    + '/'
                    + this.relatedProduct.category_name.replace(' ', '-')
                    + '/'
                    + this.relatedProduct.id;

            },
        },
        mounted() {
            this.init();

            eventBus.$emit('subHeader', this.items);
        },
        created() {
            gtag('config', 'UA-129398000-1', {'page_path': '/register-request'});
        }
    }
</script>

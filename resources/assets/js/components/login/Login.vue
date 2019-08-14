<style >
    #main-content{
        padding-bottom: 0
    }
    .error-message{
        direction: rtl;
        font-size: 11px;
    }
    #main{
        margin-top: 21px;
        background: #F9F9F9;

        height: 100%;

        position: relative;

        width: 100%;
        overflow: hidden;
        min-height: 768px;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
    input[type="number"]::-webkit-inner-spin-button, 
    input[type="number"]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
    .main-wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        max-width: 620px;
    }

    .wraper-main-contents{

        text-align: right;
        margin: 30px auto;

    }


    /*progressbar styles*/

    .wrapper-progressbar{
        position: relative;
    }
    .progressbar-items{
        display: flex;
        justify-content: space-between;
        direction: rtl;
        position: relative;
    }

    .progrees-item{
        text-align: center;
        color: #BEBEBE;

    }

    .progrees-item p{
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
        padding-top: 1px;
    }

     .progrees-item.active{
        color: #333;
      
    }

    .progrees-item.active p{
         font-weight: bold;
    }
     .progrees-item.active span {
        background: #00C569;
    }

     .custom-progressbar{

        display: block;
        height: 3px;
        background: #BEBEBE;
        right: 20px;
        left: 21px;
        position: absolute;
        top: 9px;
        z-index: 0;

     }
     .custom-progressbar.active{
        background: #00c569;
        width: 0;
        left: initial;
     }

     .custom-progressbar .progress-bar{
        background: #00c569;
        float: right;
     }



     /*main contents styles */
     .main-contents{
        background: #fff;
        border-radius: 9px;
        overflow: hidden;
        margin-top: 16px;
        box-shadow: 0 0 10px #C5C5C5;   
        height: 500px;
     }


     /*main content headers styles*/
     .main-content-header {
        direction: rtl;
        text-align: center;
        background: #00C569;
        color: #fff;
        padding: 22px 0;
     }
     .main-content-header a{
        color: #fff;
        position: relative;
        right: 0;
        transition: 300ms;
     }
     .main-content-header a, .main-content-header h1  {
        font-size: 23px
     }
     .main-content-header a:hover{
        transition: 300ms;
     }
   
     .main-content-header a.arrow-left:hover{
          right: 5px;
     }

     .main-content-header a.arrow-right:hover{
          right: -5px;
     }
     

     /*main content footer style*/
     .main-content-footer{
       position: absolute;

        bottom: 0;
     }
     .footer-content{
        direction: rtl;
        text-align: center;
        background: #F6F6F6;
        font-size: 11px;
        padding: 5px;
        color: #333;
     }

     .footer-content i{

        font-size: 12px;
        color: #00C569;

     }

     @media screen and (max-width: 767px){
        #main{
            padding: 0
        }
        .progrees-item p{
            display: none;
        }

        .main-wrapper{

            top: calc(50% - 30px);

        }

        .progressbar-items{
            padding: 0 15px 
        }
        .main-contents {

            border-radius: 0;
   
        }
        .main-content-header {
            direction: rtl;
            text-align: center;
            background: none;
            color: #333;
            padding: 14px 0;
            border-bottom: 2px solid #00C569;
        }

        .main-content-header a, .main-content-header h1{
            font-size: 17px;
        }
        .main-content-header a {
            color: #333;
            text-align: left;
        }
        .title-contents {

            font-weight: bold;
            font-size: 16px;

        }

        .form-contents label{
              font-size: 12px;
        }

        .small-description{

            font-size: 11px;

            font-weight: bold;

        }
        input{
            font-size: 13px;
            padding: 8px 15px 9px 35px ; 
        }

     }

     @media screen and (max-width: 370px){


        .form-contents .col-xs-10  {

            padding: 0;

        }
     
     }

</style>

<template>
        <div>
            

        <main id="main" class="container">

            <div class="main-wrapper col-xs-12">
                
                <div class="row">

                    <div class="main-contents">

                        <header class="main-content-header col-xs-12">

                           <div class="row">
                                <p
                                class="arrow-left col-xs-2">
                                    <!-- <i class="fa fa-arrow-left"></i> -->
                                </p>

                                <h1 class="col-xs-8">

                                <span v-if="currentStep == 1">ورود به سامانه</span>
                                <span v-if="currentStep == 2">بازیابی کلمه عبور</span>
                                <span v-if="currentStep == 3"></span>

                                </h1>

                                <a href="#" v-if="currentStep != 1" @click.prevent="goToStep(currentStep - 1)"
                                class="arrow-right col-xs-2">
                                    <i class="fa fa-arrow-right"></i>
                                </a>

                           </div>

                        </header>

                        <main class="col-xs-12">
                                <div class="row">
                                    <div class=" col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                                        <div class="wraper-main-contents row">

                                            <loginPage 
                                            v-if="currentStep == 1" 
                                             />

                                            <ForgotPassword
                                             v-else-if="currentStep == 2" 
                                            />

                                            <VerifyCode
                                             v-else-if="currentStep == 3" 
                                            />


                                        </div>
                                    </div>
                                </div>
                        </main>

                        <footer class="main-content-footer col-xs-12">
                                <div class="footer-content row">
                                    <i class="fa fa-star"></i>
                                    فرصت های جدید را خلق کنید و در زمان و هزینه صرفه جویی کنید
                                </div>
                        </footer>
                    </div>
                  
                </div>

            </div>

        </main>


        </div>

</template>


<script>
    import {eventBus} from "../../router/dashboard_router";
    import loginPage from "./login_steps/login_page";
    import ForgotPassword from "./login_steps/forgot_password";
    import VerifyCode from "./login_steps/verify_code";


    export default {
        components: {
            loginPage,
            ForgotPassword,
            VerifyCode
        },
        props: [
            'site_logo',
        ],
        data: function () {
            return {
                currentStep: 1,
                errors: [],
                showMsg: false,
                step1: {
                    phone: '',
                    password: '',
                    msg: '',
                },
                step2: {
                    phone: '',
                    sendCode: true,
                    msg: '',
                },
                step3: {
                    verification_code: '',
                    msg: '',
                    reSendCode: false,
                },
            }
        },
        methods: {
            stopLoader: function () {
                eventBus.$emit('isLoading', false);
            },
            goToStep: function (step) {
                this.currentStep = step;
                this.scrollToTop();
            },
            doLogin: function () {
                var self = this;
                axios.post("/dologin", {
                    phone: this.step1.phone,
                    password: this.step1.password,
                })
                    .then(function (response) {
                        if (response.data.status === true) {
                            if (response.data.confirmed_profile_record === true) {
                                if (response.data.is_buyer) {
                                    window.location.href = '/dashboard/register-request';

                                    self.registerComponentStatistics('Login', 'seller-login', 'seller-logged-in-successfully');
                                }
                                else if (response.data.is_seller) {
                                    window.location.href = '/dashboard/register-product';

                                    self.registerComponentStatistics('Login', 'buyer-login', 'buyer-logged-in-succeccfully');
                                }
                                else {
                                    self.registerComponentExceptions('Login-page: Undefined user type user phone nubmer is: ' + response.data.phone, true);

                                    alert('نوع کاربری شما مشخص نشده است لطفا با پشتیبانی اینکوباک تماس بگیرید');
                                }
                            }
                            else {
                                self.registerComponentExceptions('Login-page: User does not have confirmed profile record', true);

                                window.location.href = '/dashboard'; // Edit Profile Page
                            }
                        }
                        else {
                            self.showMsg = true;
                            self.errors = [];
                            self.step1.msg = response.data.msg;

                            self.registerComponentExceptions('Login-page: Validation error for user credentials in login page');
                        }
                    })
                    .catch(function (err) {
                        self.errors = [];
                        self.showMsg = false;
                        self.errors = err.response.data.errors;

                        self.registerComponentExceptions('Login-page: Validation error for user credentials in login page');
                    });
            },
            sendPhoneVerificationCode: function () {

                this.step3.reSendCode = false;
                this.step2.sendCode = false;
                this.errors = [];
                var self = this;


                axios.post('/send_phone_verification_code_for_password_reset', {
                    'phone': this.toLatinNumbers(this.step2.phone)
                })
                    .then(function (response) {
                           console.log(response.msg)
                        if (response.status === 200) {
                            self.goToStep(3);

                            self.step2.sendCode = true;

                            setTimeout(function () {
                                self.step3.reSendCode = true;
                            }, 60000);
                        }
                    })
                    .catch(function (err) {
                        self.errors = err.response.data.errors.phone;
                        self.step2.sendCode = true;
                    });
            },
            verifyCode: function () {
                var self = this;
                this.showMsg = false;

                axios.post('/reset_password', {
                    'phone': this.toLatinNumbers(this.step2.phone),
                    'verification_code': this.toLatinNumbers(this.step3.verification_code),
                })
                    .then(function (response) {
                        if (response.data.status === true) {
                            alert("گذر واژه ی جدید به تلفن همراهتان ارسال شد.")
                            window.location.href = '/login';
                        }
                        else {
                            self.errors = [];
                            self.showMsg = true;
                            self.step3.msg = 'کد اشتباه است یا منقضی شده';
                        }
                    })
                    .catch(function (err) {
                        self.errors = [];
                        self.errors = err.response.data.errors;
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
            scrollToTop() {
                window.scrollTo(0, 0);
            }
        },
        created() {
            gtag('config', 'UA-129398000-1', {'page_path': '/login'});

            var self = this;
            window.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    self.doLogin();
                }
            });
        },

        mounted: function () {
            var self = this;
            document.onreadystatechange = () => {
                if (document.readyState === "complete") {
                    self.$nextTick(this.stopLoader());
                }
            }
        },
        updated: function () {
            this.$nextTick(this.stopLoader());
        }
    }
</script>




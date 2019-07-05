
<template>
   <div>
       <div class="bg login"> </div>
       <main id="main" class="login-main">
           <div class="main-form">
               <div class="left-section col-xs-12 col-sm-8">
                   <a href="/">
                       <h1><img :src="site_logo"></h1>
                   </a>
                   <div id="app">
                       <div id="step1" v-show="currentStep == 1">
                           <template>
                               <div>
                                   <ul class="header_list list-inline">
                                       <li class="active"> ورود به سامانه</li>
                                   </ul>
                                   <div class="content_section">
                                       <p class="text-danger" v-show="showMsg">{{step1.msg}}</p>
                                       <label class="col-xs-12">
                                           شماره موبایل
                                       </label>
                                       <div class="input_contents col-xs-12">
                                           <span class="after_icon numbers"></span>
                                           <input class="pad number" type="text" v-model="step1.phone"
                                                  placeholder="09*">
                                           <span class="text-danger" v-if="errors.phone">{{errors.phone[0]}}</span>
                                       </div>

                                       <label class="col-xs-12">
                                           کلمه عبور
                                       </label>
                                       <div class="input_contents col-xs-12">
                                           <span class="after_icon  unlock-alt "></span>
                                           <input class="pad number" type="password" v-model="step1.password"
                                                  placeholder="کلمه عبور">
                                           <span class="text-danger" v-if="errors.password">{{errors.password[0]}}</span>
                                       </div>

                                       <a href="#" @click="goToStep(2)" class="forget_pass">رمز عبور خود را فراموش کرده
                                           ام!</a>
                                       <button class="green_but" type="button" @click="doLogin">ورود به سامانه
                                       </button>
                                       <router-link tag="button" class="danger_border_but" type="button" :to="{name:'register'}">ثبت نام در
                                           سامانه
                                       </router-link>
                                       <!--<button class="danger_border_but" type="button" @click="gotToRegister">ثبت نام در سامانه-->
                                       <!--</button>-->
                                   </div>
                               </div>
                           </template>
                       </div>
                       <div id="step2" v-show="currentStep == 2">
                           <template>
                               <ul class="header_list list-inline">
                                   <li><a href="#" @click="goToStep(1)">ورود به سامانه</a></li>
                                   <li class="active"> بازیابی کلمه عبور</li>
                               </ul>
                               <div class="content_section">
                                   <label class="col-xs-12">
                                       لطفا شماره موبایل خود را وارد کنید
                                   </label>
                                   <div class="input_contents col-xs-12">
                                       <span class="after_icon numbers"></span>
                                       <input class="pad number" type="text"  v-model="step2.phone"
                                              placeholder="09*">
                                   </div>
                                   <span  class="text-danger" v-if="errors">{{errors[0]}} </span>

                                   <button class="green_but" type="button"  @click="sendPhoneVerificationCode" :disabled="step2.sendCode == false">ارسال پیام کوتاه
                                   </button>

                               </div>

                               <div class="dots-step">
                                   <span class="dots active"></span>
                                   <span class="dots"></span>
                               </div>
                           </template>
                       </div>
                       <div id="step3" v-show="currentStep == 3">
                           <template>
                               <ul class="header_list list-inline">
                                   <li><a href="#" @click="goToStep(1)">ورود به سامانه</a></li>
                                   <li class="active"> بازیابی کلمه عبور</li>
                               </ul>
                               <div class="content_section">
                                   <p class="text-danger" v-show="showMsg">{{step3.msg}}</p>
                                   <label class="col-xs-12">
                                       کد ارسال شده به تلفن همراهتان را وارد کنید.
                                   </label>
                                   <div class=" input_contents col-xs-12">
                                       <span class="after_icon search-icon"></span>
                                       <input class="pad " type="text" name="name" v-model="step3.verification_code"
                                              placeholder="0101">
                                   </div>
                                   <span v-if="errors.verification_code" class="text-danger">
                                    {{errors.verification_code[0]}}
                                </span>
                                   <button class=" green_but" type="button" @click="verifyCode"> بررسی کد</button>
                                   <button class="danger_border_but" type="button" @click.prevent="goToStep(2)"
                                           :disabled="step3.reSendCode == false"> کد را دریافت
                                       نکردم
                                   </button>

                               </div>

                               <div class="dots-step">
                                   <span class="dots active back_step" @click="goToStep(2)"></span>
                                   <span class="dots active"></span>

                               </div>
                           </template>
                       </div>
                   </div>
               </div>
               <RightSection></RightSection>
           </div>
       </main>
   </div>
</template>
<style scoped>

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;

        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1.1;
        font-family: IRANSans, sans-serif;
        font-size: 14px;

        direction: rtl;

    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    img {
        width: 100%;
    }

    a, a:hover, a:visited, a:focus, a:active {
        text-decoration: none;
        transition: 300ms;
    }

    th, td {
        padding: 7px;
        text-align: right;
    }

    h1, h2, h3 {
        color: #565657;
    }
    label{
        font-size: 12px;
        padding: 6px 0;
        display: block;
    }
    input[type="text"],input[type="password"],input[type="email"]{
        border: 2px solid #818d9b;
        border-radius: 5px;
        width: 100%;
        padding: 5px 15px;
        line-height: 1.1;
        direction: rtl;
    }
    .bg.login{

        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        position: absolute;
        overflow: hidden;
    }
    #main{
        width: 680px;
        margin: 160px auto 110px;
        direction: rtl;
    }
    .green_but{
        width: 100%;
        background: #28a745;
        border: none;
        border-radius: 3px;
        color: #fff;
        padding: 12px;
        margin: 20px auto 5px;
    }
    .danger_border_but{
        width: 100%;
        border-radius: 3px;
        padding: 12px;
        background: #030947;
        color: #fff;
        margin: 5px auto;
    }
    .sub-des{
        color: #909aa6;
        font-size: 9px;
        margin: 8px 0 50px;
        display: inline-block;
    }

    .input_contents{
        position: relative;
        padding: 0;
    }
    input.pad{
        padding: 13px 47px 9px 15px;
    }
    .forget_pass{
        color: #28a745;
        float: left;
        font-size: 12px;

        border-bottom: 1px solid;

        padding-bottom: 5px;

        margin: 14px 0;
    }
    .after_icon:after{
        position: absolute;
        content: " ";
        top: 21%;
        right: 12px;
        font-family: "fontawesome",sans-serif;
        font-size: 22px;
        color: #818d9b;
        border-left: 1px solid;
        padding-left: 11px;
    }
    .after_icon.numbers:after{
        content: "\f098";
    }
    .after_icon.unlock-alt:after{
        content: "\f13e";
    }
    .after_icon.search-icon:after{
        content: "\f002";
    }
    .left-section {
        padding: 0;
        height: 100%;
        position: relative;

    }

    .main-form {
        min-width: 250px;
        margin: 0 auto;
        height: 550px;
        overflow: hidden;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 0 44px rgba(0,0,0,0.6);
    }

    .left-section h1 {
        font-size: 22px;
        text-align: center;
        margin: 0 auto;
        width: 150px;
        height: 74px;
    }

    ul.header_list {
        text-align: center;
        width: 100%;
        border-top: 1px solid #e6e6e6;
        background: #ededed;
        font-size: 13px;
        color: #818d9b;
    }
    ul.header_list a{
        font-size: 13px;
        color: #818d9b;
    }
    ul.header_list li {
        padding: 10px 12px;
    }
    ul.header_list li.active {
        color: #313a43;
        border-bottom:2px solid #28a745;
    }
    .content_section{
        padding: 40px 66px 0;
    }

    .dots-step{
        position: absolute;
        left: calc(40% + 5px);
        bottom: 35px;
        direction: rtl;
    }

    .dots-step span {
        width: 12px;
        height: 12px;
        border: 2px solid #818d9b;
        border-radius: 50%;
        display: inline-block;
        margin: 5px;
        position: relative;

    }
    .dots-step span.active{
        background: #28a745;

    }

    .dots-step span:after{
        position: absolute;
        content: " ";
        top: 3px;
        background: #a0a9b3;
        right: 10px;
        color: #818d9b;
        width: 15px;
        height: 3px;
    }

    .dots-step span:last-of-type:after{
        display: none;
    }
    .dropdown {
        position: absolute;
        top:50%;
        transform: translateY(-50%);
    }

    a {
        color: #fff;
    }

    .dropdown dd,
    .dropdown dt {
        margin: 0;
        padding: 0;
    }

    .dropdown ul {
        margin: -1px 0 0 0;
    }

    .dropdown dd {
        position: relative;
    }

    .dropdown a,
    .dropdown a:visited {
        color: #fff;
        text-decoration: none;
        outline: none;
        font-size: 12px;
    }

    .dropdown dt a {
        background-color: #4F6877;
        display: block;
        padding: 8px 20px 5px 10px;
        min-height: 25px;
        line-height: 24px;
        overflow: hidden;
        border: 0;
        width: 272px;
    }

    .dropdown dt a span,
    .multiSel span {
        cursor: pointer;
        display: inline-block;
        padding: 0 3px 2px 0;
    }

    .dropdown dd ul {
        background-color: #4F6877;
        border: 0;
        color: #fff;
        display: none;
        left: 0px;
        padding: 2px 15px 2px 5px;
        position: absolute;
        top: 2px;
        width: 280px;
        list-style: none;
        height: 100px;
        overflow: auto;
    }

    .dropdown span.value {
        display: none;
    }

    .dropdown dd ul li a {
        padding: 5px;
        display: block;
    }

    .dropdown dd ul li a:hover {
        background-color: #fff;
    }




    button {
        background-color: #6BBE92;
        width: 302px;
        border: 0;
        padding: 10px 0;
        margin: 5px 0;
        text-align: center;
        color: #fff;
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {

        #main {
            margin: 160px auto 80px;
            left: 15px;
            transform: inherit;
            width: calc(100% - 30px);
        }
    }
    @media screen and (max-width: 996px) {
        .content_section {
            padding: 15px 30px;
        }
        main {
            width: 60%;
        }
    }
    @media screen and (max-width: 300px) {
        .content_section {
            padding: 15px;
        }
        main {
            width: 80%;
        }

    }
    @media screen and (max-width: 500px) {
        main {
            width: 90%;
        }
    }


</style>
<script>
    import {eventBus} from "../../router/dashboard_router";
    import RightSection from './RightSection.vue'

    export default{
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
                    sendCode:true,
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
            loader:function(){
                this.$nextTick(function () {
                    eventBus.$emit('finishLoad', false);
                });
            },
            goToStep: function (step) {
                this.currentStep = step;
            },
            doLogin: function (){
                var self = this;
                axios.post("/dologin", {
                    phone: this.step1.phone,
                    password: this.step1.password,
                })
                .then(function (response) {
                    if (response.data.status == true) {
                         if (response.data.confirmed_profile_record == true) {
                             if(response.data.is_buyer) {
                                 window.location.href = '/dashboard/register-request' ;
                             }
                             else if(response.data.is_seller){
                                 window.location.href = '/dashboard/register-product' ;
                             }
                             else{
                                 alert('نوع کاربری شما مشخص نشده است لطفا با پشتیبانی اینکوباک تماس بگیرید');
                             }
                         }
                         else{
                             window.location.href = '/dashboard'; // Edit Profile Page
                         }

                    }
                    else {
                        self.showMsg = true;
                        self.errors = [];
                        self.step1.msg = response.data.msg;
                    }
                })
                .catch(function (err) {
                    self.errors = [];
                    self.showMsg = false;
                    self.errors = err.response.data.errors;
                });
            },
          /*  gotToRegister: function (){
                window.location.href = '/register';
            },*/
            sendPhoneVerificationCode:function(){
                this.step3.reSendCode = false;
                this.step2.sendCode = false;

                var self = this;
                this.errors = [];

                axios.post('/send_phone_verification_code_for_password_reset',{
                    'phone' : this.toLatinNumbers(this.step2.phone)
                })
                .then(function(response){
                    if(response.status == 200){
                        self.goToStep(3);

                        self.step2.sendCode = true;

                        setTimeout(function(){
                            self.step3.reSendCode = true;
                        },60000);
                    }
                })
                .catch(function(err){
                        self.errors = err.response.data.errors.phone;
                        self.step2.sendCode = true;
                });
            },
            verifyCode:function(){
                var self = this;
                this.showMsg  = false;

                axios.post('/reset_password',{
                    'phone' : this.toLatinNumbers(this.step2.phone),
                    'verification_code' : this.toLatinNumbers(this.step3.verification_code),
                })
                .then(function(response){
                    if(response.data.status == true){
                        alert("گذر واژه ی جدید به تلفن همراهتان ارسال شد.")
                        window.location.href = '/login';
                    }
                    else{
                        self.errors = [];
                        self.showMsg = true;
                        self.step3.msg = 'کد اشتباه است یا منقضی شده';
                    }
                })
                .catch(function(err){
                    self.errors = [];
                    self.errors = err.response.data.errors;
                });
            },
            toLatinNumbers:function(num){
                if(num == null){
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
                    .replace(/[۰-۹]/g,function(w){
                        return numDic[w];
                    });
            },
        },
        created() {
            gtag('config','UA-129398000-1',{'page_path': '/login'});

            var self = this;
            window.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    self.doLogin();
                }
            });
        },
        components: {
            RightSection
        },
        mounted:function(){
            this.loader();
        },
        updated: function () {
            this.loader();
        }
    }
</script>




<template>
    <main id="main">
        <div class="main-form">
            <div class="left-section col-sm-8">
                <a :href="homeurl">
                    <h1><img :src="logo"></h1>
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
                                    </div>
                                    <span class="text-danger" v-if="errors.phone">{{errors.phone[0]}}</span>
                                    <label class="col-xs-12">
                                        کلمه عبور
                                    </label>
                                    <div class="input_contents col-xs-12">
                                        <span class="after_icon  unlock-alt "></span>
                                        <input class="pad number" type="password" v-model="step1.password"
                                               placeholder="کلمه عبور">
                                    </div>
                                    <span class="text-danger" v-if="errors.password">{{errors.password[0]}}</span>
                                    <a href="#" @click="goToStep(2)" class="forget_pass">رمز عبور خود را فراموش کرده
                                        ام!</a>
                                    <button class="green_but" type="button" @click="doLogin">ورود به سامانه
                                    </button>
                                    <button class="danger_border_but" type="button" @click="gotToRegister">ثبت نام در
                                        سامانه
                                    </button>
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
</template>

<script>

    import RightSection from './RightSection.vue'

    export default{
        props: [
            'logo',
            'homeurl'
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
                                 window.location.href = '/dashboard/#/register-request' ;
                             }
                             else if(response.data.is_seller){
                                 window.location.href = '/dashboard/#/buyAd-requests' ;
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
            gotToRegister: function (){
                window.location.href = '/register';
            },
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
            var self = this;
            window.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    self.doLogin();
                }
            });
        },
        components: {
            RightSection
        }
    }
</script>




<template>
    <main id="main">
        <div class="main-form">
            <div class="left-section col-sm-8">
                <a :href="homeUrl">
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
                                    <p class="text-danger" v-show="step1.showMsg">{{step1.msg}}</p>
                                    <label>
                                        شماره موبایل
                                    </label>
                                    <div class="input_contents">
                                        <span class="after_icon numbers"></span>
                                        <input class="pad number" type="text" v-model="step1.phone"
                                               placeholder="09*">
                                    </div>
                                    <span class="text-danger" v-if="errors.phone">{{errors.phone[0]}}</span>
                                    <label>
                                        کلمه عبور
                                    </label>
                                    <div class="input_contents">
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
                                <label>
                                    لطفا شماره موبایل خود را وارد کنید
                                </label>
                                <div class="input_contents">
                                    <span class="after_icon numbers"></span>
                                    <input class="pad number" type="text" v-model="step2.phone"
                                           placeholder="09*">
                                </div>
                                <span  v-if="step2.errors.phone" class="error_msg">                            {{step2.errors.phone[0]}}
                                </span>

                                          <div class="col-xs-12"> <button class="green_but" type="button"  @click="sendPhoneVerificationCode">ارسال پیام کوتاه
                                          </button></div>

                            </div>

                            <div class="dots-step">
                                <span class="dots active"></span>
                                <span class="dots" @click="goToStep(3)"></span>
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
                                <label>
                                    کد ارسال شده به تلفن همراهتان را وارد کنید.
                                </label>
                                <div class=" input_contents">
                                    <span class="after_icon search-icon"></span>
                                    <input class="pad " type="text" name="name" v-model="step3.verification_code"
                                           placeholder="0101">
                                </div>
                                <span v-if="errors.verification_code" class="error_msg">
                                    {{errors.verification_code[0]}}
                            </span>

                                <div class="bouttons col-xs-12">
                                    <button class=" green_but" type="button" @click="verifyCode"> بررسی کد</button>
                                    <button class="danger_border_but" type="button" @click.prevent="goToStep(2)"
                                            :disabled="step2.reSendCode == false"> کد را دریافت
                                        نکردم
                                    </button>
                                </div>

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

    export default {
        props: [
            'logo',
            'homeUrl'
        ],
        data: function () {
            return {
                currentStep: 1,
                errors: [],
                step1: {
                    phone: '',
                    password: '',
                    showMsg: false,
                    msg: ''
                },
                step2: {
                    phone: '',
                    errors:[],
                },
                step3: {
                    verification_code: '',
                    reSendCode: false,
                },

            }
        },
        methods: {
            goToStep: function (step) {
                this.currentStep = step;
            },
            doLogin: function () {
                var self = this;
                axios.post("/dologin", {
                    phone: this.step1.phone,
                    password: this.step1.password,
                })
                    .then(function (response) {
                        if (response.data.status == true) {
                            window.location.href = '/dashboard/';
                        }
                        else {
                            self.showMsg = true;
                            self.errors = [];
                            self.msg = response.data.msg;
                        }
                    })
                    .catch(function (err) {
                        console.log("err")
//                            if (err.response.data.status == false) {
//                                alert('teste man');
//                            }
//                            self.showMsg = true;
//                            self.errors = err.response.data.errors;
                    });
            },
            gotToRegister: function () {
                window.location.href = '/register';
            },
            sendPhoneVerificationCode: function(){
                var self = this;
                this.step2.errors = [];
                
                axios.post('/send_phone_verification_code_for_password_reset',{
                    'phone' : this.step2.phone
                })
                .then(function(response){
                    if(response.status == 200){
                        self.goToStep(3);
                    }
                })
                .catch(function(err){
                        console.log(err.response.data.errors.phone);
                        self.step2.errors.phone = err.response.data.errors.phone;
                        console.log(self.step2.errors.phone);
                });
            },
            verifyCode:function(){
                
                axios.post('/reset_password',{
                    'phone' : this.step2.phone,
                    'verification_code' : this.step3.verification_code,
                })
                .then(function(response){
                    
                })
                .catch(function(err){
                    
                });
            }
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




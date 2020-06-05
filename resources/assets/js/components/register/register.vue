<style scoped>
    p, span{
        line-height: 1.5;
    }
    .text-loader {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 16px;
        position: absolute;
        bottom: 37%;
        right: 10px;
    }

    .loading-container {
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        background: #fff;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: 0;
        padding: 0;
        z-index: 1100;
        position: fixed;
    }

    .lds-ring {
        display: inline-block;

        position: absolute;

        width: 64px;

        height: 64px;

        left: 50%;

        top: 50%;

        transform: translate(-50%, -50%);
    }

    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border: 5px solid #00c569;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #00c569 transparent transparent transparent;
    }

    .lds-ring-alt {
        display: block;
        margin-top: 50px;
        direction: rtl;
        text-align: center;
    }

    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }

    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }

    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    #main-content {
        padding-bottom: 0;
    }

    .error-message {
        direction: rtl;
        font-size: 11px;
    }

    #main {
        margin-top: 21px;
        background: #f9f9f9;

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

    .main-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 620px;
    }

    .wraper-main-contents {
        text-align: right;
        margin: 40px auto;
    }

    /*progressbar styles*/

    .wrapper-progressbar {
        position: relative;
    }

    .progressbar-items {
        display: flex;
        justify-content: space-between;
        direction: rtl;
        position: relative;
    }

    .progrees-item {
        text-align: center;
        color: #bebebe;
    }

    .progrees-item p {
        font-size: 12px;
    }

    .progrees-item span {
        width: 20px;
        height: 20px;
        font-size: 13px;
        background: #bebebe;
        border-radius: 50px;
        color: #fff;
        display: inline-block;
        margin-bottom: 6px;
        padding-top: 1px;
    }

    .progrees-item.active {
        color: #333;
    }

    .progrees-item.active p {
        font-weight: bold;
    }

    .progrees-item.active span {
        background: #00c569;
    }

    .custom-progressbar {
        display: block;
        height: 3px;
        background: #bebebe;
        right: 20px;
        left: 21px;
        position: absolute;
        top: 9px;
        z-index: 0;
    }

    .custom-progressbar.active {
        background: #00c569;
        width: 0;
        left: initial;
    }

    .custom-progressbar .progress-bar {
        background: #00c569;
        float: right;
    }

    /*main contents styles */
    .main-contents {
        background: #fff;
        border-radius: 9px;
        overflow: hidden;
        margin-top: 16px;
        box-shadow: 0 0 10px #c5c5c5;
        height: 500px;
    }

    /*main content headers styles*/
    .main-content-header {
        direction: rtl;
        text-align: center;
        background: #00c569;
        color: #fff;
        padding: 22px 0;
    }

    .main-content-header a {
        color: #fff;
        position: relative;
        right: 0;
        transition: 300ms;
    }

    .main-content-header a,
    .main-content-header h1 {
        font-size: 23px;
    }

    .main-content-header a:hover {
        transition: 300ms;
    }

    .main-content-header a.arrow-left:hover {
        right: 5px;
    }

    .main-content-header a.arrow-right:hover {
        right: -5px;
    }

    /*main content footer style*/
    .main-content-footer {
        position: absolute;

        bottom: 0;
    }

    .footer-content {
        direction: rtl;
        text-align: center;
        background: #f6f6f6;
        font-size: 11px;
        padding: 5px;
        color: #333;
    }

    .footer-content i {
        font-size: 12px;
        color: #00c569;
    }

    @media screen and (max-width: 767px) {
        #main {
            padding: 0;
        }

        .progrees-item p {
            display: none;
        }

        .main-wrapper {
            top: calc(50% - 30px);
        }

        .progressbar-items {
            padding: 0 15px;
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
            border-bottom: 2px solid #00c569;
        }

        .main-content-header a,
        .main-content-header h1 {
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

        .form-contents label {
            font-size: 12px;
        }

        .small-description {
            font-size: 11px;

            font-weight: bold;
        }

        input {
            font-size: 13px;
            padding: 8px 15px 9px 35px;
        }
    }

    @media screen and (max-width: 400px) {
        .form-contents .col-xs-10 {
            padding: 0;
        }

        .form-contents .col-xs-3 {
            padding: 0 5px;
        }

        .col-xs-10.col-xs-offset-1.col-sm-8.col-sm-offset-2 {
            padding: 0;
        }
    }
</style>

<template>
    <div>
        <div v-if="!loginCheckerLoading">
            <main id="main" class="container">
                <div class="main-wrapper col-xs-12">
                    <div class="row">
                        <div class="wrapper-progressbar">
                            <div class="custom-progressbar">
                                <div
                                        class="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="21"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                ></div>
                            </div>
                            <div class="custom-progressbar active">
                                <div
                                        class="progress-bar"
                                        role="progressbar"
                                        aria-valuenow="21"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                ></div>
                            </div>

                            <div class="progressbar-items">
                                <a class="progrees-item active">
                                    <span>1</span>
                                    <p>ثبت موبایل</p>
                                </a>

                                <a class="progrees-item" :class="{'active' : currentStep >= 2}">
                                    <span>2</span>
                                    <p>تایید شماره</p>
                                </a>

                                <a class="progrees-item" :class="{'active' : currentStep >= 3}">
                                    <span>3</span>
                                    <p>مشخصات فردی</p>
                                </a>

                                <a class="progrees-item" :class="{'active' : currentStep >= 4}">
                                    <span>4</span>
                                    <p>انتخاب آدرس</p>
                                </a>

                                <a class="progrees-item" :class="{'active' : currentStep >= 5}">
                                    <span>5</span>
                                    <p>حساب کاربری</p>
                                </a>

                                <a class="progrees-item" :class="{'active' : currentStep >= 6}">
                                    <span>6</span>
                                    <p>حوزه فعالیت</p>
                                </a>
                            </div>
                        </div>

                        <div class="main-contents">
                            <header class="main-content-header col-xs-12">
                                <div class="row">
                                    <p class="arrow-left col-xs-2">
                                        <!-- <i class="fa fa-arrow-left"></i> -->
                                    </p>

                                    <h1 class="col-xs-8">ثبت نام در باسکول</h1>

                                    <a
                                            href="#"
                                            v-if="currentStep != 1"
                                            @click.prevent="goToStep(currentStep - 1)"
                                            class="arrow-right col-xs-2"
                                    >
                                        <i class="fa fa-arrow-right"></i>
                                    </a>
                                </div>
                            </header>

                            <main class="col-xs-12">
                                <div class="row">
                                    <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                                        <div class="wraper-main-contents row">
                                            <RegisterNumber
                                                    @getPhoneNumber="setPhoneNumber"
                                                    v-if="currentStep == 1"
                                                    :parent-errors="errors.phone[0]"
                                            />

                                            <VerifyCode
                                                    @getVerificationCode="setVerificationCode"
                                                    v-else-if="currentStep == 2"
                                                    :parent-errors="errors.verification_code[0]"
                                            />

                                            <PersonalInformatin v-else-if="currentStep == 3"/>

                                            <Location v-else-if="currentStep == 4"/>

                                            <UserAccount v-else-if="currentStep == 5"/>

                                            <ActivityDomain v-else-if="currentStep == 6"/>
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
        <div v-else>
            <div class="loading-container">
                <div class="image-wrapper">
                    <a v-show="isImageLoad">
                        <transition>
                            <img src @load="ImageLoaded" alt="alt"/>
                        </transition>
                    </a>
                    <div class="text-loader text-muted">... در حال انتقال به پنل کاربری</div>
                    <div v-show="!isImageLoad" class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <!-- <span v-text="alt" class="lds-ring-alt"></span> -->
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import {eventBus} from "../../router/router";
    import RegisterNumber from "./register_steps/register_number";
    import VerifyCode from "./register_steps/verify_code";
    import PersonalInformatin from "./register_steps/personal_information";
    import Location from "./register_steps/location";
    import UserAccount from "./register_steps/user_account";
    import ActivityDomain from "./register_steps/activity_domain";

    export default {
        components: {
            RegisterNumber,
            VerifyCode,
            PersonalInformatin,
            Location,
            UserAccount,
            ActivityDomain
        },
        props: ["isUserLogin", "userType"],
        data: function () {
            return {
                isImageLoad: false,
                loginCheckerLoading: true,
                currentStep: 1,
                step1: {
                    phone: "",
                    sendCode: true
                },
                step2: {
                    verification_code: "",
                    reSendCode: false,
                    timeCounterDown: 120,
                    showTimer: false,
                    now: null
                },
                step3: {
                    first_name: "",
                    last_name: "",
                    password: "",
                    re_password: "",
                    user_name: "",
                    sex: "آقا",
                    province: "",
                    city: "",
                    national_code: "",
                    provinceList: "",
                    cityList: ""
                },
                step4: {
                    activity_type: "",
                    rules: 0,
                    categoryList: "",
                    categoryId: "",
                    formSubmitActive: true
                },
                errors: {
                    first_name: [],
                    last_name: [],
                    province: [],
                    city: [],
                    user_name: [],
                    national_code: [],
                    password: [],
                    password_conf: [],
                    sex: [],
                    verification_code: [],
                    phone: [],
                    category_id: []
                },
                errorFlag: false,
                userNameUnique: true,
                nationalCodeUnique: true,
                popUpMsg: "",
                verifyCodeBtnLoading: false,
            };
        },
        methods: {
            ImageLoaded: function () {
                this.isImageLoad = true;
            },
            loadImage: function () {
                this.isImageLoad = false;
            },
            setPhoneNumber(phoneNumber) {
                this.step1.phone = phoneNumber;
                this.send_verification_code();
            },
            setVerificationCode(vaerifyCode) {
                this.step2.verification_code = vaerifyCode;
                this.verify_code();
            },
            setPersonalInformation() {
                this.firstNameValidator(this.step3.first_name);
                this.lastNameValidator(this.step3.last_name);
                if (
                    this.errors.first_name.length == 0 &&
                    this.errors.last_name.length == 0
                ) {
                    this.goToStep(4);
                }
            },
            setLocation() {
                this.goToStep(5);
            },
            setAccount() {
                // this.userNameValidator(this.step3.user_name);
                this.passwordValidator(this.step3.password);
                if (
                    // !this.errors.user_name[0] &&
                    !this.errors.password[0] 
                    //&& !this.errors.password_conf[0]
                ) {
                    this.register_details();
                }
            },
            stopLoader: function () {
                eventBus.$emit("isLoading", false);
            },
            goToStep: function (step) {
                if (step < 1) {
                    step = 1;
                } else if (step > 6) {
                    step = 6;
                }

                this.currentStep = step;
                this.checkLevel();
                this.scrollToTop();
            },
            checkLevel() {
                var progressElement = $(".custom-progressbar.active");
                switch (this.currentStep) {
                    case 1:
                        progressElement.css("width", "0");
                        break;
                    case 2:
                        progressElement.css("width", "18%");
                        break;
                    case 3:
                        progressElement.css("width", "36%");
                        break;
                    case 4:
                        progressElement.css("width", "54%");
                        break;
                    case 5:
                        progressElement.css("width", "73%");
                        break;
                    case 6:
                        progressElement.css("width", "90%");
                        break;
                }
            },
            send_verification_code: function () {
                this.verifyCodeBtnLoading = true;

                this.step2.reSendCode = false;
                this.step1.sendCode = false;

                var self = this;

                this.step2.now = new Date().getTime();
                this.step2.showTimer = true;
                this.step2.timeCounterDown = 119;
                axios
                    .post("/send_verification_code", {
                        phone: this.toLatinNumbers(this.step1.phone)
                    })
                    .then(function (response) {
                        self.verifyCodeBtnLoading = false;

                        self.goToStep(2);
                        self.step1.sendCode = true;

                        self.step2.verification_code = "";
                        self.errors.verification_code = [];

                        setTimeout(function () {
                            self.step2.reSendCode = true;
                        }, 120000);

                        self.registerComponentStatistics(
                            "Register",
                            "send-verification-code",
                            "verification-code-sent-to-user"
                        );
                    })
                    .catch(function (err) {
                        self.verifyCodeBtnLoading = false;

                        self.errors.phone = err.response.data.errors.phone;

                        self.step1.sendCode = true;

                        self.registerComponentStatistics(
                            "Register-Error",
                            "phone-number-verification",
                            "error:" + self.errors.phone[0]
                        );
                    });
            },
            verify_code: function () {
                var self = this;

                self.verifyCodeBtnLoading = true;

                axios
                    .post("/verify_code", {
                        verification_code: this.toLatinNumbers(this.step2.verification_code),
                        phone : this.toLatinNumbers(this.step1.phone)
                    })
                    .then(function (response) {
                        self.verifyCodeBtnLoading = false;

                        if (response.data.status === true) {
                            if(response.data.redirected){ // it's very tricky condition, be careful
                                window.location.href = '/login';
                            }
                            else{
                                self.goToStep(3);
                                self.getProvinceList();
                            }
                        } else if (response.data.status === false) {
                            self.goToStep(2);
                            self.errors.verification_code = [];
                            self.errors.verification_code.push(
                                "کد وارد شده صحیح نیست یا منقضی شده است"
                            );
                            self.registerComponentStatistics(
                                "Register-Error",
                                "verification-code-wrong",
                                "error:" + self.errors.verification_code[0]
                            );
                        }
                    })
                    .catch(function (error) {
                        self.verifyCodeBtnLoading = false;
                        
                        self.goToStep(2);
                        self.errors.verification_code = [];
                        self.errors.verification_code.push("وارد کردن کد الزامی است.");
                        self.registerComponentStatistics(
                            "Register-Error",
                            "verification-code-empty",
                            "error:" + self.errors.verification_code[0]
                        );
                    });
            },
            register_details: function () {
                this.errorFlag = false;

                this.checkStep3();

                if (
                    this.errorFlag === false &&
                    this.userNameUnique === true &&
                    this.nationalCodeUnique === true
                ) {
                    this.goToStep(6);
                    this.getCategory();
                }
            },
            submitForm: function () {
                var self = this;
                this.step4.formSubmitActive = false;
                this.errorFlag = false;

                this.checkStep4();

                var object = {
                    phone: this.toLatinNumbers(this.step1.phone),
                    first_name: this.step3.first_name,
                    last_name: this.step3.last_name,
                    password: this.step3.password,
                    user_name: this.step3.user_name,
                    sex: this.step3.sex,
                    province: this.step3.province,
                    city: this.step3.city,
                    activity_type: this.step4.activity_type,
                    national_code: this.toLatinNumbers(this.step3.national_code),
                    category_id: this.step4.categoryId
                };
                if (this.errorFlag === false) {
                    axios
                        .post("api/v1/users", object)
                        .then(function (response) {
                            if (response.status === 201) {
                                
                                eventBus.$emit('modal', 'userRegisterSuccess');
                                
                                axios
                                    .post("/dologin", {
                                        phone: object.phone,
                                        password: object.password
                                    })
                                    .then(response => {
                                        if(response.data.status){
                                            if(self.isUserComeFromChatBoxOpen()){
                                                swal.close(); //close modal
                                                
                                                self.returnUserToPreviousPageAndChatBox(response.data);
                                            }
                                            else{
                                                self.redirectUserToPanel(response.data);
                                            }
                                        }
                                    })
                                    .catch(err => {
                                        console.log("err");
                                    });
                                self.registerComponentStatistics(
                                    "Register",
                                    "successful-register",
                                    "user-registered-successfully"
                                );
                            }
                        })
                        .catch(function (err) {
                            self.formSubmitActive = true;
                            self.registerComponentExceptions("User register API failed", true);
                        });
                }
            },
            setCategoryId: function (e) {
                e.preventDefault();

                this.step4.categoryId = $(e.target).val();
            },
            checkStep3: function () {
                // this.userNameValidator(this.step3.user_name);
                this.firstNameValidator(this.step3.first_name);
                this.lastNameValidator(this.step3.last_name);
                this.provinceValidator(this.step3.province);
                this.cityValidator(this.step3.city);
                this.nationalCodeValidator(this.step3.national_code);
                this.passwordValidator(this.step3.password);
                this.sexValidator(this.step3.sex);

                if (this.errorFlag) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "step-3",
                        "validation error in step 3"
                    );
                }
            },
            checkStep4: function () {
                this.activityTypeValidator(this.step4.activity_type);
                this.categoryIdValidator(this.step4.categoryId);

                if (this.errorFlag) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "step-4",
                        "validation error in step 4"
                    );
                }
            },
            firstNameValidator: function (name) {
                this.errors.first_name = [];

                if (name === "") {
                    this.errors.first_name.push("فیلد الزامی است");
                    this.errorFlag = true;
                }
                if (!this.validateRegx(name, /^[\u0600-\u06FF\s]+$/)) {
                    this.errors.first_name.push("فیلد باید فارسی باشد");
                    this.errorFlag = true;
                }

                if (this.errors.first_name[0]) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "first-name",
                        "input:" + name + " Error:" + this.errors.first_name[0]
                    );
                }
            },
            lastNameValidator: function (name) {
                this.errors.last_name = [];

                if (name === "") {
                    this.errors.last_name.push("فیلد الزامی است");
                    this.errorFlag = true;
                }
                if (!this.validateRegx(name, /^[\u0600-\u06FF\s]+$/)) {
                    this.errors.last_name.push("فیلد باید فارسی باشد");
                    this.errorFlag = true;
                }

                if (this.errors.last_name[0]) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "last-name",
                        "input:" + name + " Error:" + this.errors.last_name[0]
                    );
                }
            },
            provinceValidator: function (province) {
                this.errors.province = [];

                if (province === "") {
                    this.errors.province.push("فیلد استان الزامی است");
                    this.errorFlag = true;
                }
                if (!this.validateRegx(province, /^[\u0600-\u06FF\s]+$/)) {
                    this.errors.province.push("استان باید فارسی باشد");
                    this.errorFlag = true;
                }

                if (this.errors.province[0]) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "province",
                        "input:" + province + " Error:" + this.errors.province[0]
                    );
                }
            },
            cityValidator: function (city) {
                this.errors.city = [];

                if (city === "") {
                    this.errors.city.push("فیلد شهر الزامی است");
                    this.errorFlag = true;
                }
                if (!this.validateRegx(city, /^[\u0600-\u06FF\s]+$/)) {
                    this.errors.city.push("شهر باید فارسی باشد");
                    this.errorFlag = true;
                }

                if (this.errors.city[0]) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "city",
                        "input:" + city + " Error:" + this.errors.city[0]
                    );
                }
            },
            userNameValidator: function (userName) {
                if (this.userNameUnique === true) {
                    this.errors.user_name = [];
                }

                if (userName === "") {
                    this.errors.user_name.push("نام کاربری الزامی است");

                    this.errorFlag = true;
                }
                if (!this.validateRegx(userName, /^\w+$/)) {
                    this.errors.user_name.push(" شامل حروف غیر مجاز است");
                    this.errorFlag = true;
                }

                if (this.errors.user_name[0]) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "username",
                        "input:" + username + " Error:" + this.errors.last_name[0]
                    );
                }
            },
            nationalCodeValidator: function (code) {
                code = this.toLatinNumbers(code);

                if (this.nationalCodeUnique === true) {
                    this.errors.national_code = [];
                }
                if (code !== "" && !this.isIrNationalCode(code)) {
                    this.errors.national_code.push("کد ملی معتبر نیست");
                    this.errorFlag = true;
                }
            },
            isIrNationalCode: function (input) {
                if (!/^\d{10}$/.test(input)) {
                    return false;
                }

                var check = parseInt(input[9]);
                var sum =
                    [0, 1, 2, 3, 4, 5, 6, 7, 8]
                        .map(function (x) {
                            return parseInt(input[x]) * (10 - x);
                        })
                        .reduce(function (x, y) {
                            return x + y;
                        }) % 11;

                return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
            },
            passwordValidator: function (pass) {
                this.errors.password = [];
                this.errors.password_conf = [];

                if (pass === "") {
                    this.errors.password.push("رمز عبور الزامی است");
                    this.errorFlag = true;
                }
                if (pass.length < 8) {
                    this.errors.password.push("رمز عبور حداقل ۸ کاراکتر باشد");
                    this.errorFlag = true;
                }
                // if (passConf === "") {
                //     this.errors.password_conf.push("تکرار رمز عبور الزامی است");
                //     this.errorFlag = true;
                // }
                // if (passConf !== pass) {
                //     this.errors.password_conf.push("رمز عبور مطابقت ندارد");
                //     this.errorFlag = true;
                // }

                if (this.errors.password[0]) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "password",
                        "input:" + pass + " Error:" + this.errors.password[0]
                    );
                }
                // if (this.errors.password_conf[0]) {
                //     this.registerComponentStatistics(
                //         "Register-Error",
                //         "passwordConfirmation",
                //         "input:" + passConf + " Error:" + this.errors.password_conf[0]
                //     );
                // }
            },
            sexValidator: function (sex) {
                this.errors.sex = [];

                if (sex === "") {
                    this.errors.sex.push("جنسیت الزامی است");
                    this.errorFlag = true;
                }

                if (this.errors.sex[0]) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "sex",
                        "input:" + sex + " Error:" + this.errors.sex[0]
                    );
                }
            },
            categoryIdValidator: function (categoryId) {
                this.errors.category_id = [];
                if (categoryId === "") {
                    this.errors.category_id.push("انتخاب حوزه ی فعالیت الزامی است.");
                    this.errorFlag = true;
                }

                if (this.errors.category_id[0]) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "category-selection",
                        "input:" + categoryId + " Error:" + this.errors.category_id[0]
                    );
                }
            },
            activityTypeValidator: function (activityType) {
                this.errors.activity_type = [];
                if (activityType === "") {
                    this.errors.activity_type.push("انتخاب نوع کاربری الزامی است.");
                    this.errorFlag = true;
                }

                if (this.errors.activity_type[0]) {
                    this.registerComponentStatistics(
                        "Register-Error",
                        "activity-type",
                        "input:" + activity_type + " Error:" + this.errors.activity_type[0]
                    );
                }
            },
            validateRegx: function (input, regx) {
                return regx.test(input);
            },
            getCategory: function () {
                axios
                    .post("/get_category_list")
                    .then(response => (this.step4.categoryList = response.data.categories));
            },
            getCategoryId: function (categoryId) {
                this.step4.categoryId = categoryId;
            },
            getProvinceList: function () {
                axios
                    .post("/location/get_location_info")
                    .then(response => (this.step3.provinceList = response.data.provinces));
            },
            getCityList: function (provinceId) {
                axios
                    .post("/location/get_location_info", {
                        province_id: provinceId
                    })
                    .then(response => (this.step3.cityList = response.data.cities));
            },
            setProvinceName: function (e) {
                e.preventDefault();

                this.step3.province = $(e.target).val();

                var provinceId = "";

                for (var i = 0; i < this.step3.provinceList.length; i++) {
                    if (this.step3.province === this.step3.provinceList[i].province_name) {
                        provinceId = this.step3.provinceList[i].id;
                        break;
                    }
                }

                this.getCityList(provinceId);
            },
            setCityName: function (e) {
                e.preventDefault();

                this.step3.city = $(e.target).val();
            },
            toLatinNumbers: function (num) {
                if (num == null) {
                    return null;
                }

                return num
                    .toString()
                    .replace(/[\u0660-\u0669]/g, function (c) {
                        return c.charCodeAt(0) - 0x0660;
                    })
                    .replace(/[\u06f0-\u06f9]/g, function (c) {
                        return c.charCodeAt(0) - 0x06f0;
                    });
            },
            updateCounterDownTimer: function (seconds) {
                if (seconds !== 1) {
                    this.step2.timeCounterDown = seconds;
                } else this.step2.showTimer = false;
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag("event", actionName, {
                    event_category: categoryName,
                    event_label: labelName
                });
            },
            registerComponentExceptions: function (description, fatal = false) {
                gtag("event", "exception", {
                    description: description,
                    fatal: fatal
                });
            },
            scrollToTop() {
                window.scrollTo(0, 0);
            },
            isOsIOS: function () {
                var userAgent = window.navigator.userAgent.toLowerCase(),
                    safari = /safari/.test(userAgent),
                    ios = /iphone|ipod|ipad/.test(userAgent);

                return ios;
            },
            isUserComeFromChatBoxOpen:function()
            {
                if(window.localStorage.getItem('contact') && window.localStorage.getItem('pathname')){
                    return true;
                }

                return false;
            },
            returnUserToPreviousPageAndChatBox:function(userInfo)
            {
                if(this.isUserInInquirySubmissionProcess()){
                    
                    let contact = JSON.parse(window.localStorage.getItem('contact'));
                    let pathname = window.localStorage.getItem('msgToSend');

                    if(userInfo.is_buyer){
                        window.location.href = "/buyer/register-request";
                    }
                    else if(userInfo.is_seller){
                        window.location.href = '/switch-role';
                    }
                    else{
                        window.localStorage.removeItem('contact');
                        window.localStorage.removeItem('msgToSend');

                        this.redirectUserToPanel(userInfo);
                    }
                }
                else if(this.isUserComeFromChatBoxOpen()){
            
                    let contact = JSON.parse(window.localStorage.getItem('contact'));
                    let pathname = window.localStorage.getItem('pathname');

                    window.localStorage.removeItem('contact');
                    window.localStorage.removeItem('pathname');

                    if(userInfo.id != contact.contact_id){
                        window.localStorage.setItem('comeFromAuthentication',true);

                        this.$router.push({path: pathname});

                        eventBus.$emit('ChatInfo',contact);
                        
                    }
                    else {
                        this.redirectUserToPanel(userInfo);
                    }
                }
                else{
                    this.redirectUserToPanel(userInfo);
                }
            },
            redirectUserToPanel:function(userInfo){
                if(userInfo.is_seller == true){
                    localStorage.setItem("showSnapShot", true);
                    window.location.href = "/seller/register-product";
                }
                else if(userInfo.is_buyer == true){
                    localStorage.setItem("showSnapShot", true);
                    window.location.href = "/buyer/register-request";
                }
            },
            isUserInInquirySubmissionProcess: function(){
                if(window.localStorage.getItem('contact') && window.localStorage.getItem('msgToSend')){
                    return true;
                }
                return false;
            }

        },
        watch: {
            "step2.timeCounterDown": function () {
                var self = this;
                var now = new Date().getTime();

                var distance = now - this.step2.now;

                var seconds = 119 - Math.floor((distance % (1000 * 120)) / 1000) + 1;

                setTimeout(function () {
                    self.updateCounterDownTimer(seconds);
                }, 1000);
            },
            "step3.user_name": function () {
                var self = this;
                if (this.step3.user_name.length > 0) {
                    axios
                        .post("/user/is_user_name_unique", {
                            user_name: this.step3.user_name
                        })
                        .then(function (response) {
                            if (response.data.status === true) {
                                self.errors.user_name = [];
                                self.userNameUnique = true;
                            }
                        })
                        .catch(function (err) {
                            self.errors.user_name = [];
                            self.errors.user_name.push("نام کاربری قبلا گرفته شده");

                            self.errorFlag = true;
                            self.userNameUnique = false;
                        });
                }
            },
            "step3.national_code": function () {
                var self = this;

                this.step3.national_code = this.toLatinNumbers(this.step3.national_code);

                if (
                    this.step3.national_code.length > 0 &&
                    this.step3.national_code < 10
                ) {
                    this.errors.national_code = [];
                    this.errors.national_code.push("کد ملی ۱۰ رقمی است");

                    this.errorFlag = true;
                } else if (this.step3.national_code.length === 10) {
                    axios
                        .post("user/is_national_code_unique", {
                            national_code: this.toLatinNumbers(this.step3.national_code)
                        })
                        .then(function (response) {
                            if (response.data.status === true) {
                                self.errors.national_code = [];
                                self.nationalCodeUnique = true;
                            }
                        })
                        .catch(function (err) {
                            self.errors.national_code = [];
                            self.errors.national_code.push("کد ملی قبلا گرفته شده");

                            self.errorFlag = true;
                            self.nationalCodeUnique = false;
                        });
                }
            }
        },
        created() {
            var self = this;

            let userInfo = {
              is_buyer: ! self.userType,
                is_seller: self.userType
            };

            if (self.isUserLogin && self.userType == 1) {
                if(self.isUserInInquirySubmissionProcess()){
                    self.returnUserToPreviousPageAndChatBox(userInfo);
                }
                else{
                    self.$router.push('/seller/register-product');
                }
            } else if (self.isUserLogin && self.userType != 1) {
                // self.returnUserToPreviousPageAndChatBox(userInfo);
                self.$router.push('/buyer/register-request');
            }
            else {
                self.loginCheckerLoading = false;
            }
            gtag("config", "UA-129398000-1", {page_path: "/register"});
        },
        mounted: function () {
            document.onreadystatechange = () => {
                if (document.readyState === "complete") {
                    // self.$nextTick(this.stopLoader());
                }
            };
            this.checkLevel();
        },
        updated: function () {
            this.$nextTick(this.stopLoader());
        },  
        metaInfo() {

            return {
                title: 'ثبت نام',
                titleTemplate: 'باسکول | %s',
                meta: [
                    {
                        name: 'description',
                        content: 'خرید عمده و قیمت میوه | خرید عمده و قیمت غلات | خرید عمده و قیمت صیفی جات | خرید و قیمت عمده خشکبار'
                    },
                    {
                        name: 'author',
                        content: 'باسکول'
                    },
                    {
                        property: 'og:description',
                        content: 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
                    },
                    {
                        property: 'og:site_name',
                        content: 'باسکول بازارآنلاین خرید و فروش محصولات کشاورزی ایران'
                    },
                    {
                        'property': 'og:title',
                        'content': 'باسکول | ثبت نام'
                    },

                ]

            }
  }
    };
</script>

<template>
    <main id="main">
        <div class="main-form">
            <div class="left-section col-sm-8">
                <!--<a href="{{url('/')}}">-->
                <!--<h1><img src="{{asset('assets/img/logo-incobac.png')}}"></h1>-->
                <!--</a>-->
                <div id="app">
                    <ul class="header_list list-inline">
                        <li class="active"> ورود به سامانه</li>
                    </ul>
                    <div class="content_section">
                        <p class="text-danger"  v-show="showMsg">@{{msg}}</p>
                        <label>
                            شماره موبایل
                        </label>
                        <div class="input_contents">
                            <span class="after_icon numbers"></span>
                            <input class="pad number" type="text" v-model="phone"
                                   placeholder="09*">
                        </div>
                        <span class="text-danger"  v-if="errors.phone">@{{errors.phone[0]}}</span>
                        <label>
                            کلمه عبور
                        </label>
                        <div class="input_contents">
                            <span class="after_icon  unlock-alt "></span>
                            <input class="pad number" type="password" v-model="password"
                                   placeholder="کلمه عبور">
                        </div>
                        <span class="text-danger" v-if="errors.password">@{{errors.password[0]}}</span>
                        <a href="#" class="forget_pass">رمز عبور خود را فراموش کرده ام!</a>
                        <button class="green_but" type="button" @click="doLogin">ورود به سامانه
                        </button>
                        <button class="danger_border_but" type="button" @click="gotToRegister">ثبت نام در سامانه
                        </button>
                           <!--<button class="danger_border_but" type="button" @click="gotToRegister">ثبت نام در سامانه-->
                    <!--</button>-->
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
        data: function () {
            return {
                phone: '',
                password: '',
                showMsg: false,
                errors: [],
                msg: ''
            }
        },
        methods: {
            doLogin: function () {
                var self = this;
                axios.post("/dologin", {
                            phone: this.phone,
                            password: this.password,
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
//                window.location.href = "{{route('register_page')}}";
            }
        },
        created(){
            var self = this;
            window.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    self.doLogin();
                }
            });
        }
        ,components:{
            RightSection
        }
    }
</script>




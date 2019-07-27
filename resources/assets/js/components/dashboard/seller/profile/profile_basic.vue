<style scoped>
    /*start main content style */
    .image-content-post {
        width: 30%;
        float: right;
        position: relative;
    }

    .image-content-post img {
        border-radius: 3px;
        transition: 200ms;
        filter: grayscale(30%);
    }

    .image-content-post a:hover img {
        filter: grayscale(0);
        transition: 200ms;
    }

    .image-content-post i {
        display: none;
        position: absolute;
        top: 46%;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 35px;
        color: #fff;
        z-index: 1;

    }

    .image-content-post a:hover i {
        display: block;
    }

    .content-item {
        overflow: hidden;
        text-align: right;
        direction: rtl;
    }

    .main-content {
        padding: 60px 15px;
    }

    .img-profile {
        text-align: center;
    }

    .img-profile .image-input img {
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 50%;
    }

    .img-profile i {
        font-size: 150px;
        color: #4b4b4b;

    }

    .img-profile .submit {
        position: relative;
        width: 80%;
        margin: 25px auto;
    }

    .img-profile .submit input {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 10px;
        right: 0;
    }

    .img-profile .submit label {
        background: #28a745;
        color: #fff;
        padding: 12px 0;
        font-size: 13px;
        font-weight: 400;
        border-radius: 5px;
        transition: 300ms;
        width: 100%;
    }

    .img-profile .submit input:hover + label {
        background: #29d44d;
        transition: 300ms;
    }

    .img-profile .submit input:hover {
        cursor: pointer
    }

    .main-profile {
        border-right: 1px solid #eff3f6;
        text-align: right;
        direction: rtl;
        overflow: hidden;
    }

    .header-label {
        display: block;
        margin: 13px;
        padding: 0;
    }

    .content-label {
        font-weight: 400;
    }

    /*end main content style */
    /*custom cods*/
    .green-button {
        margin: 15px 0;
        display: inline-block;
        background: #28a745;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }

    .green-button:hover {
        color: #fff;
        background: #00d614;
        transition: 300ms;

    }

    .botton-inco {
        margin: 15px 7px;
        display: inline-block;
        color: #313a43;
        padding: 8px 35px;
        border-radius: 3px;
        text-align: center;
    }

    .botton-inco:hover {
        color: #fff;
    }

    .font-big {
        font-size: 23px;
        position: relative;
        top: 3px;
    }

    .little_header {
        width: 80px;
    }

    .little-main-header {
        right: 80px;
    }

    .background_mob_sec {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: -1;
        display: none;
    }

    .kind_user, .kind_activity {
        margin: 7px 0;
        border-bottom: 1px solid #eff3f6;
        padding-bottom: 10px;
    }

    .kind_user > div, .kind_activity > div {
        float: right;
        overflow: hidden;
        padding: 10px;
        font-size: 15px;
    }

    .kind_user input, .kind_activity input {
        cursor: pointer;
        width: 23px;
        height: 23px;
        float: right;
        position: absolute;
        top: 2px;
        right: 65px;
        opacity: 0;
    }

    .kind_user input:checked + i, .kind_activity input:checked + i {
        background: #28a745;
        color: #fff;
        border: none;
        padding: 4px;
    }

    .kind_user i, .kind_activity i {
        background: none;
        width: 23px;
        height: 23px;
        display: block;
        position: absolute;
        top: 4px;
        right: 65px;
        z-index: -1;
        color: #808c9c;
        border-radius: 50%;
        padding: 2px;
        font-size: 14px;
        border: 2px solid;
    }

    .user-form {
        padding: 0;
    }

    input[type="text"], select,input[type="password"] {
        width: 100%;
        border: 1px solid #e9e9e9;
        padding: 15px 20px;
        margin: 7px auto;
        border-radius: 4px;
        transition: 300ms;
    }

    textarea {
        height: 120px;
        max-width: 100%
    }

    .user-form input[type="button"] {
        width: 100%;

    }

    .user-form input[type="text"]:focus ,input[type="password"]:focus{
        border: 1px solid #28a745;
        transition: 500ms;

    }

    .img-profile {
        float: right;
        padding-top: 90px;
    }

    #icon-pro {
        width: 150px;
        height: 150px;
        display: inline-block;
    }

    #icon-pro svg {
        height: 150px;
    }

    .col-sm-6 {
        height: 120px;
        float: right;
    }

    @media screen and (max-width: 992px) {
        .img-profile {
            padding-top: 20px;
        }

        .right-header.desktop-header {
            display: none;
        }

        .right-header.mobile-header {
            display: block;
            right: -300px;
        }

        .main-header, .little-main-header {
            right: 0 !important;
        }

        #main, #main.little-main {
            margin-right: 0 !important;
        }

        .post-contents-table {
            width: 100%;
        }

        .copy-right {
            display: none;
        }

        .close_menu {
            display: none;
        }

        .close_menu_mob {
            display: block;
        }

        .show-header button {
            display: block;
        }

        .img-profile .submit {
            position: relative;
            width: 100%;
            margin: 25px auto;

        }

        .img-profile .submit label {
            width: 40%;
            padding: 12px 0;
        }

        .img-profile {
            float: none;
        }
    }

    @media screen and (max-width: 768px) {
        .image-content-post, .contents-post {
            width: 100%;
            float: none;
            margin: 10px 0;
            padding: 0;
        }


        .name-header-profile {
            display: none;
        }

        .profile-menu-header {
            padding: 7px;
            padding-left: 36px;
        }
    }

    @media screen and (max-width: 555px) {
        .content-header {
            display: none;
        }

    }

    @media screen and (max-width: 345px) {
        .sub-header a {
            font-size: 10px;

        }

        .sub-header {

            bottom: -44px;

        }
    }
</style>

<template>
    <section class="main-content col-xs-12">
        <form action="#" method="post" enctype="multipart/form-data">
            <div class="img-profile col-md-3">
                <div class="image-input">
                    <div v-if="currentUser.profile.profile_photo">
                        <img :src="str + '/' + currentUser.profile.profile_photo"
                             class="image-preview"
                             alt="تصویر پروفایل"
                        />
                    </div>

                    <div v-else>
                        <img :src="defultimg" align="تصویر پروفایل" class="image-preview">
                    </div>

                    <div class="submit">
                        <input type="file" id="imgInp" ref="profilePhoto">
                        <label>ویرایش تصویر</label>
                        <br/>
                        <span v-if="errors.profile_photo"
                              class="text-danger tex-left"
                              v-text="errors.profile_photo[0]"
                        >
                        </span>
                    </div>
                </div>
            </div>
            <div class="main-profile col-md-9">
                <div class="kind_user col-xs-12">
                    <label class="header-label ">
                        نوع کاربری
                    </label>
                    <div class=" col-xs-6 col-md-4">
                        حقیقی
                        <input @click="disableForm()"
                               type="radio"
                               name="kind_user"
                               value="0"
                               v-model="currentUser.profile.is_company"
                        >

                        <i class="fa fa-check"></i>
                    </div>

                    <div class=" col-xs-6 col-md-4">
                        حقوقی
                        <input @click="enableForm()"
                               type="radio"
                               name="kind_user"
                               value="1"
                               v-model="currentUser.profile.is_company"
                        >
                        <i class="fa fa-check"></i>
                    </div>

                    <span v-if="errors.is_company"
                          class="text-danger"
                          v-text="errors.is_company[0]"
                    >
                    </span>

                </div>
                <div class="user-form col-xs-12">
                    <label class="header-label">
                        مشخصات کاربری
                    </label>

                    <div class="col-xs-12 col-sm-6">
                        <label for="company-number" class="content-label">
                            شماره ثبت شرکت:
                        </label>

                        <input type="text" id="company-number"
                               name="company-number"
                               placeholder="شماره ثبت شرکت"
                               v-model="currentUser.profile.company_register_code"
                               disabled="disabled">

                        <span v-if="errors.company_register_code"
                              class="text-danger"
                              v-text="errors.company_register_code[0]"></span>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <label for="company" class="content-label">
                            نام شرکت:
                        </label>

                        <input type="text"
                               id="company"
                               name="company"
                               placeholder="نام شرکت"
                               v-model="currentUser.profile.company_name"
                               disabled>

                        <span v-if="errors.company_name"
                              class="text-danger"
                              v-text="errors.company_name[0]"
                        ></span>

                    </div>

                    <div class="col-xs-12 col-sm-6">

                        <label for="company" class="content-label">
                            شماره تماس:
                        </label>
                        <input type="text"
                               name="tel"
                               placeholder="شماره تماس"
                               v-model="currentUser.profile.public_phone"
                        >

                        <span v-if="errors.public_phone"
                              class="text-danger"
                              v-text="errors.public_phone[0]"
                        >
                        </span>

                    </div>

                    <div class="col-xs-12 col-sm-6">
                        <label for="company" class="content-label">
                            آدرس:
                        </label>

                        <input type="text"
                               name="address"
                               placeholder="آدرس"
                               v-model="currentUser.profile.address">

                        <span v-if="errors.address"
                              class="text-danger"
                              v-text="errors.address[0]"
                        >
                        </span>

                    </div>

                    <div class="col-xs-12">
                        <input type="button"
                               class="green-button"
                               name="submit"
                               value="ثبت تغییرات"
                               v-on:click="RegisterBasicProfileInfo"
                        >
                    </div>

                </div>
            </div>

        </form>
    </section>

</template>

<script>
    import {eventBus} from "../../../../router/dashboard_router";


    export default {
        props: [
            'str',
            'defultimg'
        ],
        data: function () {
            return {
                currentUser: {
                    profile: {
                        is_company: '',
                        company_name:'',
                        company_register_code:'',
                        address:'',
                        public_phone:'',
                        profile_photo:'',
                        postal_code:'',
                        shaba_code:'',
                    },
                    user_info: '',
                },
                profileBasicFields: [
                    'is_company',
                    'company_name',
                    'company_register_code',
                    'public_phone',
                    'address',
                    'postal_code',
                    'shaba_code',
                ],
                profilePhoto: '',
                errors: '',
                popUpMsg: '',
                items: [
                    {
                        message: ' اطلاعات تکمیلی',
                        url: 'complementary',
                    },
                    {
                        message: 'اطلاعات پایه',
                        url: 'profileBasic',
                    }
                ],
            }
        },
        methods: {
            init: function () {
                this.isLoaded = true;
                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data));
            },
            RegisterBasicProfileInfo: function () {
                eventBus.$emit('submiting', true);
                this.errors = '';
                var self = this;
                var data = new FormData();

                for (var i = 0, cnt = this.profileBasicFields.length; i < cnt; i++) {
                    if (this.currentUser.profile[this.profileBasicFields[i]] != null){
                        data.append(this.profileBasicFields[i], this.toLatinNumbers(this.currentUser.profile[this.profileBasicFields[i]]));
                    }
                }

                let profilePhoto = this.$refs.profilePhoto.files[0];
                if (profilePhoto) {
                    data.append('profile_photo', profilePhoto);
                }

                axios.post('/user/profile_modification', data)
                    .then(function (response) {
                        if (response.status === 200) {
                            eventBus.$emit('submiting', false);
                            self.popUpMsg = 'تغییرات با موفقیت اعمال شد';
                            eventBus.$emit('submitSuccess', self.popUpMsg);
                            $('#custom-main-modal').modal('show');
                        }
                        self.submiting = false;
                    })
                    .catch(function (err) {
                        self.errors = '';
                        self.errors = err.response.data.errors;
                        eventBus.$emit('submiting', false);
                    });
            },
            toLatinNumbers: function (num) {
                if (num == null) {
                    return null;
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
            disableForm: function () {
                var companyNumber = $("#company-number");
                var companyName = $("#company-name");

                this.currentUser.profile.company_register_code = null;
                this.currentUser.profile.company_name = null;

                companyNumber.attr('disabled', true);
                companyName.attr('disabled', true);
            },
            enableForm: function () {
                var companyNumber = $("#company-number");
                var companyName = $("#company-name");
                companyName.val('');
                companyNumber.prop('disabled', false);
                companyName.prop('disabled', false);
            }
        },
        mounted(){
            this.init();
            eventBus.$emit('subHeader', this.items);

            function show_image_preview(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    var image = $('.image-preview');
                    var iconProfile = $('#icon-pro');
                    reader.onload = function (e) {
                        image.attr('src', e.target.result);
                        image.css('display', 'inline');
                        iconProfile.css('display', 'none');
                    };
                    reader.readAsDataURL(input.files[0]);
                }

            }

            function image_checked() {
                var image = $('.image-preview');
                var iconProfile = $('#icon-pro');
                if (image.attr('src') !== "") {
                    image.css('display', 'inline');
                    iconProfile.css('display', 'none');
                }
            }

            image_checked();

            $("#imgInp").change(function () {
                show_image_preview(this);
            })

        },
        created(){
            gtag('config','UA-129398000-1',{'page_path': '/profile-basic'});
        }
    }

</script>

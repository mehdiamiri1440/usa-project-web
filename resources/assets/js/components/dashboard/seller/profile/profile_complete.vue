<style scoped >


    /*start style main header*/
    #main {
        margin-right: 250px;
        margin-top: 65px;
        background: #fff;
        padding: 0 50px;
        overflow: hidden;

    }

    #main label {
        display: block;
        text-align: right;
        direction: rtl;
        margin: 15px auto;
        font-weight: 400;
    }
    #main label span {
        color: #4a4e57;
        font-size:12px;
    }

    #main textarea {
        width: 100% !important;
        border: none;
        border-radius: 3px;
        background: #eff3f6;
        height: 180px;
        direction: rtl;
        padding: 15px;
        line-height: 20px;
    }

    #main.little-main {
        margin-right: 80px;
    }

    .main-header {
        height: 65px;
        position: fixed;
        left: 0;
        right: 250px;
        top: 0;
        background: #fff;
        z-index: 5;
        border-bottom: 2px solid #e6e6e6;
    }

    .image-header-profile {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        float: left;
    }
    .image-header-profile  img{
        height: 100%;
    }
    .profile-menu-header {
        float: left;
    }

    .right-menu-header {

        padding: 16px;
    }

    .right-menu-header, .content-header {
        float: right;

    }

    .profile-menu-header {
        padding: 7px;
        padding-left: 55px;
    }

    .profile-menu-header a {
        position: relative;
    }

    .profile-menu-header i {
        position: absolute;

        left: -75px;

        top: 18px;

        font-size: 20px;
    }

    .content-header {
        background: #28a745;
        color: #fff;
        height: 100%;
        padding: 20px 20px 0;
    }

    .right-menu-header a, .profile-menu-header a {
        color: #7f8c9b;
        margin: 5px;
    }

    .right-menu-header a {
        font-size: 30px;
    }

    .right-menu-header a:hover, .profile-menu-header a:hover {
        color: #2e353e;
    }

    .name-header-profile {
        position: relative;
        top: 18px;
        left: 10px;
    }

    .profile-list {
        position: absolute;
        width: 165px;
        background: #fff;
        padding: 8px 10px;
        border-radius: 3px;
        box-shadow: 0 0 3px #313a43;
        text-align: right;
        left: 40px;
        top: 65px;
        display: none;
        z-index: 999;
    }

    .profile-list li {
        margin: 5px;
    }

    .profile-list a {
        width: 100%;
        display: inline-block;
    }

    /*end style main header*/

    /*start style sub-header*/
    .sub-header {
        position: absolute;
        left: 0;
        background: #eff3f6;
        top: 63px;
        right: 0;
        text-align: center;
    }

    .sub-header ul {
        text-align: center;
    }

    .sub-header a {
        padding: 16px;

        display: inline-block;

        color: #808c9b;

        font-weight: bold;

        font-size: 14px;

        position: relative;
    }

    .sub-header a:hover {
        color: #313942;
    }

    .sub-header a:hover::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background: #28a745;
        height: 3px;
        width: 100%;
    }
    .sub-header a.active {
        color: #313942;
    }
    .sub-header a.active::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background: #28a745;
        height: 3px;
        width: 100%;
    }
    /*end style sub-header*/
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

    .header-lable {
        display: block;
        margin: 13px;
        padding: 0;
    }
    .content-lable{
        font-weight:400 ;
    }

    /*end main content style */
    /*custom cods*/
    .green-bot {
        margin: 15px 0;
        display: inline-block;
        background: #28a745;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
        width: 100%;
    }

    .green-bot:hover {
        color: #fff;
        background: #249741;
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
        color: #28a745;
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

    .user-form input[type="text"] {
        width: 100%;
        border: 1px solid #e9e9e9;
        padding: 15px 20px;
        margin: 7px auto;
        border-radius: 4px;
        transition: 300ms;
    }

    .user-form input[type="button"] {
        width: 100%;

    }

    .user-form input[type="text"]:focus {
        border: 1px solid #28a745;
        transition: 500ms;
    }

    .img-profile {
        float: right;
    }

    #icon-pro {
        width: 150px;
        height: 150px;
        display: inline-block;
    }

    #icon-pro svg {
        height: 150px;
    }

    @media screen and (max-width: 992px) {
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
            padding: 0 20px;
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

        .kind_user > div, .kind_activity > div {
            float: none;

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
    .company_des,.image_company,.image_certif{
        margin: 40px auto;
    }
    .images-content{
        height: 215px;

        overflow-y: scroll;
    }
    .images-content .image-item{
        padding: 5px;
        position: relative;
    }
    .images-content .image-item a{
        position: absolute;
        width: 20px;
        height: 20px;
        left: 0;
        top: 0;
        background: red;
        color: #fff;
        border-radius: 50px;
        text-align: center;
        padding-top: 2px;
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
        #main, #main.little-main {
            margin-right: 0 !important;
            padding: 0 5px;
        }
        .sub-header {
            bottom: -44px;
        }
    }
</style>

<template>
    <section class="main-content col-xs-12">
        <form action="#" method="post" enctype="multipart/form-data">

            <div class="company_des col-xs-12">
                <label>
                    شرح فعالیت من | شرکت:
                </label>
                <textarea name="company_name" v-model="currentUser.profile.description"></textarea>
                <span v-if="errors.description" class="text-danger">@{{ errors.description[0] }}</span>
            </div>
            <div class="image_company col-xs-12 ">
                <div class="col-xs-12 col-sm-6">
                    <label>
                        تصاویر مربوطه <span>(محصولات | شرکت | کارکنان)</span>
                    </label>

                    <div class="row">
                        <div class="images-content col-xs-12" >
                                <article class="image-item col-xs-4" v-for="photo in currentUser.relateds">
                                       <a href="#"><i class="fa fa-close"></i></a>
                                       <img :src=" str + '/' + photo" alt="">
                                </article>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <label>
                        افزودن تصاویر مربوطه <span>(محصولات | شرکت | کارکنان)</span> </label>
                    <uploadFile
                            uploadName = "related_files"
                            uploadAccept = "image/*"
                            :uploadMinSize = "1024"
                            :uploadSize = "1024 * 1024 * 10"
                            :uploadMultiple = "true"
                            :uploadDrop = "true"
                            :uploadDropDirectory = "true"
                            :uploadAddIndex = "false"
                            :uploadThread = "3"
                            :uploadOCompress = "1024 * 1024"
                            :uploadUploadAuto = "false"
                            :uploadRef="relatedFiles"
                    ></uploadFile>
             <!--       <input type="file" ref="relatedFiles" id="file" multiple
                           v-on:change="handleRelatedFilesUpload()" accept="image/*">-->
                </div>
            </div>
            <div class="image_certif  col-xs-12">
                <div class="col-xs-12 col-sm-6">
                    <label>
                        تصاویر گواهی های مربوطه <span>(گواهی های ثبت شرکت | گواهی های استاندارد محصول)</span>
                    </label>

                    <div class="row">
                        <div class="images-content col-xs-12">
                            <article class="image-item col-xs-4" v-for="photo in currentUser.certificates">
                                <a href="#"><i class="fa fa-close"></i></a>
                                <img :src="str + '/' + photo" alt="">
                            </article>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <label>
                        افزودن گواهی های مربوطه <span>(گواهی های ثبت شرکت | گواهی های استاندارد محصول)</span>
                    </label>
                    <uploadFile
                            uploadName = "certificate_files"
                            uploadAccept = "image/*"
                            :uploadMinSize = "1024"
                            :uploadSize = "1024 * 1024 * 10"
                            :uploadMultiple = "true"
                            :uploadDrop = "true"
                            :uploadDropDirectory = "true"
                            :uploadAddIndex = "false"
                            :uploadThread = "3"
                            :uploadOCompress = "1024 * 1024"
                            :uploadUploadAuto = "false"
                            :uploadRef="certificateFiles"
                    ></uploadFile>
<!--
                    <input type="file" multiple ref="certificateFiles" v-on:change="handleCertificateFilesUpload()"
                           accept="image/*">-->
                </div>
            </div>
            <input class="green-bot" value="ثبت تغییرات" type="button" @click="RegisterComplementaryProfileInfo">
        </form>

    </section>

</template>

<script>
    import {eventBus} from "../../../../router/dashboard_router";
    import uploadFile from '../upload-image'
    export default {
        components:{
            uploadFile
        },
        props:[
            'str'
        ],
        data: function () {
            return{
                currentUser: {
                    profile: '',
                        user_info: ''
                },
                profileComplementaryFields: [
                    'is_company',
                    'company_name',
                    'company_register_code',
                    'public_phone',
                    'description',
                ],
                    relatedFiles: [],
                certificateFiles: [],
                errors: '',
                popUpMsg: '',
                items: [
//                    {
//                        message: 'قرارداد',
//                        url: 'profileContract',
//                    },
                    {
                        message: ' اطلاعات تکمیلی',
                        url: 'compelementry',
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
                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data));
            },
            RegisterComplementaryProfileInfo: function () {


                eventBus.$emit('submitingEvent',true);
                if (this.currentUser.profile.is_company == null || this.currentUser.profile.public_phone == null) {
                    this.popUpMsg = 'ابتدا اطلاعات پایه را تکمیل کنید.';
                    eventBus.$emit('submitSuccess', this.popUpMsg);
                    $('#myModal').modal('show');
                    eventBus.$emit('submitingEvent',false);
                    return;
                }

                this.errors = '';
                var self = this;

                let formData = new FormData();
                var cnt = this.profileComplementaryFields.length;


                for (var i = 0; i < cnt; i++){
                    if (this.profileComplementaryFields[i] == 'description' && (this.currentUser.profile['description'] == null || this.currentUser.profile['description'] == '')) {
                        continue;
                    }
                    formData.append(this.profileComplementaryFields[i], this.currentUser.profile[this.profileComplementaryFields[i]]);
                }

                for (var i = 0; i < this.relatedFiles.length; i++) {
                    let file = this.relatedFiles[i];
                    formData.append('related_' + i, file);
                }

                for (var i = 0; i < this.certificateFiles.length; i++) {
                    let file = this.certificateFiles[i];
                    formData.append('certificate_' + i, file);
                }

                formData.append('related_image_count', this.relatedFiles.length);
                formData.append('certificate_image_count', this.certificateFiles.length);

                axios.post('/user/profile_modification', formData, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/json',
                    }
                })
                    .then(function (response) {
                        if (response.status == 200) {

                            eventBus.$emit('submitingEvent',false);
                            self.popUpMsg = 'تغییرات با موفقیت انجام شد.';
                            eventBus.$emit('submitSuccess',self.popUpMsg);

                            $('#myModal').modal('show');
                        }
                        else if (response.status == 302) {
                            window.location.href = '/login';
                        }
                    })
                    .catch(function (err) {
                        self.errors = '';
                        self.errors = err.response.data.errors;
                        eventBus.$emit('submitingEvent', false);
                    });
            },
            handleRelatedFilesUpload() {
                let uploadedFiles = this.$refs.relatedFiles.files;
                /*
                  Adds the uploaded file to the files array
                */
                for (var i = 0; i < uploadedFiles.length; i++) {
                    this.relatedFiles.push(uploadedFiles[i]);
                }
            },
            handleCertificateFilesUpload() {
                let uploadedFiles = this.$refs.certificateFiles.files;
                /*
                 Adds the uploaded file to the files array
                 */
                for (var i = 0; i < uploadedFiles.length; i++) {
                    this.certificateFiles.push(uploadedFiles[i]);
                }
            },
        },
        mounted() {
            this.init();
            eventBus.$emit('subHeader', this.items);
            $('input[type="file"]').imageuploadify();
        },
        created(){
            gtag('config','UA-129398000-1',{'page_path': '/profile-complementary'});
        }
    }

    function call_api(route, data, call_back) {
        axios.post(route, data)
            .then(call_back);
    }




</script>


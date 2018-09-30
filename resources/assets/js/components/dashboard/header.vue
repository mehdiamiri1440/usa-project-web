<style >
    /*start style main header*/
    #main {
        margin-right: 250px;
        margin-top: 112px;
        background: #eff3f6;
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
        bottom: -48px;
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

    /*end style sub-header*/
</style>
<template>
    <div>
        <!-- Modal -->
        <div class="container">
            <div class="modal fade" id="myModal" tabindex="-1" ref="myModal" role="dialog"
                 aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal"> <i class="fa fa-close"></i></a>
                            <p class="main_par">
                                {{popUpMsg}}
                            </p>
                            <button class="btn green-bot " data-dismiss="modal">
                                متوجه شدم
                            </button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>
        <div class="container">
            <div class="modal fade" id="myModal-1" tabindex="-1" ref="myModal" role="dialog"
                 aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal"> <i class="fa fa-close"></i></a>
                            <p class="main_par" id="popUpMsg">
                                ابتدا پروفایل خود را کامل کنید.سپس منتظر تایید اطلاعات خود از سمت کارشناسان اینکوباک
                                باشید.
                            </p>
                            <button class="btn green-bot " data-dismiss="modal">
                                متوجه شدم
                            </button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>
        <!-- /.modal -->
        <!--loader-->

        <div :class="{'loader-wrapper': !submiting , 'loader-display' : submiting }">
            <div class="main-loader">
                <img v-bind:src="loading">
                <p dir="rtl">کمی صبر کنید...</p>
            </div>
        </div>
        <!--end loader-->
        <section class="right-header mobile-header">
            <header class="header-right-header">
                <button class="clouse_menu_mob">
                    <i class="fa fa-angle-right"></i>
                </button>
                <button class="clouse_menu">
                    <i class="fa fa-angle-right"> </i>
                </button>
                <h1 class="logo"><a href="/"><img :src="logo" alt="incoboc"></a></h1>
            </header>


            <section class="main-right-header">

                <profileinfo
                        :photoLink="currentUser.profile.profile_photo"
                        :storage="storage"
                        :def="defultimg"
                        :username="currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name"
                        :usercity="currentUser.user_info.province + ' - ' + currentUser.user_info.city"
                        :userprof="currentUser.user_info.user_name"
                >
                </profileinfo>

                <header-menu-list
                        :profilebasic="profilebasic"
                        :byadreq="byadreq"
                        :selregpro="selregpro"
                        :transactroute="transactroute"
                        :mytrans="mytrans"


                >

                </header-menu-list>
                <div class="copy-right">
                   <!--
                    <p dir="rtl">
                        تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.
                    </p>-->
                </div>
            </section>

            <div class="background_mob_sec">

            </div>
        </section>
        <section class="right-header desktop-header">
            <header class="header-right-header">
                <button class="clouse_menu_mob">
                    <i class="fa fa-angle-right"> </i>
                </button>
                <button class="clouse_menu">
                    <i class="fa fa-angle-right"> </i>
                </button>
                <h1 class="logo"><a href="/"><img :src="logo" alt="incoboc"></a></h1>
            </header>
            <section class="main-right-header">
                <profileinfo
                        :photoLink="currentUser.profile.profile_photo"
                        :storage="storage"
                        :def="defultimg"
                        :username="currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name"
                        :usercity="currentUser.user_info.province + ' - ' + currentUser.user_info.city"
                        :userprof="currentUser.user_info.user_name"
                >
                </profileinfo>

             <header-menu-list
                :profilebasic="profilebasic"
                :byadreq="byadreq"
                :selregpro="selregpro"
                :transactroute="transactroute"
                :mytrans="mytrans"
                :guide="guide"

             >

             </header-menu-list>
            </section>
        </section>
        <headerTop
                @clicked="name = $event"
                :photoLink="currentUser.profile.profile_photo"
                :storage="storage"
                :def="defultimg"
                :username="currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name"
                :out="logout"
                :routeHome="routehome"
                :profilebasic="profilebasic"

        ></headerTop>
    </div>

</template>

<script>
    import {eventBus} from '../../app';
    import profileinfo from './sub-com/profile_info.vue'
    import headerMenuList from './sub-com/header-menu-list.vue'
    import headerTop from './sub-com/header-top.vue'
    export default{
        components: {
            profileinfo,
            headerMenuList,
            headerTop
        },
        props: [
            'defultimg',
            'logo',
            'loading',
            'storage',
            'transactroute',
            'mytrans',
            'selregpro',
            'byadreq',
            'profilebasic',
            'logout',
            'routehome',
            'guide'
        ],
        data: function () {
            return {
                currentUser: {
                    profile: {
                        is_company: '',
                        company_name: '',
                        company_register_code: '',
                        address: '',
                        public_phone: '',
                        profile_photo: this.storage + '',
                        postal_code: '',
                        shaba_code: '',
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
                submiting: false,

            }
        },
        methods: {

            init: function () {

                this.isLoaded = true;
                axios.post('/user/profile_info')
                        .then(response => (this.currentUser = response.data)
                )
                ;
            },
            RegisterBasicProfileInfo: function () {
                this.submiting = true;
                this.errors = '';
                var self = this;

                var data = new FormData();

                for (var i = 0, cnt = this.profileBasicFields.length; i < cnt; i++) {
                    if (this.currentUser.profile[this.profileBasicFields[i]] != null) {
                        data.append(this.profileBasicFields[i], this.toLatinNumbers(this.currentUser.profile[this.profileBasicFields[i]]));
                    }
                }

                let profilePhoto = this.$refs.profilePhoto.files[0];
                if (profilePhoto) {
                    data.append('profile_photo', profilePhoto);
                }

                axios.post('/user/profile_modification', data)
                        .then(function (response) {
                            if (response.status == 200) {
                                self.submiting = false;
                                self.popUpMsg = 'تغییرات با موفقیت اعمال شد';

                                $('#myModal').modal('show');
                            }
                            self.submiting = false;
                        })
                        .catch(function (err) {
                            self.errors = '';
                            self.errors = err.response.data.errors;
                            self.submiting = false;
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
        },
        mounted(){
            this.init();
            console.log(this.items)
        },
        created(){
          eventBus.$on('submitingEvent',(event)=>{
              this.submiting = event;
          });
          eventBus.$on('submitSuccess',(event)=>{
              this.popUpMsg = event;
          });


        }
    }
</script>
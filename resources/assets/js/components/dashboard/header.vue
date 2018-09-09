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
                                @{{popUpMsg}}
                            </p>
                            <button class="btn green-bot " data-dismiss="modal">
                                متوجه شدم
                            </button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>
         /.modal
         Modal
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
              <div class="profile">
                  <div class="profile-img" v-if="currentUser.profile.profile_photo != null">
                      <img :src="storage + '/' + currentUser.profile.profile_photo">
                  </div>
                  <div class="profile-img" v-else>
                      <img  :src="defultimg">
                  </div>
                  <div class="profile-content">
                      <div class="profile-name">
                          {{currentUser.user_info.first_name + " " + currentUser.user_info.last_name}}
                      </div>
                      <div class="profile-city">
                          {{currentUser.user_info.province + " - " + currentUser.user_info.city}}
                      </div>
                  </div>
                       <a :href="'/profile/' + currentUser.user_info.user_name" class="green-bot">
                       نمایش پروفایل من
                       </a>

              </div>
              <div class="header-menu">
                  <!--     <ul class="list-unstyled">
                           <li class="list-item {{Request::is('dashboard/profile/*') ? 'active' : ''}}">
                               <a href="{{route('profile_basic')}}">
                                   <span>ویرایش پروفایل</span>
                               </a>
                           </li>
                           <li class="list-item {{Request::is('dashboard/buyAd-request*') || Request::is('dashboard/my-sell-offers') ? 'active' : ''}}">
                               <a href="{{route('seller-buyAd-requests')}}" onClick='checkProfileConfirmation(event)'>
                                   <span>درخواست ها</span>
                               </a>
                           </li>
                           <li class="list-item {{Request::is('dashboard/register-product') ? 'active' : ''}}">
                               <a href="{{route('seller-register-product')}}" onClick='checkProfileConfirmation(event)'>
                                   <span>ثبت محصول</span>
                               </a>
                           </li>
                           <li class="list-item {{Request::is('dashboard/transaction-list') || Request::is('dashboard/transaction-detail/*') ? 'active' : ''}}">
                               <a href="{{route('my-transaction-list')}}" onClick='checkProfileConfirmation(event)'>
                                   <span>تراکنش های جاری</span>
                               </a>
                           </li>
                           <li class="list-item {{Request::is('dashboard/terminated-transaction-list') ? 'active' : ''}}">
                               <a href="{{route('my-terminated-transaction-list')}}" onClick='checkProfileConfirmation(event)'>
                                   <span>تراکنش های انجام شده</span>
                               </a>
                           </li>
                           <li class="list-item {{Request::is('dashboard/guide') ? 'active' : ''}}">
                               <a href="{{route('dashboard-guide')}}">
                                   <span>راهنما</span>
                               </a>
                           </li>
                       </ul>-->
              </div>
              <div class="copy-right">
                  <p dir="rtl">
                      تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.
                  </p>
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
              <div class="profile">
                  <div class="profile-img" v-if="currentUser.profile.profile_photo != null">
                      <img :src="storage + '/' + currentUser.profile.profile_photo">
                  </div>
                  <div class="profile-img" v-else>
                      <img  :src="defultimg">
                  </div>
                  <div class="profile-content">
                      <div class="profile-name">
                              {{currentUser.user_info.first_name + " " + currentUser.user_info.last_name}}
                      </div>
                      <div class="profile-city">
                          {{currentUser.user_info.province + " - " + currentUser.user_info.city}}
                      </div>
                  </div>
                  <a :href="'/profile/' + currentUser.user_info.user_name" class="green-bot">
                      نمایش پروفایل من
                  </a>

              </div>
              <div class="header-menu">
                     <ul class="list-unstyled">
                         <!--
                          <li class="list-item {{Request::is('dashboard/profile/*') ? 'active' : ''}}">
                              <a href="{{route('profile_basic')}}">
                                  <span>ویرایش پروفایل</span>
                              </a>
                          </li>
                          <li class="list-item {{Request::is('dashboard/buyAd-request*') || Request::is('dashboard/my-sell-offers') ? 'active' : ''}}">
                              <a href="{{route('seller-buyAd-requests')}}" onClick='checkProfileConfirmation(event)'>
                                  <span>درخواست ها</span>
                              </a>
                          </li>
                          <li class="list-item {{Request::is('dashboard/register-product') ? 'active' : ''}}">
                              <a href="{{route('seller-register-product')}}" onClick='checkProfileConfirmation(event)'>
                                  <span>ثبت محصول</span>
                              </a>
                          </li>
                          <li class="list-item {{Request::is('dashboard/transaction-list') || Request::is('dashboard/transaction-detail/*') ? 'active' : ''}}">
                              <a href="{{route('my-transaction-list')}}" onClick='checkProfileConfirmation(event)'>
                                  <span>تراکنش های جاری</span>
                              </a>
                          </li>
                          <li class="list-item {{Request::is('dashboard/terminated-transaction-list') ? 'active' : ''}}">
                              <a href="{{route('my-terminated-transaction-list')}}" onClick='checkProfileConfirmation(event)'>
                                  <span>تراکنش های انجام شده</span>
                              </a>
                          </li>
                          -->
                          <li class="list-item ">
                              <a >
                                  <span>راهنما</span>
                              </a>
                          </li>
                      </ul>
              </div>
              <div class="copy-right">
                  <p>
                      تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.
                  </p>
              </div>
          </section>
      </section>
      <header id="header" class="main-header">
          <div class="show-header">
              <button class="fa fa-angle-left"></button>
          </div>
          <div class="content-header">
              <span class="font-big">اینکوباک  </span> | <span> بازارگاه آنلاین کشاورزی</span>
          </div>
          <div class="profile-menu-header">
              <!--<a href="#" onclick="dropdown()">-->
                  <!--&lt;!&ndash;@if(session('profile_photo'))&ndash;&gt;-->
                  <!--<div class="image-header-profile">-->
                      <!--<img src="{{asset('storage/' . session('profile_photo'))}}">-->
                  <!--</div>-->
                  <!--&lt;!&ndash;@else&ndash;&gt;-->
                  <!--<div class="image-header-profile">-->
                      <!--<img src="{{asset('assets/img/user-defult.png')}}">-->
                  <!--</div>-->
                  <!--&lt;!&ndash;@endif&ndash;&gt;-->
                  <!--<i class="fa fa-angle-down" aria-hidden="true"></i>-->
                  <!--&lt;!&ndash;<span class="name-header-profile">{{session('full_name')}}</span>&ndash;&gt;-->
              <!--</a>-->
              <div class="profile-list">
                  <ul class="list-unstyled">
                      <!--<li class="list-item"><a href="{{route('profile_basic')}}">پروفایل</a></li>-->
                      <!--<li class="list-item"><a href="{{route('logout')}}">خروج</a></li>-->
                  </ul>
              </div>
          </div>
          <div class="right-menu-header">
              <ul class="list-inline">
                  <!--<li><a href="#"><i class="fa fa-bars" aria-hidden="true"></i></a></li>-->
                  <!--<li><a href="{{url('/')}}"><i class="fa fa-home" aria-hidden="true"></i></a></li>-->
              </ul>
          </div>
      </header>
  </div>

</template>

<script>
/*
    function dropdown() {
        $(".profile-list").toggle("fade");
    }
    function toggle_header() {
        var menu_but = $(".clouse_menu");
        var menu_but_icon = $(".clouse_menu i");
        var profile = $(".profile");
        var header_menu = $(".header-menu span");
        var header_menu_a = $(".header-menu a");
        var logo = $(".logo");
        var copy_right = $(".copy-right");
        var right_header_desk = $(".right-header.desktop-header");
        var little_main_header = $(".main-header");
        var main = $("#main");
        var next_move = "shrink";
        menu_but.click(function () {
            if (next_move == "expand") {
                $(this).css({
                    width : "30%"
                });
                menu_but_icon.switchClass("fa-angle-left"," fa-angle-right",200);
                profile.fadeIn();
                copy_right.css('display','block');
                logo.fadeIn();
                header_menu.css('display','inline');
                header_menu_a.css({
                    "text-align" : "right"
                });
                right_header_desk.removeClass("little_header",200);
                little_main_header.removeClass("little-main-header",200);
                main.removeClass("little-main",200);
                next_move = "shrink";
            } else {
                $(this).css({
                    width : "100%"
                });
                menu_but_icon.switchClass("fa-angle-right"," fa-angle-left",200);
                profile.css('display','none');
                header_menu.css('display','none');
                copy_right.css('display','none');
                logo.css('display','none');
                header_menu_a.css({
                    "text-align" : "center"
                });
                right_header_desk.addClass("little_header",200);
                little_main_header.addClass("little-main-header",200);
                main.addClass("little-main",200);
                next_move = "expand";
            }
        });
    }
    function toggle_show_header() {
        var el = $('.show-header button');
        var el_clouse = $('.clouse_menu_mob');
        var flag = true;
        var right_header = $(".right-header.mobile-header");
        var back = $(".background_mob_sec");
        el.on('click', function () {
            if (flag == true){
                console.log('flag = true');
                right_header.animate({
                    right:'0'
                },300);
                back.fadeIn();

                flag = false;
            }else{
                right_header.animate({
                    right:'-300px'
                },300);

                flag = true;
            }
        });
        el_clouse.on('click', function () {
            if (flag == true){
                right_header.animate({
                    right:'0'
                },300);
                flag = false;
            }else{
                right_header.animate({
                    right:'-300px'

                },300);
                back.fadeOut();
                flag = true;
            }
        })


    }
    $(document).ready(function () {
        toggle_header();
        toggle_show_header();
    });
*/

    export default{
        props:[
                'defultimg',
                'logo',
                'storage'
        ],
        data:function(){
         return {

             currentUser:{
                 profile:{
                     is_company: '',
                     company_name:'',
                     company_register_code:'',
                     address:'',
                     public_phone:'',
                     profile_photo: this.storage +'',
                     postal_code:'',
                     shaba_code:  '',
                 },
                 user_info:'',
             },
             profileBasicFields:[
                 'is_company',
                 'company_name',
                 'company_register_code',
                 'public_phone',
                 'address',
                 'postal_code',
                 'shaba_code',
             ],
             profilePhoto:'',
             errors:'',
             popUpMsg:'',
             submiting:false,
         }
        },
        methods:{
            init:function(){
                this.isLoaded = true;
                axios.post('/user/profile_info')
                        .then(response => (this.currentUser = response.data));
            },
            RegisterBasicProfileInfo:function(){
                this.submiting = true;

                this.errors = '';
                var self = this;

                var data = new FormData();

                for(var i = 0 , cnt = this.profileBasicFields.length ; i < cnt ; i++){
                    if(this.currentUser.profile[this.profileBasicFields[i]] != null){
                        data.append(this.profileBasicFields[i],this.toLatinNumbers(this.currentUser.profile[this.profileBasicFields[i]]));
                    }
                }

                let profilePhoto = this.$refs.profilePhoto.files[0];
                if(profilePhoto){
                    data.append('profile_photo',profilePhoto);
                }

                axios.post('/user/profile_modification',data)
                        .then(function(response){
                            if(response.status == 200){
                                self.submiting = false;
                                self.popUpMsg = 'تغییرات با موفقیت اعمال شد';

                                $('#myModal').modal('show');
                            }
                            self.submiting = false;
                        })
                        .catch(function(err){
                            self.errors = '';
                            self.errors = err.response.data.errors;
                            self.submiting = false;
                        });
            },
            toLatinNumbers:function(num){
                if(num == null){
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
                        .replace(/[۰-۹]/g,function(w){
                            return numDic[w];
                        });
            },
        },
        mounted(){
            this.init();
        },
    }
</script>
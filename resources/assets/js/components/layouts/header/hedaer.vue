<template>
  <div>
      <!-- Modal -->
      <div class="container">
          <div class="modal fade" id="myModal2" tabindex="-1" ref="myModal" role="dialog"
               aria-labelledby="myModalLabel"
               aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="main_popup_content">
                          <a href="#" data-dismiss="modal"> <i class="fa fa-close"></i></a>
                          <p class="main_par">
                              {{popUpMsg}}
                          </p>
                          <button class="btn  green_bot" @click="redirectToLogin()">
                              ورود/ثبت نام
                          </button>
                          <br/>
                          <br/>
                          <button class="btn green_bot " data-dismiss="modal">
                              متوجه شدم
                          </button>
                      </div>
                  </div><!-- /.modal-content -->
              </div><!-- /.modal-dialog -->
          </div>
      </div>

      <!-- /.modal -->
      <div class="navbar container-fluid navbar-fixed-top custom-navbar" role="navigation">
          <div class="container-fluid">
              <!-- navbar header -->
              <div class="navbar-header">
                  <div v-if="user_id != ''" class="user-header-mobile hidden-sm hidden-md hidden-lg ">
                      <div class="profile-menu-header">
                          <a href="#" @click.prevent="dropdown()">
                              <div class="image-header-profile">

                                  <img v-if="profile_photo != ''" :src="storage_path + '/' + profile_photo">

                                  <img v-else :src="user_default_image">

                              </div>
                              <i aria-hidden="true" class="fa fa-angle-down"></i>
                          </a>
                          <div class="profile-list">
                              <ul class="list-unstyled">
                                  <li class="list-item">
                                      <a :href="'/dashboard/#/profile'">پروفایل</a>
                                  </li>
                                  <li class="list-item">
                                      <a :href="'/dashboard/#/password'">تغییر کلمه عبور</a>
                                  </li>
                                  <li class="list-item"><a :href="login_page_path">خروج</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <button class="navbar-toggle" data-toggle="collapse" href="#collapseOne">
                      <span class="icon icon-bar"></span>
                      <span class="icon icon-bar"></span>
                      <span class="icon icon-bar"></span>
                  </button>
                  <a class="navbar-brand test" href="/">
                  </a>
                  <p class="logo-des hidden-xs hidden-sm">
                      اینکوباک | بازارگاه آنلاین دنیای کشاورزی
                  </p>


              </div>

              <div class="collapse navbar-collapse" id="collapseOne" aria-expanded="false">
                  <ul class="nav navbar-nav navbar-left">

                      <li v-if="user_id == ''"><a :href=" login_page_path" class="smoothScroll">ورود/ثبت نام</a></li>
                      <li><a href="/" class="smoothScroll">صفحه ی اصلی</a></li>
                      <li><a href="/about-us" class="smoothScroll">درباره ما</a></li>
                      <li><a href="/privacy-and-policy" class="smoothScroll">قوانین و مقررات</a></li>
                      <li><a href="http:\\www.blog.incobac.com" class="smoothScroll">وبلاگ</a></li>
                      <li><a href="/master/#/product-list" class="smoothScroll">لیست محصولات </a></li>




                      <li v-if="user_id != ''" class="user-header-web hidden-xs">
                          <div class="profile-menu-header "><a href="#" @click.prevent="dropdown()">
                              <div class="image-header-profile">
                                  <img v-if="profile_photo != ''" :src="storage_path + '/' + profile_photo">

                                  <img v-else :src="user_default_image">

                              </div>
                              <i aria-hidden="true" class="fa fa-angle-down"></i> <span
                                  class="name-header-profile">{{user_full_name}}</span></a>
                              <div class="profile-list">
                                  <ul class="list-unstyled">
                                      <li class="list-item">
                                          <a :href="'/dashboard/#/profile'">پروفایل</a>
                                      </li>
                                      <li class="list-item">
                                          <a :href="'/dashboard/#/password'">تغییر کلمه عبور</a>
                                      </li>
                                      <li class="list-item"><a :href="login_page_path">خروج</a></li>
                                  </ul>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
    var viz = false;
    import {eventBus} from "../../../../js/router/dashboard_router";
    export default {
        data(){
          return{
              popUpMsg:''
          }
        },
        props:[
            'user_id',
            'user_default_image',
            'profile_photo',
            'user_full_name',
            'user_logout_path',
            'storage_path',
            'login_page_path'
        ], methods: {
            dropdown: function () {
                $(".profile-list").fadeIn("slow", function () {
                    viz = true;
                });
            },
            dropdownList: function () {
                $(".icon-header-list").fadeIn("slow", function () {
                    viz = true;
                });
            },
            documentClick(e) {
                if (viz) {
                    $('.profile-list').fadeOut("slow");
                    $('.icon-header-list').fadeOut("slow");
                    viz = false;

                }
            },
        },
        mounted(){
            eventBus.$on('submitSuccess', ({ popUpMsgUserInfo}) => {
                this.popUpMsg = popUpMsgUserInfo;
                console.log(popUpMsgUserInfo);
            })
        },
        created() {
            document.addEventListener('click', this.documentClick)
        },
    }
</script>

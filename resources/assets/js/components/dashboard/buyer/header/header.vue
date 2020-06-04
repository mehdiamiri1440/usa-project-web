<style scoped>
html,
body,
#main {
  height: 100%;
}

/*start style right header*/
.logo {
  height: 64px;

  display: block;

  float: right;

  width: 70%;

  text-align: center;
}

.logo_hide {
  display: none;
}

.logo a {
  display: inline-block;
  margin-top: 0;
  padding: 0 10px;
  color: #fff;
  text-align: center;
}

.logo img {
  width: 100px;
  padding: 9px 0 4px;
}

.right-header {
  width: 250px;
  right: 0;
  bottom: 0;
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 9;
  background: #313a43;
  direction: rtl;
}

.little_header {
  width: 80px;
}

.right-header.mobile-header {
  display: none;
  box-shadow: 0 0 20px;
}

.right-header > header {
  overflow: hidden;
  background: #313a43;
  border-bottom: 2px solid #2a3035;
  border-bottom-color: rgb(42, 48, 53);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.close_menu,
.close_menu_mob {
  float: left;
  width: 30%;
  border: none;
  background: none;
  font-size: 35px;
  top: 0;
  position: relative;
  padding: 11px;
}

.close_menu i,
.close_menu_mob i {
  color: #fff;
}

.close_menu_mob {
  display: none;
}

.main-right-header {
  text-align: right;
  color: #fff;
  position: relative;
}

.copy-right {
  text-align: center;
  padding: 15px 15px 0;
  direction: rtl;
  line-height: 1.618;
  position: absolute;
  bottom: 15px;
  z-index: 10;
  color: #fff;
}

.copy-right p {
  font-size: 12px;
  font-weight: 200;
}

.image-header-profile img {
  height: 100%;
}

.right-menu-header {
  position: relative;
  padding: 6px;
}

.right-menu-header li ul a {
  font-size: 14px;
  width: 100%;
  display: inline-block;
}

.right-menu-header li ul li {
  margin: 5px;
}

.icon-header-list {
  position: absolute;
  width: 165px;
  background: #fff;
  padding: 8px 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #313a43;
  text-align: right;
  right: 75px;
  top: 65px;
  display: none;
  z-index: 999;
}

.background_mob_sec {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 6;
  display: none;
}

/*end style right header*/

/*loader*/

.loader-display {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: block;
}

.main-loader {
  position: absolute;

  top: 35%;

  text-align: center;

  display: block;

  width: 100%;

  color: #fff;

  font-size: 23px;
}

.main-loader img {
  width: 100px;

  background: #fff;

  border-radius: 50px;

  height: 100px;

  display: inline-block;

  margin: 0 auto 22px;
}

.loader-wrapper {
  display: none;
}

span.min {
  display: none;
}

.choose-file {
  background: #fff;
}

.green-button.delete {
  background: #e41c38;
  color: #fff;
}

@media screen and (max-width: 994px) {
  .right-header.desktop-header {
    display: none;
  }

  .right-header.mobile-header {
    display: block;
    right: -300px;
    overflow: auto;
    direction: rtl;
  }

  .close_menu {
    display: none;
  }

  .close_menu_mob {
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
}

@media screen and (max-width: 768px) {
  .mobile-header .green-button {
    margin: 15px 0 0;
  }

  .mobile-header ul a {
    padding: 15px 20px;
  }
}

@media screen and (max-width: 555px) {
  .profile-menu-header .user_name {
    display: none;
  }

  .right-menu-header .green-button {
    padding: 10px 15px;
  }
}

@media screen and (max-width: 345px) {
  .sub-header a {
    font-size: 10px;
  }
}

/*end loader*/
</style>

<template>
  <div>
    <!-- Modal -->

    <div class="container">
      <div
        id="deleteModal"
        class="modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="main_popup_content">
              <a href="#" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>
              <p class="main-pop-up" v-text="popUpMsg"></p>

              <a
                href="#"
                class="btn green-button delete"
                data-dismiss="modal"
                @click.prevent="deleteProduct()"
                v-text="deleteButtonText"
              ></a>

              <a href="#" class="btn green-button" data-dismiss="modal" v-text="cancelButtonText"></a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <div class="container">
      <div
        class="modal fade"
        id="modal-buttons"
        tabindex="-1"
        ref="myModal"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="main_popup_content">
              <a href="#" data-dismiss="modal">
                <i class="fa fa-close"></i>
              </a>
              <p class="main-pop-up" v-text="popUpMsg"></p>
              <button class="btn green-button" data-dismiss="modal">متوجه شدم</button>
              <a class="btn green-button" href="/pricing">ارتقا عضویت</a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <div class="container">
      <div
        class="modal fade"
        id="custom-main-modal"
        tabindex="-1"
        ref="custom-main-modal"
        role="dialog"
        aria-labelledby="custom-main-modal-label"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="main_popup_content">
              <a href="#" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>

              <p class="main-pop-up" v-text="popUpMsg"></p>

              <button class="btn green-button" data-dismiss="modal" id="close-btn">متوجه شدم</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <div class="container">
      <div
        class="modal fade"
        id="confirmation-modal"
        tabindex="-1"
        ref="confirmation-modal"
        role="dialog"
        aria-labelledby="confirmation-modal-label"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="main_popup_content">
              <a href="#" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>
              <p class="main-pop-up" id="popUpMsg">
                لطفا پس از تکمیل اطلاعات پروفایل خود، منتظر تماس کارشناسان باسکول جهت تکمیل اطلاعات
                باشید. از شکیبایی شما سپاسگزاریم.
              </p>
              <button class="btn green-button" data-dismiss="modal">متوجه شدم</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <div class="container">
      <div
        class="modal fade"
        id="contract-modal-wrapper"
        tabindex="-1"
        ref="contract-modal-wrapper"
        role="dialog"
        aria-labelledby="contract-modal-wrapper-label"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="main_popup_content">
              <a href="#" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>
              <p class="main-pop-up" id="contractModal">
                برای شروع استفاده از خدمات باسکول ابتدا در قسمت ویرایش پروفایل، قرارداد همکاری را
                مطالعه و تایید کنید.
              </p>
              <button class="btn green-button" data-dismiss="modal">متوجه شدم</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>
    <!-- /.modal -->
    <!--loader-->
    <!--loading upload-->

    <div :class="{'loader-wrapper': !submiting , 'loader-display' : submiting }">
      <div class="main-loader">
        <p dir="rtl">{{uploadPercentage}}%</p>
        <progress max="100" :value="uploadPercentage"></progress>
        <p dir="rtl">در حال بارگذاری...</p>
      </div>
    </div>

    <!-- <div :class="{'loader-wrapper': !submiting , 'loader-display' : submiting }">
      <div class="main-loader">
        <img src="../../../../../img/gif/prload.gif" />
        <p dir="rtl">در حال بارگذاری...</p>
      </div>
    </div>-->

    <!--end loader-->

    <section class="right-header mobile-header">
      <header class="header-right-header">
        <button class="close_menu_mob">
          <i class="fa fa-angle-right"></i>
        </button>

        <button class="close_menu">
          <i class="fa fa-angle-right"></i>
        </button>

        <span class="logo">
          <router-link :to="{name : 'indexPage'}">
            <img src="../../../../../img/logo/web-logo-white.svg" alt="buskool" />
            <p>بازارگاه آنلاین کشاورزی</p>
          </router-link>
        </span>
      </header>

      <section class="main-right-header">
        <ProfileInfo
          :isLoading="isLoading"
          :photoLink="currentUser.profile.profile_photo"
          :storage="storage"
          :username="currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name"
          :usercity="currentUser.user_info.province + ' - ' + currentUser.user_info.city"
          :userprof="currentUser.user_info.user_name"
        />

        <SwitchButtons mobile="1" />
        <HeaderMenuList />
      </section>
    </section>

    <div class="background_mob_sec"></div>

    <section class="right-header desktop-header">
      <header class="header-right-header">
        <button class="close_menu_mob">
          <i class="fa fa-angle-right"></i>
        </button>

        <button class="close_menu">
          <i class="fa fa-angle-right"></i>
        </button>

        <span class="logo">
          <router-link :to="{name : 'indexPage'}">
            <img src="../../../../../img/logo/web-logo-white.svg" alt="buskool" />
            <p>بازارگاه آنلاین کشاورزی</p>
          </router-link>
        </span>
      </header>

      <section class="main-right-header">
        <ProfileInfo
          :isLoading="isLoading"
          :photoLink="currentUser.profile.profile_photo"
          :storage="storage"
          :username="currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name"
          :usercity="currentUser.user_info.province + ' - ' + currentUser.user_info.city"
          :userprof="currentUser.user_info.user_name"
        />

        <SwitchButtons />
        <HeaderMenuList />
      </section>

      <div class="copy-right">
        <p dir="rtl">تمام حقوق مادی و معنوی سایت متعلق به باسکول است.</p>
      </div>
    </section>

    <HeaderTop
      :isLoading="isLoading"
      :photoLink="currentUser.profile.profile_photo"
      :storage="storage"
      :username="currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name"
      :out="logout"
      :menuClosed="menuClosed"
    />
  </div>
</template>

<script>
import ProfileInfo from "./sub-com/profile_info.vue";
import HeaderMenuList from "./sub-com/header-menu-list.vue";
import HeaderTop from "./sub-com/header-top.vue";
import SwitchButtons from "./sub-com/swith-buttons.vue";
import { eventBus } from "../../../../router/router";

export default {
  components: {
    ProfileInfo,
    HeaderMenuList,
    HeaderTop,
    SwitchButtons
  },
  props: ["storage", "logout", "userId", "searchText"],
  data: function() {
    return {
      menuClosed: false,
      isLoading: true,
      currentUser: {
        profile: {
          is_company: "",
          company_name: "",
          company_register_code: "",
          address: "",
          public_phone: "",
          profile_photo: this.storage + "",
          postal_code: "",
          shaba_code: ""
        },
        user_info: ""
      },
      profileBasicFields: [
        "is_company",
        "company_name",
        "company_register_code",
        "public_phone",
        "address",
        "postal_code",
        "shaba_code"
      ],
      profilePhoto: "",
      errors: "",
      popUpMsg: "",
      submiting: false,
      uploadPercentage: 0,
      deleteText: "",
      deleteButtonText: "",
      cancelButtonText: "",
      ProductId: "",
      searchValueText: "",
      resetTextSearch: false
    };
  },
  methods: {
    init: function() {
      this.isLoaded = true;
      axios.post("/user/profile_info").then(response => {
        this.isLoading = false;
        return (this.currentUser = response.data);
      });
    },
    RegisterBasicProfileInfo: function() {
      this.submiting = true;
      this.errors = "";
      var self = this;
      var data = new FormData();

      for (var i = 0, cnt = this.profileBasicFields.length; i < cnt; i++) {
        if (this.currentUser.profile[this.profileBasicFields[i]] != null) {
          data.append(
            this.profileBasicFields[i],
            this.toLatinNumbers(
              this.currentUser.profile[this.profileBasicFields[i]]
            )
          );
        }
      }

      let profilePhoto = this.$refs.profilePhoto.files[0];

      if (profilePhoto) {
        data.append("profile_photo", profilePhoto);
      }

      axios
        .post("/user/profile_modification", data)
        .then(function(response) {
          if (response.status == 200) {
            self.submiting = false;
            eventBus.$emit("submitSuccess", self.popUpMsg);

            self.popUpMsg = "تغییرات با موفقیت اعمال شد";
            $("#custom-main-modal").modal("show");
          }
          self.submiting = false;
        })
        .catch(function(err) {
          self.errors = "";
          self.errors = err.response.data.errors;
          self.submiting = false;
        });
    },
    toLatinNumbers: function(num) {
      if (num == null) {
        return null;
      }

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function(c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function(c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    toggleHeader() {
      var menuCloseButton = $(".close_menu");
      var menuCloseButtonIcon = $(".close_menu i");
      var profile = $(".profile");
      var headerMenu = $(".header-menu span");
      var headerMenuLink = $(".header-menu a");
      var logo = $(".logo");
      var copyRight = $(".copy-right");
      var rightHeaderDesktop = $(".right-header.desktop-header");
      var littleMainHeader = $(".main-header");
      var main = $("#main");
      var nextMove = "shrink";
      menuCloseButton.click(function() {
        if (nextMove == "expand") {
          $(this).css({
            width: "30%"
          });
          headerMenuLink.css({
            "text-align": "right"
          });
          copyRight.css("display", "block");
          headerMenu.css("display", "inline");

          menuCloseButtonIcon
            .addClass("fa-angle-right", 200)
            .removeClass("fa-angle-left");

          rightHeaderDesktop.removeClass("little_header", 200);
          littleMainHeader.removeClass("little-main-header", 200);
          main.removeClass("little-main", 200);

          nextMove = "shrink";

          profile.fadeIn();
          logo.fadeIn();
        } else {
          $(this).css({
            width: "100%"
          });
          profile.css("display", "none");
          headerMenu.css("display", "none");
          copyRight.css("display", "none");
          logo.css("display", "none");
          headerMenuLink.css({
            "text-align": "center"
          });

          menuCloseButtonIcon
            .addClass("fa-angle-left", 200)
            .removeClass("fa-angle-right", 200);

          rightHeaderDesktop.addClass("little_header", 200);
          littleMainHeader.addClass("little-main-header", 200);
          main.addClass("little-main", 200);

          nextMove = "expand";
        }
      });
    },
    toggleShowHeader() {
      var self = this;
      var showHeaderButtonElement = $(".show-header");
      var closeHeaderButtonMobile = $(".close_menu_mob ");
      var flag = true;
      var rightHeader = $(".right-header.mobile-header");
      var back = $(".background_mob_sec");
      var closeHeaderButtonMobileLinks = $(".mobile-header .header-menu a");
      rightHeader.animate(
        {
          right: "0"
        },
        800
      );
      setTimeout(() => {
        rightHeader.animate(
          {
            right: "-300"
          },
          800,
          undefined,
          function() {
            self.menuClosed = true;
          }
        );
      }, 2000);
      showHeaderButtonElement.on("click", function() {
        rightHeader.animate({ scrollTop: 0 }, "fast");

        if (flag === true) {
          rightHeader.animate(
            {
              right: "0"
            },
            300
          );

          back.fadeIn();

          flag = false;
        } else {
          rightHeader.animate(
            {
              right: "-300px"
            },
            300
          );

          flag = true;
        }
      });
      closeHeaderButtonMobile.on("click", function() {
        if (flag === true) {
          rightHeader.animate(
            {
              right: "0"
            },
            300
          );

          flag = false;
        } else {
          rightHeader.animate(
            {
              right: "-300px"
            },
            300
          );

          back.fadeOut();

          flag = true;
        }
      });
      closeHeaderButtonMobileLinks.on("click", function() {
        if (flag === true) {
          rightHeader.animate(
            {
              right: "0"
            },
            300
          );

          flag = false;
        } else {
          rightHeader.animate(
            {
              right: "-300px"
            },
            300
          );

          back.fadeOut();

          flag = true;
        }
      });
      back.on("click", function() {
        if (flag === true) {
          rightHeader.animate(
            {
              right: "0"
            },
            300
          );

          flag = false;
        } else {
          rightHeader.animate(
            {
              right: "-300px"
            },
            300
          );

          back.fadeOut();

          flag = true;
        }
      });
    },
    deleteProduct: function() {
      var self = this;

      axios
        .post("/delete_product_by_id", {
          product_id: self.productId
        })
        .then(function(response) {
          //show product deleted message
          //code
          self.popUpMsg = "حذف شد.";
          $("#custom-main-modal").modal("show");

          self.registerComponentStatistics(
            "product",
            "product-deleted",
            "product-deleted-successfully"
          );

          setTimeout(function() {
            window.location.reload();
          }, 3000);
        })
        .catch(function(err) {
          self.registerComponentStatistics(
            "product",
            "product-delete-failed",
            "product-delete-failed"
          );
          //show modal
          self.popUpMsg = "خطایی رخ داده است.لطفا دوباره تلاش کنید.";
          $("#custom-main-modal").modal("show");
        });
    },
    registerComponentStatistics: function(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    }
  },
  mounted() {
    var self = this;
    eventBus.$on("firstDashboardSeen", event => {
      self.isfirstDashboardSeen = event;
    });
    this.init();
    this.toggleHeader();
    this.toggleShowHeader();
  },
  created() {
    var self = this;
    self.showSnapShot = localStorage.getItem("showSnapShot");
    localStorage.removeItem("showSnapShot");
    eventBus.$on("submiting", event => {
      this.submiting = event;
    });
    eventBus.$on("submitSuccess", event => {
      this.popUpMsg = event;
    });
    eventBus.$on("uploadPercentage", event => {
      this.uploadPercentage = event;
    });
    eventBus.$on("deleteButtonText", event => {
      this.deleteButtonText = event;
    });

    eventBus.$on("cancelButtonText", event => {
      this.cancelButtonText = event;
    });

    eventBus.$on("productId", event => {
      this.productId = event;
    });

    eventBus.$on("resetTextSearch", event => {
      this.resetTextSearch = event;
    });
  },
  watch: {
    searchValueText: function(value) {
      this.resetTextSearch = false;
      this.$parent.searchText = value;
    },
    resetTextSearch: function(value) {
      if (value == true) {
        this.searchValueText = "";
      }
    }
  },
  metaInfo() {
    return {
      title: "بازارگاه کشاورزی",
      titleTemplate: "باسکول | %s"
    };
  }
};
</script>

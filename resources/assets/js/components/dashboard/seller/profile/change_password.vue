<style scoped>
/*start style main header*/
#main {
  margin-right: 250px;
  margin-top: 65px;
  background: #fff;
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

.image-header-profile img {
  height: 100%;
}

.profile-menu-header {
  float: left;
}

.right-menu-header {
  padding: 16px;
}

.right-menu-header,
.content-header {
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
  background: #00c569;
  color: #fff;
  height: 100%;
  padding: 20px 20px 0;
}

.right-menu-header a,
.profile-menu-header a {
  color: #7f8c9b;
  margin: 5px;
}

.right-menu-header a {
  font-size: 30px;
}

.right-menu-header a:hover,
.profile-menu-header a:hover {
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
  background: #00c569;
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
  background: #00c569;
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
  background: #00c569;
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
  cursor: pointer;
}

.main-profile {
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
  background: #00c569;
  color: #fff;
  padding: 10px 35px;
  border-radius: 3px;
  text-align: center;
  border: none;
  transition: 300ms;
}

.green-button:hover {
  color: #fff;
  background: #00ac5c;
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

.kind_user,
.kind_activity {
  margin: 7px 0;
  border-bottom: 1px solid #eff3f6;
  padding-bottom: 10px;
}

.kind_user > div,
.kind_activity > div {
  float: right;
  overflow: hidden;
  padding: 10px;
  font-size: 15px;
}

.kind_user input,
.kind_activity input {
  cursor: pointer;
  width: 23px;
  height: 23px;
  float: right;
  position: absolute;
  top: 2px;
  right: 65px;
  opacity: 0;
}

.kind_user input:checked + i,
.kind_activity input:checked + i {
  background: #00c569;
  color: #fff;
  border: none;
  padding: 4px;
}

.kind_user i,
.kind_activity i {
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

input[type="text"],
select,
input[type="password"] {
  width: 100%;
  border: 1px solid #e9e9e9;
  padding: 15px 20px;
  margin: 7px auto;
  border-radius: 4px;
  transition: 300ms;
}

textarea {
  height: 120px;
  max-width: 100%;
}

.user-form input[type="button"] {
  width: 100%;
}

.user-form input[type="text"]:focus,
input[type="password"]:focus {
  border: 1px solid #00c569;
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

@media screen and (max-width: 991px) {
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

  .main-header,
  .little-main-header {
    right: 0 !important;
  }

  #main,
  #main.little-main {
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
  .image-content-post,
  .contents-post {
    width: 100%;
    float: none;
    margin: 10px 0;
    padding: 0;
  }

  .col-sm-6 {
    float: none;
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
      <div class="main-profile col-xs-12">
        <div class="user-form col-xs-12">
          <label class="header-label">تغییر کلمه عبور</label>

          <div class="col-sm-12">
            <label for="old-password" class="content-label"
              >کلمه عبور فعلی:</label
            >

            <input
              id="old-password"
              type="password"
              v-model="currentPassword"
              placeholder="کلمه عبور فعلی"
            />
            <span
              class="text-danger"
              v-if="errors.current_password"
              v-text="errors.current_password[0]"
            ></span>
          </div>

          <div class="col-sm-12">
            <label for="new-password" class="content-label"
              >کلمه عبور جدید:</label
            >

            <input
              id="new-password"
              type="password"
              v-model="newPassword"
              placeholder="کلمه عبور جدید"
            />

            <span
              class="text-danger"
              v-if="errors.password"
              v-text="errors.password[0]"
            ></span>
          </div>
          <div class="col-sm-12">
            <label for="repeat-new-password" class="content-label"
              >تکرار کلمه عبور جدید:</label
            >

            <input
              id="repeat-new-password"
              type="password"
              v-model="newPasswordRepeat"
              placeholder="کلمه عبور جدید"
            />

            <span
              class="text-danger"
              v-if="errors.password_repeat"
              v-text="errors.password_repeat[0]"
            ></span>
          </div>

          <div class="col-xs-12">
            <input
              type="button"
              class="green-button"
              name="submit"
              value="ارسال"
              v-on:click="changePassword"
            />
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
// import { eventBus } from "../../../../router/router";

export default {
  props: ["str"],
  data: function () {
    return {
      errors: {
        current_password: [],
        password: [],
        passwordRepeat: [],
      },
      errorFlag: false,
      popUpMsg: "",
      items: [
        {
          message: "تغییر کلمه عبور",
          url: "password",
        },
      ],
      currentPassword: "",
      newPassword: "",
      newPasswordRepeat: "",
    };
  },
  methods: {
    changePassword: function () {
      this.errorFlag = false;
      this.passwordValidator(
        this.currentPassword,
        this.newPassword,
        this.newPasswordRepeat
      );

      if (this.errorFlag === false) {
        //send Request
        var self = this;

        axios
          .post("/change_password", {
            current_password: self.currentPassword,
            new_password: self.newPassword,
          })
          .then(function (response) {
            if (response.data.status === true) {
              self.popUpMsg = "کلمه عبور با موفقیت تغییر یافت";
              eventBus.$emit("submitSuccess", self.popUpMsg);
              $("#custom-main-modal").modal("show");
            } else if (response.data.status === false) {
              self.errors.current_password.push("رمز عبور فعلی درست نیست");
            }
          })
          .catch(function (err) {
            //failed for unknown reason try again later
            alert("خطایی رخ داده است.لطفا دوباره تلاش کنید.");
          });
      } else {
        //
      }
    },
    passwordValidator: function (currentPass, pass, passConf) {
      this.errors.password = [];
      this.errors.password_repeat = [];
      this.errors.current_password = [];

      if (currentPass === "") {
        this.errors.current_password.push("رمز عبور فعلی الزامی است");
        this.errorFlag = true;
      }
      if (pass === "") {
        this.errors.password.push("رمز عبور جدید الزامی است");
        this.errorFlag = true;
      }
      if (pass.length < 8) {
        this.errors.password.push("رمز عبور حداقل ۸ کاراکتر باشد");
        this.errorFlag = true;
      }
      if (passConf === "") {
        this.errors.password_repeat.push("تکرار رمز عبور الزامی است");
        this.errorFlag = true;
      }
      if (passConf !== pass) {
        this.errors.password_repeat.push("رمز عبور مطابقت ندارد");
        this.errorFlag = true;
      }
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
  },
  mounted() {
    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/change-password" });
  },
};
</script>

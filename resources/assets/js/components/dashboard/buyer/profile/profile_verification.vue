<style>
.imageuploadify {
  border-radius: 8px;
}
.imageuploadify #custom-upload-image-icons i.fa-plus-circle {
  color: #140092;
  background: #ffffff;
  border-radius: 50%;
  line-height: 1;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 14px;
  right: -5px;
  font-size: 1.6rem;
  border: 1px solid #ffffff;
}
.imageuploadify #custom-upload-image-icons i.fa-camera {
  color: #140092;
}
.imageuploadify .imageuploadify-images-list span.imageuploadify-message {
  font-size: 1.2rem;
  font-weight: 400;
  padding-top: 11px;
}
.actions-content {
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  display: none;
  right: 0;
  opacity: 1;
  background: rgba(49, 58, 67, 0.3) !important;
  transition: 300ms;
  height: 100%;
}

.article-images:hover .actions-content {
  display: block;
}
.actions-content a {
  background-color: rgb(38, 70, 83, 0.5);
  width: 30px;
  height: 30px;
  border: 1px solid #ffffff;
  float: left;
  margin: 8px;
  padding-top: 5px;
}
.action-button-wrapper {
  width: 80%;
  margin: auto;
}
.orange-button {
  border-radius: 8px;
  margin: 10px 5px 50px;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 6px 27px;
  position: relative;
}
.actions-content .delete {
  float: left;
}
@media screen and (max-width: 768px) {
  .actions-content {
    float: left;
    opacity: 1 !important;
    display: block;
  }

  .upload-error {
    font-size: 1.2rem;
  }
}
</style>
<style scoped>
/*main style*/

.main-content {
  max-width: 850px;
  position: absolute;
  left: calc(50% - 425px);
  top: 65px;
  margin-bottom: 50px;
  height: 100%;
  direction: rtl;
}

.main-content > div.wrapper-section {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  min-height: 400px;
}

.main-content .wrapper-section.success {
  border: none;
}

.main-content > div.wrapper-section.finish-stage {
  border: none;
}

.main-content > div.wrapper-section.empty-section {
  border: none;
  border-radius: 4px;
  min-height: initial;
}
.title-wrapper {
  height: 50px;
}
.main-content .section-title {
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: #ff6600;
}
.main-content .section-title img {
  width: 32px;
  height: 42px;
  position: absolute;
}
.main-content .section-title span {
  margin: 0 36px;
  top: 14px;
  position: relative;
}
.main-content .section-title::after {
  content: unset;
}

.main-content div.section-title p {
  font-size: 15px;
}

.section-background {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  content: "";
  z-index: -1;
}

.wrapper-progressbar.title h2 {
  font-size: 23px;
  font-weight: bold;
  text-align: right;
}
.header-section {
  margin-top: 50px;
}
.header-section > h2 {
  font-weight: 600;
}
/*progressbar styles*/

.wrapper-progressbar {
  position: relative;
  padding: 0;
  overflow: hidden;
}

.progressbar-items {
  display: flex;
  justify-content: space-between;
  direction: rtl;
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.progrees-item {
  text-align: center;
  color: #bebebe;
  position: relative;
  flex: 1;
}

.progrees-item span.wrapper-counter {
  width: 20px;
  height: 20px;
  font-size: 13px;
  background: #979797;
  border-radius: 50px;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 6px;
  padding-top: 4px;
  position: relative;
  z-index: 1;
}

.progrees-item span.line-item {
  height: 5px;
  font-size: 13px;
  background: #979797;
  display: block;
  position: absolute;
  width: 100%;
  top: 8px;
  left: 50%;
  z-index: 0;
}
.progrees-item.active-item span.wrapper-counter {
  background-color: #ffffff;
  color: #00c569;
  padding-top: 3px;
}
.progrees-item.done-item span.wrapper-counter {
  background-color: #00c569;
  color: #ffffff;
  padding-top: 3px;
}
.progrees-item.active-item {
  color: #333;
}

.progrees-item.active-item span,
.progrees-item.active-item span.line-item {
  border: 1px solid #00c569;
  background-color: #00c569;
}

.custom-progressbar.active-item {
  width: 97%;
  height: 1px;
  position: absolute;
  top: 11px;
}

.custom-progressbar .progress-bar {
  background: #00c569;
  float: right;
  width: 0;
}
.active-progress-wrapper {
  max-width: 320px;
  margin: 0 auto;
  position: relative;
}

.main-section-wrapper {
  display: grid;
  margin-top: 26px;
  padding: 0 60px;
}

.success-title,
.success-text {
  color: #21ad93;
  font-size: 18px;
  line-height: 1.618;
  margin-bottom: 16px;
  font-weight: 500;
}

.success-text {
  font-size: 15px;
}

.main-button-wrapper {
  text-align: center;
  margin-top: 25px;
}
.default-btn-with-icon {
  max-width: 541px;
}
.button-content-wrapper .button-title {
  font-size: 1.6rem;
}
.button-content-wrapper .button-text {
  font-size: 1.4rem;
  font-weight: 300;
}
.main-button-wrapper button {
  font-size: 18px;
  border-radius: 12px;
  padding: 13px 30px;
  margin-bottom: 50px;
}

.main-button-wrapper button i {
  position: relative;
  top: 3px;
  margin-right: 8px;
}

.user-verified-icon-wrapper {
  margin-top: 50px;
}

.user-verified-icon {
  position: relative;
  font-size: 95px;
  color: #1da1f2;
}

.user-verified-icon::before {
  content: "\F00C";
  position: absolute;
  left: 22px;
  font-family: "Font Awesome 5 Free";
  color: #fff;
  top: 37px;
  font-size: 52px;
  z-index: 1;
  line-height: 1;
  font-weight: 900;
}

.success-register {
  background: linear-gradient(
    270deg,
    rgba(1, 173, 93, 0.7) 0%,
    rgba(122, 245, 188, 0.7) 100%
  );
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px 15px 10px;
  color: rgb(38, 70, 83);
  text-align: center;
  overflow: hidden;
  position: relative;
  width: 622px;
  margin: auto;
}

.success-register::after,
.success-register::before {
  content: " ";
  position: absolute;
  width: 85px;
  height: 85px;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 50px;
}

.success-register::after {
  left: -36px;
  top: -13px;
}
.success-register::before {
  left: 10px;
  top: -49px;
}

.title-success {
  float: right;
  width: calc(100% - 36px);
}
.icon-wrapper {
  width: 45px;
  height: 40px;
  float: right;
  margin-top: -5px;
  margin-right: 5px;
  margin-left: -38px;
}
.icon-wrapper svg {
  width: 45px;
  height: 40px;
}

.success-register h2 {
  font-size: 1.6rem;
  margin-bottom: 25px;
  font-weight: 500;
  position: relative;
  z-index: 1;
  line-height: 1.6;
  color: #264653;
}

.success-register p {
  font-size: 1.4rem;
  font-weight: 300;
  color: #264653;
}

.actions-wrapper {
  overflow: hidden;
  padding: 30px 0px;
}

.actions-wrapper > div {
  padding: 0px;
}
@media screen and (max-width: 1105px) {
  .main-section-wrapper {
    padding: 0;
  }
  .main-content > div.wrapper-section {
    box-shadow: unset;
  }
  .main-content {
    left: 0;
  }
}
@media screen and (max-width: 991px) {
  .main-section-content {
    margin: auto;
  }
  .header-section {
    margin-top: 0;
  }
  .main-section-wrapper {
    overflow: hidden;
    padding: 0;
  }
  .title-wrapper {
    display: none;
  }
  .main-content .section-title {
    width: 90%;
    margin: auto;
  }
  .main-content {
    left: calc(50% - 425px);
  }
}
@media screen and (max-width: 768px) {
  .main-content {
    left: 0;
  }
}
@media screen and (max-width: 767px) {
  .wrapper-section.success {
    margin-top: -20px;
  }
  .success-register {
    width: 326px;
  }
  .icon-wrapper {
    width: 36px;
    height: 32px;
    float: right;
    margin-top: -5px;
    margin-right: 0;
    margin-left: 10px;
  }
  .success-register h2 {
    margin-bottom: 5px;
  }
  .header-section {
    margin-top: 10px;
  }
  .main-section-wrapper {
    max-width: initial;
    margin: 0px auto;
    padding: 0;
  }

  .main-content .section-title p {
    line-height: 1.618;
  }
  .icon-wrapper svg {
    width: 36px;
    height: 32px;
  }
  .main-content > div.wrapper-section {
    border: none;
    border-radius: 0;
    box-shadow: unset;
  }
  .main-content {
    max-width: initial;
    background: #fff;
    border-radius: 0;
    box-shadow: none;
    direction: rtl;
    transform: translate(0, 0);
    top: 0;
    padding-top: 20px;
    width: 100%;
  }

  .active-progress-wrapper {
    right: -15px;
    max-width: initial;
  }

  .success-register p {
    line-height: 1.618;
  }
  .title-success {
    width: 100%;
  }
  .success-register h2 i {
    display: block;
    margin: 0 auto 20px;
    width: 80px;
    height: 80px;
    font-size: 45px;
    padding-top: 17px;
  }

  .wrapper-progressbar {
    top: 0;
  }
}
</style>


<template>
  <section
    class="main-content col-xs-12"
    v-if="!$parent.currentUser.user_info.is_verified"
  >
    <div class="row title-wrapper hidden-xs hidden-sm">
      <div class="section-title" v-if="currentStep >= 0 && currentStep <= 1">
        <img src="../../../../../img/ic_twotone-tips-and-updates.svg" alt="" />
        <span>
          با احراز هویت، اعتماد خریداران و فروشندگان را به خود جلب کنید.</span
        >
      </div>
      <div v-else>
        <br />
      </div>
    </div>
    <div
      class="row wrapper-section"
      :class="{
        success: currentStep == 2,
      }"
    >
      <div class="main-section">
        <header class="header-section">
          <div
            v-if="currentStep >= 0 && currentStep <= 1"
            class="wrapper-progressbar"
          >
            <div class="progressbar-items">
              <a
                class="progrees-item"
                :class="{
                  'active-item': currentStep == 0,
                  'done-item': currentStep == 1,
                }"
              >
                <span class="wrapper-counter">1</span>
              </a>

              <a
                class="progrees-item"
                :class="{ 'active-item': currentStep >= 1 }"
              >
                <span class="line-item"></span>
                <span class="wrapper-counter">2</span>
              </a>
            </div>
          </div>
        </header>

        <main class="main-section-wrapper">
          <div class="main-section-content">
            <IdCard v-show="currentStep == 0" />
            <UserImage v-show="currentStep == 1" />
            <div v-show="currentStep == 2" class="success-step">
              <div class="success-register">
                <div class="title-success">
                  <div class="icon-wrapper">
                    <svg
                      width="36"
                      height="32"
                      viewBox="0 0 36 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="16" r="16" fill="white" />
                      <circle cx="20" cy="16" r="16" fill="white" />
                      <circle cx="20" cy="16" r="16" fill="white" />
                      <circle cx="20" cy="16" r="16" fill="white" />
                      <circle cx="16" cy="16" r="15.5" stroke="black" />
                      <path
                        d="M9.77771 16.0001L15.111 20.4446L22.2222 11.5557"
                        stroke="black"
                      />
                    </svg>
                  </div>
                  <h2>اطلاعات شما با موفقیت برای کارشناسان باسکول ارسال شد!</h2>
                  <p>پس از تایید کارشناسان حساب شما احراز هویت خواهد شد.</p>
                </div>
              </div>
              <div class="actions-wrapper">
                <div class="col-xs-12">
                  <button
                    @click.prevent="routeToPage('specialProducts')"
                    class="default-btn-with-icon"
                  >
                    <div class="button-main-icon-wrapper">
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 23.27L0.25 16.27L2.005 15.01L9.98917 20.74L17.9842 15.001L19.75 16.27L10 23.27ZM10 19L0.25 12L2.005 10.74L9.98917 16.47L17.9842 10.73L19.75 12L10 19ZM10 14.73L2.01583 8.99998L0.25 7.72998L10 0.72998L19.75 7.72998L17.9733 8.99998L10 14.73Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="button-content-wrapper">
                      <p class="button-title">محصولات پیشنهادی</p>
                      <p class="button-text">مشاهده لیست محصولات فروشندگان</p>
                    </div>
                    <i class="fa fa-angle-left"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div class="section-background"></div>
    </div>
  </section>

  <section class="main-content col-xs-12" v-else>
    <div class="row">
      <section class="wrapper-section user-verified-wrapper text-center">
        <div class="user-verified-icon-wrapper">
          <span class="user-verified-icon">
            <i class="fa fa-certificate"></i>
          </span>
        </div>
        <h3>اطلاعات هویتی شما احراز شده است.</h3>
        <!-- <p class="gray-text margin-10-0">توضیحات اضافه در صورت لزوم</p> -->
      </section>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../../../router/router";
import IdCard from "./verification-components/id-card";
import UserImage from "./verification-components/user-image";
import DocumentImage from "./verification-components/document-image";

export default {
  components: {
    IdCard,
    UserImage,
    DocumentImage,
  },
  data() {
    return {
      currentStep: 0,
      userImage: "",
      idCardImage: "",
      documetImage: "",
    };
  },
  methods: {
    uploadFiles: function () {
      eventBus.$emit("submiting", true);

      let data = new FormData();

      data.append("images_count", 2);

      data.append("image_0", this.idCardImage.file);
      data.append("image_1", this.userImage.file);

      axios
        .post("/verify/upload-photos", data, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
          },
          onUploadProgress: function (progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
          }.bind(this),
        })
        .then((response) => {
          eventBus.$emit("submiting", false);
          eventBus.$emit("uploadPercentage", 0);

          this.currentStep = 2;

          // setTimeout(function () {
          //   window.location.href = "/buyer/profile";
          // }, 3000);
        })
        .catch((e) => {
          eventBus.$emit("submiting", false);
          eventBus.$emit("uploadPercentage", 0);
        });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    routeToPage(routeName) {
      //  analytics
      this.registerComponentStatistics(
        "verification",
        "buyer-last-step",
        "click-on-special-products"
      );

      this.$router.push({ name: routeName });
    },
    registerComponentStatistics: function (
      categoryName,
      actionName,
      labelName
    ) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
  },
  watch: {
    uploadPercentage: function () {
      eventBus.$emit("uploadPercentage", this.uploadPercentage);
    },
    "product.product_name": function (name) {
      this.errors.product_name = "";
    },
    currentStep: function (step) {
      this.scrollToTop();
    },
  },
};
</script>

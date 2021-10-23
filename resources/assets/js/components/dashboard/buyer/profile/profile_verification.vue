
<style scoped>
/*main style*/

.main-content {
  max-width: 685px;
  position: absolute;
  left: calc(50% - 342px);
  top: 65px;
  margin-bottom: 50px;
  height: 100%;
  direction: rtl;
}

.main-content > div.wrapper-section {
  border: 1px solid #dadce0;
  border-radius: 12px;
  min-height: 400px;
}

.main-content > div.wrapper-section.success {
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

.main-content .section-title {
  font-size: 18px;
  margin-bottom: 20px;
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

.header-section > h2 {
  font-weight: 600;
}
/*progressbar styles*/

.wrapper-progressbar {
  position: relative;
  padding: 0;
  top: -12px;
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
  background: #bebebe;
  border-radius: 50px;
  color: #fff;
  display: inline-block;
  margin-bottom: 6px;
  padding-top: 4px;
  position: relative;
  z-index: 1;
}

.progrees-item span.line-item {
  height: 1px;
  font-size: 13px;
  background: #dadce0;
  display: block;
  position: absolute;
  width: 100%;
  top: 11px;
  left: 50%;
  z-index: 0;
}

.progrees-item.active-item {
  color: #333;
}

.progrees-item.active-item span,
.progrees-item.active-item span.line-item {
  background: #00c569;
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
  padding: 0 15px;
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
    rgba(1, 173, 101, 0.5) 0%,
    rgba(122, 245, 188, 0.5) 100%
  );
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px 15px 15px;
  color: rgb(38, 70, 83);
  text-align: center;
  overflow: hidden;
  position: relative;
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
  float: left;
  width: calc(100% - 36px);
}
.icon-wrapper {
  float: right;
  padding-top: 6px;
}

.success-register h2 {
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 500;
  position: relative;
  z-index: 1;
  line-height: 1.6;
}

.success-register p {
  font-size: 12px;
  font-weight: 300;
  color: rgba(38, 70, 83, 0.8);
}

.actions-wrapper {
  overflow: hidden;
  padding: 30px 0px;
}

.actions-wrapper > div {
  padding: 0px;
}

@media screen and (max-width: 992px) {
  .main-section-wrapper {
    overflow: hidden;
  }
}

@media screen and (max-width: 767px) {
  .icon-wrapper {
    padding-top: 12px;
  }

  .wrapper-section.success {
    margin-top: -20px;
  }

  .title-wrapper {
    padding-left: 5px;
    padding-right: 5px;
  }

  .main-section-wrapper {
    max-width: initial;
    margin: 0px auto;
  }

  .main-content .section-title p {
    line-height: 1.618;
  }

  .main-content > div.wrapper-section {
    border: none;
    border-radius: 0;
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
    left: 0;
  }

  .active-progress-wrapper {
    right: -15px;
    max-width: initial;
  }

  .success-register p {
    line-height: 1.618;
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
      <div class="section-title" v-if="currentStep >= 0 && currentStep <= 2">
        احراز هویت
      </div>
      <div v-else>
        <br />
      </div>
    </div>
    <div
      class="row wrapper-section"
      :class="{
        success: currentStep == 3,
      }"
    >
      <div class="main-section">
        <header class="header-section">
          <div
            v-if="currentStep >= 0 && currentStep <= 2"
            class="wrapper-progressbar"
          >
            <div class="progressbar-items">
              <a class="progrees-item active-item">
                <span class="wrapper-counter">1</span>
                <p>کارت ملی</p>
              </a>

              <a
                class="progrees-item"
                :class="{ 'active-item': currentStep >= 1 }"
              >
                <span class="line-item"></span>
                <span class="wrapper-counter">2</span>
                <p>تصویر شما</p>
              </a>

              <a
                class="progrees-item"
                :class="{ 'active-item': currentStep >= 2 }"
              >
                <span class="line-item"></span>
                <span class="wrapper-counter">3</span>
                <p>مدارک مرتبط</p>
              </a>
            </div>
          </div>
        </header>

        <main class="main-section-wrapper">
          <IdCard v-show="currentStep == 0" />
          <UserImage v-show="currentStep == 1" />
          <DocumentImage v-show="currentStep == 2" />
          <div v-show="currentStep == 3" class="success-step">
            <div class="success-register">
              <div class="title-success">
                <h2>اطلاعات شما با موفقیت برای کارشناسان باسکول ارسال شد!</h2>
                <p>پس از تایید کارشناسان حساب شما احراز هویت خواهد شد.</p>
              </div>
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
                    <p class="button-text">مشاهده لیست محصولات فروش</p>
                  </div>
                  <i class="fa fa-angle-left"></i>
                </button>
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
      currentStep: 3,
      userImage: "",
      idCardImage: "",
      documetImage: "",
    };
  },
  methods: {
    uploadFiles: function () {
      eventBus.$emit("submiting", true);

      let data = new FormData();

      data.append("images_count", 3);

      data.append("image_0", this.idCardImage.file);
      data.append("image_1", this.userImage.file);
      data.append("image_2", this.documetImage.file);

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

          this.currentStep = 3;

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
      // ready for analytics
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

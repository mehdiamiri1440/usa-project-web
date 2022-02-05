
<style >
#verification-user-image .imageuploadify {
  width: 167px;
  height: 223px;
  border: 2px dashed #699cff;
  color: #140092;
  background-color: #f0f3f5;
}
#verification-user-image .imageuploadify .imageuploadify-images-list {
  padding: 84px 0;
}
#verification-user-image .image-upload-wrapper {
  padding: 0;
}
#verification-user-image .article-images .image {
  border-radius: 12px;
  width: 167px;
  height: 223px;
  background: #f7f7f7;
}
#verification-user-image .article-images .image img {
  width: 167px;
  height: 223px;
}
#verification-user-image .upload,
#verification-user-image .article-images {
  padding: 0;
}
#verification-user-image .article-images {
  width: 167px;
}
#verification-user-image .wrapper-articles {
  margin-top: 6px;
  padding-right: 25px;
}
@media (max-width: 1024px) {
  #verification-user-image .wrapper-articles {
    margin-top: 0;
  }
}
@media (max-width: 991px) {
  #verification-user-image .wrapper-articles {
    padding-right: 0;
  }
}
@media (max-width: 768px) {
  .wrapper-articles {
    display: grid;
  }
  #verification-user-image .wrapper-articles {
    justify-content: center;
  }
  #verification-user-image .upload {
    height: 93px;
    width: 150px;
  }
  #verification-user-image .imageuploadify {
    width: 150px;
    height: 93px;
  }
  #verification-user-image .imageuploadify .imageuploadify-images-list {
    padding: 16px 0;
  }
}
</style>
<style scoped>
.image-file-wrapper .image-scale {
  transform: scale(1.5, 1.5);
  position: fixed;
  z-index: 1023;
  top: calc(50% - 150px);
}
#verification-user-image {
  overflow: hidden;
}
.ul-description-section {
  width: 75%;
  margin: auto;
}
.ul-description-section li {
  font-size: 1.6rem;
  line-height: 20px;
  margin: 10px 0;
  color: #000000;
}
.title {
  padding: 13px 0;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
}

.small-description {
  font-size: 12px;
  color: #bdc4cc;
}
.image-file-wrapper {
  display: grid;
  align-items: center;
  justify-items: center;
  height: 237px;
  border: 1px solid #00c569;
  position: relative;
}

.wrapper-section .sample-card .sample-card-img {
  width: 190px;
  margin: auto;
}
.wrapper-section .uploader-div {
  padding-right: 50px;
  float: right;
}
.image-file-wrapper::before {
  content: "";
  width: 220px;
  height: 78px;
  position: absolute;
  z-index: 0;
  background-color: #ffffff;
}
.image-file-wrapper::after {
  content: "";
  width: 135px;
  height: 255px;
  position: absolute;
  z-index: 0;
  background-color: #ffffff;
}
.image-file-wrapper img {
  border: 1px solid rgba(176, 190, 197, 0.1);
  border-radius: 4px;
  max-width: 167px;
  max-height: 223px;
  position: relative;
  z-index: 2;
}
.id-card-content {
  padding-right: 30px;
}
.main-title-wrapper {
  width: 350px;
  padding-top: 15px;
  padding-bottom: 10px;
  font-size: 15px;
  line-height: 1.618;
  color: rgb(0, 0, 0, 0.6);
  text-align: center;
}
.main-title-wrapper.upload-title {
  widows: 100%;
  text-align: right;
}

.orange-button {
  padding: 6px 27px;
}

.orange-button.next i {
  position: relative;
  top: 3px;
  margin-right: 14px;
}
.orange-button.back {
  padding: 6px 27px;
}
.orange-button.back:hover {
  background: #f7f7f7;
}

.action-button-wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}
.disabled {
  color: #fff;
  background: #ccc;
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

.title-section {
  width: 66%;
  margin: 25px auto 15px;
  font-size: 1.6rem;
  color: #140092;
  line-height: 1.618;
  padding: 0 15px;
  text-align: center;
}

.button-icon-wrapper {
  display: inline-block;
  position: relative;
}

.spinner-border {
  position: absolute;
  left: 2px;
  top: 5px;
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;
  border-width: 0.25rem;
}

.upload-error {
  height: 25px;
  margin: 5px 0;
  line-height: 1.618;
  font-size: 1.2rem;
}

.show-img-sample-content {
  width: 100%;
  display: grid;
  position: fixed;
  height: 100%;
  bottom: 0;
  left: 0;
  direction: rtl;
  z-index: 1020;
  text-align: center;
}
@media screen and (max-width: 991px) {
  .image-file-wrapper,
  #verification-user-image {
    max-width: 167px;
    margin: 0 auto;
  }
  .image-file-wrapper {
    max-width: 190px;
    height: 237px;
  }
  .wrapper-section .sample-card {
    padding-right: 50px;
  }
  .id-card-content {
    padding-right: 0;
  }
  .upload-error {
    text-align: center;
    padding-right: 0;
    margin: 10px 0 5px;
  }
  .action-button-wrapper {
    margin-bottom: 80px;
  }
  .main-title-wrapper {
    width: auto;
  }
  .orange-button {
    padding: 5px 0;
  }
  .orange-button.next {
    width: 93px;
  }
  .orange-button.next i {
    position: relative;
    top: 3px;
    margin-right: 0;
  }
  .orange-button.back {
    padding: 5px 0;
    width: 93px;
  }
  .orange-button.back i {
    position: relative;
    top: 3px;
  }
  .uploader-div .main-title-wrapper {
    padding-top: 30px;
  }
}

@media screen and (max-width: 768px) {
  .main-title-wrapper {
    padding-top: 25px;
  }
  .ul-description-section {
    width: 90%;
  }
  .ul-description-section li {
    font-size: 1.6rem;
  }
  .title-section {
    width: 90%;
    font-size: 1.4rem;
  }
  .verification-user-image {
    width: 90%;
    margin: auto;
    display: grid;
  }
  .wrapper-section .uploader-div {
    padding-right: 0;
    width: 90%;
    margin: auto;
    float: none;
  }
  .wrapper-section > div {
    padding: 0;
  }

  .wrapper-section .sample-card {
    padding-left: 0;
    padding-right: 0;
  }

  .title-section,
  .action-button-wrapper {
    padding: 0 5px;
  }
}
@media (max-width: 767px) {
  .main-title-wrapper {
    text-align: right;
  }
}
@media (max-width: 500px) {
  .image-file-wrapper {
    text-align: center;
  }

  .main-title-wrapper {
    padding-top: 10px;
  }
  .title-section {
    margin-bottom: 10px;
  }
  .wrapper-section .main-title-wrapper {
    padding-right: 18px;
  }
}
@media screen and (max-width: 360px) {
  .title-section {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .action-button-wrapper {
    width: 90%;
  }
}
</style>

<template>
  <div>
    <div>
      <ul class="ul-description-section">
        <li>۱-کارت ملی خود را روی کاغذ سفید(A۴) بچسبانید.</li>
        <li>
          ۲-روی کاغذ متن زیر را بنوسید و امضا کنید و سپس با آن طبق نمونه زیر،
          عکس بگیرید.
        </li>
      </ul>
    </div>
    <div class="title-section">
      "اینجانب.........کارت ملی خود را جهت احراز هویت در بازار باسکول ارسال می
      نمایم."
    </div>
    <div class="row id-card-content">
      <section class="wrapper-section verification-user-image">
        <div class="col-xs-12 col-md-6 sample-card pull-right">
          <div class="main-title-wrapper sample-img-tilte">
            نمونه تصویر گواهی احراز هویت
          </div>
          <div class="sample-card-img">
            <div
              class="image-file-wrapper verification-photo"
              @click="showSampleImage()"
            >
              <div class="overlay-bg-modal" @click="closeShowImage()">
                <button class="image-close">
                  <i class="fas fa-times-circle"></i>
                </button>
                <div class="show-sample-image-content"></div>
              </div>
              <img
                id="sample_image"
                src="../../../../img/user-verification.jpg"
                class="placeholder-content"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="wrapper-section">
        <div class="col-xs-12 col-md-6 uploader-div">
          <div class="main-title-wrapper upload-title">
            بارگذاری تصویر گواهی احراز هویت
            <span class="red-text">*</span>
          </div>

          <UploadFile
            id="verification-user-image"
            uploadName="userImageFile"
            uploadAccept="image/*"
            :uploadMinSize="1024"
            :uploadSize="1024 * 1024 * 10"
            :uploadMultiple="true"
            :uploadDrop="true"
            :uploadDropDirectory="true"
            :uploadAddIndex="false"
            :uploadThread="2"
            :uploadOCompress="1024 * 1024"
            :uploadUploadAuto="false"
            imageWrapperSize="col-xs-12"
            imageAccessUploadCount="1"
            :maximum="1"
          />
          <p
            class="upload-error red-text col-xs-12"
            v-text="errors.userImageFile"
          ></p>
        </div>
      </section>

      <div class="col-xs-12 text-left">
        <div class="action-button-wrapper">
          <button
            class="orange-button next"
            :class="{
              disabled:
                userImageFile.length == 0 ||
                errors.userImageFile ||
                isCompressor,
            }"
            @click.prevent="nextStep"
          >
            <span> ثبت نهایی </span>
            <div class="button-icon-wrapper">
              <!-- v-if="isCompressor" -->
              <i class="fa fa-check" :class="{ empty: isCompressor }"></i>
              <div class="spinner-border" :class="{ empty: !isCompressor }">
                <span class="sr-only"></span>
              </div>
            </div>
          </button>

          <button class="orange-button back" @click.prevent="backStep()">
            <i class="fa fa-arrow-right"></i>
            <span> مرحله قبل </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadFile from "../upload-image";
import imageuploadify from "../../../imageuploadify.min";
import { imagePreloader } from "vue-image-preloader";

export default {
  components: {
    UploadFile,
    imagePreloader,
  },
  data: function () {
    return {
      userImageFile: [],
      isCompressor: false,
      errors: {
        userImageFile: "",
      },
    };
  },
  methods: {
    isDeviceMobile: function () {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      } else {
        return false;
      }
    },
    nextStep() {
      this.checkImageErrors();
      if (!this.isCompressor && !this.errors.userImageFile) {
        this.$parent.uploadFiles();
      }
    },
    backStep() {
      this.$parent.currentStep--;
    },
    imageValidator(files) {
      var errorsStatus = false;

      if (files.length) {
        for (var i = 0; i <= files.length; i++) {
          if (files[i]) {
            if (
              !files[i].type ||
              files[i].type == "" ||
              files[i].type == "image/gif" ||
              files[i].type == "image/svg+xml" ||
              files[i].type == "application/postscript" ||
              files[i].type == "text/xml" ||
              files[i].type == "application/x-gzip"
            ) {
              errorsStatus = true;
              this.errors.userImageFile = "تصویر باید فرمت معتبری باشند.";
            }

            if (files[i].size > 5242880) {
              errorsStatus = true;
              this.errors.userImageFile =
                "حجم تصویر بالا است، باید کمتر از 5 مگابایت باشد.";
            } else if (files[i].file.size < 20480) {
              errorsStatus = true;
              this.errors.userImageFile =
                "حجم تصویر پایین است، باید بیشتر از 20 کیلوبایت باشد.";
            }
          }
        }
        if (!errorsStatus) {
          this.errors.userImageFile = "";
          this.$parent.userImage = this.userImageFile[0];
        }
      }
    },
    checkImageErrors() {
      let imagesCount = this.userImageFile.length;
      if (imagesCount == 0) {
        this.errors.userImageFile =
          "لطفا تصویر گواهی احراز هویت را بارگذاری کنید.";
      } else {
        this.imageValidator(this.userImageFile);
      }
    },
    showSampleImage() {
      if (this.isDeviceMobile()) {
        if ($("body").children().last() != $(".overlay-bg-modal")) {
          $("body").append($(".overlay-bg-modal"));
          $(".overlay-bg-modal").addClass("active");
          $(".overlay-bg-modal .show-sample-image-content").append(
            $("#sample_image")
          );
        } else {
          $("body").children().last().addClass("active");
        }

        this.handleBackButtonForShowImage();
      }
    },
    handleBackButtonForShowImage() {
      let self = this;
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $(".image-file-wrapper.verification-photo").html($("#sample_image"));

        $("body").children().last().removeClass("active");
        $(".show-sample-image-content img").remove();
      });
    },
    closeShowImage() {
      $(".image-file-wrapper.verification-photo").html($("#sample_image"));

      $("body").children().last().removeClass("active");
      $(".show-sample-image-content img").remove();
    },
  },
  mounted() {
    $('#verification-user-image input[type="file"]').imageuploadify();
    this.$nextTick(() => {
      let iconWrapper = $(
        "#verification-user-image #custom-upload-image-icons"
      );
      let textWrapper = $("#verification-user-image .imageuploadify-message");

      let cameraIcon = "<i class='fas fa-camera'></i>";
      let plusIcon = "<i class='fas fa-plus-circle'></i>";

      iconWrapper.empty();
      iconWrapper.append(cameraIcon);
      iconWrapper.append(plusIcon);
      textWrapper.html("تصویر گواهی احراز هویت");
    });
  },
  watch: {
    userImageFile: function (files) {
      if (!this.isCompressor) {
        this.imageValidator(files);
      }
      // this.errors.userImageFile = "";
    },
  },
};
</script>

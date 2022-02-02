
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
    padding: 20px 0;
  }
}
@media (max-width: 500px) {
}
</style>
<style scoped>
#verification-user-image {
  overflow: hidden;
}
.ul-description-section {
  width: 75%;
  margin: auto;
}
.ul-description-section li {
  font-size: 1.8rem;
  line-height: 20px;
  margin: 10px 0;
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
}
.wrapper-section .sample-card {
  padding-left: 80px;
}
.wrapper-section .sample-card .sample-card-img {
  padding: 0px 30px 0 35px;
}
.wrapper-section .uploader-div {
  padding-right: 50px;
}
.image-file-wrapper::before {
  content: "";
  width: 200px;
  height: 78px;
  position: absolute;
  z-index: 0;
  background-color: #ffffff;
}
.image-file-wrapper::after {
  content: "";
  width: 135px;
  height: 245px;
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

.main-title-wrapper {
  padding-top: 15px;
  padding-bottom: 10px;
  font-size: 15px;
  line-height: 1.618;
}
.upload-error {
  line-height: 1.618;
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
  width: 70%;
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
  margin: 15px 0;
  padding: 0;
}

@media screen and (max-width: 992px) {
  .image-file-wrapper,
  #verification-user-image {
    max-width: 300px;
    margin: 0 auto;
  }

  .upload-error {
    text-align: center;
  }
  .action-button-wrapper {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 768px) {
  .image-file-wrapper {
    max-width: 190px;
    height: 237px;
  }
  .main-title-wrapper {
    padding-top: 25px;
  }
  .ul-description-section {
    width: 100%;
  }
  .ul-description-section li {
    font-size: 1.4rem;
    line-height: 30px;
  }
  .title-section {
    width: 100%;
    font-size: 1.4rem;
  }

  .wrapper-section .uploader-div {
    padding-right: 0;
  }
  .wrapper-section > div {
    padding: 0;
  }

  .wrapper-section .sample-card {
    padding-left: 0;
  }
  .orange-button.next {
    max-width: 93px;
  }
  .title-section,
  .action-button-wrapper {
    padding: 0 5px;
  }
  .orange-button {
    padding:6px 7px;
  }
  .orange-button.next i {
    position: relative;
    top: 3px;
    margin-right: 0;
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
}
@media screen and (max-width: 360px) {
  .title-section {
    font-size: 1.5rem;
    font-weight: 500;
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
    <section class="wrapper-section verification-user-image">
      <div class="col-xs-12 col-md-6 sample-card pull-right">
        <div class="main-title-wrapper">نمونه تصویر گواهی احراز هویت</div>
        <div class="sample-card-img">
          <div class="image-file-wrapper">
            <imagePreloader
              :src="'../../../../../../img/user-verification.svg'"
            />
            <a href="../../../../../../img/user-verification.svg">
              <img
                src="../../../../../../img/user-verification.svg"
                class="placeholder-content"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="wrapper-section">
      <div class="col-xs-12 col-md-6 uploader-div pull-right">
        <div class="main-title-wrapper">
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

    <div class="col-xs-12 text-left action-button-wrapper">
      <button
        class="orange-button next"
        :class="{
          disabled:
            userImageFile.length == 0 || errors.userImageFile || isCompressor,
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
</template>

<script>
import UploadFile from "../../../upload-image";
import imageuploadify from "../../../../../imageuploadify.min";
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
          "لطفا تصویر خود همراه با کارت ملی را بارگذاری کنید";
      } else {
        this.imageValidator(this.userImageFile);
      }
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

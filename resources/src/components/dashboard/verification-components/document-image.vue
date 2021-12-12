
<style >
#verification-document .imageuploadify .imageuploadify-images-list {
  padding: 100px 0;
}
#verification-document .image-upload-wrapper {
  padding: 0;
}
#verification-document .article-images .image {
  border-radius: 12px;
  height: 275px;
  background: #f7f7f7;
}
#verification-document .article-images .image img {
  min-height: initial;
}
#verification-document .upload,
#verification-document .article-images {
  padding: 0;
}
#verification-document .imageuploadify #custom-upload-image-icons {
  margin: 0 48%;
}

@media screen and (max-width: 768px) {
  #verification-document .imageuploadify .imageuploadify-images-list {
    padding: 50px 0;
  }
  #verification-document .article-images .image {
    border-radius: 12px;
    height: 151px;
    background: #f7f7f7;
  }
}
</style>
<style scoped>
#verification-document {
  overflow: hidden;
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

.image-file-wrapper img {
  border-radius: 12px;
  border: 1px solid #bdc4cc;
  min-height: 272px;
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

.green-button {
  border-radius: 12px;
  margin: 44px 5px 50px;
  font-size: 21px;
  font-weight: 500;
  padding: 13px 50px;
  position: relative;
}

.green-button.next i {
  position: relative;
  top: 3px;
  margin-right: 14px;
}
.green-button.back {
  background: #fff;
  border: 1px solid #bdc4cc;
  color: #777777;
  padding: 13px 30px;
}
.green-button.back:hover {
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
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 18px;
  color: #313a43;
  line-height: 1.618;
  padding: 0 15px;
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
  .upload-error {
    text-align: center;
  }
  .action-button-wrapper {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 768px) {
  .main-title-wrapper {
    padding-top: 25px;
  }
  .green-button {
    border-radius: 12px;
    margin: 44px 0 50px;
    font-size: 18px;
    font-weight: 500;
    padding: 13px 27px;
  }

  .green-button.next i {
    position: relative;
    top: 3px;
    margin-right: 10px;
  }
  .wrapper-section > div {
    padding: 0;
  }

  .green-button.next {
    min-width: 163px;
  }

  .green-button.back {
    padding: 13px 20px;
  }

  .title-section,
  .action-button-wrapper {
    padding: 0 5px;
  }
  .image-file-wrapper img {
    min-height: 151px;
  }
  .image-file-wrapper,
  #verification-document {
    max-width: 360px;
    margin: 0 auto;
  }
}
</style>

<template>
  <div>
    <div class="title-section">
      تصویر
      <span class="red-text"> یکی </span>
      از این اسناد (اجاره نامه یا جواز کسب یا سند مالکیت) که به نام فرد دارنده
      کارت ملی است.
    </div>
    <section class="wrapper-section verification-document">
      <div class="col-xs-12 pull-right">
        <div class="main-title-wrapper">نمونه تصویر یکی از این اسناد</div>
        <div class="image-file-wrapper">
          <img
            src="../../../../../../img/profile-verification/madarek.jpg"
            class="placeholder-content"
          />
        </div>
      </div>
    </section>
    <section class="wrapper-section">
      <div class="col-xs-12 pull-right">
        <div class="main-title-wrapper">
          بارگذاری تصویر یکی از اسناد که به نام فرد دارنده کارت ملی است
          <span class="red-text">*</span>
        </div>

        <UploadFile
          id="verification-document"
          uploadName="documentImageFile"
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
          v-text="errors.documentImageFile"
        ></p>
      </div>
    </section>

    <div class="col-xs-12 text-left action-button-wrapper">
      <button
        class="green-button next"
        :class="{
          disabled:
            documentImageFile.length == 0 ||
            errors.documentImageFile ||
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

      <button class="green-button back" @click.prevent="backStep()">
        <i class="fa fa-arrow-right"></i>
        <span> مرحله قبل </span>
      </button>
    </div>
  </div>
</template>

<script>
import UploadFile from "../../../upload-image";
import imageuploadify from "../../../../../scripts/imageuploadify.min";

export default {
  components: {
    UploadFile,
  },
  data: function () {
    return {
      documentImageFile: [],
      isCompressor: false,
      errors: {
        documentImageFile: "",
      },
    };
  },
  methods: {
    nextStep() {
      this.checkImageErrors();
      if (!this.isCompressor && !this.errors.documentImageFile) {
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
              this.errors.documentImageFile = "تصویر باید فرمت معتبری باشند.";
            }

            if (files[i].size > 5242880) {
              errorsStatus = true;
              this.errors.documentImageFile =
                "حجم تصویر بالا است، باید کمتر از 5 مگابایت باشد.";
            } else if (files[i].file.size < 20480) {
              errorsStatus = true;
              this.errors.documentImageFile =
                "حجم تصویر پایین است، باید بیشتر از 20 کیلوبایت باشد.";
            }
          }
        }
        if (!errorsStatus) {
          this.errors.documentImageFile = "";
          this.$parent.documetImage = this.documentImageFile[0];
        }
      }
    },
    checkImageErrors() {
      let imagesCount = this.documentImageFile.length;
      if (imagesCount == 0) {
        this.errors.documentImageFile =
          "لطفا تصویر یکی از اسناد که به نام فرد دارنده کارت ملی است را بارگذاری کنید";
      } else {
        this.imageValidator(this.documentImageFile);
      }
    },
  },
  mounted() {
    $('#verification-document input[type="file"]').imageuploadify();
  },
  watch: {
    documentImageFile: function (files) {
      if (!this.isCompressor) {
        this.imageValidator(files);
      }
      // this.errors.documentImageFile = "";
    },
  },
};
</script>

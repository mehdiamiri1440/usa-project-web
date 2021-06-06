
<style >
#verification-id-card .imageuploadify .imageuploadify-images-list {
  padding: 65px 0 66px;
}
#verification-id-card .image-upload-wrapper {
  padding: 0;
}
#verification-id-card .article-images .image {
  border-radius: 12px;
  height: 188px;
}

@media screen and (max-width: 992px) {
  #verification-id-card .upload {
    padding: 0;
  }
}
</style>
<style scoped>
#verification-id-card {
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
  min-height: 192px;
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
  display: inline;
}

.button-icon-wrapper {
  display: inline;
}

.spinner-border {
  position: absolute;
  left: 50px;
  top: 19px;
}

.upload-error {
  height: 25px;
  margin: 15px 0;
  padding: 0;
}

@media screen and (max-width: 992px) {
  .image-file-wrapper,
  #verification-id-card {
    max-width: 300px;
    margin: 0 auto;
  }

  .upload-error {
    text-align: center;
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
  .spinner-border {
    position: absolute;
    left: 27px;
    top: 15px;
  }

  .green-button.next {
    min-width: 163px;
  }
  .green-button.back {
    padding: 13px 20px;
  }

  .green-button.next i {
    position: relative;
    top: 3px;
    margin-right: 10px;
  }
  .wrapper-section > div {
    padding: 0;
  }
  .title-section,
  .action-button-wrapper {
    padding: 0 5px;
  }
}
</style>

<template>
  <div>
    <div class="title-section">کارت ملی خود را طبق نمونه بار گذاری کنید.</div>
    <section class="wrapper-section verification-id-card">
      <div class="col-xs-12 col-md-6 pull-right">
        <div class="main-title-wrapper">نمونه تصویر از کارت ملی</div>
        <div class="image-file-wrapper">
          <img
            src="../../../../../../img/user-id-card.jpg"
            class="placeholder-content"
          />
        </div>
      </div>
    </section>
    <section class="wrapper-section">
      <div class="col-xs-12 col-md-6 pull-right">
        <div class="main-title-wrapper">
          بارگذاری تصویر کارت ملی
          <span class="red-text">*</span>
        </div>

        <UploadFile
          id="verification-id-card"
          uploadName="idCardFile"
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
          v-text="errors.idCardFile"
        ></p>
      </div>
    </section>

    <div class="col-xs-12 text-left action-button-wrapper">
      <button
        class="green-button next"
        :class="{
          disabled: idCardFile.length == 0 || errors.idCardFile || isCompressor,
        }"
        @click.prevent="nextStep"
      >
        <span> مرحله بعد </span>
        <div class="button-icon-wrapper">
          <!-- v-if="isCompressor" -->
          <i class="fa fa-arrow-left" :class="{ empty: isCompressor }"></i>
          <div class="spinner-border" :class="{ empty: !isCompressor }">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import UploadFile from "../../../upload-image";
import imageuploadify from "../../../../../imageuploadify.min";
export default {
  components: {
    UploadFile,
  },
  data: function () {
    return {
      idCardFile: [],
      isCompressor: false,
      errors: {
        idCardFile: "",
      },
    };
  },
  methods: {
    nextStep() {
      this.checkImageErrors();
      if (!this.isCompressor && !this.errors.idCardFile) {
        this.$parent.currentStep = 1;
      }
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
              this.errors.idCardFile = "تصویر باید فرمت معتبری باشند.";
            }

            if (files[i].size > 5242880) {
              errorsStatus = true;
              this.errors.idCardFile =
                "حجم تصویر بالا است، باید کمتر از 5 مگابایت باشد.";
            } else if (files[i].file.size < 20480) {
              errorsStatus = true;
              this.errors.idCardFile =
                "حجم تصویر پایین است، باید بیشتر از 20 کیلوبایت باشد.";
            }
          }
        }
        if (!errorsStatus) {
          this.errors.idCardFile = "";
          this.$parent.idCardImage = this.idCardFile[0];
        }
      }
    },
    checkImageErrors() {
      let imagesCount = this.idCardFile.length;
      if (imagesCount == 0) {
        this.errors.idCardFile = "لطفا تصویر کارت ملی خود را بارگذاری کنید";
      } else {
        this.imageValidator(this.idCardFile);
      }
    },
  },
  mounted() {
    $('#verification-id-card input[type="file"]').imageuploadify();
  },
  watch: {
    idCardFile: function (files) {
      if (!this.isCompressor) {
        this.imageValidator(files);
      }
      // this.errors.idCardFile = "";
    },
  },
};
</script>

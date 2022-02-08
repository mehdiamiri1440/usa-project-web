
<style >
#verification-id-card .imageuploadify {
  height: 130px;
  border: 2px dashed #699cff;
  color: #140092;
  background-color: #f0f3f5;
}
#verification-id-card .imageuploadify .imageuploadify-images-list {
  padding: 35px 0;
}
#verification-id-card.image-upload-wrapper {
  padding: 0;
  width: 100%;
  margin: auto;
}
#verification-id-card .article-images .image {
  border-radius: 12px;
  width: 214px;
  height: 130px;
}
@media screen and (max-width: 991px) {
  #verification-id-card .upload {
    padding: 0;
  }
  
  
}
@media (max-width: 768px) {
  .wrapper-articles {
    display: grid;
  }
  #verification-id-card .wrapper-articles {
    justify-content: center;
  }
  #verification-id-card .upload {
    height: 93px;
    width: 150px;
  }
  #verification-id-card .imageuploadify {
    height: 93px;
  }
  #verification-id-card .imageuploadify .imageuploadify-images-list {
    padding: 16px 0;
  }
}
</style>
<style scoped>
.title {
  padding: 13px 0;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
}
.wrapper-section {
  padding: 0;
  float: right;
}
.wrapper-section .sample-card .sample-card-img {
  padding: 0px 30px 0 35px;
}
.small-description {
  font-size: 12px;
  color: #bdc4cc;
}
.image-file-wrapper {
  display: grid;
  align-items: center;
  justify-items: center;
  height: 156px;
  width: 245px;
  border: 1px solid #00c569;
}
.image-file-wrapper::before {
  content: "";
  width: 280px;
  height: 78px;
  position: absolute;
  z-index: 0;
  background-color: #ffffff;
}
.image-file-wrapper::after {
  content: "";
  width: 135px;
  height: 174px;
  position: absolute;
  z-index: 0;
  background-color: #ffffff;
}
.image-file-wrapper img {
  border-radius: 12px;
  border: 1px solid #bdc4cc;
  max-width: 214px;
  height: 136px;
  position: relative;
  z-index: 2;
}

.main-title-wrapper {
  width: 300px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 16px;
  color: rgb(0, 0, 0, 0.6);
}
.id-card-content {
  padding-right: 30px;
}
.uploader-content {
  display: grid;
  height: 162px;
  width: 214px;
  margin-right: 40px;
}
.-button.next i {
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
  font-size: 1.8rem;
  color: #000000;
  line-height: 1.618;
  padding: 0 15px;
  text-align: center;
}

.button-icon-wrapper {
  display: inline-block;
  position: relative;
  top: 2px;
}

.spinner-border {
  position: absolute;
  left: -3px;
  top: 3px;
  width: 1.1rem;
  height: 1.1rem;
  color: #fff;
  border-width: 0.25rem;
}

.upload-error {
  height: 25px;
  margin: 5px 0;
  line-height: 1.618;
  font-size: 1.2rem;
  padding-right: 40px;
}

@media screen and (max-width: 991px) {
  .image-file-wrapper,
  #verification-id-card {
    max-width: 300px;
    margin: 0 auto;
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
  .uploader-content {
    margin: auto;
  }
  .uploader-div .main-title-wrapper {
    padding-top: 30px;
  }
}

@media screen and (max-width: 768px) {
  .image-file-wrapper {
    text-align: center;
    width: 245px;
  }
  .image-file-wrapper img {
    width: 214px;
  }
  .main-title-wrapper {
    padding-top: 15px;
    font-size: 1.4rem;
  }
  
  .orange-button {
    font-size: 1.4rem;
    padding: 6px 10px;
  }

  .orange-button.back {
    padding: 13px 20px;
  }

  .orange-button.next i {
    position: relative;
    top: 1px;
    margin-right: 2px;
  }
  .wrapper-section > div {
    padding: 0;
  }
  .title-section {
    font-size: 1.8rem;
  }
  .title-section,
  .action-button-wrapper {
    padding: 0 5px;
  }
  .uploader-content {
    height: auto;
    width: 224px;
    margin: auto;
  }
  .wrapper-section .sample-card {
    width: 80%;
    margin: auto;
    padding: 0;
  }
  .wrapper-section .uploader-div {
    padding: 0;
    width: 80%;
    margin: auto;
  }
}
@media screen and (max-width: 500px) {
  .image-file-wrapper {
    text-align: center;
  }
  .image-file-wrapper img {
    width: 245px;
    min-height: 120px;
  }
  .title-section {
    margin-bottom: 10px;
  }
  .main-title-wrapper {
    text-align: right;
  }
}
@media screen and (max-width: 360px) {
  .title-section {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .wrapper-section .sample-card .sample-card-img {
    padding: 0;
    margin: auto;
  }
}
</style>

<template>
  <div>
    <div class="title-section">
      تصویر کارت ملی خود را طبق نمونه بارگذاری کنید.
    </div>
    <div class="row id-card-content">
      <section class="wrapper-section col-xs-12 col-md-6 verification-id-card">
        <div class="col-md-12 sample-card">
          <div class="main-title-wrapper">نمونه تصویر کارت ملی</div>
          <div class="sample-card-img">
            <div class="image-file-wrapper">
              <img
                src="../../../../img/user-id-card.jpg"
                class="placeholder-content"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="wrapper-section col-xs-12 col-md-6">
        <div class="col-md-12 uploader-div">
          <div class="main-title-wrapper">
            بارگذاری تصویر کارت ملی
            <span class="red-text">*</span>
          </div>
          <div class="uploader-content">
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
              imageWrapperSize="col-xs-12 padding-0-5"
              imageAccessUploadCount="1"
              :maximum="1"
            />
          </div>
          <p
            class="upload-error red-text col-xs-12"
            v-text="errors.idCardFile"
          ></p>
        </div>
      </section>
      <div class="col-xs-12 text-left">
        <div class="action-button-wrapper">
          <button
            class="orange-button next"
            :class="{
              disabled:
                idCardFile.length == 0 || errors.idCardFile || isCompressor,
            }"
            @click.prevent="nextStep"
          >
            <span> مرحله بعد </span>
            <div class="button-icon-wrapper">
              <!-- v-if="isCompressor" -->
              <i
                class="fas fa-long-arrow-alt-left"
                :class="{ empty: isCompressor }"
              ></i>
              <div class="spinner-border" :class="{ empty: !isCompressor }">
                <span class="sr-only"></span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadFile from "../upload-image";
import imageuploadify from "../../../imageuploadify.min";
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
              this.errors.idCardFile = "حجم تصویر باید کمتر از 5 مگابایت باشد.";
            } else if (files[i].file.size < 20480) {
              errorsStatus = true;
              this.errors.idCardFile =
                "حجم تصویر باید بیشتر از 20 کیلوبایت باشد.";
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
    this.$nextTick(() => {
      let iconWrapper = $("#verification-id-card #custom-upload-image-icons");
      let textWrapper = $("#verification-id-card .imageuploadify-message");

      let cameraIcon = "<i class='fas fa-camera'></i>";
      let plusIcon = "<i class='fas fa-plus-circle'></i>";

      iconWrapper.empty();
      iconWrapper.append(cameraIcon);
      iconWrapper.append(plusIcon);

      textWrapper.html("عکس کارت ملی شما");
    });
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

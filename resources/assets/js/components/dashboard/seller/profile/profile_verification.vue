
<style scoped>
.main-wrapper main {
  padding-bottom: 100px;
}

.main-wrapper {
  direction: rtl;
  font-size: 13px;
  padding-top: 50px;
}

.title {
  padding: 13px 0;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
}

.content-wrapper {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  margin: 15px auto;
  padding: 15px 0;
}

.content-wrapper label {
  margin: 9px auto 20px;
}
.small-description {
  font-size: 12px;
  color: #bdc4cc;
}

.image-file-wrapper {
  margin: 0 auto;
  max-width: 450px;
  border-radius: 10px;
  overflow: hidden;
}

.main-title-wrapper {
  margin: 20px auto;
  border-bottom: 2px solid whitesmoke;
  padding-bottom: 10px;
  font-size: 15px;
  line-height: 1.618;
}
.upload-error {
  line-height: 1.618;
}
.green-button {
  max-width: 300px;
  width: 100%;
  border-radius: 8px;
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
</style>

<template>
  <div class="main-wrapper col-sm-10 col-sm-offset-1">
    <main class="col-xs-12">
      <div class="row" v-if="!$parent.currentUser.user_info.is_verified">
        <section class="wrapper-section">
          <div class="content-wrapper row">
            <div class="col-xs-12 pull-right">
              <div class="main-title-wrapper">
                ۱ - نمونه تصویر از کارت ملی
                <span class="red-text">*</span>
              </div>
              <div class="image-file-wrapper">
                <img
                  src="../../../../../img/user-id-card.jpg"
                  alt="send file"
                />
              </div>
            </div>
            <div class="col-xs-12 pull-right">
              <div class="main-title-wrapper">
                ۲ - نمونه تصویر کارت ملی در کنار تصویر شما
                <span class="red-text">*</span>
              </div>
              <div class="image-file-wrapper">
                <img
                  src="../../../../../img/verifi-user-image.jpg"
                  alt="send file"
                />
              </div>
            </div>
            <div class="col-xs-12 pull-right">
              <div class="main-title-wrapper">
                ۳ - تصویر یکی از این اسناد (اجاره نامه یا جواز کسب یا سند
                مالکیت) که به نام فرد دارنده کارت ملی است.
                <span class="red-text">*</span>
              </div>
              <div class="col-xs-12 text-center">
                <div class="row">
                  <div class="col-xs-12 pull-right">
                    <img
                      src="../../../../../img/profile-verification/madarek.jpg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="wrapper-section">
          <div class="content-wrapper row">
            <div class="col-xs-12 pull-right">
              <label>
                تمام موارد فوق را بارگذاری کنید
                <p
                  class="upload-error margin-10-0 red-text"
                  v-text="errors.autorizationFiles"
                ></p>
              </label>

              <UploadFile
                uploadName="autorizationFiles"
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
              />
            </div>
          </div>

          <div class="col-xs-12 text-center">
            <div class="row">
              <button
                class="green-button"
                :class="{
                  disabled:
                    autorizationFiles.length <= 2 || errors.autorizationFiles,
                }"
                @click.prevent="uploadFiles"
              >
                ثبت مدارک
              </button>
            </div>
          </div>
        </section>
      </div>
      <div class="row" v-else>
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
    </main>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";
import UploadFile from "../../upload-image";

export default {
  components: {
    UploadFile,
  },
  data: function () {
    return {
      autorizationFiles: [],
      uploadPercentage: 0,
      errors: {
        autorizationFiles: "",
      },
      items: [
        {
          message: "پروفایل",
          url: "profileBasicSeller",
        },
        {
          message: "احراز هویت",
          url: "profileBasicSellerVeficiation",
        },
      ],
    };
  },
  methods: {
    uploadFiles: function () {
      eventBus.$emit("submiting", true);

      if (!this.filesDataHasError()) {
        let data = new FormData();
        let imagesCount = this.autorizationFiles.length;
        data.append("images_count", imagesCount);
        for (let i = 0; i < imagesCount; i++) {
          let file = this.autorizationFiles[i];
          data.append("image_" + i, file.file);
        }

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

            eventBus.$emit("modal", "verificationInfoUploadDone");

            setTimeout(function () {
              window.location.href = "/seller/profile";
            }, 3000);
          })
          .catch((e) => {
            eventBus.$emit("submiting", false);
            eventBus.$emit("uploadPercentage", 0);
          });
      } else {
        eventBus.$emit("submiting", false);
        eventBus.$emit("uploadPercentage", 0);
      }
    },
    filesDataHasError: function () {
      let imagesCount = this.autorizationFiles.length;
      let hasError = false;
      if (imagesCount == 0) {
        hasError = true;
        this.errors.autorizationFiles = " لطفا تصاویر مربوطه را بارگذاری کنید";
      } else if (imagesCount <= 2) {
        hasError = true;
        this.errors.autorizationFiles =
          " لطفا همه تصاویر (تصویر کارت ملی، تصویر کارت ملی در کنار تصویر خودتان و یکی از اسناد بالا را بارگذاری کنید ";
      }

      return hasError;
    },
  },
  mounted() {
    eventBus.$emit("subHeader", this.items);

    $('input[type="file"]').imageuploadify();
  },
  watch: {
    uploadPercentage: function () {
      eventBus.$emit("uploadPercentage", this.uploadPercentage);
    },
    autorizationFiles: function () {
      this.errors.autorizationFiles = "";
    },
  },
};
</script>

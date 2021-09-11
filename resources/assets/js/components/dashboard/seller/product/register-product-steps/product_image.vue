
<style scoped>
.title-contents {
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 30px;
  padding: 0 15px;
}

.bg-white {
  background: #fff;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 8px 25px 7px;
  transition: 200ms;
  cursor: default;
  margin: 0;
  position: relative;
}

.button-icon-wrapper {
  display: inline;
}

.spinner-border {
  position: absolute;
  left: 19px;
  top: 9px;
}

.submit-button i {
  transition: 300ms;
  position: relative;
  top: 2px;
  left: -3px;
}

.error-message {
  height: 25px;
  margin: 15px 0;
  padding: 0;
}

.submit-button.default-back-button i {
  left: 3px;
}

.submit-button.default-back-button {
  background: #fff;
  color: #777;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
}

.submit-button.default-back-button:hover i {
  transform: translateX(5px);
}
.submit-button.active {
  background: #00c569;
  cursor: pointer;
  transform: translateX(0);
}
.submit-button.active:hover i {
  background: #00c569;
  cursor: pointer;
  transform: translateX(-5px);
}
.action-control-wrapper {
  margin: 40px auto 20px;
}

label {
  margin: 0 auto 14px auto;
  font-size: 15px;
  font-weight: 400;
  color: #777;
}

.text-input-wrapper {
  margin: 6px auto;
  position: relative;
  background: #fbfbfb;
}

.submit-button-wrapper {
  float: right;
  width: 100%;
  margin: 15px auto 50px;
}

@media screen and (max-width: 767px) {
  .title-contents {
    margin-top: 40px;
  }
  .submit-button-wrapper {
    margin: 15px auto 100px;
  }
}
</style>

<template>
  <div>
    <h2 class="title-contents col-xs-12">
      افزودن تصاویر محصول
      <span class="red-text"> *</span>
    </h2>

    <div class="form-contents bg-white col-xs-12">
      <label for="product-type" class="description">
        <span> لطفا فقط تصاویر مرتبط با محصول خود را ثبت کنید </span>
      </label>
      <div class="text-input-wrapper">
        <UploadFile
          uploadName="files"
          uploadAccept="*"
          :uploadMultiple="true"
          :uploadDrop="true"
          :uploadDropDirectory="true"
          :uploadAddIndex="false"
          :uploadThread="3"
          :uploadOCompress="1024 * 1024"
          :uploadUploadAuto="false"
          :imageWrapperSize="'col-xs-6'"
          :isImageReset="filesReset"
        />
      </div>

      <p class="error-message col-xs-12">
        <span
          class="red-text"
          v-if="$parent.errors.images_type"
          v-text="errors.images_type"
        ></span>

        <span
          class="red-text"
          v-if="$parent.errors.images_size"
          v-text="errors.images_size"
        ></span>

        <span
          class="red-text"
          v-if="$parent.errors.images_count"
          v-text="errors.images_count[0]"
        ></span>

        <span
          class="red-text"
          v-if="$parent.errors.image_0"
          v-text="$parent.errors.image_0[0]"
        ></span>

        <span
          class="red-text"
          v-if="$parent.errors.image_1"
          v-text="$parent.errors.image_1[0]"
        ></span>

        <span
          class="red-text"
          v-if="$parent.errors.image_2"
          v-text="$parent.errors.image_2[0]"
        ></span>

        <span
          class="red-text"
          v-if="$parent.errors.image_3"
          v-text="$parent.errors.image_3[0]"
        ></span>

        <span
          class="red-text"
          v-if="$parent.errors.image_4"
          v-text="$parent.errors.image_4[0]"
        ></span>

        <span
          class="red-text"
          v-if="$parent.errors.image_5"
          v-text="$parent.errors.image_5[0]"
        ></span>
      </p>

      <div class="submit-button-wrapper">
        <button
          class="submit-button disabled pull-left"
          :class="{
            active:
              !this.errors.images_count[0] &&
              this.$parent.productFiles[0] &&
              !this.errors.images_type &&
              !isCompressor &&
              !this.errors.images_size,
          }"
          :disabled="isCompressor"
          @click.prevent="submitImages()"
        >
          مرحله بعد
          <div class="button-icon-wrapper">
            <!-- v-if="isCompressor" -->
            <i class="fa fa-arrow-left" :class="{ empty: isCompressor }"></i>
            <div class="spinner-border" :class="{ empty: !isCompressor }">
              <span class="sr-only"></span>
            </div>
          </div>
        </button>

        <button
          class="submit-button default-back-button pull-right"
          @click.prevent="$parent.currentStep--"
        >
          <i class="fa fa-arrow-right"></i>
          مرحله قبل
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import UploadFile from "../../../upload-image";
export default {
  props: ["resetAllImages"],
  data() {
    return {
      files: [],
      filesReset: false,
      isCompressor: false,
      errors: {
        images_count: [],
        images_type: "",
        images_size: "",
      },
    };
  },
  components: {
    UploadFile,
  },
  methods: {
    submitImages() {
      if (!this.$parent.productFiles[0]) {
        this.errors.images_count.push("لطفا تصویر محصول را وارد کنید");
      } else {
        this.imageValidator(this.files);
      }

      if (
        !this.errors.images_count[0] &&
        this.$parent.productFiles[0] &&
        !this.errors.images_type &&
        !this.errors.images_size
      ) {
        this.$parent.goToStep(5);
      }
    },
    imageValidator(files) {
      var errorsStatus = false;

      if (files.length) {
        this.errors.images_count = [];
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
              this.errors.images_type = "تصاویر باید فرمت معتبری باشند.";
            }

            if (files[i].size > 5242880) {
              errorsStatus = true;
              this.errors.images_size =
                "حجم تصویر بالا است، باید کمتر از 5 مگابایت باشد.";
              this.$parent.errors.images_size = this.errors.images_size;
            } else if (files[i].file.size < 20480) {
              errorsStatus = true;
              this.errors.images_size =
                "حجم تصویر پایین است، باید بیشتر از 20 کیلوبایت باشد.";
            }
          }
        }
        if (!errorsStatus) {
          this.errors.images_type = "";
          this.errors.images_size = "";
          this.$parent.productFiles = this.files;
        }
      } else {
        this.errors.images_type = "";
        this.errors.images_size = "";
        this.$parent.productFiles = [];
      }
    },
    resetComponents() {
      this.files = [];
      this.isCompressor = false;
      this.errors = {
        images_count: [],
        images_type: "",
        images_size: "",
      };
      this.$parent.productFiles = this.files;
    },
  },
  watch: {
    resetAllImages() {
      this.filesReset = true;
    },
    files(files) {
      if (!this.isCompressor) {
        this.imageValidator(files);
      }
    },
    "$parent.successRegisterProduct"(value) {
      if (value == true) {
        this.resetComponents();
      }
    },
  },
};
</script>

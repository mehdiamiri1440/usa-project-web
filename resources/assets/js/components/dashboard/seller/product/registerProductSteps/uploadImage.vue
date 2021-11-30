<style scoped>
.upload-image h5 {
  font-size: 1.2rem;
}
.upload-image .pull-right {
  float: none;
}
.upload-image .file-uploads-html5 {
  float: none;
}
.upload-image h5 span {
  margin-top: 0.4rem;
  margin-right: 0.5rem;
  position: absolute;
}
.upload-image h5.lead {
  color: #00000080;
  margin-bottom: 5px;
  margin-top: 5px;
}
.upload-image-content {
  display: grid;
}
.upload-image textarea {
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}
.upload-image p {
  height: 30px;
  line-height: 30px;
  font-size: 1.2rem;
}
.upload-image textarea:focus {
  box-shadow: unset;
  border: 1px solid #000000;
}
.upload-image textarea:focus + span {
  color: #000000;
}

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
  left: 21px;
  top: 11px;
  width: 1.5rem;
  height: 1.5rem;
  color: #fff;
  border-width: 0.25rem;
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
.upload-image .input-icon {
  position: absolute;
  float: left;
  z-index: 10;
  top: 35px;
  margin-right: -25px;
  color: #9e9f9f;
}
.upload-image .description-div {
  position: relative;
  margin-top: 70px;
}
.upload-image .description-div h5 {
  margin-bottom: 10px;
}
.submit-button-wrapper {
  float: right;
  width: 100%;
  margin: 15px auto 50px;
}
.buttons-div {
  padding-top: 1rem;
  margin-bottom: 1rem;
  display: block;
}
.buttons-div button {
  width: 104px;
  height: 36px;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.38);
  padding: 0;
}
.buttons-div button span {
  font-size: 1.4rem;
  margin-top: 0.4rem;
}
.buttons-div button.prev {
  position: relative;
  float: right;
  border: 1px solid #767676;
  background: unset;
}
.buttons-div button.next {
  position: relative;
  float: left;
  background-color: #c2c9d1;
  border: 1px solid #dadada;
}
.buttons-div button.next.active {
  color: #ffffff;
  background-color: #00c569;
  border: 1px solid #00c569;
}
.buttons-div button.next span.next-text {
  float: right;
  margin-top: 0.2rem;
  margin-right: 0.9rem;
}

.buttons-div button.next span.next-icon {
  float: left;
  margin-top: 0.4rem;
  margin-left: 0.9rem;
  font-size: 1.9rem;
}
.buttons-div button.prev span.prev-text {
  float: left;
  margin-top: 0.2rem;
  margin-left: 0.9rem;
}
button.prev span.prev-icon {
  margin-top: 0.4rem;
  margin-right: 0.9rem;
  float: right;
  font-size: 1.9rem;
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
  <div class="upload-image">
    <h5>افزودن تصاویر محصول<span class="text-danger">*</span></h5>
    <h5 class="lead">لطفا فقط تصاویر مرتبط با محصول خود را ثبت کنید</h5>
    <div class="upload-image-content">
      <UploadImage
        uploadName="files"
        uploadAccept="image/*"
        :uploadMultiple="true"
        :uploadDrop="true"
        :uploadDropDirectory="true"
        :uploadAddIndex="false"
        :uploadThread="3"
        :uploadOCompress="1024 * 1024"
        :uploadUploadAuto="false"
        :imageWrapperSize="'col-xs-6'"
        :isImageReset="false"
        imageAccessUploadCount="4"
        :maximum="4"
      />
    </div>
    <div>
      <p class="error-message col-xs-12">
        <span
          class="red-text"
          v-if="errors.images_type"
          v-text="errors.images_type"
        ></span>

        <span
          class="red-text"
          v-if="errors.images_size"
          v-text="errors.images_size"
        ></span>

        <span
          class="red-text"
          v-if="errors.images_count"
          v-text="errors.images_count[0]"
        ></span>
      </p>
    </div>
    <div class="description-div">
      <h5>توضیحات محصول</h5>

      <textarea
        v-model="$parent.product.description"
        cols="30"
        rows="4"
        placeholder="در مورد کیفیت و بسته بندی محصول خود توضیح دهید."
      ></textarea>
      <span class="input-icon"><i class="far fa-edit"></i></span>
      
    </div>
    <div class="buttons-div">
      <button
      :class="{
          active:
            !errors.images_count[0] &&
            this.$parent.productFiles[0] &&
            !errors.images_type &&
            !isCompressor &&
            !errors.images_size &&
            !errors.description
        }"
       class="next submit-button" @click.prevent="submitImages()">
        <span class="next-icon"
          ><i class="fas fa-long-arrow-alt-left"></i
        ></span>
        <span class="next-text">مرحله بعد</span>
      </button>
      <button
        
        class="prev"
        @click.prevent="$parent.previousStep()"
      >
        <span class="prev-icon"
          ><i class="fas fa-long-arrow-alt-right"></i
        ></span>
        <span class="prev-text"> مرحله قبل</span>
      </button>
    </div>
  </div>
</template>

<script>
import UploadImage from "../../../upload-image.vue";
export default {
  props: ["resetAllImages"],
  components: { UploadImage },
  data() {
    return {
      files: [],
      isCompressor: false,
      errors: {
        images_count: [],
        images_type: "",
        images_size: "",
        description: "",
      },
    };
  },
  methods: {
    imageValidator(files) {
      let errorsStatus = false;

      if (files.length) {
        this.errors.images_count = [];
        for (let i = 0; i <= files.length; i++) {
          if (files[i]) {
            if (
              !files[i].type ||
              files[i].type == "" ||
              !files[i].type == "image/png" ||
              !files[i].type == "image/jpg" ||
              !files[i].type == "image/jpeg"
            ) {
              errorsStatus = true;
              this.errors.images_type =
                "تصاویر باید یکی از فرمت های png, jpg, jpeg باشد.";
            }

            if (files[i].size > 5242880) {
              errorsStatus = true;
              this.errors.images_size =
                "حجم تصویر بالا است، باید کمتر از 5 مگابایت باشد.";
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
          return true;
        }
      } else {
        this.errors.images_type = "";
        this.errors.images_size = "";
        this.$parent.productFiles = [];
      }
    },
    submitImages() {
      if (this.$parent.productFiles.length == 0) {
        this.errors.images_count.push("لطفا تصویر محصول را وارد کنید");
      } else {
        if (this.imageValidator(this.files)) {
          
          this.$parent.submitProduct();
         
        }
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
    files(files) {
      if (!this.isCompressor) {
        this.imageValidator(files);
      }
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
  destroyed()
  {
    
    
  }
};
</script>


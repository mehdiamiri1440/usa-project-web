
<style scoped>
input[type="tel"] {
  box-shadow: none !important;
}
label {
  margin: 0 auto 9px auto;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 10px 30px 9px;
  transition: 200ms;
  cursor: default;
  margin: 8px 0;
}
.submit-button.default-back-button {
  background: #fff;
  color: #777;
  border: 1px solid #777;
  border-radius: 4px;
  cursor: pointer;
}
.submit-button.active {
  background: #00c569;
  cursor: pointer;
}
.submit-button-wrapper {
  margin: 0 auto;
  max-width: 420px;
}
.title-contents {
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 15px;
}

.form-contents {
  margin: 5px auto;
}

.form-contents lable {
  font-size: 12px;
}

.input-wrapper,
.text-input-wrapper {
  margin: 6px auto;

  position: relative;
}

.input-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 6px;

  font-family: "Font Awesome 5 Free",sans-serif;

  font-weight: 900;

  left: 15px;

  font-size: 20px;

  z-index: 0;
}

input {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  color: #bebebe;

  border-color: #bebebe;

  direction: rtl;

  transition: 300ms;

  background: #fff;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 300ms;
}

input:focus,
input:focus + i {
  color: #333;
  border-color: #333;
}

input.active {
  border-color: #00c569;
  color: #333;
}

input.active + i {
  color: #00c569;
}

input.active:focus,
input.active:focus + i,
input.active + i {
  border-color: #00c569;
}

input.error {
  color: #333;
  border-color: #e41c38;
}

input.error + i {
  color: #e41c38;
}

input.error:focus,
input.error:focus + i {
  border-color: #e41c38;
}

select {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  position: relative;

  z-index: 1;

  color: #777777;

  direction: rtl;

  transition: 200ms;

  background: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 200ms;
}

select option {
  color: #333;
}

select:focus {
  color: #333;
}

select.active {
  color: #333;
  color: #00c569;
}

select.active:focus {
  color: #00c569;
}

select.error {
  color: #333;
  color: #e41c38;
}

select.error:focus {
  color: #e41c38;
}

.error-message {
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 15px;

  direction: rtl;

  font-size: 11px;
  margin-bottom: 15px;
}

.small-description {
  font-size: 11px;

  font-weight: bold;

  color: #777777;

  line-height: 1.618;
}
label .small-label {
  font-size: 12px;
}

.text-red{
  color: red;
}

@media screen and (max-width: 767px) {
  select {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
}
</style>

<template>
  <div>
    <h2 class="title-contents col-xs-12">افزودن تصاویر محصول</h2>
    <span
        class="text-red col-xs-12 small-description">
        لطفا فقط عکس های مرتبط با محصول خود را ثبت کنید
      </span>
    <div class="form-contents col-xs-12">
      <div class="text-input-wrapper">
        <!-- input type tel because we have some limmitation for processes -->

        <UploadFile
          uploadName="product_files"
          uploadAccept="image/*"
          :uploadMinSize="1024"
          :uploadSize="1024 * 1024 * 10"
          :uploadMultiple="true"
          :uploadDrop="true"
          :uploadDropDirectory="true"
          :uploadAddIndex="false"
          :uploadThread="3"
          :uploadOCompress="1024 * 1024"
          :uploadUploadAuto="false"
          :uploadRef="$parent.productFiles"
        />
      </div>
      <p class="error-message col-xs-12">
        <span v-if="$parent.errors.images_type" v-text="$parent.errors.images_type"></span>

        <span v-if="$parent.errors.images_size" v-text="$parent.errors.images_size"></span>

        <span v-if="$parent.errors.images_count" v-text="$parent.errors.images_count[0]"></span>

        <span v-if="$parent.errors.image_0" v-text="$parent.errors.image_0[0]"></span>

        <span v-if="$parent.errors.image_1" v-text="$parent.errors.image_1[0]"></span>

        <span v-if="$parent.errors.image_2" v-text="$parent.errors.image_2[0]"></span>

        <span v-if="$parent.errors.image_3" v-text="$parent.errors.image_3[0]"></span>

        <span v-if="$parent.errors.image_4" v-text="$parent.errors.image_4[0]"></span>

        <span v-if="$parent.errors.image_5" v-text="$parent.errors.image_5[0]"></span>
      </p>

      

      <div class="submit-button-wrapper">
        <button
          class="submit-button disabled pull-left"
          :class="{'active' : $parent.productFiles[0] && !$parent.errors.images_type && !$parent.errors.images_size}"
          @click.prevent="$parent.productImageSubmited()"
        >
          مرحله بعد
          <i class="fa fa-arrow-left"></i>
        </button>

        <button
          class="submit-button default-back-button pull-right"
          @click.prevent="$parent.currentStep --"
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
  components: {
    UploadFile
  },
  mounted() {
    if (this.$parent.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
  }
};
</script>

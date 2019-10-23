
<style scoped>
p {
  margin: 10px auto;
  line-height: 1.618;
}

textarea {
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

.title-contents {
  font-weight: bold;
  font-size: 19px;
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

textarea {
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

textarea:focus,
textarea:focus + i {
  color: #333;
  border-color: #333;
}

textarea.active {
  border-color: #00c569;
  color: #333;
}

textarea.active + i {
  color: #00c569;
}

textarea.active:focus,
textarea.active:focus + i,
textarea.active + i {
  border-color: #00c569;
}

textarea.error {
  color: #333;
  border-color: #e41c38;
}

textarea.error + i {
  color: #e41c38;
}

textarea.error:focus,
textarea.error:focus + i {
  border-color: #e41c38;
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

.error-message {
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 15px;

  direction: rtl;

  font-size: 11px;

  margin: 0;
}

.small-description {
  font-size: 11px;

  font-weight: bold;

  color: #777777;

  line-height: 1.618;
}

.green-text {
  color: #00c569;
}

textarea .small-label {
  font-size: 12px;
}

@media screen and (max-width: 767px) {
  textarea {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
}
</style>

<template>
  <div>
    <div class="col-xs-12">
      <h2 class="title-contents">ثبت نهایی محصول</h2>
    </div>

    <div class="form-contents col-xs-12">
      <label for="province">توضیحات نهایی محصول خود را بنویسید</label>

      <div class="text-input-wrapper">
        <!-- input type tel because we have some limmitation for processes -->

        <textarea
          rows="4"
          :class="{'active' : $parent.product.description , 'error' : $parent.errors.description}"
          v-model="$parent.product.description"
          placeholder="در مورد کیفیت و نوع بسته بندی محصول خود توضیح دهید"
        ></textarea>

        <p class="error-message col-xs-12">
          <span v-if="$parent.errors.description" v-text="$parent.errors.description[0]"></span>
        </p>
      </div>

      <!-- <span class="small-description">
        انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه اینکوباک کمک می کند
        انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه اینکوباک کمک می کند
      </span>-->
      <p>
        
        با کلیک روی دکمه ثبت نهایی موافقت خود را 


        <a
          href="/privacy-and-policy"
          target="_balnk"
          class="green-text"
        > 
        قوانین و شرایط اینکوباک
      </a>
        اعلام می کنید
      </p>
    </div>
    <div class="col-xs-12">
      <button
        class="submit-button active pull-left"
        @click.prevent="$parent.submitProduct()"
      >ثبت نهایی</button>

      <button
        class="submit-button default-back-button pull-right"
        @click.prevent="$parent.currentStep--"
      >
        <i class="fa fa-arrow-right"></i>
        مرحله قبل
      </button>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    if (this.$parent.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
  }
};
</script>

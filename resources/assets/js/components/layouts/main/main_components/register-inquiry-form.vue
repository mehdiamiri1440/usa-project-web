<style scoped>
input {
  box-shadow: none !important;
}

label {
  margin: 0 auto 9px auto;
}

.section-wrapper {
  margin: 30px auto;
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

.submit-button.active {
  background: #FF9828;
  cursor: pointer;
}

.title-contents {
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: right;
  border-bottom: 2px solid #fafafa;
  float: right;
  width: 100%;
  background: #597a9f;
  padding: 5px 15px;
}
.user-image {
  width: 35px;
  height: 35px;
  float: right;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
}

.user-image img {
  width: 100%;
  min-height: 100%;
  position: relative;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 50%;
}

.user-name {
  float: right;

  margin-top: 7px;

  padding-right: 10px;

  color: #fff;
}
.title-section {
  direction: rtl;
  margin-bottom: 8px;
  padding: 0;
}

.title-section h3 {
  font-size: 16px;
  color: #00c569;
  float: right;
  margin: 0;
}

.title-section hr {
  margin: 15px 15px 10px auto;
  position: relative;
}

.title-section hr::after {
  content: " ";
  height: 3px;
  width: 50px;
  background: #00c569;
  position: absolute;
  top: -4px;
  right: 0;
}

.form-contents-wrapper {
  border-bottom: 1px solid #eee;
  padding: 0;
  overflow: hidden;
}
.form-contents {
  margin: 5px auto;
  line-height: 30px;
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

  font-family: "Font Awesome 5 Free", sans-serif;

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

input.error,
textarea.error {
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

#inquiry-text {
  background: #fefefe;
}

.error-message {
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 15px;

  direction: rtl;

  font-size: 11px;
}

.small-description {
  font-size: 11px;

  font-weight: bold;

  color: #777777;

  line-height: 1.618;
}

.submit-button-wrapper {
  text-align: center;
}

label .small-label {
  font-size: 12px;
}
.placeholder-wrapper .title-contents {
  background: #fafafa;
}
.placeholder-wrapper .user-image span {
  display: block;
}

@media screen and (max-width: 767px) {
  select {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
  .form-contents {
    border-radius: 0;
  }
  .title-section {
    padding: 0 15px;
  }
}
</style>

<template>
  <div v-if="userProfileInfo" class="section-wrapper col-xs-12">
    <div class="row">
      <div class="title-section col-xs-12">
        <h3>استعلام شرایط فروش</h3>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="text-right col-xs-12 form-contents-wrapper" :class="{ 'wrapper-bg': wrapperBg }">
        <div class="title-contents">
          <div class="user-image">
            <img :src="userProfilePhoto" alt />
          </div>
          <div
            class="user-name text-rtl"
          >{{'استعلام از ' + userProfileInfo.first_name + ' ' + userProfileInfo.last_name}}</div>
        </div>

        <div class="form-contents col-xs-12">
          <div class="row">
            <div v-if="userProfileInfo.product_name" class="col-xs-12">
              <p class="text-rtl">
                استعلام شرایط فروش
                <span class="red-text" v-text="userProfileInfo.product_name"></span>
              </p>
            </div>
            <div class="col-xs-12 pull-right">
              <label
                for="inquiry-text"
                class="text-rtl"
              >جزییات مورد نیاز را از فروشنده بپرسید (قیمت، بسته بندی و ...)</label>

              <div class="text-input-wrapper">
                <textarea
                  v-model="inquiry.text"
                  id="inquiry-text"
                  type="text"
                  rows="3"
                  class="text-right text-rtl"
                  :class="{ active: inquiry.text, error: errors.inquiryText }"
                  placeholder="جزییات مورد نیاز را از فروشنده بپرسید..."
                ></textarea>
              </div>
              <p class="error-message">
                <span v-if="errors.inquiryText" v-text="errors.inquiryText"></span>
              </p>
            </div>
          </div>

          <div class="submit-button-wrapper col-xs-12">
            <div class="row">
              <button
                class="submit-button disabled"
                :class="{
                  active: inquiry.text,
                }"
                @click.prevent="submitForm"
              >ثبت</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="section-wrapper col-xs-12">
    <div class="row">
      <div class="title-section col-xs-12">
        <h3>استعلام شرایط فروش</h3>
        <hr />
      </div>
    </div>

    <div class="row">
      <div
        class="text-right col-xs-12 placeholder-wrapper form-contents-wrapper"
        :class="{ 'wrapper-bg': wrapperBg }"
      >
        <div class="title-contents">
          <div class="user-image">
            <span class="placeholder-content default-article-user-image"></span>
          </div>
          <div class="user-name col-xs-12 col-sm-4 col-md-3">
            <span class="placeholder-content content-full-width"></span>
          </div>
        </div>

        <div class="form-contents col-xs-12">
          <div class="row">
            <div class="col-xs-12 pull-right">
              <div class="row">
                <label for="inquiry-text" class="text-rtl col-xs-12 col-sm-4 col-md-3 pull-right">
                  <span class="placeholder-content content-full-width"></span>
                </label>
              </div>

              <div class="text-input-wrapper">
                <textarea id="inquiry-text" type="text" rows="3"></textarea>
              </div>
            </div>
          </div>

          <div class="submit-button-wrapper col-xs-12">
            <div class="row">
              <span class="placeholder-content default-button h-40"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["wrapperBg", "userProfileInfo", "userProfilePhoto", "str"],
  data: function() {
    return {
      errors: {
        inquiryText: ""
      },
      inquiry: {
        text: ""
      }
    };
  },
  methods: {
    init: function() {},
    submitForm: function() {
      this.textValidator(this.inquiry.text);

      if (!this.inquiry.text || this.inquiry.text == "") {
        this.errors.inquiryText = "توضیحات استعلام الزامی است.";
      }

      if (!this.errors.inquiryText) {
        window.localStorage.setItem("msgToSend", this.inquiry.text);
        if (!window.localStorage.getItem("contact")) {
          window.localStorage.setItem(
            "contact",
            JSON.stringify(this.userProfileInfo)
          );
        }
        window.location.href = "/register";
      }
    },

    textValidator: function(text) {
      this.toLatinNumbers(text);
      if (!text) {
        this.errors.inquiryText = "";
      } else if (!this.validateRegx(text, /^(?!.*[(@#!%$&*)])[s\u{0600}-\u{06FF}\u{060C}\u{061B}\u{061F}\u{0640}\u{066A}\u{066B}\u{066C}\u{0E}\u{0A}\u{05BE}_.-،:()A-Za-z0-9 ]+$/u)) {
        this.errors.inquiryText = "لطفا توضیحات استعلام را به درستی وارد کنید";
      }
    },
    toLatinNumbers: function(num) {
      if (num == null) {
        return null;
      }

      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function(c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function(c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    validateRegx: function(input, regx) {
      return regx.test(input);
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    "inquiry.text": function() {
      this.errors.inquiryText = "";
    }
  }
};
</script>

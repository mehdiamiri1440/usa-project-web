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
  background: #00c569;
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

  padding-top: 7px;

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

#inquery-text {
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
  <div v-if="userProfileInfo.first_name" class="section-wrapper col-xs-12">
    <div class="row">
      <div class="title-section col-xs-12">
        <h3>
          استعلام شرایط فروش
        </h3>
        <hr />
      </div>
    </div>

    <div class="row">
      <div
        class="text-right col-xs-12 form-contents-wrapper"
        :class="{ 'wrapper-bg': wrapperBg }"
      >
        <div class="title-contents">
          <div class="user-image">
            <img :src="userProfilePhoto" alt="" />
          </div>
          <div
            class="user-name"
            v-text="
              userProfileInfo.first_name + ' ' + userProfileInfo.last_name
            "
          ></div>
        </div>

        <div class="form-contents col-xs-12">
          <div class="row">
            <div class="col-xs-12 pull-right">
              <label for="inquery-text" class="text-rtl">
                توضیحات استعلام قیمت خود را بنویسید.
              </label>

              <div class="text-input-wrapper">
                <textarea
                  v-model="inquery.text"
                  id="inquery-text"
                  type="text"
                  rows="3"
                  class="text-right text-rtl"
                  :class="{ active: inquery.text, error: errors.inqueryText }"
                  placeholder="توضیحات استعلام قیمت خود را بنویسید"
                ></textarea>
              </div>
              <p class="error-message">
                <span
                  v-if="errors.inqueryText"
                  v-text="errors.inqueryText"
                ></span>
              </p>
            </div>
          </div>

          <div class="submit-button-wrapper col-xs-12">
            <div class="row">
              <button
                class="submit-button disabled"
                :class="{
                  active: inquery.text,
                }"
                @click.prevent="submitForm"
              >
                ثبت استعلام
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="section-wrapper col-xs-12">
    <div class="row">
      <div class="title-section col-xs-12">
        <h3>
          استعلام شرایط فروش
        </h3>
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
                <label
                  for="inquery-text"
                  class="text-rtl col-xs-12 col-sm-4 col-md-3 pull-right"
                >
                  <span class="placeholder-content content-full-width"></span>
                </label>
              </div>

              <div class="text-input-wrapper">
                <textarea id="inquery-text" type="text" rows="3"></textarea>
              </div>
            </div>
          </div>

          <div class="submit-button-wrapper col-xs-12">
            <div class="row">
              <span class="placeholder-content default-button h-40"> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["wrapperBg", "userProfileInfo", "userProfilePhoto"],
  data: function () {
    return {
      errors: {
        inqueryText: "",
      },
      inquery: {
        text: "",
      },
    };
  },
  methods: {
    init: function () {},
    submitForm: function () {
      this.textValidator(this.inquery.text);

      if (!this.inquery.text || this.inquery.text == "") {
        this.errors.inqueryText = "توضیحات استعلام الزامی است.";
      }

      if (!this.errors.inqueryText) {
        console.log("inquery submit");
      }
    },

    textValidator: function (text) {
      this.toLatinNumbers(text);
      if (!text) {
        this.errors.inqueryText = "";
      } else if (!this.validateRegx(text, /^[\u0600-\u06FF\s\d]+$/)) {
        this.errors.inqueryText = "لطفا توضیحات استعلام را به درستی وارد کنید";
      }
    },
    toLatinNumbers: function (num) {
      if (num == null) {
        return null;
      }

      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function (c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function (c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    validateRegx: function (input, regx) {
      return regx.test(input);
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    "inquery.text": function () {
      this.errors.inqueryText = "";
    },
  },
};
</script>

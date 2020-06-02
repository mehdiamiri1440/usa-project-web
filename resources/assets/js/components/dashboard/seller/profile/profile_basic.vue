
<style scoped>
.main-wrapper main {
  padding-bottom: 50px;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  padding: 10px 0 9px;
  transition: 300ms;
  cursor: default;
}

.submit-button.active {
  background: #00c569;
  color: #fff !important;
  cursor: pointer;
}

.padding-0 {
  padding: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input,
textarea {
  padding: 9px 15px;
}
input.disabled {
  color: #fff;
  background: #f6f6f6;
  border: 1px solid;
  font-weight: bold;
}

input {
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid;
  color: #bebebe;
  transition: 300ms;
}

input:focus,
textarea:focus {
  color: #333;
  border-color: #333;
}

input.active,
textarea.active {
  color: #333;
  border-color: #00c569;
}

input.active:focus,
textarea.active:focus {
  color: #333;
  border-color: #00c569;
}

input.error {
  color: #e41c38;
}

input.error:focus {
  color: #e41c38;
}

textarea {
  background: none;
  min-height: 120px;
  max-height: 140px;
  transition: 300ms;
  line-height: 1.618;
  max-width: 100%;
  min-width: 100%;
}

.error-message {
  text-align: center;
  color: #e41c38;
  font-weight: bold;
  height: 16px;
  margin: 4px auto 0;
  direction: rtl;
  font-size: 12px;
  display: block;
}

.main-wrapper {
  direction: rtl;
  background: #f6f6f6;
  font-size: 13px;
}

.title {
  padding: 13px 15px;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
}

.title p {
  color: #e41c38;
  padding-top: 4px;
  text-align: center;
  font-size: 13px;
}

/*progress styles*/

.progress-wrapper {
  background: #fff;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.custom-progress {
  background: #00c569;
  color: #fff;
  width: 25%;
  text-align: center;
  padding: 3px 0;
  font-weight: bold;
  min-width: 25%;
  transition: 300ms;
}

.custom-progress p {
  display: inline;
}

/*form styles*/

.content-wrapper {
  background: #fff;
  box-shadow: 0 0 10px #c5c5c5;
  border-radius: 9px;
  margin: 15px auto;
}

/*user image*/

.user-image-wrapper {
  text-align: center;
}

.user-image-wrapper > p {
  margin-bottom: 7px;
}

.content-wrapper {
  padding: 15px 0;
}

.user-image {
  width: 86px;
  height: 86px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 50px;
  position: relative;
}

.user-image img {
  position: absolute;

  width: initial;

  height: 100%;

  left: 50%;

  top: 50%;

  transform: translate(-50%, -50%);
}

.submit {
  position: relative;

  max-width: 105px;

  margin: 7px auto 0;

  height: 25px;

  background: #00c569;

  text-align: center;

  color: #fff;

  overflow: hidden;

  border-radius: 4px;
}

#imgInp {
  max-width: 100%;
  position: relative;
  opacity: 0;
  height: 100%;
  z-index: 1;
}

#imgInp:hover {
  cursor: pointer;
}

.submit label {
  position: absolute;
  z-index: 0;
  top: 3px;
  margin: 0;
  left: 0;
  right: 0;
  font-weight: normal;
}

/*inputs styles*/

.inputs-wrapper {
  margin-bottom: 10px;
}

/*redio button styles*/

.label-radio {
  display: inline-block;

  position: relative;

  cursor: pointer;

  -webkit-user-select: none;

  -moz-user-select: none;

  -ms-user-select: none;

  user-select: none;

  direction: rtl;

  padding: 0 29px 0 15px;

  font-size: 14px;
}

.label-radio:nth-of-type(1) {
  margin-left: 16px;
}

/* Hide the browser's default radio button */
.label-radio input {
  position: absolute;

  opacity: 0;

  cursor: pointer;

  z-index: 1;

  left: 0;

  right: 0;

  top: 0;

  bottom: 0;

  height: 100%;

  margin: 0;

  width: 100%;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;

  top: 11px;

  right: 13px;

  height: 12px;

  width: 12px;

  background-color: #eee;

  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.label-radio:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.label-radio input:checked ~ .checkmark {
  background-color: #00c569;
}

.label-radio input:checked ~ label::after {
  border-color: #00c569;
}

.label-radio label::after {
  content: "";

  display: block;

  position: absolute;

  left: 0;

  right: 0;

  top: -2px;

  bottom: 0;

  z-index: 0;

  margin: 0;

  padding: 0;

  border-radius: 3px;

  border: 1px solid #bdc4cc;
}

.label-radio label i {
  margin: 0 4px;
}

.label-text {
  margin-bottom: 10px;
}

/*link help style*/

.link-help {
  text-align: right;
}

.link-help a {
  color: #00c569;

  padding: 2px 15px;

  border-radius: 4px;

  border: 1px solid;

  display: inline-block;

  font-weight: bold;

  margin-bottom: 5px;
}

.link-help a {
  color: #00c569;

  padding: 2px 15px;

  border-radius: 4px;

  border: 1px solid;

  display: inline-block;

  font-weight: bold;
}

.link-help a:hover {
  color: #fff;
  background: #00c569;
}

.link-help i {
  -ms-transform: matrix(-1, 0, 0, 1, 0, 0); /* Standard syntax */
  -webkit-transform: matrix(-1, 0, 0, 1, 0, 0); /* Standard syntax */
  transform: matrix(-1, 0, 0, 1, 0, 0); /* Standard syntax */
}

.link-help p {
  color: #bdc4cc;

  font-size: 12px;

  line-height: 19px;

  font-weight: bold;
}

.default-images {
  text-align: center;
  border: 3px dashed;
  border-radius: 3px;
  padding: 19px 0px;
  font-size: 15px;
  font-weight: bold;
  color: #d2d2d2;
}

.default-images i {
  display: block;
  font-size: 50px;
  margin: 6px auto;
}

.images-content i.fa-times {
  position: absolute;
  color: red;
}

.small-description {
  font-size: 12px;
  color: #bdc4cc;
}

.images-content > article {
  padding: 5px;
}

.images-content .image-item {
  transition: 300ms;
  top: 0;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
  height: 115px;
}

.images-content .image-item img {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: initial;
  height: 100%;
  min-width: 100%;
}
@media screen and (max-width: 1120px) {
  .label-radio {
    padding: 0 25px 0 11px;
    font-size: 14px;
  }

  .label-radio:nth-of-type(1) {
    margin-left: 10px;
  }

  .checkmark {
    right: 8px;
  }
  .link-help a {
    padding: 2px 10px;
  }
}

@media only screen and (max-width: 991px) {
  .radio-wrapper {
    margin-bottom: 10px;
  }

  .label-radio {
    padding: 0 29px 0 15px;
  }

  .label-radio:nth-of-type(1) {
    margin-left: 16px;
  }

  .checkmark {
    right: 13px;
  }

  .description {
    margin: 15px auto;
  }

  .description hr {
    margin: 0 auto 15px;
  }

  .link-help a {
    float: right;
    margin-left: 15px;
  }

  .link-help {
    padding: 0 15px;
  }

  .form-control-wrapper {
    margin-bottom: 7px;
  }
  .description {
    margin: 8px auto 15px;
  }

  .activity-type {
    padding: 0 15px;
  }

  .images-content .image-item {
    height: 150px;
  }
}

@media only screen and (max-width: 767px) {
  .title {
    text-align: center;
    padding: 5px 15px;
  }
  .user-image-wrapper {
    margin-top: 23px;
  }
  .title p,
  .title h1 {
    padding-top: 0;
    margin: 5px auto;
  }
  .link-help a {
    float: initial;
    margin: 0 auto;
  }

  .link-help {
    text-align: center;
  }

  .main-wrapper,
  main,
  .form-wrapper {
    padding: 0;
  }
  .content-wrapper {
    border-radius: 0;
  }

  .images-content .image-item {
    height: 200px;
  }

  .main-wrapper main {
    padding-bottom: 110px !important;
  }
}

@media only screen and (max-width: 512px) {
  .images-content .image-item {
    height: 150px;
  }
}
</style>

<template>
  <div class="main-wrapper col-xs-12">
    <header class="col-xs-12">
      <div class="title col-xs-12">
        <div class="row">
          <div class="col-xs-12 col-sm-3 pull-right">
            <h1>ویرایش پروفایل</h1>
          </div>
          <div class="col-xs-12 col-sm-9">
            <p
              v-if="completeProfileProgress <= 85"
            >برای ارتباط مستقیم با خریداران و صادر کنندگان و فروش بیشتر محصولات، پروفایل خود را تکمیل کنید</p>
          </div>
        </div>
      </div>

      <div class="progressbar col-xs-12">
        <div class="progress-wrapper row">
          <div class="custom-progress">
            <p class="hidden-xs">میزان تکمیل پروفایل</p>

            <span>{{completeProfileProgress}}%</span>
          </div>
        </div>
      </div>
    </header>

    <main class="col-xs-12">
      <section class="wrapper-section">
        <div class="content-wrapper row">
          <div class="form-wrapper col-xs-12">
            <div class="user-image-wrapper col-xs-4 col-sm-2 pull-right">
              <p class="hidden-xs">تصویر پروفایل</p>
              <div class="user-image">
                <img
                  v-if="currentUser.profile.profile_photo"
                  :src="str + '/' + currentUser.profile.profile_photo"
                  class="image-preview"
                  alt="تصویر پروفایل"
                />

                <img
                  v-else
                  src="../../../../../img/user-defult.png"
                  align="تصویر پروفایل"
                  class="image-preview"
                />
              </div>

              <div class="submit">
                <input type="file" id="imgInp" ref="profilePhoto" />

                <label>ویرایش تصویر</label>

                <br />

                <span
                  v-if="errors.profile_photo"
                  class="text-danger tex-left"
                  v-text="errors.profile_photo[0]"
                ></span>
              </div>
            </div>

            <div class="user-information col-xs-8 col-sm-10">
              <div class="row">
                <div class="activity-type padding-0 col-xs-12 col-md-4 pull-right">
                  <p class="label-text">نوع کاربری</p>
                  <div class="radio-wrapper">
                    <div class="label-radio">
                      <input
                        @click="disableForm()"
                        type="radio"
                        value="0"
                        name="radio"
                        :checked="0  == currentUser.profile.is_company"
                        v-model="currentUser.profile.is_company"
                      />

                      <span class="checkmark"></span>

                      <label>حقیقی</label>
                    </div>

                    <div class="label-radio">
                      <input
                        type="radio"
                        @click="enableForm()"
                        value="1"
                        :checked="1  == currentUser.profile.is_company"
                        name="radio"
                        v-model="currentUser.profile.is_company"
                      />
                      <span class="checkmark"></span>

                      <label>حقوقی</label>
                    </div>
                  </div>

                  <div class="error-message">
                    <span v-if="errors.is_company" v-text="errors.is_company[0]"></span>
                  </div>
                </div>

                <div class="inputs-wrapper col-xs-12 col-md-8 pull-left">
                  <div class="row">
                    <div class="form-control-wrapper col-xs-12 col-sm-6 pull-right">
                      <p class="label-text">نام شرکت</p>

                      <div class="input-wrapper company-name-wrapper">
                        <input
                          type="text"
                          id="company-name"
                          name="company-name"
                          placeholder="نام شرکت"
                          v-model="currentUser.profile.company_name"
                          :disabled="!formEnabled"
                          :class="{'disabled' : formEnabled == false , 'active' : currentUser.profile.company_name}"
                        />
                      </div>

                      <div class="error-message">
                        <span v-if="errors.company_name" v-text="errors.company_name[0]"></span>
                      </div>
                    </div>

                    <div class="form-control-wrapper col-xs-12 col-sm-6">
                      <p class="label-text">شماره ثبت شرکت</p>

                      <div class="input-wrapper company-number-wrapper">
                        <input
                          id="company-number"
                          type="tel"
                          name="company-number"
                          placeholder="شماره ثبت شرکت"
                          v-model="currentUser.profile.company_register_code"
                          :disabled="!formEnabled"
                          :class="{'disabled' : formEnabled == false , 'active' : currentUser.profile.company_register_code}"
                          pattern="[0-9]*"
                        />

                        <div class="error-message">
                          <span
                            v-if="errors.company_register_code"
                            v-text="errors.company_register_code[0]"
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="user-form col-xs-12 col-sm-10">
              <div class="row">
                <div class="col-xs-12 col-md-8 pull-left">
                  <div class="row">
                    <div class="form-control-wrapper col-xs-6 pull-right">
                      <p class="label-text">شماره تماس عمومی</p>

                      <div class="input-wrapper phone-number-wrapper">
                        <input
                          id="phone-number"
                          type="tel"
                          class="dire"
                          placeholder="شماره موبایل"
                          pattern="[0-9]*"
                          v-model="currentUser.profile.public_phone"
                          :class="{'active' : currentUser.profile.public_phone}"
                        />

                        <div class="error-message">
                          <span v-if="errors.public_phone" v-text="errors.public_phone[0]"></span>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-6 form-control-wrapper">
                      <p class="label-text">آدرس</p>

                      <div class="input-wrapper address-wrapper">
                        <input
                          id="address"
                          type="text"
                          class="dire"
                          placeholder="آدرس شما"
                          v-model="currentUser.profile.address"
                          :class="{'active' : currentUser.profile.address}"
                        />

                        <div class="error-message">
                          <span v-if="errors.address" v-text="errors.address[0]"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form-wrapper col-xs-12 col-md-10 pull-left">
            <div class="description col-xs-12 col-md-8">
              <hr class="hidden-md hidden-lg" />
              <p class="label-text">درباره کسب و کارتان بنویسید</p>

              <div class="input-wrapper address-wrapper">
                <textarea
                  rows="3"
                  id="description"
                  class="dire"
                  placeholder=" درباره کسب و کارتان بنویسید "
                  v-model="currentUser.profile.description"
                  :class="{'active' : currentUser.profile.description}"
                ></textarea>

                <div class="error-message">
                  <span v-if="errors.description" v-text="errors.description[0]"></span>
                </div>
              </div>
            </div>

            <div class="link-help padding-0 col-xs-12 col-md-4">
              <a target="_blank" href="https://www.buskool.com/profile/buskools">
                نمونه پروفایل تکمیل شده
                <i class="fa fa-question-circle"></i>
              </a>
              <p>
                در بخش (درباره کسب و کارتان بنویسید) به این سوالات پاسخ دهید.
                <br />1- چه محصولاتی برای فروش دارید؟ 2- میزان تولید ماهانه یا سالانه محصولات چقدر است ؟ 3- محصولات در چه زمانی از سال آماده فروش می باشند؟ 4- چند سال سابقه فعالیت دارید؟
              </p>
            </div>
          </div>
        </div>

        <div class="content-wrapper row">
          <div class="col-xs-12 col-sm-6 pull-right">
            <label>
              افزودن تصاویر مربوطه
              <span class="small-description">(محصولات | شرکت | کارکنان)</span>
            </label>

            <UploadFile
              uploadName="related_files"
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
              :uploadRef="relatedFiles"
            />
          </div>

          <div class="col-xs-12 col-sm-6 pull-left">
            <label>تصاویر ثبت شده</label>

            <div class="row">
              <div class="images-content col-xs-12">
                <article
                  class="col-md-4 col-xs-6 col-lg-3 pull-right"
                  v-for="photo in currentUser.relateds"
                  v-if="currentUser.relateds.length"
                >
                  <!--                                             <a href="#">
                                                <i class="fa fa-times"></i>
                  </a>-->

                  <div class="image-item">
                    <img :src=" str + '/' + photo" alt />
                  </div>
                </article>

                <div v-else class="default-images">
                  <i class="fa fa-picture-o"></i>
                  هنوز تصویری ثبت نشده است
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-wrapper row">
          <div class="col-xs-12 col-sm-6 pull-right">
            <label>
              افزودن گواهی های مربوطه
              <span
                class="small-description"
              >(گواهی های ثبت شرکت | استاندارد محصول)</span>
            </label>

            <UploadFile
              uploadName="certificate_files"
              uploadAccept="image/*"
              :uploadMinSize="1024"
              :uploadSize="1024 * 1024"
              :uploadMultiple="true"
              :uploadDrop="true"
              :uploadDropDirectory="true"
              :uploadAddIndex="false"
              :uploadThread="3"
              :uploadOCompress="1024 * 1024"
              :uploadUploadAuto="false"
              :uploadRef="certificateFiles"
            />
          </div>

          <div class="col-xs-12 col-sm-6 pull-left">
            <label>تصاویر ثبت شده</label>

            <div class="row">
              <div class="images-content col-xs-12">
                <article
                  v-if="currentUser.certificates.length"
                  class="col-md-4 col-xs-6 col-lg-3 pull-right"
                  v-for="photo in currentUser.certificates"
                >
                  <!--   <a href="#">
                                                <i class="fa fa-times"></i>
                  </a>-->
                  <div class="image-item">
                    <img :src=" str + '/' + photo" alt />
                  </div>
                </article>
                <div v-else class="default-images">
                  <i class="fa fa-picture-o"></i>
                  هنوز تصویری ثبت نشده است
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-md-3 col-sm-4 pull-right">
          <div class="row">
            <button class="submit-button active" @click="RegisterBasicProfileInfo">ثبت تغییرات</button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";
import UploadFile from "../../upload-image";

export default {
  props: ["str"],
  components: {
    UploadFile
  },
  data: function() {
    return {
      currentUser: {
        profile: {
          is_company: "",
          company_name: "",
          company_register_code: "",
          address: "",
          public_phone: "",
          profile_photo: "",
          postal_code: "",
          shaba_code: ""
        },
        user_info: "",
        relateds: "",
        certificates: ""
      },
      profileBasicFields: [
        "is_company",
        "company_name",
        "company_register_code",
        "public_phone",
        "address",
        "postal_code",
        "shaba_code"
      ],
      profileComplementaryFields: [
        "is_company",
        "company_name",
        "company_register_code",
        "public_phone",
        "description"
      ],
      profilePhoto: "",
      errors: "",
      popUpMsg: "",
      items: [],
      relatedFiles: [],
      certificateFiles: [],
      formEnabled: false,
      rankState: {
        is_company: 12,
        company_name: 11,
        company_register_code: 11,
        public_phone: 11,
        address: 11,
        description: 11,
        profile_photo: 11,
        certificates: 11,
        relateds: 11
      },
      completeProfileProgress: 0,
      uploadPercentage: 0
    };
  },
  methods: {
    init: function() {
      this.isLoaded = true;
      $('input[type="file"]').imageuploadify();
      var self = this;
      axios.post("/user/profile_info").then(function(response) {
        self.currentUser = response.data;
        self.sumProgressNumber();
      });
    },
    RegisterBasicProfileInfo: function() {
      eventBus.$emit("submiting", true);
      this.errors = "";
      var self = this;
      var data = new FormData();

      for (var i = 0, cnt = this.profileBasicFields.length; i < cnt; i++) {
        if (this.currentUser.profile[this.profileBasicFields[i]] != null) {
          data.append(
            this.profileBasicFields[i],
            this.toLatinNumbers(
              this.currentUser.profile[this.profileBasicFields[i]]
            )
          );
        }
      }

      // Complementary  form check

      for (var i = 0; i < this.profileComplementaryFields.length; i++) {
        if (
          this.profileComplementaryFields[i] === "description" &&
          (this.currentUser.profile["description"] == null ||
            this.currentUser.profile["description"] === "")
        ) {
          continue;
        }
        data.append(
          this.profileComplementaryFields[i],
          this.currentUser.profile[this.profileComplementaryFields[i]]
        );
      }

      for (var i = 0; i < this.relatedFiles.length; i++) {
        let file = this.relatedFiles[i];
        data.append("related_" + i, file);
      }

      for (var i = 0; i < this.certificateFiles.length; i++) {
        let file = this.certificateFiles[i];
        data.append("certificate_" + i, file);
      }

      data.append("related_image_count", this.relatedFiles.length);
      data.append("certificate_image_count", this.certificateFiles.length);

      // end Complementary  form check

      let profilePhoto = this.$refs.profilePhoto.files[0];
      if (profilePhoto) {
        data.append("profile_photo", profilePhoto);
      }

      axios
        .post("/user/profile_modification", data, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json"
          },
          onUploadProgress: function(progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
          }.bind(this)
        })
        .then(function(response) {
          if (response.status === 200) {
            eventBus.$emit("submiting", false);

            eventBus.$emit("modal", "profileEditSuccess");
          }
          self.submiting = false;
        })
        .catch(function(err) {
          self.scrollToTop();
          if (err.response.status === 413) {
            self.popUpMsg =
              "اندازه تصاویر بزرگ تر 5  از مگابایت است یا فرمت مناسبی ندارد";
            eventBus.$emit("submitSuccess", self.popUpMsg);
            $("#custom-main-modal").modal("show");
          }

          self.errors = "";
          self.errors = err.response.data.errors;

          let tmpArray = Object.keys(self.errors);
          //console.log((tmpArray.join() + "").includes('related') || (tmpArray.join() + "").includes('certificate') );
          if (
            (tmpArray.join() + "").includes("related") ||
            (tmpArray.join() + "").includes("certificate")
          ) {
            self.popUpMsg =
              "اندازه تصاویر بزرگ تر 5  از مگابایت است یا فرمت مناسبی ندارد";
            eventBus.$emit("submitSuccess", self.popUpMsg);
            $("#custom-main-modal").modal("show");
          }
          eventBus.$emit("submiting", false);
        });
    },
    toLatinNumbers: function(num) {
      if (num == null) {
        return null;
      }

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function(c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function(c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    disableForm: function() {
      var companyNumber = $("#company-number");
      var companyName = $("#company-name");

      this.currentUser.profile.company_register_code = "";
      this.currentUser.profile.company_name = "";

      companyNumber.attr("disabled", true);
      companyName.attr("disabled", true);
      this.formEnabled = false;
    },
    enableForm: function() {
      var companyNumber = $("#company-number");
      var companyName = $("#company-name");
      companyName.val("");
      companyNumber.prop("disabled", false);
      companyName.prop("disabled", false);
      this.formEnabled = true;
    },
    sumProgressNumber() {
      this.completeProfileProgress = 0;

      if (this.currentUser.profile.is_company) {
        this.completeProfileProgress += this.rankState.is_company;
      }
      if (this.currentUser.profile.company_name) {
        this.completeProfileProgress += this.rankState.company_name;
      }
      if (this.currentUser.profile.company_register_code) {
        this.completeProfileProgress += this.rankState.company_register_code;
      }
      if (this.currentUser.profile.address) {
        this.completeProfileProgress += this.rankState.address;
      }
      if (this.currentUser.profile.public_phone) {
        this.completeProfileProgress += this.rankState.public_phone;
      }
      if (this.currentUser.profile.description) {
        this.completeProfileProgress += this.rankState.description;
      }
      if (this.currentUser.profile.profile_photo) {
        this.completeProfileProgress += this.rankState.profile_photo;
      }

      if (this.currentUser.certificates.length) {
        this.completeProfileProgress += this.rankState.certificates;
      }
      if (this.currentUser.relateds.length) {
        this.completeProfileProgress += this.rankState.relateds;
      }
    },
    isOsIOS: function() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    this.init();
    eventBus.$emit("subHeader", this.items);
    var self = this;
    function show_image_preview(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        var image = $(".image-preview");
        var iconProfile = $("#icon-pro");
        reader.onload = function(e) {
          image.attr("src", e.target.result);
          image.css("display", "inline");
          iconProfile.css("display", "none");
        };
        reader.readAsDataURL(input.files[0]);
      }
    }

    function image_checked() {
      var image = $(".image-preview");
      var iconProfile = $("#icon-pro");
      if (image.attr("src") !== "") {
        image.css("display", "inline");
        iconProfile.css("display", "none");
      }
    }

    image_checked();

    $("#imgInp").change(function() {
      show_image_preview(this);
    });

    if (this.isOsIOS()) {
      $("#phone-number").attr("type", "text");
      $("#company-number").attr("type", "text");
    }
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/profile-basic" });
  },
  watch: {
    uploadPercentage: function() {
      eventBus.$emit("uploadPercentage", this.uploadPercentage);
    },
    "currentUser.profile.is_company": function(value) {
      if (value == 1) {
        this.enableForm();
      } else {
        this.disableForm();
      }
    },
    "currentUser.profile.company_register_code": function(value) {
      this.currentUser.profile.company_register_code = this.toLatinNumbers(
        value
      );
    },
    completeProfileProgress: function(value) {
      $(".custom-progress").css("width", value + "%");
    }
  }
};
</script>

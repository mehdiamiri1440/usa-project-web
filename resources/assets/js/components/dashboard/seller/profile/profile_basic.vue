
<style scoped>
a {
  color: #1da1f2;
}

.main-wrapper {
  background: #fff;
  padding-top: 15px;
}

.info-box-wrapper {
  background: #e8f4f8;
  border-radius: 12px;
  text-align: right;
  color: #404b55;
  padding: 5px 20px;
  margin-bottom: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  min-height: 41px;
}

.info-text-fix {
  position: relative;
  top: -2px;
  line-height: 1.618;
}

.info-description {
  margin: 5px auto 10px;
}

.info-box-wrapper i {
  font-size: 23px;
  position: relative;
  top: 5px;
  margin-left: 6px;
}

.button {
  background: #1da1f2;
  color: #fff;
  border-radius: 12px;
  padding: 4px 25px;
}

.verification-button {
  padding: 1px 25px 8px;
}

.verification-button i {
  font-size: 20px;
  top: 3px;
  margin-left: 1px;
}
.certificate-cehck::after {
  content: "\F00C";
  position: absolute;
  left: 3px;
  color: #1da1f2;
  font-size: 13px;
  top: 3px;
}

.bg-main {
  background: #f7f7f7;
}

.box-wrapper {
  border-radius: 12px;
  border: 1px solid #f7f7f7;
  padding: 20px;
}

.box-wrapper.user-info-box {
  padding: 0;
}

.box-title {
  font-size: 18px;
  color: #313a43;
}

.box-title::after {
  content: " ";
  width: 100px;
  height: 4px;
  background: #00c569;
  display: block;
  border-radius: 5px;
  margin-top: 10px;
}

.header-wrapper {
  position: relative;
  margin: 33px auto 22px;
}

.header-wrapper > svg {
  position: absolute;
  left: 13px;
  top: -3px;
  z-index: 1;
}

.user-img-wrapper {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  border-radius: 120px;
  overflow: hidden;
}

.user-img-wrapper img {
  display: inline-block;
  height: 100%;
  width: initial;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.upload-image {
  position: absolute;
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 120px;
  top: 0px;
  left: calc(50% - 60px);
}

.upload-image > input {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: relative;
  z-index: 3;
}

.upload-image > input:hover {
  cursor: pointer;
}

.upload-image > span {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0;
  font-size: 30px;
  color: #fff;
  -webkit-transition: 100ms;
  transition: 100ms;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.5);
}

.upload-image > span i {
  flex: 1;
}

.upload-image > input:hover + span {
  font-size: 35px;
  transition: 100ms;
}

.user-name {
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  color: #313a43;
  margin: 16px auto 31px;
}

.phone-number-wrapper {
  margin: 15px auto;
}

.info-description-wrapper {
  display: block;
}

.info-description .row > div {
  margin: 6px auto;
  color: #777;
}

/********
 input design  
*********/

.text-input-wrapper {
  margin: 0 auto;
  position: relative;
  background: #fbfbfb;
}

.title-contents {
  font-size: 18px;
  margin-bottom: 10px;
  padding: 0;
}

.title-contents.active-number-title {
  font-size: 15px;
  margin-top: 3px;
}

.active-number-button {
  font-size: 18px;
  background: #00c569;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 30px 9px;
}

input {
  background: none;
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  box-shadow: none;
}

.text-input-wrapper i {
  position: absolute;
  left: 15px;
  top: 11px;
  font-size: 18px;
  color: #bdc4cc;
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

textarea {
  background: none;
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  box-shadow: none;
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
</style>

<template>
  <div class="main-wrapper h-100 col-xs-12 text-rtl">
    <div class="row">
      <div class="col-xs-12 col-md-4 pull-right">
        <div class="info-box-wrapper">
          <a href="#" class="info-text-fix">
            <i class="fa fa-question-circle"></i>
            نمونه پروفایل تکمیل شده
          </a>
        </div>
      </div>
      <div class="col-xs-12 col-md-8">
        <div class="info-box-wrapper bg-main">
          <p class="pull-right info-text-fix">
            <i class="fas fa-exclamation-circle"></i>
            اطلاعات هویتی شما احراز نشده است.
          </p>
          <router-link
            class="button verification-button"
            :to="{ name: 'profileBasicSellerVeficiation' }"
          >
            <i class="fa fa-certificate certificate-cehck"></i>
            احراز هویت کنید
          </router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-4 pull-right">
        <div class="box-wrapper user-info-box">
          <div class="header-wrapper">
            <svg width="150" height="150" viewBox="0 0 120 120">
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#a6ceff" />
                <stop offset="100%" stop-color="#2ed8a7" />
              </linearGradient>
              <circle
                stroke-linecap="round"
                cx="50"
                cy="50"
                r="48"
                stroke="url(#linear)"
                stroke-width="5"
                fill="none"
                stroke-dasharray="315"
                stroke-dashoffset="315"
                stroke-mitterlimit="0"
                transform="rotate(-90 ) translate(-100 0)"
              />
            </svg>
            <div class="user-img-wrapper">
              <img
                v-if="currentUser.profile.profile_photo"
                :src="str + '/' + currentUser.profile.profile_photo"
                alt="تصویر پروفایل"
                class="image-preview"
              />
              <img
                v-else
                src="../../../../../img/user-defult.png"
                alt="تصویر پروفایل"
                class="image-preview"
              />
            </div>
            <div class="upload-image">
              <input id="imgInp" type="file" />
              <span>
                <i class="fa fa-camera"></i>
              </span>
            </div>
          </div>
          <div class="user-name">
            <p class="blue-aqua-text text-center">
              میزان تکمیل پروفایل
              {{ completeProfileProgress }}%
            </p>
            <p
              class="user-name"
              v-text="
                currentUser.user_info.first_name +
                ' ' +
                currentUser.user_info.last_name
              "
            ></p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-8">
        <div class="box-wrapper">
          <div class="box-title">اطلاعات شما</div>
          <div class="phone-number-wrapper row">
            <div class="col-xs-12 pull-right col-md-7">
              <p class="title-contents">
                شماره موبایل
                <span class="red-text"> * </span>
              </p>
              <div class="text-input-wrapper">
                <input
                  v-model="currentUser.profile.public_phone"
                  id="min-sale-amount"
                  type="tel"
                  :class="{
                    active: currentUser.profile.public_phone,
                  }"
                  placeholder="شماره موبایل را وارد کنید"
                  pattern="[0-9]*"
                />

                <i
                  v-if="currentUser.profile.public_phone"
                  class="fa fa-check-circle"
                ></i>
                <!-- <i
                  v-else-if="$parent.errors.max_sale_price"
                  class="fa fa-times-circle"
                ></i> -->
                <i v-else class="fa fa-edit"></i>
              </div>
            </div>
            <div class="col-xs-12 col-md-5">
              <p class="title-contents active-number-title">
                نمايش شماره به خریداران
                <span class="red-text"> غیر فعال است </span>
              </p>
              <button class="active-number-button hover-effect">
                فعال کردن
              </button>
            </div>
          </div>
          <div class="phone-number-wrapper row">
            <div class="col-xs-12 pull-right col-md-7">
              <p class="title-contents">آدرس</p>
              <div class="text-input-wrapper">
                <input
                  v-model="currentUser.profile.address"
                  id="min-sale-amount"
                  type="tel"
                  :class="{
                    active: currentUser.profile.address,
                  }"
                  placeholder="آدرس را وارد کنید"
                  pattern="[0-9]*"
                />

                <i
                  v-if="currentUser.profile.address"
                  class="fa fa-check-circle"
                ></i>
                <!-- <i
                  v-else-if="$parent.errors.max_sale_price"
                  class="fa fa-times-circle"
                ></i> -->
                <i v-else class="fa fa-edit"></i>
              </div>
            </div>
            <div class="col-xs-12 col-md-5"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-4 pull-right">
        <div class="box-wrapper">
          <div class="box-title">افزودن اطلاعات حقوقی</div>
          <p class="margin-15-0">
            با تکمیل اطلاعات حقوقی، اعتبار حساب خود را بیشتر کنید.
          </p>
          <a href="#">
            افزودن اطلاعات حقوقی
            <i class="fa fa-angle-left"></i>
          </a>
        </div>
      </div>
      <div class="col-xs-12 col-md-8">
        <div class="box-wrapper">
          <div class="box-title">درباره کسب و کارتان بنویسید</div>
          <div class="info-box-wrapper info-description-wrapper margin-15-0">
            <p class="pull-right info-text-fix col-xs-12">
              <i class="fas fa-question-circle"></i>
              در بخش (درباره کسب و کارتان بنویسید) به این سوالات پاسخ دهید.
            </p>
            <div class="info-description col-xs-12">
              <div class="row">
                <div class="col-xs-12 pull-right col-md-6">
                  1- در چه زمینه ای فعالیت می کنید؟
                </div>
                <div class="col-xs-12 pull-right col-md-6">
                  2- بازار فعالیت شما داخلی است یا خارجی؟
                </div>
                <div class="col-xs-12 pull-right col-md-6">
                  3- چند سال سابقه فعالیت دارید؟
                </div>
              </div>
            </div>
          </div>
          <div class="description row">
            <div class="col-xs-12">
              <div class="text-input-wrapper">
                <textarea
                  rows="3"
                  :class="{
                    active: currentUser.profile.description,
                  }"
                  v-model="currentUser.profile.description"
                  placeholder="در مورد کیفیت و نوع بسته بندی محصول خود اینجا توضیح دهید"
                ></textarea>

                <i
                  v-if="currentUser.profile.description"
                  class="fa fa-check-circle"
                ></i>
                <!-- <i
                  v-else-if="$parent.errors.max_sale_price"
                  class="fa fa-times-circle"
                ></i> -->
                <i v-else class="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";
import UploadFile from "../../upload-image";

export default {
  props: ["str"],
  components: {
    UploadFile,
  },
  data: function () {
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
          shaba_code: "",
        },
        user_info: "",
        relateds: "",
        certificates: "",
      },
      profileBasicFields: [
        "is_company",
        "company_name",
        "company_register_code",
        "public_phone",
        "address",
        "postal_code",
        "shaba_code",
      ],
      profileComplementaryFields: [
        "is_company",
        "company_name",
        "company_register_code",
        "public_phone",
        "description",
      ],
      profilePhoto: "",
      errors: "",
      popUpMsg: "",
      items: [
        // {
        //   message: "پروفایل",
        //   url: "profileBasicSeller",
        // },
        // {
        //   message: "احراز هویت",
        //   url: "profileBasicSellerVeficiation",
        // },
      ],
      relatedFiles: [],
      certificateFiles: [],
      relatedFilesReset: false,
      certificateFilesReset: false,
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
        relateds: 11,
      },
      completeProfileProgress: 0,
      uploadPercentage: 0,
    };
  },
  methods: {
    init: function () {
      this.isLoaded = true;
      $('input[type="file"]').imageuploadify();
      var self = this;
      axios.post("/user/profile_info").then(function (response) {
        self.currentUser = response.data;
        self.sumProgressNumber();
      });
    },
    RegisterBasicProfileInfo: function () {
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
        data.append("related_" + i, file.file);
      }

      for (var i = 0; i < this.certificateFiles.length; i++) {
        let file = this.certificateFiles[i];
        data.append("certificate_" + i, file.file);
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
            "Content-Type": "application/json",
          },
          onUploadProgress: function (progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
          }.bind(this),
        })
        .then(function (response) {
          if (response.status === 200) {
            eventBus.$emit("submiting", false);
            eventBus.$emit("uploadPercentage", 0);
            eventBus.$emit("modal", "profileEditSuccess");
            self.relatedFilesReset = true;
            self.certificateFilesReset = true;
            axios.post("/user/profile_info").then(function (response) {
              self.currentUser = response.data;
              self.sumProgressNumber();
            });
          }
          self.submiting = false;
        })
        .catch(function (err) {
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
            eventBus.$emit("submiting", false);
            eventBus.$emit("uploadPercentage", 0);
            self.popUpMsg =
              "اندازه تصاویر بزرگ تر 5  از مگابایت است یا فرمت مناسبی ندارد";
            eventBus.$emit("submitSuccess", self.popUpMsg);
            $("#custom-main-modal").modal("show");
          }
          eventBus.$emit("submiting", false);
          eventBus.$emit("uploadPercentage", 0);
        });
    },
    toLatinNumbers: function (num) {
      if (num == null) {
        return null;
      }

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function (c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function (c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    disableForm: function () {
      var companyNumber = $("#company-number");
      var companyName = $("#company-name");

      this.currentUser.profile.company_register_code = "";
      this.currentUser.profile.company_name = "";

      companyNumber.attr("disabled", true);
      companyName.attr("disabled", true);
      this.formEnabled = false;
    },
    enableForm: function () {
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
      this.circleProgress();
    },
    circleProgress() {
      let circle = 315;
      let percentage = circle - (this.completeProfileProgress * circle) / 100;
      $("circle").attr("stroke-dashoffset", percentage);
    },

    isOsIOS: function () {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
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
        reader.onload = function (e) {
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

    $("#imgInp").change(function () {
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
    uploadPercentage: function () {
      eventBus.$emit("uploadPercentage", this.uploadPercentage);
    },
    "currentUser.profile.is_company": function (value) {
      if (value == 1) {
        this.enableForm();
      } else {
        this.disableForm();
      }
    },
    "currentUser.profile.company_register_code": function (value) {
      this.currentUser.profile.company_register_code = this.toLatinNumbers(
        value
      );
    },
    completeProfileProgress: function (value) {
      $(".custom-progress").css("width", value + "%");
    },
  },
};
</script>



<style scoped>
a {
  color: #1da1f2;
}

.main-wrapper {
  background: #fff;
  padding-top: 15px;
  padding-bottom: 50px;
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

.description .text-input-wrapper {
  margin: 9px auto;
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

.valid-user {
  position: absolute;
  font-size: 30px;
  color: #1da1f2;
  left: calc(50% - 15px);
  top: 104px;
  z-index: 1;
}
.valid-user .certificate-cehck::after {
  color: #fff;
  left: 6px;
  font-size: 19px;
  top: 6px;
}
.bg-main {
  background: #f7f7f7;
}

.action-link {
  font-size: 18px;
  border: none;
  background: none;
}

.action-link i {
  transition: 300ms;
}
.action-link i.rotate-down-icon {
  transform: rotate(180deg);
}

.box-wrapper {
  border-radius: 12px;
  border: 1px solid #f7f7f7;
  padding: 20px;
  margin-bottom: 15px;
  background: #fff;
  overflow: hidden;
  position: relative;
}

.padding-buttom-fixed {
  padding-bottom: 1px;
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
  background-size: cover;
  background-position: center;
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

.user-phone-number-wrapper {
  margin-top: 15px;
}

.info-description-wrapper {
  display: block;
}

.info-description .row > div {
  margin: 6px auto;
  color: #777;
}

.submit-form-button {
  border: none;
  color: #fff;
  font-size: 21px;
  padding: 12px;
  max-width: 280px;
  width: 100%;
  border-radius: 12px;
}

.submit-form-button i {
  position: relative;
  top: 1px;
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
  background-size: cover;
  background-position: center;
}
.small-description {
  font-size: 14px;
  color: #bdc4cc;
}
.images-content i.fa-times {
  position: absolute;
  color: red;
  background: none;
  border: none;
  z-index: 1;
  right: 10px;
  top: 10px;
}

.profile-badge {
  background: #f7f7f7;
  width: 27px;
  height: 27px;
  border-radius: 30px;
  top: 15px;
  left: 15px;
  position: absolute;
  color: #bdc4cc;
  font-size: 11px;
  text-align: center;
  padding-top: 7px;
}
/********
 input design  
*********/
.error-input-wrapper {
  height: 25px;
  padding-top: 5px;
}

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

.deactive-number-button {
  font-size: 18px;
  background: #f7f7f7;
  color: #556080;
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
  max-width: 100%;
  min-height: 113px;
  max-height: 300px;
  min-width: 100%;
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

@media screen and (max-width: 992px) {
  .address-wrapper {
    margin-top: 15px;
  }
  .box-title {
    font-size: 16px;
    line-height: 1.618;
  }
  .submited-images {
    margin-top: 30px;
    padding: 0;
  }
  .info-box-wrapper {
    line-height: 1.618;
    padding: 5px;
  }
}

@media screen and (max-width: 767px) {
  .info-box-wrapper {
    flex-direction: column;
  }
  .verification-button {
    max-width: 180px;
    margin: 6px auto;
    padding: 5px 25px 7px;
  }
}
</style>

<template>
  <div class="main-wrapper col-xs-12 text-rtl">
    <div class="row">
      <div class="col-xs-12 col-md-4 pull-right">
        <div class="info-box-wrapper">
          <a
            target="_blank"
            href="https://www.buskool.com/profile/buskools"
            class="info-text-fix"
          >
            <i class="fa fa-question-circle"></i>
            نمونه پروفایل تکمیل شده
          </a>
        </div>
      </div>
      <div class="col-xs-12 col-md-8">
        <div class="info-box-wrapper bg-main">
          <p
            class="pull-right info-text-fix light-green-text"
            v-if="currentUser.user_info.is_verified"
          >
            <i class="fas fa-check"></i>
            اطلاعات هویتی شما احراز شده است.
          </p>
          <p v-else class="pull-right info-text-fix red-text">
            <i class="fas fa-exclamation-circle"></i>
            اطلاعات هویتی شما احراز نشده است.
          </p>
          <router-link
            v-if="!currentUser.user_info.is_verified"
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
          <span class="profile-badge"> %11 </span>

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
            <div
              class="user-img-wrapper"
              v-if="currentUser.profile.profile_photo"
              :style="{
                backgroundImage:
                  'url(' + str + '/' + currentUser.profile.profile_photo + ')',
              }"
            ></div>
            <div
              class="user-img-wrapper"
              v-else
              :style="{
                backgroundImage:
                  'url(' + assets + 'assets/img/user-defult.png)',
              }"
            ></div>
            <div class="upload-image">
              <input
                id="imgInp"
                type="file"
                accept="image/*"
                ref="profilePhoto"
              />
              <span>
                <i class="fa fa-camera"></i>
              </span>
            </div>
            <div class="valid-user" v-if="currentUser.user_info.is_verified">
              <i class="fa fa-certificate certificate-cehck"></i>
            </div>
          </div>
          <div class="user-name">
            <p class="blue-aqua-text text-center">
              میزان تکمیل پروفایل
              <span v-if="completeProfileProgress">
                {{ completeProfileProgress }}%
              </span>
            </p>
            <p
              class="user-name"
              v-if="currentUser.user_info.first_name"
              v-text="
                currentUser.user_info.first_name +
                ' ' +
                currentUser.user_info.last_name
              "
            ></p>
            <p class="user-name" v-else>
              <span
                class="
                  placeholder-content
                  content-default-width
                  h-25
                  margin-auto
                "
              ></span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-8">
        <div class="box-wrapper padding-buttom-fixed">
          <span class="profile-badge"> %22 </span>
          <div class="box-title">اطلاعات شما</div>
          <div class="user-phone-number-wrapper row">
            <div class="col-xs-12 pull-right col-md-7">
              <p class="title-contents">
                شماره موبایل
                <span class="red-text"> * </span>
              </p>
              <div class="text-input-wrapper">
                <input
                  v-model="currentUser.profile.public_phone"
                  type="tel"
                  :class="{
                    active: currentUser.profile.public_phone,
                    error: errors.public_phone,
                  }"
                  placeholder="شماره موبایل را وارد کنید"
                  pattern="[0-9]*"
                />

                <i
                  v-if="
                    currentUser.profile.public_phone && !errors.public_phone
                  "
                  class="fa fa-check-circle"
                ></i>
                <i
                  v-else-if="errors.public_phone"
                  class="fa fa-times-circle"
                ></i>
                <i v-else class="fa fa-edit"></i>
              </div>
              <div class="error-input-wrapper">
                <p class="error-message">
                  <span
                    class="red-text"
                    v-if="errors.public_phone"
                    v-text="errors.public_phone"
                  ></span>
                </p>
              </div>
            </div>
            <div class="col-xs-12 active-number-wrapper col-md-5">
              <p class="title-contents active-number-title">
                نمايش شماره به خریداران
                <span
                  class="red-text"
                  v-if="!currentUser.user_info.phone_allowed"
                >
                  غیر فعال است
                </span>
                <span class="green-text" v-else> فعال است </span>
              </p>
              <button
                v-if="!currentUser.user_info.phone_allowed"
                class="active-number-button hover-effect"
                @click.prevent="switchPhoneActivation(true)"
              >
                فعال کردن
              </button>
              <button
                v-else
                @click.prevent="switchPhoneActivation(false)"
                class="deactive-number-button hover-effect"
              >
                غیرفعال
              </button>
            </div>
          </div>
          <div class="address-wrapper row">
            <div class="col-xs-12 pull-right col-md-7">
              <p class="title-contents">آدرس</p>
              <div class="text-input-wrapper">
                <input
                  v-model="currentUser.profile.address"
                  type="text"
                  :class="{
                    active: currentUser.profile.address,
                    error: errors.address,
                  }"
                  placeholder="آدرس را وارد کنید"
                />

                <i
                  v-if="currentUser.profile.address && !errors.address"
                  class="fa fa-check-circle"
                ></i>
                <i v-else-if="errors.address" class="fa fa-times-circle"></i>
                <i v-else class="fa fa-edit"></i>
              </div>
              <div class="error-input-wrapper">
                <p class="error-message">
                  <span
                    class="red-text"
                    v-if="errors.address"
                    v-text="errors.address"
                  ></span>
                </p>
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
          <span class="profile-badge"> %34 </span>

          <div class="box-title">افزودن اطلاعات حقوقی</div>
          <p class="margin-15-0">
            با تکمیل اطلاعات حقوقی، اعتبار حساب خود را بیشتر کنید.
          </p>
          <button
            class="action-link blue-text"
            type="button"
            data-toggle="collapse"
            data-target="#company-box"
            aria-expanded="false"
            aria-controls="company-box"
          >
            <span v-if="!currentUser.profile.is_company"
              >افزودن اطلاعات حقوقی</span
            >
            <span v-else>بستن</span>
            <i
              class="fa fa-angle-down"
              :class="{ 'rotate-down-icon': currentUser.profile.is_company }"
            ></i>
          </button>

          <div class="form-wrapper collapse" id="company-box">
            <div class="margin-top-15">
              <p class="title-contents">
                نام شرکت
                <span class="red-text"> * </span>
              </p>
              <div class="text-input-wrapper">
                <input
                  v-model="currentUser.profile.company_name"
                  type="text"
                  :class="{
                    active: currentUser.profile.company_name,
                    error: errors.company_name,
                  }"
                  placeholder="نام شرکت را وارد کنید"
                />

                <i
                  v-if="
                    currentUser.profile.company_name && !errors.company_name
                  "
                  class="fa fa-check-circle"
                ></i>
                <i
                  v-else-if="errors.company_name"
                  class="fa fa-times-circle"
                ></i>
                <i v-else class="fa fa-edit"></i>
              </div>
              <div class="error-input-wrapper">
                <p class="error-message">
                  <span
                    class="red-text"
                    v-if="errors.company_name"
                    v-text="errors.company_name"
                  ></span>
                </p>
              </div>
            </div>
            <div class="">
              <p class="title-contents">
                شماره ثبت شرکت
                <span class="red-text"> * </span>
              </p>
              <div class="text-input-wrapper">
                <input
                  v-model="currentUser.profile.company_register_code"
                  type="tel"
                  :class="{
                    active: currentUser.profile.company_register_code,
                    error: errors.company_register_code,
                  }"
                  placeholder="شماره ثبت شرکت را وارد کنید"
                  pattern="[0-9]*"
                />

                <i
                  v-if="
                    currentUser.profile.company_register_code &&
                    !errors.company_register_code
                  "
                  class="fa fa-check-circle"
                ></i>
                <i
                  v-else-if="errors.company_register_code"
                  class="fa fa-times-circle"
                ></i>
                <i v-else class="fa fa-edit"></i>
              </div>
              <div class="error-input-wrapper">
                <p class="error-message">
                  <span
                    class="red-text"
                    v-if="errors.company_register_code"
                    v-text="errors.company_register_code"
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-8">
        <div class="box-wrapper padding-buttom-fixed">
          <span class="profile-badge"> %11 </span>
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
                  rows="5"
                  :class="{
                    active: currentUser.profile.description,
                    error: errors.description,
                  }"
                  v-model="currentUser.profile.description"
                  placeholder="در مورد کیفیت و نوع بسته بندی محصول خود اینجا توضیح دهید"
                ></textarea>

                <i
                  v-if="currentUser.profile.description && !errors.description"
                  class="fa fa-check-circle"
                ></i>
                <i
                  v-else-if="errors.description"
                  class="fa fa-times-circle"
                ></i>
                <i v-else class="fa fa-edit"></i>
              </div>
              <div class="error-input-wrapper">
                <p class="error-message">
                  <span
                    class="red-text"
                    v-if="errors.description"
                    v-text="errors.description"
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 text-center margin-15-auto">
        <button
          @click="RegisterBasicProfileInfo()"
          :disabled="isLoaded"
          class="submit-form-button bg-blue hover-effect"
        >
          <i class="fa fa-check"></i>
          ثبت تغییرات
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="box-wrapper margin-15-auto">
          <span class="profile-badge"> %11 </span>
          <div class="col-xs-12 col-sm-6 pull-right">
            <div class="row">
              <div class="box-title">
                افزودن تصاویر مربوطه
                <span class="small-description"
                  >(محصولات | شرکت | کارکنان)</span
                >
              </div>

              <UploadFile
                class="margin-15-auto"
                uploadName="relatedFiles"
                uploadAccept="image/*"
                :uploadMultiple="true"
                :isImageReset="relatedFilesReset"
                :uploadDrop="true"
                :uploadDropDirectory="true"
                :uploadAddIndex="false"
                :uploadThread="3"
                :uploadOCompress="1024 * 1024"
                :uploadUploadAuto="false"
                :imageWrapperSize="'col-xs-12 col-sm-6'"
              />
            </div>
          </div>

          <div class="col-xs-12 submited-images col-sm-6 pull-left">
            <div class="row">
              <div class="box-title">تصاویر ثبت شده</div>

              <div class="row margin-15-auto">
                <div
                  class="images-content col-xs-12"
                  v-if="currentUser.relateds.length"
                >
                  <article
                    class="col-md-4 col-xs-6 col-lg-3 pull-right"
                    v-for="(photo, index) in currentUser.relateds"
                    :key="index"
                  >
                    <!-- <a href="#">
                      <i class="fa fa-times"></i>
                    </a> -->

                    <div
                      class="image-item"
                      :style="{
                        backgroundImage: 'url(' + str + '/' + photo + ')',
                      }"
                    ></div>
                  </article>
                </div>
                <div v-else class="default-images">
                  <i class="fa fa-picture-o"></i>
                  هنوز تصویری ثبت نشده است
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <div class="box-wrapper margin-15-auto">
          <span class="profile-badge"> %11 </span>
          <div class="col-xs-12 col-sm-6 pull-right">
            <div class="row">
              <div class="box-title">
                افزودن گواهی های مربوطه
                <span class="small-description"
                  >(گواهی های ثبت شرکت | استاندارد محصول)</span
                >
              </div>

              <UploadFile
                class="margin-15-auto"
                uploadName="certificateFiles"
                :isImageReset="certificateFilesReset"
                uploadAccept="image/*"
                :uploadMultiple="true"
                :uploadDrop="true"
                :uploadDropDirectory="true"
                :uploadAddIndex="false"
                :uploadThread="3"
                :uploadOCompress="1024 * 1024"
                :uploadUploadAuto="false"
                :imageWrapperSize="'col-xs-12 col-sm-6'"
              />
            </div>
          </div>

          <div class="col-xs-12 submited-images col-sm-6 pull-left">
            <div class="box-title">تصاویر ثبت شده</div>

            <div class="row margin-15-auto">
              <div
                class="images-content col-xs-12"
                v-if="currentUser.certificates.length"
              >
                <article
                  class="col-md-4 col-xs-6 col-lg-3 pull-right"
                  v-for="(photo, index) in currentUser.certificates"
                  :key="index"
                >
                  <!-- <a href="#">
                    <i class="fa fa-times"></i>
                  </a> -->
                  <div
                    class="image-item"
                    :style="{
                      backgroundImage: 'url(' + str + '/' + photo + ')',
                    }"
                  ></div>
                </article>
              </div>
              <div v-else class="default-images">
                <i class="fa fa-picture-o"></i>
                هنوز تصویری ثبت نشده است
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 text-center margin-15-auto">
        <button
          @click="RegisterBasicProfileInfo()"
          :disabled="isLoaded"
          class="submit-form-button bg-blue hover-effect"
        >
          <i class="fa fa-check"></i>
          ثبت تصاویر
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";
import UploadFile from "../../upload-image";
import swal from "../../../../sweetalert.min.js";
import imageuploadify from "../../../../imageuploadify.min";
export default {
  props: ["str", "assets"],
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
          description: "",
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
        "description",
      ],

      profileErrors: [
        "public_phone",
        "description",
        "address",
        "company_name",
        "company_register_code",
      ],
      profilePhoto: "",
      errors: {
        public_phone: "",
        description: "",
        address: "",
        company_name: "",
        company_register_code: "",
      },
      popUpMsg: "",
      items: "",
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
      isLoaded: false,
    };
  },
  methods: {
    init: function () {
      this.activeisCompanyCollapse();
      this.isLoaded = true;
      $('input[type="file"]').imageuploadify();
      this.getProfileInfo();
    },
    getProfileInfo() {
      axios.post("/user/profile_info").then((response) => {
        this.currentUser = response.data;
        this.isLoaded = false;
        if (this.currentUser.profile.is_company) {
          $("#company-box").collapse("show");
        }
        this.sumProgressNumber();
      });
    },
    RegisterBasicProfileInfo: function () {
      if (this.currentUser.profile.is_company) {
        this.checkIsCompany();
      } else {
        this.errors.company_name = "";
        this.errors.company_register_code = "";
      }
      let formError = 0;

      for (var i = 0; i < this.profileErrors.length; i++) {
        if (this.errors[this.profileErrors[i]]) {
          formError += 1;
        }
      }
      if (!formError) {
        eventBus.$emit("submiting", true);

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
                if (self.currentUser.profile.is_company) {
                  $("#company-box").collapse("show");
                }
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
      }
    },
    switchPhoneActivation(active) {
      axios
        .post("/set_phone_number_view_permission", { permission: active })
        .then((response) => {
          this.getProfileInfo();
          swal({
            title: "تغییرات شماره تماس",
            text: "تغییرات شماره تماس با موفقیت اعمال شد",
            icon: "success",
            className: "custom-swal-with-cancel",
            buttons: {
              close: {
                text: "بستن",
                className: "bg-cancel",
              },
            },
          });
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
    activeisCompanyCollapse() {
      $("#company-box").on("hidden.bs.collapse", () => {
        this.currentUser.profile.is_company = 0;
      });
      $("#company-box").on("show.bs.collapse", () => {
        this.currentUser.profile.is_company = 1;
      });
    },
    checkIsCompany() {
      if (
        this.currentUser.profile.company_name &&
        !this.currentUser.profile.company_register_code
      ) {
        this.errors.company_register_code = "لطفا شماره ثبت شرکت را وارد کنید";
      } else if (
        !this.currentUser.profile.company_name &&
        this.currentUser.profile.company_register_code
      ) {
        this.errors.company_name = "لطفا  نام شرکت را وارد کنید";
      } else if (
        !this.currentUser.profile.company_name &&
        !this.currentUser.profile.company_register_code
      ) {
        this.errors.company_register_code = "";
        this.errors.company_name = "";
        $("#company-box").collapse("hide");
        this.currentUser.profile.is_company = 0;
      }
    },
    phoneValidator: function (number) {
      this.errors.public_phone = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.public_phone = "لطفا  شماره را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.public_phone = "لطفا فقط عدد وارد کنید ";
      }
    },
    companyRegisterCodeValidator: function (number) {
      this.errors.company_register_code = "";
      var standardNumber = this.toLatinNumbers(number);
      if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.company_register_code = "لطفا فقط عدد وارد کنید ";
      }
    },
    textValidator: function (text) {
      if (text != "") {
        if (!this.validateRegx(text, /^[\u0600-\u06FF\s_,.:/;()+-\d]+$/)) {
          return true;
        }
      }
    },
    validateRegx: function (input, regx) {
      return regx.test(input);
    },
    show_image_preview(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        var image = $(".user-img-wrapper");
        reader.onload = function (e) {
          image.css("background-image", "url('" + e.target.result + "')");
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
  mounted() {
    this.init();
    eventBus.$emit("subHeader", this.items);
    var self = this;

    $("#imgInp").change(function () {
      self.show_image_preview(this);
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
    "currentUser.profile.company_register_code": function (value) {
      this.currentUser.profile.company_register_code =
        this.toLatinNumbers(value);
    },
    "currentUser.profile.public_phone": function (value) {
      if (value.length >= 11) {
        this.currentUser.profile.public_phone = value.substring(0, 11);
      }
      this.phoneValidator(value);
    },
    "currentUser.profile.address": function (value) {
      this.errors.address = "";

      if (value && this.textValidator(value)) {
        this.errors.address = "آدرس شامل حروف غیرمجاز است";
      }
    },
    "currentUser.profile.description": function (value) {
      this.errors.description = "";

      if (value && this.textValidator(value)) {
        this.errors.description = "توضیحات شامل حروف غیرمجاز است";
      }
    },
    "currentUser.profile.company_name": function (value) {
      this.errors.company_name = "";

      if (value && this.textValidator(value)) {
        this.errors.company_name = "نام شرکت شامل حروف غیرمجاز است";
      }
    },
    "currentUser.profile.company_register_code": function (value) {
      this.companyRegisterCodeValidator(value);
    },
  },
};
</script>



<style scoped>
.main-wrapper main {
  padding-bottom: 100px;
}

.main-wrapper {
  direction: rtl;
  background: #f6f6f6;
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
  box-shadow: 0 0 10px #c5c5c5;
  border-radius: 9px;
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
}

.green-button {
  max-width: 300px;
  width: 100%;
}
</style>

<template>
  <div class="main-wrapper col-sm-10 col-sm-offset-1">
    <header class="col-xs-12">
      <div class="title col-xs-12">
        <div class="row">
          <div class="col-xs-12 col-sm-3 pull-right">
            <h1>احراز هویت</h1>
          </div>
        </div>
      </div>
    </header>
    <main class="col-xs-12">
      <div class="row">
        <section class="wrapper-section">
          <div class="content-wrapper row">
            <div class="col-xs-12 pull-right">
              <div class="main-title-wrapper">
                ۱ -
                نمونه تصویر از کارت ملی
                <span class="red-text">*</span>
              </div>
              <div class="image-file-wrapper">
                <img src="../../../../../img/user-id-card.jpg" alt="send file" />
              </div>
            </div>
            <div class="col-xs-12 pull-right">
              <div class="main-title-wrapper">
                ۲ -
                نمونه تصویر کارت ملی در کنار تصویر شما
                <span class="red-text">*</span>
              </div>
              <div class="image-file-wrapper">
                <img src="../../../../../img/verifi-user-image.jpg" alt="send file" />
              </div>
            </div>
            <div class="col-xs-12 pull-right">
              <div class="main-title-wrapper">
                ۳ -
                تصویر یکی از این اسناد (اجاره نامه یا جواز کسب یا سند مالکیت ) که به نام فرد دارنده کارت ملی است.
                <span
                  class="red-text"
                >*</span>
              </div>
              <div class="col-xs-12 text-center">
                <div class="row">
                  <div class="col-xs-12 col-md-4 pull-right">
                    <p class="margin-10">اجاره نامه</p>
                    <div class="image-file-wrapper">
                      <img src="../../../../../img/profile-verification/ejare-name.png" alt="img" />
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-4 pull-right">
                    <p class="margin-10">جواز کسب</p>
                    <div class="image-file-wrapper">
                      <img src="../../../../../img/profile-verification/javaz-kasp.jpg" alt="img" />
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-4 pull-right">
                    <p class="margin-10">سند مالکیت</p>
                    <div class="image-file-wrapper">
                      <img
                        src="../../../../../img/profile-verification/sanad-malekiat.jpg"
                        alt="img"
                      />
                    </div>
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
                افزودن تصاویر مربوطه
                <span class="small-description">(ارسال مدارک مورد نیاز)</span>
              </label>

              <UploadFile
                uploadName="id_cart_files"
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
                :uploadRef="autorizationFiles"
              />
            </div>
          </div>

          <div class="col-xs-12 text-center">
            <div class="row">
              <button class="green-button" @click.prevent>ثبت مدارک</button>
            </div>
          </div>
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
    UploadFile
  },
  data: function() {
    return {
      autorizationFiles: [],
      items: [
        {
          message: "پروفایل",
          url: "profileBasicSeller"
        },
        {
          message: "احراز هویت",
          url: "profileBasicSellerVeficiation"
        }
      ]
    };
  },
  mounted() {
    eventBus.$emit("subHeader", this.items);

    $('input[type="file"]').imageuploadify();
  }
};
</script>

<style scoped>
.app-modal {
  direction: rtl;
  position: fixed;
  bottom: 0;
  z-index: 1013;
  display: grid;
  left: 0;
  width: 100%;
  border-radius: 20px 20px 0 0;
}
.app-modal.show-custom-modal {
  height: 100%;
}
.app-modal .modal-content {
  border-radius: 20px 20px 0 0;
  border: 0;
  position: absolute;
  width: 100%;
  z-index: 10;
  bottom: -500px;
  transition: bottom 1s;
  height: 200px;
  background-color: #F0F3F5;
}
.app-modal .modal-header {
  border-bottom: 0;
}
.app-modal .modal-header .modal-title {
  margin: 0;
  margin-top: 35px;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  color: #15313C;
}
.android-download-alert-content {
  display: grid;
  align-items: center;
  grid-template-columns: 24px auto 119px;
}
.android-download-alert-wrapper .m-t-b {
  margin: 1.4rem 0;
}
.android-download-alert-content img {
  width: 24px;
  height: 24px;
  float: left;
}
.text-android-download-alert-wrapper {
  padding-right: 8.8px;
}
.text-android-download-alert-wrapper p.android-download-title {
  text-align: right;
  font-size: 1.6rem;
  color: #15313C;
}
.android-apk-download {
  padding: 3px 15px;
  font-size: 1.3rem;
  background-color: #ff9828;
  color: #ffffff;
  border: none;
  height: 40px;
  border-radius: 8px;
  display: inline-block;
  position: relative;
}

.close-android-download-alert-wrapper {
  width: 25px;
  height: 22px;
  background: none;
  border: none;
  font-size: 20px;
  position: relative;
  z-index: 2;
  margin: 5px 0 0 -2px;
  float: right;
}
.close-android-download-alert-wrapper img{
  width: 100%;
  height: 100%;
}
.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  transition: 500ms;
}
.app-modal.show-custom-modal .modal-background {
  background: rgba(0, 0, 0, 0.7);
}
@media (max-width:350px) {
  .app-modal .modal-header .modal-title {
  margin: 0;
  margin-top: 40px;
  font-size: 1.4rem;
}
}
</style>
<template>
  <div id="app-modal" class="app-modal">
    <div class="modal-content">
      <div class="modal-header">
        <a
          class="close-modal close-android-download-alert-wrapper"
          @click="closeModal()"
        >
          <img
        class="dl-app-img"
        src="../../../../img/eva_close.svg"
        alt="دانلود اپلیکیشن باسکول"
      />
        </a>

        <div class="modal-title">
          استفاده راحت تر از باسکول در اپلیکیشن موبایل
        </div>
      </div>
      <div class="modal-body col-xs-12">
        <div
          class="android-download-alert-content"
          @click.prevent="$parent.doDownload()"
        >
          <div class="m-t-b">
            <img
              src="../../../../img/logo/512-buskool-logo.jpg"
              alt="دانلود اپلیکیشن باسکول"
            />
          </div>
          <div class="text-android-download-alert-wrapper m-t-b">
            <p class="android-download-title">اپلیکیشن باسکول</p>
          </div>
          <div class="text-center m-t-b">
            <button class="android-apk-download">ورود به اپلیکیشن</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.modal-content -->
    <div @click="closeModal()" class="modal-background"></div>
  </div>
</template>

<script>
export default {
  methods:{
      closeModal() {
      document.getElementById('app-modal').classList.remove("show-custom-modal");
      $('#app-modal .modal-content').removeClass("bottom-0");
      this.$parent.createCookie("downloadAppModal", true, 60 * 24);
    },
  }
};
</script>


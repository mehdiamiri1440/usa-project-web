
<style scoped>
.download-app-wrapper {
  direction: rtl;
  background-color: #f0f3f5;
  margin: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
.close-android-download-alert-wrapper {
  background: none;
  border: none;
  font-size: 20px;
  position: relative;
  z-index: 10;
  top: 9px;
  margin-right: 5px;
  float: right;
}
.download-app-info {
  display: grid;
  grid-template-columns: 50px auto;
}
.android-download-title {
  font-size: 1.6rem;
}
.dl-app-img {
  width: 30px;
  height: 38px;
  float: left;
  margin-left: 8px;
}
.android-apk-download {
  border: 1px solid #ff6600;
  color: #ff6600;
  border-radius: 50px;
  background-color: #ffffff;
  font-size: 1.6rem;
  float: left;
  margin-left: 20px;
}
</style>
<template>
  <div
    @click.prevent="doDownload()"
    class="download-app-wrapper row hidden-lg hidden-md"
  >
    <button
      @click.prevent="closeAppModal()"
      class="close-android-download-alert-wrapper"
    >
      <i class="fa fa-times"></i>
    </button>

    <div class="col-md-12 download-app-info">
      <div class="m-t-b">
        <img
          class="dl-app-img"
          src="../../../../img/download-app-card-icon.svg"
          alt="دانلود اپلیکیشن باسکول"
        />
      </div>
      <div class="text-android-download-alert-wrapper m-t-b">
        <p class="android-download-title">
          <strong>توصیه: </strong>با اپلیکیشن باسکول، راحت تر محصول مورد نظر خود
          را پیدا کنید.
        </p>
      </div>
    </div>
    <div class="col-md-12">
      <div class="text-center m-t-b">
        <button class="android-apk-download">رفتن به اپلیکیشن</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.download-app-wrapper {
  position: relative;
  display: grid;
  direction: rtl;
  background-color: #E6F0F3;
  margin: 20px 10px 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0 8px 10px;
  border: 1px solid rgb(38 70 83 / 10%);
}
.close-android-download-alert-wrapper {
  width: 32px;
  height: 22px;
  background: none;
  border: none;
  font-size: 20px;
  position: relative;
  z-index: 10;
  margin: 5px 0 0 -2px;
  float: right;
}
.close-android-download-alert-wrapper img {
  width: 100%;
  height: 100%;
}
.download-app-info {
  display: grid;
  grid-template-columns: 50px auto;
  margin-bottom: 5px;
  margin-top: -10px;
  padding: 0 15px;
}
.android-download-title {
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-align: right;
}
.dl-app-img {
  width: 35px;
  height: 43px;
  float: left;
  margin: -5px 0 0 5px;
}
.android-apk-download {
  border: 1px solid #ff6600;
  color: #ff6600;
  border-radius: 50px;
  background-color: #ffffff;
  font-size: 1.4rem;
  padding: 7px 15px;
  float: left;
}
</style>
<template>
  <div id="downloadAppCard" :class="className" class="download-app-wrapper row">
    <button
      @click.prevent="closeCard()"
      class="close-android-download-alert-wrapper"
    >
      <img
        class="dl-app-img"
        src="../../../../img/eva_close.svg"
        alt="دانلود اپلیکیشن باسکول"
      />
    </button>

    <div @click.prevent="doDownload()" class="col-md-12 download-app-info">
      <div class="m-t-b">
        <img
          class="dl-app-img"
          src="../../../../img/download-app-card-icon.svg"
          alt="دانلود اپلیکیشن باسکول"
        />
      </div>
      <div class="text-android-download-alert-wrapper m-t-b">
        <p class="android-download-title">
          <strong>توصیه: </strong>{{text}}
        </p>
      </div>
    </div>
    <div @click.prevent="doDownload()" class="col-md-12">
      <button class="android-apk-download">رفتن به اپلیکیشن</button>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'className',"text"
  ],
  methods: {
    registerComponentStatistics: function (
      categoryName,
      actionName,
      labelName
    ) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
    closeCard() {
      
      $('#downloadAppCard').remove();
      this.createCookie("downloadAppCard", true, 60 * 24);
    },
    doDownload: function () {
      //ga
      this.registerComponentStatistics(
        "download",
        "app download btn",
        "download app btn in popUp"
      );
      // code here
      this.createCookie("downloadAppCard", true, 60 * 24);
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.buskool";
    },
    createCookie: function (name, value, minutes) {
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    },
  },
};
</script>


<style scoped>
.download-app-wrapper {
  position: relative;
  display: grid;
  direction: rtl;
  background-color: #ffffff;
  margin: 20px 10px 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0 8px 10px;
  border: 1px solid rgb(38 70 83 / 10%);
}
.close-android-download-alert-wrapper {
  width: 12px;
  height: 15px;
  border: none;
  position: relative;
  z-index: 10;
  margin: 5px 0 0 -2px;
  float: right;
  border-radius: 7px;
}

.download-app-info {
  display: grid;
  grid-template-columns: 50px auto;
  margin-bottom: 5px;
  margin-top: -10px;
  padding: 0 15px;
}
.dl-app-img {
  width: 35px;
  height: 43px;
  float: left;
  margin: 5px 0 0 5px;
  border-radius: 20px;
}
.text-android-download-alert-wrapper {
  display: grid;
  grid-template-rows: 20px 20px;
  row-gap: 15px;
}
.android-apk-download {
  border: 0;
  border-radius: 50px;
  width: 134px;
  height: 40px;
  float: left;
}
.default-button-full-with {
  height: 20px;
  margin-bottom: 0;
  margin-top: 10px;
}
.default-button-half-with {
  width: 65%;
  border-radius: 8px;
}
</style>
<template>
  <div id="downloadAppCard" :class="className" class="download-app-wrapper row">
    <button
      class="close-android-download-alert-wrapper placeholder-content"
    ></button>

    <div class="col-md-12 download-app-info">
      <div class="m-t-b">
        <span class="dl-app-img placeholder-content"></span>
      </div>
      <div class="text-android-download-alert-wrapper">
        <span class="placeholder-content default-button-full-with"></span>
        <span class="placeholder-content default-button-half-with"></span>
      </div>
    </div>
    <div class="col-md-12">
      <button class="android-apk-download placeholder-content"></button>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'className'
  ],
};
</script>

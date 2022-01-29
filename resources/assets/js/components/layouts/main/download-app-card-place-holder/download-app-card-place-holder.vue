
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
.close-android-download-alert-wrapper span {
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
  border: 0;
  border-radius: 50px;
  width: 113px;
  height: 40px;
  float: left;
}
</style>
<template>
  <div id="downloadAppCard" :class="className" class="download-app-wrapper row">
    <button
      
      class="close-android-download-alert-wrapper"
    >
    <div class="placeholder-content"></div>
     
    </button>

    <div  class="col-md-12 download-app-info">
      <div class="m-t-b">
        <span class="dl-app-img placeholder-content"></span>
        
      </div>
      <div class="text-android-download-alert-wrapper m-t-b">
        <p class="android-download-title">
          <span class="placeholder-content
                          default-button-full-with"></span>
        </p>
      </div>
    </div>
    <div class="col-md-12">
      <button class="android-apk-download placeholder-content"></button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

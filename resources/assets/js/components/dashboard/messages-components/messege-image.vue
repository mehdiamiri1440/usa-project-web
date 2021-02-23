


<style scoped>
.message-image {
  text-align: center;
  height: 210px;
  position: relative;
  overflow: hidden;
}
.message-product-image {
  width: 130px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  float: right;
  background: #eee;
}
.message-product-image img {
  width: initial;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.message-image .spinner-wrapper {
  position: relative;
  top: 75px;
}
.message-image .spinner-border {
  width: 5rem;
  height: 5rem;
  border-width: 0.35rem;
  color: #21ad93;
}
@media screen and (max-width: 420px) {
  .message-image {
    height: 150px;
  }

  .message-product-image {
    width: 80px;
    height: 80px;
  }
}
</style>

<template>
  <div
    :class="{ 'message-image': !isProduct, 'message-product-image': isProduct }"
    v-if="img"
  >
    <div v-if="!isProduct">
      <a
        v-show="isImageLoad"
        class="image-popup-no-margins"
        :href="base + '/' + img"
      >
        <img :src="base + '/' + img" @load="ImageLoaded" :alt="alt" />
      </a>
    </div>
    <div v-else>
      <img
        v-show="isImageLoad"
        :src="base + '/' + img"
        @load="ImageLoaded"
        :alt="alt"
      />
    </div>
    <div class="spinner-wrapper">
      <div v-show="!isImageLoad" class="spinner-border">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>

  <!-- <div class="image-wrapper">
    <a v-show="isImageLoad" :href="base + img">
      <transition>
        <img :src="base + img" @load="ImageLoaded" :alt="alt" />
      </transition>
    </a>

    <div v-show="!isImageLoad" class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> -->

  <!-- <span v-text="alt" class="lds-ring-alt"></span> -->
  <!-- </div> -->
</template>

<script>
export default {
  data: function () {
    return {
      imgSrcs: "",
      isImageLoad: false,
    };
  },
  props: ["base", "img", "alt", "isProduct"],
  methods: {
    loadImage: function () {
      this.isImageLoad = false;
    },
    ImageLoaded: function () {
      this.isImageLoad = true;
    },
    activeImagePopup() {
      setTimeout((_) => {
        $(".image-popup-no-margins").magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
          image: {
            verticalFit: true,
          },
          zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
          },
        });
      }, 10);
    },
  },
  mounted() {
    this.activeImagePopup();
  },
  created() {
    this.loadImage();
  },
};
</script>



<style scoped>
@import url("../../../../../../css/owl-product-view-style.css");
.spinner-border {
  width: 5rem;
  height: 5rem;
  border-width: 0.3em;
  color: #d0d0d0;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
}
.image-wrapper {
  border-radius: 12px;
}
</style>

<template>
  <div v-if="index == 0" class="image-wrapper">
    <!-- this is work for preload images and improve google analytics -->
    <image-preloader :src="base + img" @loaded="ImageLoaded" />
    <a v-if="isImageLoad" :href="base + img">
      <img :src="base + img" :alt="alt" />
    </a>

    <div v-show="!isImageLoad" class="text-center">
      <div class="spinner-border">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
  <div v-else class="image-wrapper">
    <!-- this is work for preload images and improve google analytics -->
    <a v-show="isImageLoad" :href="base + img">
      <img
        class="owl-lazy"
        :data-src="base + img"
        @load="ImageLoaded"
        :alt="alt"
      />
    </a>

    <div v-show="!isImageLoad" class="text-center">
      <div class="spinner-border">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</template>

<script>
import owlCarousel from "../../../../../scripts/owl.carousel.min.js";
import magnificPopup from "../../../../../scripts/jquery.magnific-popup.min";
import { imagePreloader } from "vue-image-preloader";
export default {
  components: {
    imagePreloader,
  },
  data: function () {
    return {
      imgSrcs: "",
      isImageLoad: false,
    };
  },
  props: [
    "productImages",
    "str",
    "productName",
    "categoryName",
    "cityName",
    "provinceName",
    "img",
    "base",
    "popUpLoaded",
    "alt",
    "index",
  ],
  mounted: function () {
    if (this.index != 0) {
      this.loadCarousel();
    }
  },
  created: function () {
    this.loadImage();
  },
  methods: {
    loadImage: function () {
      this.isImageLoad = false;
    },
    ImageLoaded: function () {
      this.isImageLoad = true;
    },
    loadCarousel() {
      $(".owl-carousel.main-product-carousel").owlCarousel({
        loop: false,
        items: 1,
        margin: 10,
        lazyLoad: true,
        nav: true,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        dots: true,
      });
      $(this.$el)
        .parent()
        .parent()
        .parent()
        .magnificPopup({
          delegate: "a",
          type: "image",
          removalDelay: 100,
          mainClass: "mfp-fade",
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
          },
          callbacks: {
            open: function () {
              if (!window.history.state) {
                window.history.pushState({ pushed: true }, "", "/product-list");
              }

              $(window).on("popstate", function (e) {
                $.magnificPopup.close();
              });
            },
          },
        });
    },
  },
  watch: {
    isImageLoad(value) {
      if (value && this.index == 0) {
        this.$nextTick(() => {
          this.loadCarousel();
        });
      }
    },
  },
};
</script>

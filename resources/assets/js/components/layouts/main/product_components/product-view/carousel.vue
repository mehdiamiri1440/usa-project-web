

<style scoped>
.spinner-border {
  width: 6rem;
  height: 6rem;
  border-width: 0.3em;
  color: #00c569;
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
}
</style>

<template>
  <div class="image-wrapper">
    <a v-show="isImageLoad" :href="base + img">
      <transition>
        <img
          class="owl-lazy"
          :data-src="base + img"
          @load="ImageLoaded"
          :alt="alt"
        />
      </transition>
    </a>

    <div v-show="!isImageLoad" class="text-center">
      <div class="spinner-border">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import owlCarousel from "../../../../../owl.carousel.min.js";
import magnificPopup from "../../../../../jquery.magnific-popup.min";

export default {
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
  ],
  mounted: function () {
    $(".owl-carousel").owlCarousel({
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
  },
};
</script>

<style scoped>
/*preloader image style*/

.carousel-img {
  height: 135px;

  overflow: hidden;

  position: relative;

  display: block;
}

.main-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 300ms;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0;
  transition: 150ms;
}

.main-image-load {
  opacity: 1;
}

.carousel-title {
  font-size: 16px;

  direction: rtl;

  font-weight: bold;

  color: #4b4b4b;
}
.carousel-title h4 {
  text-overflow: ellipsis;

  overflow: hidden;

  white-space: nowrap;

  padding: 0 10px;

  margin-top: 10px;

  margin-bottom: 9px;
}

.stock-wrapper {
  font-size: 14px;

  direction: rtl;

  font-weight: bold;

  color: #00c569;

  margin-bottom: 5px;

  display: inline-block;
}
.spinner-border {
  width: 5.5rem;
  height: 5.5rem;
  border-width: 0.35em;
  color: #d0d0d0;
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
}
.inquiry-button.green-button {
  padding: 4px 15px;
  margin: 10px auto 15px;
}
</style>

<template>
  <article class="carousel-item box-content">
    <router-link :to="link" class="carousel-img text-center">
      <img
        loading="lazy"
        :src="img"
        @load="ImageLoaded"
        class="main-image"
        :class="{ 'main-image-load': isImageLoad }"
      />

      <div v-if="!isImageLoad" class="spinner-border">
        <span class="sr-only"></span>
      </div>
    </router-link>

    <router-link class="carousel-title" :to="link" v-if="title.length >= 20">
      <h4 v-text="title.substring(0, 15) + ' ...'"></h4>
    </router-link>
    <router-link :to="link" class="carousel-title" v-else>
      <h4 v-text="title"></h4>
    </router-link>

    <router-link :to="link" class="stock-wrapper">
      <span>موجودی</span>
      <span v-text="stock"></span>
    </router-link>
    <div class="inquiry-button-wrapper">
      <button class="inquiry-button green-button" v-if="inquiryButtonActive">
        استعلام شرایط فروش
      </button>
    </div>
  </article>
</template>

<script>
import owlCarousel from "../../../../owl.carousel.min.js";

export default {
  data: function () {
    return {
      isImageLoad: false,
      inquiryButtonActive: this.inquiryButton ? true : false,
    };
  },
  props: [
    "img",
    "title",
    "link",
    "stock",
    "column",
    "autoPlay",
    "inquiryButton",
  ],
  mounted: function () {
    $(".latest-product .owl-carousel").owlCarousel({
      autoplay: this.autoplay ? this.autoplay : true,
      autoplayTimeout: 3000,
      loop: false,
      rewind: true,
      nav: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      mouseDrag: true,
      margin: 30,
      dots: true,
      stagePadding: 15,
      rtl: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 15,
          navText: false,
          dots: true,
        },
        450: {
          items: 2,
          stagePadding: 15,
          navText: false,
          dots: true,
        },
        992: {
          items: 3,
          stagePadding: 15,
        },
        1199: {
          items: this.column,
          stagePadding: 15,
        },
      },
    });
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

<style scoped>
/* preloader image style*/

.box-content {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 15px;
  text-align: center;
  line-height: 1.618;
  overflow: hidden;
}

.lds-ring {
  display: inline-block;

  position: absolute;

  width: 64px;

  height: 64px;

  left: 50%;

  top: 50%;

  transform: translate(-50%, -50%);
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 5px solid #28a745;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #28a745 transparent transparent transparent;
}

.lds-ring-alt {
  display: block;
  margin-top: 50px;
  direction: rtl;
  text-align: center;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*preloader image style*/

.carousel-img {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  display: block;
  border-radius: 50px;
  margin: 0 auto 0;
  background: #f6f6f6;
}

.main-image {
  position: absolute;

  top: 50%;

  left: 50%;

  transition: 300ms;

  transform: translate(-50%, -50%);
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

  font-size: 16px;
}

.stock-wrapper {
  font-size: 13px;
  direction: rtl;
  font-weight: 400;
  color: #777;

  margin-bottom: 5px;

  display: inline-block;
}
.inquiry-button.green-button {
  padding: 4px 15px;
  margin: 10px auto 15px;
}
</style>

<template>
  <article class="carousel-item box-content">
    <div class="carousel-img">
      <div v-show="isImageLoad">
        <transition v-if="img">
          <img @load="ImageLoaded" :src="img" class="main-image" />
        </transition>
        <transition v-else>
          <img @load="ImageLoaded" src="../../../../../img/user-defult.png" />
        </transition>
      </div>

      <div v-show="!isImageLoad" class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="carousel-title" v-if="title.length >= 20">
      <h4 v-text="title.substring(0, 15) + ' ...'"></h4>
    </div>
    <div class="carousel-title" v-else>
      <h4 v-text="title"></h4>
    </div>

    <div class="stock-wrapper">
      <span v-text="city"></span>
    </div>
  </article>
</template>

<script>
import owlCarousel from "../../../../owl.carousel.min.js";

require("../../../../../css/owl.carousel.min.css");
require("../../../../../css/owl.theme.default.min.css");
require("../../../../../css/magnific-popup.css");
require("../../../../../css/owl-custom-style.css");

export default {
  data: function () {
    return {
      isImageLoad: false,
    };
  },
  props: ["img", "title", "city", "parentClass"],
  methods: {
    created: function () {
      this.loadImage();
    },
    loadImage: function () {
      this.isImageLoad = false;
    },
    runOwlCarousel: function () {
      $(this.parentClass).owlCarousel({
        autoplayTimeout: 3000,
        autoplay: true,
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
          400: {
            items: 2,
            stagePadding: 15,
            navText: false,
            dots: true,
          },
          600: {
            items: 3,
            stagePadding: 15,
          },
          992: {
            items: 4,
            stagePadding: 15,
          },
          1199: {
            items: 5,
            stagePadding: 15,
          },
        },
      });
    },
    ImageLoaded: function () {
      this.isImageLoad = true;
    },
  },
  mounted: function () {
    this.runOwlCarousel();
  },
};
</script>

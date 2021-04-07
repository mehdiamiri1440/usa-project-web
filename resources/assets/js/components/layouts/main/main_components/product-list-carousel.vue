<style scoped>
/* preloader image style*/
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
.inquiry-button.green-button {
  padding: 4px 15px;
  margin: 10px auto 15px;
}
</style>

<template>
  <article class="carousel-item box-content">
    <router-link :to="link" class="carousel-img">
      <div v-show="isImageLoad">
        <transition>
          <img @load="ImageLoaded" :src="img" class="main-image" />
        </transition>
      </div>

      <div v-show="!isImageLoad" class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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
    created: function () {
      this.loadImage();
    },
    loadImage: function () {
      this.isImageLoad = false;
    },
    ImageLoaded: function () {
      this.isImageLoad = true;
    },
  },
};
</script>

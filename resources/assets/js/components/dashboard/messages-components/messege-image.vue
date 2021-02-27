


<style scoped>
.message-image {
  text-align: center;
  height: 445px;
  position: relative;
  overflow: hidden;
  background: #eee;
  margin-bottom: 15px;
}

.message-image a {
  display: block;
}

.message-image a img {
  width: 100%;
  height: initial;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.message-product-image {
  width: 100%;
  height: 431px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  float: right;
  background: #eee;
}

.message-product-image img {
  width: 100%;
  height: initial;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.spinner-wrapper {
  position: relative;
  top: calc(50% - 25px);
  text-align: center;
}
.spinner-border {
  width: 5rem;
  height: 5rem;
  border-width: 0.35rem;
  color: #21ad93;
}

.set-height {
  width: initial !important;
  height: 100% !important;
}

@media screen and (max-width: 1199px) {
  .message-image {
    height: 413px;
  }
  .message-product-image {
    height: 399px;
  }
}
@media screen and (max-width: 500px) {
  .message-image {
    height: 288px;
  }

  .message-product-image {
    height: 280px;
  }
}
@media screen and (max-width: 375px) {
  .message-image {
    height: 279px;
  }

  .message-product-image {
    height: 265px;
  }
}
</style>

<template>
  <div
    :class="{ 'message-image': !isProduct, 'message-product-image': isProduct }"
    v-if="img"
  >
    <div class="spinner-wrapper">
      <div v-show="!isImageLoad" class="spinner-border">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="h-100" v-if="!isProduct">
      <a
        v-show="isImageLoad"
        class="image-popup-no-margins"
        :href="base + '/' + img"
      >
        <img
          :id="imgId"
          :src="base + '/' + img"
          @load="ImageLoaded"
          :alt="alt"
        />
      </a>
    </div>
    <div class="h-100" v-else>
      <img
        v-show="isImageLoad"
        :id="imgId"
        :src="base + '/' + img"
        @load="ImageLoaded"
        :alt="alt"
      />
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
  props: ["base", "img", "alt", "isProduct", "imgId"],
  methods: {
    loadImage: function () {
      this.isImageLoad = false;
    },
    ImageLoaded: function () {
      this.isImageLoad = true;
      this.setImagewidthAndHeight();
    },
    setImagewidthAndHeight() {
      let element = $("#" + this.imgId);
      let elementWidth = element.prop("naturalWidth");
      let elementHeight = element.prop("naturalHeight");
      if (elementHeight < elementWidth) {
        element.attr("class", "set-height");
      }
    },
    activeImagePopup() {
      let self = this;
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
          callbacks: {
            open: function () {
              console.log("handle back");
              self.handleBackKeys();
            },
          },
        });
      }, 10);
    },
    handleBackKeys: function () {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $.magnificPopup.close();
      });
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

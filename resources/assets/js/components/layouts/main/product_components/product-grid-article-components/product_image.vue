<style scoped>
/*preloader image style*/
.main-article-image {
  display: block;
  background-color: #404b55;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 140px;

  overflow: hidden;

  position: relative;
}
.main-article-image .product-image {
  display: block;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.image-wrapper-contents {
  position: relative;
  z-index: 1;
  height: 100%;
}

.image-count-item {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 9px 3px;
  color: #fff;
  border-radius: 50px;
}
.spinner-border {
  position: absolute;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  color: #21ad93;
  width: 4rem;
  height: 4rem;
  vertical-align: text-bottom;
  border-width: 0.35rem;
}

.article-title {
  position: absolute;
  bottom: 0;
  min-height: 40px;
  width: 100%;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  display: flex;
  align-items: center;
  padding-top: 6px;
}

.article-title a {
  font-size: 15px;
  padding: 0 5px;
  color: #ebebeb;
  overflow: hidden;
  height: 25px;
  line-height: 1.618;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.valid-user-badge {
  width: 30px;
  height: 35px;
  background: #00c569;
  position: absolute;
  left: 10px;
  top: 0;
  padding: 0px 3px;
  border-top: 3px solid #00b761;
  text-align: center;
  color: #fff !important;
}

.valid-user-badge::after {
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 15px 14px;
  border-color: transparent #00c569 transparent #00c569;
  line-height: 0;
  _border-color: #000000 #000000 #000000 #6980fe;
  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
  content: "";
  position: absolute;
  left: 0;
  bottom: -14px;
}
@media screen and (max-width: 555px) {
  .main-article-image {
    height: 130px;
  }
}
</style>

<template>
  <router-link :to="productUrl" class="main-article-image">
    <div
      class="product-image"
      :style="{
        backgroundImage: 'url(' + base + 'thumbnails/' + img + ')',
      }"
    ></div>
    <div v-show="!isImageLoad" class="text-center spinner-wrapper">
      <div class="spinner-border">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="image-wrapper-contents">
      <div
        class="valid-user-badge"
        v-if="$parent.product.user_info.active_pakage_type == 3"
      >
        <div class="wrapper-icon">
          <svg width="24.965" height="30.574" viewBox="0 0 24.965 30.574">
            <g
              id="buskool-icon"
              data-name="buskool"
              transform="translate(-273.1 -715.025)"
            >
              <path
                id="Subtraction_1"
                data-name="Subtraction 1"
                d="M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z"
                transform="translate(2237.1 709.808)"
                fill="#fff"
              />
              <g id="Group_24" data-name="Group 24">
                <path
                  id="Rectangle_12"
                  data-name="Rectangle 12"
                  d="M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                  transform="translate(282.389 717.5) rotate(45)"
                  fill="#fff"
                />
                <path
                  id="Rectangle_13"
                  data-name="Rectangle 13"
                  d="M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z"
                  transform="translate(294.935 718.561) rotate(135)"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <img
        class="hidden"
        :src="base + 'thumbnails/' + img"
        @load="ImageLoaded"
        :alt="alt"
      />

      <div v-if="imageCount" class="image-count-item">
        <i class="fas fa-images"></i>
        <span v-text="imageCount"></span>
      </div>
      <h3 class="article-title">
        <router-link
          :to="$parent.productUrl"
          v-html="getProductName()"
        ></router-link>
      </h3>
    </div>
  </router-link>
</template>

<script>
export default {
  data: function () {
    return {
      imgSrcs: "",
      isImageLoad: false,
    };
  },
  props: ["img", "base", "popUpLoaded", "alt", "imageCount", "productUrl"],

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
    getProductName: function () {
      var productName = "";
      productName =
        this.$parent.product.main.sub_category_name +
        ' <span style="color: #fff">' +
        this.$parent.product.main.product_name +
        "</span>";
      return productName;
    },
  },
};
</script>

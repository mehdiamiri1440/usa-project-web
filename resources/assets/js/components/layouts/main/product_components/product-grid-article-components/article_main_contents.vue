<style>
body {
  padding-right: 0 !important;
}
</style>
<style scoped>
.main-article-contents p span:first-of-type {
  color: #777;
  width: 13px;
  display: inline-block;
  text-align: center;
  margin-left: 8px;
}

.main-article-contents-wrapper {
  overflow: hidden;
  display: block;
}

.main-article-contents-image-wrapper,
.main-article-contents {
  float: right;

  padding: 15px;

  padding-left: 0;
}

.main-article-contents > a {
  display: block;
  float: right;
}

.main-article-contents {
  color: #474747;
}

.main-article-contents p {
  font-size: 13px;

  color: #777;

  font-weight: 500;

  max-width: 500px;

  overflow: hidden;

  height: 30px;

  line-height: 1.618;

  white-space: nowrap;

  text-overflow: ellipsis;

  padding: 0 2px;

  margin-bottom: 5px;
}

.main-article-contents p:last-of-type {
  border: none;
  margin-bottom: 5px;
}

.share-link {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 11px;
  border: 1px solid;
  border-radius: 4px;
  padding: 0 5px;
  color: #777 !important;
  line-height: 21px;
}

.text-danger {
  height: 24px;
}

.main-article-contents h1,
.main-article-contents h3,
.main-article-contents a p {
  max-width: 300px;
}

.main-article-contents a p {
  font-size: 12px;
}

.share-link span {
  display: none;
}

.main-article-contents-image-wrapper,
.main-article-contents {
  padding-right: 10px;
}

.main-article-contents {
  float: right;
  width: 100%;
  position: relative;
  padding-bottom: 0;
  padding: 9px 5px 0;
}

.product-description {
  display: none;
}

.pointer-class {
  cursor: pointer;
}
</style>
<template>
  <div
    class="main-article-contents-wrapper pointer-class"
    :class="{
      'is-user-valid-content':
        $parent.product.user_info.active_pakage_type != 3,
    }"
  >
    <div class="main-article-contents" @click="$parent.setScroll()">
      <p>
        <span>
          <i class="fa fa-map-marker-alt"></i>
          <!-- استان / شهر: -->
        </span>
        <span
          style="color: #474747"
          v-text="
            $parent.product.main.province_name +
            ' - ' +
            $parent.product.main.city_name
          "
        ></span>
      </p>

      <p>
        <span>
          <i class="fa fa-box-open"></i>
          <!-- موجودی: -->
        </span>
        <span
          style="color: #474747"
          v-text="getConvertedNumbers($parent.product.main.stock)"
        ></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productIndex", "is_my_profile_status"],

  methods: {
    isDeviceMobile: function () {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      } else {
        return false;
      }
    },
    getProductLinkTarget: function () {
      // if (this.isDeviceMobile()) {
      //   return "_blank";
      // }

      return "_self";
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    getConvertedNumbers: function (number) {
      if (number || typeof number === "number") {
        let data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
    },
  },
};
</script>

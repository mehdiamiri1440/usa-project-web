<style>
body {
  padding-right: 0 !important;
}
</style>
<style scoped>
.main-article-contents p a,
span {
  color: #474747;
}

.main-article-contents h3 a {
  color: #777;
}
.main-article-contents h3 {
  font-size: 16px;

  font-weight: bold;

  max-width: 240px;

  overflow: hidden;

  height: 25px;

  line-height: 1.618;

  white-space: nowrap;

  text-overflow: ellipsis;

  margin-bottom: 10px;
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

.main-article-contents {
  float: right;
  width: calc(100% - 155px);
  position: relative;
  padding: 15px;
  padding-right: 10px;
}

.main-article-contents > a {
  display: block;
  float: right;
}

.main-article-contents {
  color: #474747;
}

.main-article-contents p {
  font-size: 15px;

  font-weight: bold;

  color: #777;

  max-width: 500px;

  overflow: hidden;

  height: 25px;

  line-height: 1.618;

  white-space: nowrap;

  text-overflow: ellipsis;

  margin-bottom: 10px;
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

.valid-user-badge {
  width: 36px;
  height: 38px;
  background: #00c569;
  position: absolute;
  left: 14px;
  top: 0;
  padding: 2px;
  border-top: 3px solid #00b761;
  text-align: center;
  color: #fff !important;
}

.valid-user-badge::after {
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 18px 14px;
  border-color: transparent #00c569 transparent #00c569;
  line-height: 0;
  _border-color: #000000 #000000 #000000 #6980fe;
  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
  content: "";
  position: absolute;
  left: 0;
  bottom: -14px;
}

.text-danger {
  height: 24px;
}

@media screen and (max-width: 767px) {
  .main-article-contents a p {
    max-width: 300px;
  }
}
@media screen and (max-width: 555px) {
  .main-article-contents h1,
  .main-article-contents h3,
  .main-article-contents a p {
    max-width: 150px;
    font-size: 17px;
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

    width: calc(100% - 100px);

    padding-right: 10px;

    position: relative;

    padding-bottom: 0;
  }
  .product-description {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .main-article-contents h1,
  .main-article-contents h3,
  .main-article-contents a p {
    max-width: 300px;
  }

  .share-link span {
    display: none;
  }
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
    <div class="main-article-contents-image-wrapper" @click="setScroll()">
      <ProductImage
        :base="$parent.str + '/'"
        :img="$parent.product.photos[0].file_path"
        :alt="
          'فروش عمده ی ' +
          $parent.product.main.sub_category_name +
          ' ' +
          $parent.product.main.product_name +
          ' ' +
          $parent.product.main.city_name +
          ' - ' +
          $parent.product.main.province_name
        "
        :image-count="$parent.product.main.photos_count"
        :product-url="$parent.productUrl"
      />
    </div>
    <div class="main-article-contents" @click="setScroll()">
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
      <div>
        <h3 class="article-title">
          <router-link
            :to="$parent.productUrl"
            v-html="getProductName()"
          ></router-link>
        </h3>

        <p>
          استان / شهر:
          <span
            v-text="
              $parent.product.main.province_name +
              ' - ' +
              $parent.product.main.city_name
            "
          ></span>
        </p>

        <p v-if="$parent.product.main.description" class="product-description">
          توضیحات
          <router-link
            v-if="$parent.product.main.description < 100"
            :to="$parent.productUrl"
            v-html="$parent.product.main.description"
          ></router-link>

          <router-link
            v-else
            :to="$parent.productUrl"
            v-html="$parent.product.main.description.substring(0, 100)"
          ></router-link>
        </p>

        <p>
          مقدار موجودی:
          <span v-text="getConvertedNumbers($parent.product.main.stock)"></span>
        </p>
      </div>

      <router-link
        to="#"
        @click.prevent="$parent.copyProductLinkToClipBoard"
        class="share-link hidden"
      >
        <i class="fa fa-share"></i>
        <span>اشتراک گذاری</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductImage from "./product_image";

export default {
  props: ["productIndex", "is_my_profile_status"],
  components: {
    ProductImage,
  },
  methods: {
    setScroll: function () {
      localStorage.setItem("scrollIndex", this.$props.productIndex);

      if (
        this.isDeviceMobile() &&
        window.location.pathname.includes("product-list")
      ) {
        window.open(this.$parent.productUrl, "_blank");
      } else {
        this.$router.push(this.$parent.productUrl);
      }
      this.$parent.registerComponentStatistics(
        "product",
        "show-product-in-seperate-page",
        "show-product-in-seperate-page"
      );
    },
    getProductName: function () {
      var productName = "";
      productName =
        this.$parent.product.main.category_name +
        " | " +
        this.$parent.product.main.sub_category_name +
        ' <span style="color: #474747">' +
        this.$parent.product.main.product_name +
        "</span>";
      // if (this.$route.params.categoryName) {
      //     productName =
      //         this.$parent.product.main.category_name
      //         + ' | '
      //         + this.$parent.product.main.sub_category_name
      //         + ' <h2 style="color: #777">'
      //         + this.$parent.product.main.product_name
      //         + '</h2>';
      // } else {
      //     productName =
      //         this.$parent.product.main.category_name
      //         + ' | '
      //         + this.$parent.product.main.sub_category_name
      //         + ' <span style="color: #777">'
      //         + this.$parent.product.main.product_name
      //         + '</span>';
      // }

      return productName;
    },
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

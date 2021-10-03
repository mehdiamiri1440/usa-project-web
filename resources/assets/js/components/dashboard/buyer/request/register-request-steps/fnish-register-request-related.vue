
<style scoped>
.static-item a {
  color: #1da1f2;
}
.static-item a:hover {
  color: #337ab7;
}

.buttons-wrapper {
  margin: 15px auto 80px;
  text-align: center;
}

.buttons-wrapper .green-button {
  width: initial;
  font-size: 16px;
  padding: 8px 20px;
}

.main-article-wrapper {
  margin-bottom: 35px;
}

h2 {
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 10px;
}

.main-text {
  font-size: 15px;
}

p {
  line-height: 1.618;
  font-weight: bold;
}

.header-contents {
  background: #fff;
  margin: 15px auto 30px;
  padding: 15px;
}

.default-main-article {
  background: #fff;
}

@media screen and (max-width: 1199px) {
  .main-content-wrapper {
    padding: 0;
  }
}

@media screen and (max-width: 991px) {
  .header-contents-wrapper {
    padding: 0;
  }

  .header-contents {
    background: #fff;

    margin: 0 auto 30px;

    padding: 15px;

    border-radius: 0;
  }
}
</style>

<template>
  <main class="main-content-wrapper">
    <div v-if="products">
      <finish-step-article
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        :str="str"
      />
    </div>

    <div class="buttons-wrapper static-item col-xs-12">
      <router-link :to="{ name: 'productList' }">
        مشاهده همه محصولات <i class="fa fa-arrow-left"></i>
      </router-link>
    </div>
  </main>
</template>

<script>
import FinishStepArticle from "./finish-step-components/finish-step-article";

export default {
  props: ["products", "str", "verifiedUserContent"],
  components: {
    FinishStepArticle,
  },
  methods: {
    openChat: function (product) {
      this.$parent.openChat(product);
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
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
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
  },
};
</script>

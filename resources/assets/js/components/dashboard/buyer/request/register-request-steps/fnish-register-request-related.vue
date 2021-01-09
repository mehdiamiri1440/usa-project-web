
<style scoped>
.buttons-wrapper {
  margin: 15px auto;
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
  <!-- <header
        class="header-contents-wrapper text-center text-rtl col-xs-12"
        v-if="products"
      >
       <p class="main-text text-rtl">
            تعدادی از مرتبط ترین محصولات برای درخواست خرید شما در زیر نمایش داده
            شده است.
          </p>
          <p class="red-text">
            در صورت عدم ارسال پیام به فروشنده ها دیگر به این محصولات دسترسی
            نخواهید داشت.
          </p>
      </header> -->

  <main class="main-content-wrapper">
    <div v-if="products">
      <finish-step-article
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        :str="str"
      />
    </div>

    <div class="buttons-wrapper col-xs-12">
      <router-link
        :to="{ name: 'productList' }"
        class="green-button blue-button"
        >مشاهده همه محصولات</router-link
      >
    </div>
  </main>
</template>

<script>
import FinishStepArticle from "./finish-step-components/finish-step-article";

export default {
  props: ["products", "str"],
  components: {
    FinishStepArticle,
  },
  methods: {
    openChat: function (product) {
      this.$parent.openChat(product);
    },
  },
};
</script>

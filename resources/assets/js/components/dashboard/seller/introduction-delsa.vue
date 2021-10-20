<style scoped>
.image-wrapper {
  max-width: 270px;
  margin: 0 auto;
}
.delsa-description-wrapper {
  text-align: center;
  direction: rtl;
  line-height: 30px;
}
.delsa-description-wrapper h1 {
  font-size: 16px;
  color: #000;
  font-weight: 500;
}
.delsa-description-wrapper p {
  font-size: 13px;
  color: #000;
}

@media screen and (max-width: 767px) {
}
</style>
<template>
  <section class="main-content col-xs-12">
    <div class="intro-delsa">
      <div class="image-wrapper">
        <img src="../../../../img/intro-delsa.gif" alt="دلسا" />
      </div>
      <div class="delsa-description-wrapper">
        <h1>دلسا هستم; منشی آنلاین شما!</h1>
        <p>قصد انجام چه کاری دارید؟</p>
      </div>
      <div class="actions-wrapper">
        <div class="col-xs-12">
          <router-link
            tag="button"
            :to="{ name: 'registerProductSeller' }"
            class="default-btn-with-icon"
          >
            <div class="button-main-icon-wrapper">
              <i class="fa fa-box-open"></i>
            </div>
            <div class="button-content-wrapper">
              <p class="button-title single-title">محصول برای فروش دارم</p>
            </div>
            <i class="fa fa-angle-left"></i>
          </router-link>
          <router-link
            tag="button"
            :to="{ name: 'buyAdRequestsSeller' }"
            class="default-btn-with-icon"
          >
            <div class="button-main-icon-wrapper">
              <i class="fa fa-tag"></i>
            </div>
            <div class="button-content-wrapper">
              <p class="button-title single-title">قیمت محصولات را می خواهم</p>
            </div>
            <i class="fa fa-angle-left"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../../router/router";

export default {
  data: function () {
    return {
      items: [
        {
          message: "راهنما",
          url: "guide",
        },
      ],
    };
  },
  mounted() {
    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/guide" });
  },
};
</script>

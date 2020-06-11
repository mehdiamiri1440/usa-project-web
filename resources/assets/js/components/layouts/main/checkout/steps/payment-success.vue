<style scoped>
.page-icon {
  font-size: 50px;
  color: #00c569;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  padding-top: 23px;
  margin: 15px auto;
  background: #c5ffe4;
}
.big-text {
  font-size: 20px;
  margin: 15px auto;
}
</style>

<template>
  <div class="confirm-product-contents">
    <section class="product-section-wrapper text-center">
      <div class="main-content-wrapper">
        <p class="page-icon">
          <i class="fa fa-check"></i>
        </p>
        <p class="big-text">با تشکر از خرید شما</p>
        <p class="big-text green-text">
          سفارش شما با کد :
          <span>321321312</span>
          در سیستم ثبت شد
        </p>
        <p class>مراحل ارسال سفارشتان از طریق پیامک به اطلاع شما خواهد رسید</p>
        <router-link
          :to="{name : 'productList'}"
          class="green-button bg-gray big-text hover-effect"
        >مشاهده محصولات</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      sex: "",
      errors: {
        first_name: [],
        last_name: [],
        sex: [],
        city: [],
        password: []
      }
    };
  },
  methods: {
    init: function() {},
    getNumberWithCommas: function(number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>
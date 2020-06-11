
<style scoped>
.page-icon {
  font-size: 50px;
  color: #e41c38;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  padding-top: 23px;
  margin: 15px auto;
  background: #ffdade;
}
.big-text {
  font-size: 20px;
  margin: 15px auto;
}
</style>

<template>
  <div class="confirm-product-contents">
    <section class="product-section-wrapper text-rtl text-center">
      <div class="main-content-wrapper">
        <p class="page-icon">
          <i class="fa fa-times"></i>
        </p>
        <p class="big-text">پرداخت منقضی شده است</p>
        <p class="big-text red-text">پرداخت شما منقضی شده است لطفا مجدادا محصول خود را خریداری کنید</p>
        <router-link
          :to="{name : 'productList'}"
          class="green-button big-text hover-effect"
        >خرید مجدد</router-link>
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
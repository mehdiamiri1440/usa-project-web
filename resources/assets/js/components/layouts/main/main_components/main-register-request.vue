<style scoped>
.header-request h2 {
  font-size: 22px;
  margin: 0;
  margin-bottom: 15px;
}
</style>

<template>
  <div class="main-content-index-pages">
    <div class="container">
      <div class="row">
        <div class="header-request wrapper-bg text-center col-xs-12">
          <h2>
            ثبت درخواست خرید
          </h2>
          <p>
            برای ثبت درخواست خرید فرم زیر را کامل کنید
          </p>
        </div>

        <div class="main-request-content">
          <main-register-request-form wrapper-bg="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainRegisterRequestForm from "./main-register-request-form";

export default {
  components: {
    mainRegisterRequestForm,
  },
};
</script>

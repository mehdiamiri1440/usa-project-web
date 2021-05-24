<style scoped>
p,
span {
  line-height: 1.5;
}
.from-wrapper {
  max-width: 510px;
  margin: 44px auto 70px;
  overflow: hidden;
  padding-top: 5px;
}

.register-loader-wrapper p {
  font-size: 16px;
  color: #595959;
  font-weight: bold;
  margin-top: 23px;
}

.spinner-border {
  width: 70px;
  height: 70px;
  color: #00c569;
  border-width: 4px;
}
</style>

<template>
  <div class="text-rtl from-wrapper">
    <div class="form-contents col-xs-12">
      <div class="row">
        <div class="col-xs-12 register-loader-wrapper pull-right text-center">
          <div class="spinner-border">
            <span class="sr-only"></span>
          </div>
          <p>لطفا کمی صبر کنید …</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep(route) {
      this.$parent.route = route;
      this.$parent.goToStep(5);
    },
  },
};
</script>

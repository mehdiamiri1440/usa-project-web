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

.title-contents {
  font-weight: 500;
  font-size: 18px;
  color: #555;
  margin-bottom: 16px;
}

.form-contents {
  line-height: 1.618;
}

.form-contents label {
  font-weight: 500;
  color: #777;
  margin: 0 auto 7px;
}

.input-wrapper {
  margin: 0 auto;
  position: relative;
}

.step-action {
  margin-top: 40px;
}
.submit-button {
  background: #e0e0e0;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 18px;
  padding: 8px;
  transition: 150ms;
  cursor: default;
  max-width: 147px;
  display: inline-block;
}

.submit-button.back-button {
  background: #fff;
  color: #909090;
  border: 1px solid #bebebe;
  cursor: pointer;
  max-width: 127px;
}

.submit-button.active {
  background: #00c569;
  cursor: pointer;
}
.submit-button.active:hover i {
  right: 3px;
  transition: 150ms;
}

.submit-button i {
  position: relative;
  top: 1px;
  font-size: 14px;
  right: 0;
  transition: 150ms;
}

.submit-button i {
  position: relative;
  top: 1px;
  font-size: 14px;
  right: 0;
  transition: 150ms;
}

.item-button-wrapper button {
  position: relative;
  top: 0;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: 150ms;
  background: #556080;
  border: none;
  border-radius: 12px;
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 20px 0 15px;
}

.item-button-wrapper button:hover {
  top: -5px;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  transition: 150ms;
}

.item-button-wrapper button img {
  width: 50px;
  height: 50px;
  margin: -1px auto 0;
  display: block;
}

.item-button-wrapper button .text {
  display: block;
  margin-top: 10px;
}

.item-button-wrapper button .title {
  font-weight: 500;
  font-size: 23px;
}
</style>

<template>
  <div class="text-rtl from-wrapper">
    <div class="form-contents col-xs-12">
      <div class="row">
        <div class="col-xs-6 item-button-wrapper pull-right">
          <button @click.prevent="nextStep(1)">
            <img src="../../../../../../img/paper-dollar.svg" />
            <span class="text"> همراه با قیمت </span>
            <span class="title"> می خواهم بخرم </span>
          </button>
        </div>

        <div class="col-xs-6 item-button-wrapper pull-right">
          <button @click.prevent="nextStep(1)">
            <img src="../../../../../../img/dollar.svg" />
            <span class="text"> فقط می خواهم </span>
            <span class="title"> قیمت بگیرم </span>
          </button>
        </div>
      </div>
      <div class="row"></div>
      <div class="step-action text-right">
        <button
          class="submit-button back-button"
          @click.prevent="$parent.currentStep--"
        >
          <i class="fa fa-arrow-right"></i>
          مرحله قبل
        </button>
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

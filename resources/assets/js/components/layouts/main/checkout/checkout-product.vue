
<style scoped>
.main-contents {
  padding: 15px 30px;
}
.logo-wrapper {
  max-width: 210px;
  padding: 15px 10px;
  margin: 0 auto;
}

.steps-progress-wrapper {
  max-width: 655px;
  margin: 10px auto 60px;
}

.progress-wrapper,
.steps {
  position: relative;
}
.progress-wrapper > span {
  height: 3px;
  background: #bebebe;
  display: block;
  margin: 0;
  position: absolute;
  left: 50px;
  top: 0;
  right: 50px;
}
.progress-wrapper > span.active {
  background: #00c569;
  left: calc(100% - 50px);
}
.steps > p.step-item {
  position: absolute;
  top: -8px;
  width: 100%;
  z-index: 1;
  display: inline-block;
  max-width: 100px;
  text-align: center;
}
.steps > p.step-item:first-of-type {
  right: 0;
}
.steps > p.step-item:nth-of-type(2) {
  right: calc(50% - 50px);
}
.steps > p.step-item:last-of-type {
  left: 0;
}
p.step-item .step-index {
  width: 20px;
  height: 20px;
  background: #bebebe;
  line-height: 1;
  display: block;
  margin: 0 auto;
  margin-bottom: 0px;
  color: #fff;
  padding-top: 4px;
  margin-bottom: 10px;
  border-radius: 50px;
}
p.step-item .step-index.active {
  background: #00c569;
}

/* main content style  */
@media screen and (max-width: 600px) {
  .main-contents-wrapper {
    padding: 0;
    border-radius: 0;
  }
  .main-contents {
    padding: 15px;
    margin: 15px auto;
    border-radius: 0;
  }
}
</style>

<template>
  <div class="checkout-main-pages">
    <div class="container">
      <div class="row">
        <section class="header col-xs-12">
          <div class="logo-page">
            <div class="logo-wrapper">
              <img src="../../../../../img/logo/web-logo.svg" alt />
            </div>
          </div>
          <div class="steps-progress-wrapper">
            <div class="step-progress">
              <div class="progress-wrapper">
                <span class="progress-item"></span>
                <span class="progress-item active"></span>
              </div>
              <div class="steps">
                <p class="step-item">
                  <span class="step-index active">1</span>
                  <span class="step-text">اطلاعات محصول</span>
                </p>
                <p class="step-item">
                  <span class="step-index">2</span>
                  <span class="step-text">ثبت اطلاعات</span>
                </p>
                <p class="step-item">
                  <span class="step-index">3</span>
                  <span class="step-text">ثبت نهایی</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="main-contents-wrapper col-xs-12">
          <div class="main-contents shadow-content bg-white col-xs-12">
            <router-view name="checkout-product"></router-view>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

 <script>
import confirtmProduct from "./steps/confirm-product";
export default {
  props: ["str"],
  components: {
    confirtmProduct
  },
  data: function() {
    return {
      currentStep: 0,
      totalPrice: "",
      verification_code: ""
    };
  },
  methods: {
    swithStep(step) {
      this.currentStep = step;
    }
  }
};
</script>

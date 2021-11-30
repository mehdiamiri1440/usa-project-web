<style scoped>
.seller-toggle-button {
  margin: 0 auto;
  padding: 10px 15px;
  background: none;
  border: none;
  color: #fff;
}
.seller-toggle-button i {
  display: block;
}
.main-content {
  max-width: 685px;
  position: absolute;
  left: calc(50% - 342px);
  top: 65px;
  margin-bottom: 50px;
  height: 100%;
  direction: rtl;
}

.main-content > div.wrapper-section {
  border: 1px solid #dadce0;
  border-radius: 12px;
  min-height: 400px;
}

.main-content > div.wrapper-section.finish-stage {
  border: none;
  margin-top: 20px;
}

.main-content > div.wrapper-section.empty-section {
  border: none;
  border-radius: 4px;
  min-height: initial;
}

.main-content .section-title {
  font-size: 25px;
  margin-bottom: 30px;
}

.main-content div.section-title h2 {
  font-size: 25px;
  margin-bottom: 10px;
}

.main-content div.section-title p {
  font-size: 15px;
}

.section-background {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  content: "";
  z-index: -1;
}

.wrapper-progressbar.title h2 {
  font-size: 23px;
  font-weight: bold;
  text-align: right;
}

.main-section-wrapper {
  max-width: 420px;
  margin: 42px auto;
}
.main-section-wrapper-full-width {
  max-width: 100%;
  margin: 0;
}

.header-section > h2 {
  font-weight: 600;
}

.main-section-wrapper {
  max-width: initial;
  margin: 0px auto;
}

.main-content .section-title p {
  line-height: 1.618;
}

.main-content > div.wrapper-section {
  border: none;
  border-radius: 0;
}

.main-content {
  max-width: initial;
  background: #fff;
  border-radius: 0;
  box-shadow: none;
  direction: rtl;
  transform: translate(0, 0);
  top: 0;
  padding-top: 20px;
  width: 100%;
  left: 0;
}
.section-background {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  content: "";
  z-index: -1;
}
.success-register {
  background: linear-gradient(
    270deg,
    rgba(1, 173, 101, 0.5) 0%,
    rgba(122, 245, 188, 0.5) 100%
  );
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px 15px 15px;
  color: rgb(38, 70, 83);
  text-align: center;
  overflow: hidden;
  position: relative;
}

.success-register::after,
.success-register::before {
  content: " ";
  position: absolute;
  width: 85px;
  height: 85px;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 50px;
}

.success-register::after {
  left: -36px;
  top: -13px;
}
.success-register::before {
  left: 10px;
  top: -49px;
}

.success-register h2 {
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.title-success {
  float: left;
  width: calc(100% - 36px);
}
.icon-wrapper {
  float: right;
  padding-top: 3px;
}

.success-register p {
  font-size: 12px;
  font-weight: 300;
  color: rgba(38, 70, 83, 0.8);
  line-height: 1.6;
}
.close-success-box {
  height: 0;
}
.d-none
{
    display: none;
}
@media (max-width: 768px) {
  .bg-dark {
    background: linear-gradient(255.44deg, #548da5 0%, #9fbdca 81.2%);
    box-shadow: 0px -5px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px 8px 0px 0px;
  }
  .bg-white
  {
        background-color: #ffffff
  }
  .success-register {
    width: 90%;
    margin: auto;
  }
  .main-section-wrapper {
    padding: 0 0.8rem;
  }
}
</style>
<template>
  <div>
    <section class="main-content col-xs-12">
      <div
        class="row"
        :class="[
          {
            'close-success-box':
              !$parent.successBox || !$parent.successRegisterProduct,
          },
          { 'box-wrapper': $route.name == 'successRegisterProduct' },
        ]"
      >
        <div class="success-register" v-if="$parent.successRegisterProduct" :class="[{ 'd-none': !$parent.successBox}]">
          <div class="title-success">
            <h2>ثبت محصول با موفقیت انجام شد!</h2>
            <p>
              محصول شما، پس از تایید کارشناسان باسکول، در لیست محصولات قرار
              خواهد گرفت.
            </p>
          </div>
          <div class="icon-wrapper">
            <svg
              width="36"
              height="32"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="16" r="16" fill="white" />
              <circle cx="20" cy="16" r="16" fill="white" />
              <circle cx="20" cy="16" r="16" fill="white" />
              <circle cx="20" cy="16" r="16" fill="white" />
              <circle cx="16" cy="16" r="15.5" stroke="black" />
              <path
                d="M9.77771 16.0001L15.111 20.4446L22.2222 11.5557"
                stroke="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="col-xs-12"
        v-if="!$parent.successRegisterProduct && $parent.buyAds.length > 0"
      >
        <div class="row">
          <div class="section-title">
            <h2>خریداران</h2>
            <p>
              خریداران پیشنهادی از طرف
              <span class="light-green-text">باسکول</span> برای محصول شما.
            </p>
          </div>
        </div>
      </div>
      <div
        v-show="$parent.buyAds.length > 0"
        class="row wrapper-section finish-stage"
        :class="[
          {
            'empty-section': $parent.buyAds.length == 0,
          },
          {
            'closed-box':
              !$parent.successBox || !$parent.successRegisterProduct,
          },
        ]"
      >
        <div class="main-section" :class="[{ 'bg-dark': $parent.successBox },{'bg-white': !$parent.successBox}]">
          <button
            class="seller-toggle-button collapse hidden-sm hidden-md hidden-lg"
            :class="{
              in: $parent.successBox && $parent.successRegisterProduct,
            }"
            @click="$parent.successBox = !$parent.successBox"
          >
            <i class="fa fa-angle-up"></i>
            خریداران پیشنهادی
          </button>
          <main
            class="main-section-wrapper main-section-wrapper-full-width row"
          >
            <FinishStage />
          </main>
        </div>

        <div class="section-background"></div>
      </div>
      <div
        v-show="$parent.buyAds.length == 0"
        class="row wrapper-section"
        :class="{ 'empty-section': $parent.buyAds.length == 0 }"
      >
        <div class="main-section">
          <main
            class="main-section-wrapper main-section-wrapper-full-width row"
          >
            <finish-stage />
          </main>
        </div>

        <div class="section-background"></div>
      </div>
    </section>
  </div>
</template>

<script>
import FinishStage from "./finishStage.vue";
export default {
  props: ["buyAds", "getConvertedNumbers"],
  components: { FinishStage },
  data() {
    return {};
  },
};
</script>


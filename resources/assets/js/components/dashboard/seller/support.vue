<style scoped>
.support-wrapper {
  direction: rtl;
  line-height: 1.618;
  max-width: 600px;
  margin: 60px auto;
  text-align: center;
}

.support-wrapper {
  border-radius: 8px;
  padding: 60px 15px;
  border: 1px solid #e9ecef;
  border-radius: 12px;
}

.support-wrapper h3 {
  margin: 20px 0 30px;
  line-height: 1.618;
}

.support-wrapper h4 {
  margin-bottom: 18px;
  color: #21ad93;
  letter-spacing: 2px;
}

@media screen and (max-width: 767px) {
  .title {
    text-align: center;
  }

  .support-wrapper {
    box-shadow: none;
    padding: 60px 15px;
  }
  .main-content {
    padding-bottom: 90px;
    background: #fff;
  }
}
</style>
<template>
  <section class="main-content col-xs-12">
    <div class="support-wrapper">
      <div class="buskool-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="92.818"
          height="113.671"
          viewBox="0 0 92.818 113.671"
        >
          <g
            id="Group_23"
            data-name="Group 23"
            transform="translate(-273.1 -703.931)"
          >
            <path
              id="Subtraction_1"
              data-name="Subtraction 1"
              d="M46.473,84.764A46.472,46.472,0,0,1,0,38.291,45.955,45.955,0,0,1,5.124,17.06,46.892,46.892,0,0,1,18.8.952l11.8,11.8A29.746,29.746,0,1,0,75.91,42.2l8.124-7.99,8.7,8.557a46.481,46.481,0,0,1-46.262,42ZM92.818,34.8l-.007-.007-8.777-8.661-8.065,7.957A29.849,29.849,0,0,0,60.905,11.907L72.812,0a46.252,46.252,0,0,1,20,34.786Z"
              transform="translate(273.1 732.838)"
              fill="#e51b35"
            ></path>
            <g
              id="Group_24"
              data-name="Group 24"
              transform="translate(293.176 703.931)"
            >
              <path
                id="Rectangle_12"
                data-name="Rectangle 12"
                d="M3,0H35.32a0,0,0,0,1,0,0V20.448a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                transform="translate(14.459 9.201) rotate(45)"
                fill="#00c569"
              ></path>
              <path
                id="Rectangle_13"
                data-name="Rectangle 13"
                d="M0,0H50.191a0,0,0,0,1,0,0V18.589a0,0,0,0,1,0,0H4a4,4,0,0,1-4-4V0A0,0,0,0,1,0,0Z"
                transform="translate(61.103 13.145) rotate(135)"
                fill="#00c569"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <h3>شماره تماس های پشتیبانی باسکول</h3>
      <h4><i class="fa fa-phone"></i> 09178928266</h4>
      <h4><i class="fa fa-phone"></i> ‌09118413054</h4>
    </div>
  </section>
</template>

<script>
// import { eventBus } from "../../../router/router";

export default {
  data: function () {
    return {};
  },
  mounted() {
    eventBus.$emit("subHeader", false);
  },
};
</script>

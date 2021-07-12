
<style scoped>
.modal {
  text-align: center;
  padding: 0 !important;
}

.modal:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -4px;
}

.modal-dialog {
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}

.modal-content {
  overflow: hidden;
  border-radius: 12px;
}
.close-modal {
  font-size: 20px;

  color: #777;

  position: absolute;

  right: 0;

  padding: 8px 15px 2px;

  top: 0;
  z-index: 1;
}

.modal-header {
  border: none;
  padding: 0;
}

.modal-body {
  padding: 0;
}

.promotion-image-wrapper {
  padding-top: 22px;
  text-align: center;
}

.promotion-image-wrapper img {
  max-width: 390px;
  position: relative;
  z-index: 1;
}

.modal-contents {
  position: relative;
  z-index: 1;
  max-width: 430px;
  margin: 0 auto;
  text-align: right;
  padding: 0 20px;
}

.modal-contents h3 {
  font-size: 22px;
  color: #374761;
  margin-top: 8px;
}

.modal-contents h3 span {
  font-size: 15px;
  font-weight: 400;
}

.modal-contents p {
  font-size: 15px;
  text-align: right;
  line-height: 1.618;
  color: #777;
  margin: 13px auto 0;
}

.bg-gradient {
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);
}

.green-button {
  font-size: 19px;
  border-radius: 8px;
  padding: 15px;
  min-width: 245px;
  margin: 35px auto 50px;
}
@media screen and (max-width: 768px) {
  .promotion-image-wrapper {
    padding-top: 38px;
  }

  .promotion-image-wrapper img {
    max-width: 280px;
  }
}
</style>

<template>
  <div class="container">
    <div
      id="delsa-promotion-modal"
      class="promotion-modal modal fade"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close-modal" data-dismiss="modal">
              <i class="fa fa-times"></i>
            </a>
          </div>
          <div class="modal-body col-xs-12">
            <div class="promotion-image-wrapper">
              <img src="../../../../img/delsa-promotion-icon.png" alt />
            </div>
            <div class="modal-contents text-right">
              <p class="text-rtl">سلام</p>
              <h3 class="modal-title">
                من دلسا هستم
                <span> (ربات خودکار باسکول) </span>
              </h3>
              <p class="text-rtl">
                کار اصلی من بازاریابی برای محصولات شماست. اگر مایل هستید
                بازاریابی بیشتری برای محصولات شما انجام بدهم کافی است نوع عضویت
                خود را ارتقا دهید.
              </p>
              <div class="text-center">
                <router-link
                  class="green-button bg-gradient"
                  tag="button"
                  data-dismiss="modal"
                  :to="{ name: 'dashboardPricingTableSeller' }"
                >
                  ارتقا عضویت
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>
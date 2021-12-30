
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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
}
.close-modal {
  font-size: 20px;

  color: #264653;

  position: absolute;

  right: 0;

  padding: 13px 15px 2px;

  top: 0;
  z-index: 1;
}

.modal-header {
  border: none;
  padding: 0;
}
.modal-title {
  color: #15313c;
}
.modal-body {
  padding: 0;
}

.promotion-image-wrapper {
  padding-top: 22px;
  text-align: center;
  margin: 20px 0;
}

.promotion-image-wrapper img {
  max-width: 280px;
  position: relative;
  z-index: 1;
}

.modal-contents {
  position: relative;
  z-index: 1;
  max-width: 430px;
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;
}
.modal-contents h3 span {
  font-size: 15px;
  font-weight: 400;
}

.modal-contents p {
  font-size: 15px;
  text-align: center;
  line-height: 1.618;
  color: #15313c;
  margin: 13px auto 0;
}
.modal-contents .text-hello{
  text-align: right;
}
.bg-gradient {
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);
}

.orange-button {
  font-size: 1.8rem;
  padding: 15px 66px;
  max-width: 345px;
  margin: 35px auto 50px;
  background: #ff9828;
  border-radius: 4px;
  border: 0;
  color: #ffffff;
}
@media screen and (max-width: 768px) {
  .promotion-image-wrapper {
    padding-top: 0;
  }
  .promotion-image-wrapper img {
    max-width: 150px;
  }
  .modal-contents p {
    font-size: 1.3rem;
  }
  .modal-contents p.text-hello {
    margin-top: 0;
  }
  .orange-button {
    font-size: 1.4rem;
    font-weight: 500;
    padding: 5px 35px;
    margin: 28px auto 27px;
  }
}
@media screen and (max-width: 380px) {
  .modal-title {
    font-size: 2rem;
  }
  .orange-button {
    margin: 15px auto 13px;
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
              <img src="../../../../img/delsa-promotional.svg" alt />
            </div>
            <div class="modal-contents">
              <p class="text-hello">سلام</p>
              <h3 class="modal-title">
                من دلسا هستم
                <span> (ربات خودکار باسکول) </span>
              </h3>
              <p>
                کار اصلی من بازاریابی برای محصولات شماست. اگر مایل هستید
                بازاریابی بیشتری برای محصولات شما انجام بدهم کافی است نوع عضویت
                خود را ارتقا دهید.
              </p>
              <div class="text-center">
                <router-link
                  class="orange-button"
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
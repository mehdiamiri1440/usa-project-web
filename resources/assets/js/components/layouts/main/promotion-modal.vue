
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
  background: #e7f9ff;
  padding-top: 25px;
  text-align: center;
}

.promotion-image-wrapper::after {
  content: " ";
  position: absolute;
  width: 1062px;
  height: 433px;
  background: #fff;
  left: calc(50% - 531px);
  border-radius: 100%;
  top: 130px;
  z-index: 0;
}

.promotion-image-wrapper img {
  max-width: 325px;
  position: relative;
  z-index: 1;
}

.modal-contents {
  position: relative;
  z-index: 1;
}

.modal-contents h3 {
  text-align: center;
  font-size: 25px;
  color: #374761;
  margin-top: 35px;
}

.modal-contents p {
  font-size: 15px;
  text-align: center;
  line-height: 1.618;
  color: #38485f;
  padding: 0 15px;
  max-width: 430px;
  margin: 27px auto 0;
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
</style>

<template>
  <div class="container">
    <div
      id="promotion-modal"
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
              <img src="../../../../img/promotion-icon.png" alt />
            </div>
            <div class="modal-contents">
              <h3>فروش سریع تر و آسان تر</h3>
              <p class="text-rtl">
                با ارتقا عضویت حساب کاربری خود، خریداران بیشتری را جذب کنید و با
                فروش بیشتر از بازار رقابت جا نمانید.
              </p>
              <div class="text-center">
                <button
                  class="green-button bg-gradient"
                  @click.prevent="$parent.routePromotionModal()"
                >
                  ارتقا عضویت
                </button>
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
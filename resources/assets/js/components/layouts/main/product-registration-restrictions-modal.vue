
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

  z-index: 2;
}

.modal-header {
  border: none;
  padding: 0;
}

.modal-body {
  padding: 0;
}

.product-registration-restrictions-image-wrapper {
  padding-top: 25px;
  text-align: center;
}

.product-registration-restrictions-image-wrapper::after {
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

.product-registration-restrictions-image-wrapper.buyAd-title::after {
  top: 95px;
}

.product-registration-restrictions-image-wrapper img {
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
  font-size: 1.6rem;
  color: #15313c;
  padding: 20px 0 0;
  font-weight: 500;
  direction: rtl;
}

.modal-contents p {
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.618;
  color: #15313c;
  padding: 0 15px;
  max-width: 430px;
  margin: 27px auto 0;
}

.bg-gradient {
  background: linear-gradient(90deg, #ff9828 0%, #ff6600 100%);
}

.green-button {
  font-size: 19px;
  border-radius: 8px;
  padding: 15px;
  min-width: 245px;
  margin: 35px auto 50px;
}
.orange-button {
  font-size: 1.4rem;
  padding: 5px 50px 5px 35px;
  max-width: 245px;
  margin: 35px auto 20px;
  border-radius: 4px;
  color: #ffffff;
  border: 0;
  position: relative;
}
.orange-button i {
  position: absolute;
  margin-right: -20px;
  margin-top: 5px;
}

@media (max-width: 971px) {
  .product-registration-restrictions-image-wrapper img {
    max-width: 200px;
  }
  .modal-dialog {
    width: 85%;
  }
}
@media (max-width: 600px) {
  .product-registration-restrictions-image-wrapper img {
    max-width: 120px;
  }
}
</style>

<template>
  <div class="container">
    <div
      id="product-registration-restrictions-modal"
      class="product-registration-restrictions-modal modal fade"
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
            <div class="product-registration-restrictions-image-wrapper">
              <img src="../../../../img/restricts_product.svg" alt />
            </div>
            <div class="modal-contents">
              <h3 class="text-rtl">امکان ثبت محصول جدید را ندارید!</h3>
              <p class="text-rtl">
                برای ثبت محصولات بیشتر، ظرفیت ثبت محصول حساب خود را افزایش دهید.
              </p>
              <div class="text-center">
                <button
                  class="orange-button bg-gradient text-rtl"
                  @click.prevent="
                    $parent.routeProductRegistrationRestrictionsModal()
                  "
                >
                  <i class="fas fa-plus"></i>
                  افزایش ظرفیت
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


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
  padding: 25px 24px;
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

.no-access-to-golden-buyers-image-wrapper {
  padding-top: 22px;
  text-align: center;
}

.no-access-to-golden-buyers-image-wrapper::after {
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

.no-access-to-golden-buyers-image-wrapper.buyAd-title::after {
  top: 95px;
}

.no-access-to-golden-buyers-image-wrapper img {
  max-width: 122px;
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
  padding: 10px 0 0;
  font-weight: 500;
  direction: rtl;
}

.modal-contents p {
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.618;
  color: #15313c;
  padding: 0 15px;
  margin: 11px auto 0;
  padding: 0px 50px;
}

.bg-gradient {
  background: linear-gradient(90deg, #ff9828 0%, #ff6600 100%);
}
.orange-button {
  font-size: 1.4rem;
  padding: 5px 50px;
  max-width: 245px;
  margin: 25px auto 28px;
  border-radius: 4px;
  color: #ffffff;
  border: 0;
  position: relative;
  background-color: #ff9828;
}
.orange-button i {
  position: absolute;
  margin-right: -20px;
  margin-top: 5px;
}

@media (max-width: 971px) {
  .modal-dialog {
    width: 85%;
  }
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 440px;
  }
  .orange-button {
    
    padding: 5px 50px;
    max-width: 245px;
    margin: 33px auto 28px;
  }
}
@media (max-width: 600px) {
  .modal-contents {
    margin-top: -8px;
  }
  .no-access-to-golden-buyers-image-wrapper img {
    max-width: 95px;
  }
  .modal-contents h3 {
    font-size: 1.6rem;
  }
  .modal-contents p {
    margin-top: 9px;
    padding: 0 35px;
  }
  .orange-button {
    font-size: 1.4rem;
    padding: 5px 50px;
    max-width: 245px;
    margin: 33px auto 23px;
    font-weight: 500;
  }
}
@media (max-width: 411px) {
}
</style>

<template>
  <div class="container">
    <div
      id="no-access-to-golden-buyers-modal"
      class="no-access-to-golden-buyers-modal modal fade"
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
            <div class="no-access-to-golden-buyers-image-wrapper">
              <img src="../../../../img/no_access_to_buyyers_phone.svg" alt />
            </div>
            <div class="modal-contents">
              <h3>شما به خریداران طلایی دسترسی ندارید!</h3>
              <p class="text-rtl">
                برای دسترسی به درخواست های خرید طلایی، نوع عضویت خود را ارتقا
                دهید.
              </p>
              <div class="text-center">
                <button
                  class="orange-button text-rtl"
                  @click.prevent="$parent.routeRaiseUpgradeMemberShip()"
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

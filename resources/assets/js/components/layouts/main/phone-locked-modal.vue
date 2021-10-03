
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
  max-width: 225px;
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
  direction: rtl;
  color: #374761;
  margin-top: 8px;
}

.modal-contents h3 span {
  font-size: 15px;
  font-weight: 400;
}

.modal-contents p {
  font-size: 15px;
  line-height: 1.618;
  color: #777;
  margin: 0 auto 50px;
}

.bg-gradient {
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);
}

.green-button {
  font-size: 19px;
  border-radius: 8px;
  padding: 15px;
  min-width: 245px;
  margin: 15px auto 50px;
}

.green-button.wallet-button {
  background: #264653;
}
@media screen and (max-width: 768px) {
  .promotion-image-wrapper {
    padding-top: 38px;
  }
  .modal-dialog.modal-dialog-centered{
    margin: 0;
    height: 100%;
  }
  .modal-content{
    height: 100%;
width: 100%;
  }
}
</style>

<template>
  <div class="container">
    <div
      id="phone-locked-modal"
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
              <img src="../../../../img/phone-locked.gif" alt />
            </div>
            <div class="modal-contents text-rtl text-center">
              <p class="text-center">
                قابلیت ارسال خودکار شماره تماس به خریداران برای شما
                <span class="red-text"> غیر فعال </span>
                است.
              </p>
              <div class="text-center">
                <small class="gray-text">
                  هزینه ارسال شماره به هر خریدار ۵۰۰ تومان می باشد.
                </small>
                <button
                  class="green-button wallet-button hover-effect"
                  tag="button"
                  @click="showWallet()"
                >
                  شارژ کیف پول
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


<script>
export default {
  methods: {
    showWallet: function () {
      $(".modal").modal("hide");
      $("#wallet-modal").modal("show");
    },
  },
};
</script>

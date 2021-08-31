
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

.promotion-image-wrapper.buyAd-title::after {
  top: 95px;
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
  padding: 20px 0 50px;
  font-weight: 500;
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

.user-information-content {
  display: block;
  float: right;
  width: 100%;
  background: none;
  border: none;
  padding: 10px 0 3px;
}

.user-content {
  display: block;
  max-width: 170px;
  overflow: hidden;
  font-size: 13px;
  font-weight: 400;
  color: #adadad;
  height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
}

.user-content i {
  margin-left: 1px;
  position: relative;
  top: 3px;
  font-size: 15px;
}

.main-background-buyad {
  filter: blur(6px);
  position: absolute;
  top: 18px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */
  z-index: 0;
  width: 100%;
  left: 0;
  text-align: center;
}

.golden-info-text {
  position: relative;
  z-index: 1;
}
.golden-info-text .buyad-info {
  font-size: 18px;
}

.buyad-notice {
  color: #aeaeae;
}
.buyad-info {
  font-size: 15px;
  padding: 5px;
  font-weight: bold;
  color: #777;
  min-height: 68px;
  padding-top: 15px;
  line-height: 1.618;
}
.buyad-notice.red-text {
  padding-top: 15px;
  padding-bottom: 15px;
}
.buyad-info span {
  color: #556080;
}
.buyad-info span.gray-text {
  color: #777;
}
.buyAd-buttons-wrapper {
  display: flex;
  padding: 0 10px;
}

.buyAd-buttons-wrapper button.phone-button {
  margin-left: 15px;
}

.buyAd-buttons-wrapper button.phone-button {
  margin-left: 15px;
}

.buyad-button {
  background: #00c569;
  color: #fff;
  border-radius: 8px;
  padding: 8px 0;
  max-width: 200px;
  margin: 15px auto;
  transition: 300ms;
  display: block;
  border: none;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
}

.buyad-button :hover {
  /* background: #00c569; */
  transition: 300ms;
}

.buyad-button.disable {
  background: #dddddd;
  transition: 300ms;
}

.contact-item {
  border: 1px solid #dddddd;
  float: right;
  width: 100%;
  padding: 10px 0;
  min-height: 230px;
  border-radius: 12px;
  margin: 0 auto 35px;
  direction: rtl;
  max-width: 400px;
  margin-bottom: 35px;
}

.contact-item:nth-last-of-type(2n + 1) {
  background: #fdfdfd !important;
}

.hide-reply {
  display: none;
}

.golden {
  border: 2px solid rgb(199, 168, 79);
  position: relative;
  padding-right: 20px;
}

.golden .buyad-notice {
  display: inline-block;
  margin-bottom: 15px;
}
.golden::after {
  background: linear-gradient(
    44deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  width: 20px;
  height: 100%;
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 10px 10px 0;
}

.golden:first-of-type {
  border-top: 2px solid rgb(199, 168, 79);
}

/* li.golden .buyad-info {
  margin-top: 15px;
} */

.golden .buyad-button,
.golden .buyad-button:hover {
  color: #333;
  background: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
}

.buyAd-buttons-wrapper .buyad-button.send-message-button {
  background: none;
  border: 1px solid #404b55;
  color: #404b55;
  transition: 300ms;
}

.buyAd-buttons-wrapper .buyad-button.send-message-button:hover {
  background: #404b55;
  color: #fff;
  transition: 300ms;
}

.main-buyAd-item {
  padding: 0 7px;
  display: flex;
}

.modal-dialog.has-golden-buyAd {
  max-width: 478px;
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
      <div
        class="modal-dialog modal-dialog-centered"
        :class="{ 'has-golden-buyAd': $parent.buyAdsGolden.length > 0 }"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header">
            <a class="close-modal" data-dismiss="modal">
              <i class="fa fa-times"></i>
            </a>
          </div>
          <div
            v-if="$parent.buyAdsGolden.length > 0"
            class="modal-body col-xs-12"
          >
            <div class="modal-contents">
              <div class="promotion-image-wrapper buyAd-title">
                <h3 class="text-rtl">این خریدار را از دست ندهید...</h3>
              </div>

              <div class="main-buyAd-item">
                <div class="buyAd-wrapper contact-item golden">
                  <div class="user-information-wrapper col-xs-12">
                    <div class="user-information-content">
                      <div class="user-content">
                        <i class="fa fa-user-circle"></i>
                        <span
                          class="user-name-link"
                          v-text="buyAd.first_name + ' ' + buyAd.last_name"
                        >
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="buyad-main col-xs-12">
                    <div class="main-background-buyad">
                      <p class="buyad-info">
                        این درخواست فقط برای
                        <span class="red-text"> کاربران ویژه </span>
                        قابل نمایش است
                      </p>
                      <p class="buyad-notice">
                        برای مشاهده لطفا حساب کاربری خود را ارتقا دهد
                      </p>
                    </div>
                    <div class="row golden-info-text">
                      <p class="buyad-info">
                        خریدار

                        <span v-text="buyAd.subcategory_name"></span>
                        <span v-if="buyAd.name" class="gray-text">
                          از نوع
                        </span>
                        <span v-if="buyAd.name" v-text="buyAd.name"></span>
                        <span class="gray-text"> هستم </span>
                      </p>
                      <div class="buyAd-buttons-wrapper" v-if="buyAd.has_phone">
                        <button
                          @click="$parent.openGoldenChatRestrictionModal()"
                          class="buyad-button golden-button phone-button"
                          :id="'loader-phone-' + buyAd.id"
                        >
                          <span>
                            <span class="fas fa-phone-square-alt"></span>
                            اطلاعات تماس
                          </span>
                          <span class="hide-reply text-rtl">
                            کمی صبر کنید...
                          </span>
                        </button>
                        <button
                          @click="$parent.openGoldenChatRestrictionModal()"
                          class="buyad-button send-message-button"
                        >
                          <i class="fas fa-comment-alt"></i>
                          چت با خریدار
                        </button>
                      </div>
                      <button
                        v-else
                        @click="$parent.openGoldenChatRestrictionModal()"
                        class="buyad-button"
                      >
                        <i class="fas fa-comment-alt"></i>
                        چت با خریدار
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="modal-body col-xs-12">
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


<script>
export default {
  data() {
    return {
      buyAd: {
        id: "",
        name: "",
        subcategory_name: "",
        category_name: "",
        first_name: "",
        last_name: "",
        has_phone: false,
      },
    };
  },
  mounted() {
    let buyAds = this.$parent.buyAdsGolden;
    let randomBuyAd = Math.floor(Math.random() * buyAds.length - 1);

    this.buyAd = buyAds[randomBuyAd];
  },
};
</script>

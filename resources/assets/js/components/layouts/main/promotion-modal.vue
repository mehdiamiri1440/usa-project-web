
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
  width: 500px;
}

.modal-content {
  border-radius: 12px;
  display: grid;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
}
.close-modal {
  font-size: 20px;
  color: #ff6600;
  position: absolute;
  right: 0;
  padding: 16px 22px;
  top: 0;
  z-index: 2;
}
.buy-ad-close-modal
{
  top: -30px;
  color: #777777;
}
.modal-header {
  border: none;
  padding: 0;
}

.modal-body {
  padding: 0;
}

.promotion-image-wrapper {
  background: #ffc985;
  text-align: center;
  display: grid;
  justify-items: center;
  height: 266px;
  position: relative;
  -webkit-border-top-left-radius: 12px;
  -webkit-border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.promotion-image-wrapper.buyAd-title::after {
  top: 95px;
}

.promotion-image-wrapper img.upgrade-rocket {
  width: 100px;
  position: absolute;
  margin-top: -55px;
  z-index: 1051;
}
.promotion-image-wrapper img.smoke-rocket {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.buy-ad-modal-body {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.buy-ad-contents {
  overflow: hidden;
  border-radius: 12px;
}
.buy-ad-image-wrapper {
  background: #e7f9ff;
  padding-top: 25px;
  text-align: center;
}
.buy-ad-image-wrapper::after {
  content: " ";
  position: absolute;
  width: 1062px;
  height: 433px;
  background: #fff;
  left: calc(50% - 531px);
  border-radius: 100%;
  top: 95px;
  z-index: 0;
}
.modal-contents {
  position: relative;
  z-index: 1;
  margin-top: -28px;
  background-color: #f0f3f5;
  -webkit-border-bottom-right-radius: 12px;
  -webkit-border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}
.modal-contents h3 {
  text-align: center;
  font-size: 2rem;
  color: #374761;
  font-weight: 500;
}
.buy-ad-image-wrapper h3 {
  text-align: center;
  font-size: 2.5rem;
  color: #374761;
  padding: 20px 8px 50px;
  font-weight: 500;
}
.modal-contents p {
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.618;
  color: #38485f;
  padding: 0 15px;
  max-width: 430px;
}
.promotion-title {
  font-weight: 500;
  margin: 20px auto 0;
}
.promotion-description {
  font-weight: 400;
  margin-top: 10px;
  margin: 8px auto 0;
}
.bg-gradient {
  background: linear-gradient(90deg, #ff9828 0%, #ff6600 100%);
}
.orange-button {
  font-size: 1.4rem;
  padding: 8px 0;
  text-align: center;
  width: 214px;
  margin: 30px auto 30px;
  border-radius: 4px;
  color: #ffffff;
  border: 0;
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
@media (min-width: 768px) {
  .promotion-image-wrapper {
    height: 232px;
  }
}
@media (max-width: 767px) {
  .modal-dialog {
  width: 90%;
}
  .promotion-image-wrapper img.upgrade-rocket {
    margin-top: -45px;
  }
  .modal-contents {
    margin-top: -30px;
  }
  .promotion-image-wrapper {
    height: 190px;
  }
  .promotion-image-wrapper img.upgrade-rocket {
    width: 70px;
  }
  .modal-contents h3 {
    margin-bottom: 7px;
  }

  .modal-contents p {
    
    padding: 0 35px;
    font-size: 1.4rem;
  }
  .promotion-title {
    font-weight: 500;
    margin-top: 14px;
  }
.promotion-description {
  margin-top: 6px;
  
}
  .orange-button {
    margin: 15px auto 23px;
    max-width: 180px;
    padding: 8px 0;
    font-weight: 500;
  }
}
@media (max-width: 414px) {
  .promotion-image-wrapper {
    height: 175px;
  }
  .promotion-image-wrapper img.upgrade-rocket {
    margin-top: -38px;
  }
}
@media (max-width: 380px) {
  .promotion-image-wrapper {
    height: 160px;
  }
}
@media (max-width: 350px) {
  .promotion-image-wrapper img.upgrade-rocket {
    width: 70px;
    margin-top: -45px;
  }
  .modal-contents h3 {
    font-size: 1.73rem;
  }
  .modal-contents p {
    padding: 0 25px;
    font-size: 1.4rem;
  }
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
            <a class="close-modal"
            :class="{'buy-ad-close-modal' : $parent.buyAdsGolden.length > 0}"
             data-dismiss="modal">
              <i class="fa fa-times"></i>
            </a>
          </div>
          <div
            v-if="$parent.buyAdsGolden.length > 0"
            class="modal-body col-xs-12"
          >
            <div class="modal-contents buy-ad-contents">
              <div class="buy-ad-image-wrapper buyAd-title">
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
                        برای مشاهده لطفا حساب کاربری خود را ارتقا دهید
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
                            تماس با خریدار
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
              <img
                class="upgrade-rocket"
                src="../../../../img/upgrade_rocket.svg"
                alt
              />
              <img
                class="smoke-rocket"
                src="../../../../img/smoke_rocket.svg"
                alt
              />
            </div>
            <div class="modal-contents">
              <h3>حساب کاربری خود را ارتقا دهید</h3>
              <p class="text-rtl promotion-title">فروش سریع تر و آسان تر</p>
              <p class="text-rtl promotion-description">
                برای دسترسی به تمام امکانات ویژه باسکول، حساب کاربری خود را
                ارتقا دهد
              </p>
              <div class="text-center">
                <button
                  class="orange-button bg-gradient"
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
  watch: {
    "$parent.buyAdsGolden"(goldens) {
      let buyAds = goldens;
      let randomBuyAd = 0;
      if (buyAds.length > 1) {
        randomBuyAd = Math.floor(Math.random() * buyAds.length - 1);
      }
      this.buyAd = buyAds[randomBuyAd];
    },
  },
};
</script>

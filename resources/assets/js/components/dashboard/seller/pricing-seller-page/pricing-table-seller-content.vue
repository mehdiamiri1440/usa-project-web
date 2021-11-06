<style scoped>
@import url("../../../../../css/owl.carousel.min.css");

.item-action .green-button {
  padding: 10px 35px;
  margin: 0 auto 15px;
  font-size: 16px;
  font-weight: bold;
  width: initial;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.item-action .green-button i {
  position: relative;
  top: 3px;
  font-size: 19px;
  line-height: 1;
  right: 4px;
}

.text-green {
  color: #00ac5c;
}

.header-wrapper {
  text-align: center;
  padding: 15px;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
}

.header-title svg {
  width: initial;
  position: relative;
  top: 11px;
  margin-left: 7px;
}

.header-title {
  margin-bottom: 9px;
}

.header-title span {
  font-size: 16px;
  color: #000;
  font-weight: 400;
}

.item-title {
  font-size: 16px;
  font-weight: bold;
}

.item-title > span {
  font-size: 12px;
}

.item-price {
  font-size: 16px;

  font-weight: bold;
}

.item-price .item-currency {
  font-size: 13px;

  font-weight: 400;

  position: relative;
}

.item-date {
  text-align: center;

  font-size: 18px;

  font-weight: bold;

  margin-top: -4px;
}

.item-content {
  position: relative;
  float: left;
}

.item-action {
  text-align: center;
}

.item-action p {
  margin: 5px auto 0;
  font-size: 16px;
  padding: 12px;
  display: inline-block;
}

.item-help i {
  color: #000546;

  font-size: 22px;
}

.item-help-content {
  position: absolute;
  right: -9px;
  top: 35px;
  width: 200px;
  color: #fff;
  background: #000546;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  transition: 300ms;
  z-index: 1;
  direction: rtl;
  text-align: right;
}

.item-help-content > span {
  display: block;
  padding: 6px 15px;
}

.users-review-carousel-wrapper {
  margin: 10px auto 50px;
}

.users-review-carousel-wrapper .title-section {
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  margin: 0 auto 30px;
}

.item-help {
  transition: 300ms;

  display: block;

  float: right;

  margin-left: 10px;
}

.item-content-title {
  float: right;

  font-size: 14px;

  color: #777;

  font-weight: bold;
}

.item-content-amount {
  float: left;
  font-weight: bold;
  min-width: 45px;
  text-align: center;
}

.item-content-list li {
  float: left;
  width: 100%;
  padding: 12px 0;
  position: relative;
  border-bottom: 1px solid #bdc4cc;
}

.item-content-list li:last-of-type {
  border-bottom: none;
}

.wrapper-icon {
  display: inline;
}

.header-description {
  color: #777;
}

.wrapper-icon svg {
  width: 20px;
  position: relative;
  top: 7px;
  margin-left: 5px;
}

.offer-price {
  position: absolute;
  text-align: center;
  top: -23px;
  left: 15px;
  right: 15px;
}

.offer-notice > span {
  background: #e41c38;
  color: #fff;
  border-radius: 4px;
  padding: 0 15px;
}

.offer-item-price-content {
  font-weight: 400;
  -webkit-text-decoration: line-through;
  text-decoration: line-through;
  color: #777;
}

.item-content-wrapper {
  direction: rtl;
  margin: 0 auto;
  width: 100%;
  padding: 10px 0 15px;
  overflow: hidden;
  line-height: 1.6;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
}
.main-text-wrapper {
  color: #38485f;
  font-size: 19px;
  font-weight: bold;
  direction: rtl;
  margin: 5px auto 15px;
  float: right;
  width: 100%;
}

.icon-wrapper {
  float: right;
  font-size: 45px;
  height: 45px;
  width: 45px;
  line-height: 1;
  padding-top: 6px;
}

.content-wrapper {
  font-size: 15px;
  color: #000;
  width: 100%;
  font-weight: 300;
  text-align: right;
  max-width: 350px;
  margin: 0 auto;
}

.content-wrapper > p {
  font-weight: 300;
}

.fix-botton-wraper {
  position: fixed;
  bottom: 59px;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 5px;
  box-shadow: 0 -6px 15px rgba(0, 0, 0, 0.16);
  background: #fff;
  display: flex;
}

.fix-botton-wraper button {
  width: 100%;
  border-radius: 6px;
  margin: 0;
  font-size: 18px;
  padding: 10px 15px;
  background: #556080;
}

.fix-botton-wraper button i {
  position: relative;
  top: 2px;
}

.main-content-wrapper {
  float: initial;
  max-width: 760px;
  margin: 0 auto;
}

@media screen and (max-width: 991px) {
  .item-content-wrapper {
    box-shadow: none;
    padding: 10px 0;
  }
  .phones {
    text-align: center;
  }
}

@media screen and (max-width: 767px) {
  .header-icon-wrapper {
    float: right;
    width: 50px;
    text-align: center;
  }

  .main-text-wrapper {
    margin: 15px auto;
  }

  .header-icon-wrapper i {
    font-size: 69px;
    color: #ffbb00;
    position: relative;
    top: 16px;
  }

  .header-wrapper {
    text-align: center;
    padding: 15px;
    float: left;
    width: 100%;
    padding: 0;
  }

  .header-description {
    font-size: 13px;
  }

  .item-date {
    padding: 11px 7px 0 0;
  }

  .item-date span {
    padding: 0 0 0 6px;
    display: inline-block;
  }

  .item-content-list li {
    padding: 9px 0;
  }

  .title {
    text-align: center;
  }

  .item-content-title {
    font-size: 17px;
  }

  .item-help i {
    font-size: 30px;
  }

  .item-content-amount {
    font-size: 20px;
  }

  .item-help-content {
    right: 0;
    top: 45px;
  }
  .item-content-list li {
    padding: 12px 7px !important;
  }
  .special-badge {
    padding: 0 3px 3px;
    border-radius: 4px;
    display: inline-block;
    margin-right: 3px;
    position: initial;
    font-size: 14px;
    width: initial;
    transform: rotate(0);
  }
}
</style>
<template>
  <div class="col-xs-12">
    <!-- payment loader -->
    <div v-if="doPaymentLoader" class="main-loader-content">
      <div class="pricing-loader-icon">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="pricing-loader-text text-rtl">
          در حال انتقال به درگاه پرداخت . . .
        </p>
      </div>
    </div>

    <div class="row">
      <div class="main-content-wrapper col-xs-12">
        <div class="row">
          <div class="col-xs-12 text-center">
            <div class="item-content-wrapper">
              <div class="content-wrapper">
                <p class="header-title">
                  <svg
                    width="36"
                    height="32"
                    viewBox="0 0 36 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="16" r="16" fill="#BDD8E2" />
                    <circle cx="20" cy="16" r="16" fill="#BDD8E2" />
                    <circle cx="20" cy="16" r="16" fill="#BDD8E2" />
                    <circle cx="20" cy="16" r="16" fill="#BDD8E2" />
                    <circle cx="16" cy="16" r="15.5" stroke="black" />
                    <path
                      d="M16 8.2915C13.7 8.2915 11.8334 10.1582 11.8334 12.4582C11.8334 12.5963 11.8882 12.7288 11.9859 12.8265C12.0836 12.9241 12.2161 12.979 12.3542 12.979C12.4923 12.979 12.6248 12.9241 12.7225 12.8265C12.8202 12.7288 12.875 12.5963 12.875 12.4582C12.875 10.7332 14.275 9.33317 16 9.33317C17.725 9.33317 19.125 10.7332 19.125 12.4582C19.125 13.2394 18.9292 13.6832 18.6663 14.0186C18.4538 14.2894 18.2059 14.4911 17.8963 14.7419C17.7696 14.8448 17.633 14.9561 17.4838 15.0836C16.9963 15.5015 16.4805 16.0282 16.0963 16.8711C15.7146 17.7061 15.4792 18.8136 15.4792 20.3748V20.479C15.4792 20.6171 15.5341 20.7496 15.6318 20.8473C15.7294 20.945 15.8619 20.9998 16 20.9998C16.1382 20.9998 16.2707 20.945 16.3683 20.8473C16.466 20.7496 16.5209 20.6171 16.5209 20.479V20.3748C16.5209 18.9153 16.7413 17.9653 17.0434 17.3032C17.3425 16.649 17.738 16.2378 18.1617 15.8744C18.2588 15.7911 18.3642 15.7057 18.4742 15.6169C18.8146 15.3407 19.1955 15.0319 19.4863 14.6611C19.9071 14.1236 20.1667 13.4478 20.1667 12.4582C20.1667 10.1582 18.3 8.2915 16 8.2915Z"
                      fill="black"
                    />
                    <path
                      d="M16 23.5C16.1658 23.5 16.3247 23.4342 16.4419 23.3169C16.5592 23.1997 16.625 23.0408 16.625 22.875C16.625 22.7092 16.5592 22.5503 16.4419 22.4331C16.3247 22.3158 16.1658 22.25 16 22.25C15.8342 22.25 15.6753 22.3158 15.5581 22.4331C15.4408 22.5503 15.375 22.7092 15.375 22.875C15.375 23.0408 15.4408 23.1997 15.5581 23.3169C15.6753 23.4342 15.8342 23.5 16 23.5Z"
                      fill="black"
                    />
                  </svg>
                  <span>چرا ارتقا عضویت؟</span>
                </p>
                <p class="text-center">
                  دسترسی به هزاران خریدار و بازرگان عمده در بزرگترین عمده فروشی
                  کشور !
                </p>
              </div>
            </div>
          </div>

          <!-- show pricing items -->
          <pricing-contents justPro="false" :offer-time="this.offerTime" />

          <!-- after pricing items  -->
        </div>
      </div>

      <!-- <div class="users-review-carousel-wrapper col-xs-12 pricing-wrapper">
        <div class="title-section">تعدادی از اعضای ویژه در باسکول</div>
        <div class="owl-carousel">
          <pricing-user-carousel
            v-for="(userItem, index) in $parent.activeUsers"
            :key="index"
            parent-class=".users-review-carousel-wrapper .owl-carousel"
            :img="
              userItem.profile_photo
                ? $parent.str + '/' + userItem.profile_photo
                : ''
            "
            :title="userItem.first_name + ' ' + userItem.last_name"
            :city="userItem.province + ' - ' + userItem.city"
          />
        </div>
      </div> -->
    </div>

    <!-- <div class="fix-botton-wraper hidden-md hidden-lg">
      <button class="green-button" @click="openCreditCardGuide()">
        پرداخت از طریق کارت به کارت
        <i class="fa fa-credit-card"></i>
      </button>
    </div> -->
  </div>
</template>


<script>
import pricingUserCarousel from "./pricing-user-carousel";
import pricingContents from "./pricing-tables/pricing-package-contents";
import swal from "../../../../sweetalert.min.js";

export default {
  props: ["offerTime"],
  components: { pricingUserCarousel, pricingContents },
  data: function () {
    return {
      // statusData: "",
      doPaymentLoader: false,
    };
  },
  methods: {
    openCreditCardGuide() {
      var buskoolInfo = document.createElement("div");
      buskoolInfo.className = "credit-card-wrapper";
      buskoolInfo.innerHTML = `<i class="fa fa-credit-card"></i><p>
      درصورت نیاز به پرداخت از طریق کارت به کارت، با ما تماس بگیرید
      </p> <div>
      <a href='tel:09178928266'><span><i class='fa fa-phone-alt'></i> 09178928266</span></a>
      <a href='tel:09118413054'><span><i class='fa fa-phone-alt'></i> 09118413054</span></a>
      </div>`;

      swal({
        content: buskoolInfo,
        className: "custom-swal-with-cancel",
        buttons: {
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        this.isActivePhone = false;
      });
    },
  },
};
</script>

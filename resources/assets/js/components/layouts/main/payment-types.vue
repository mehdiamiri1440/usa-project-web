<style scoped>
.main-content {
  direction: rtl;
  line-height: 1.618;
  background: #fff;
}

.wallet-wrapper {
  margin: 0 auto 30px;
  width: 100%;
  max-width: 350px;
  background: none;
  position: relative;
  border: none;
}

.wallet {
  border-radius: 12px;
  overflow: hidden;
  background: url("../../../../img/wallet-bg.jpg") center, rgb(55, 174, 222);
  background-size: cover;
  min-height: 135px;
  color: #fff;
  box-shadow: 0 6px 13px rgba(29, 161, 242, 0.16);
  padding: 15px 10px;
  z-index: 3;
  position: relative;
}

.wallet-wrapper::before {
  content: " ";
  max-width: 310px;
  display: block;
  position: absolute;
  top: -10px;
  height: 30px;
  background: rgba(55, 174, 222, 0.3);
  left: 20px;
  right: 20px;
  border-radius: 12px;
}

.wallet-wrapper::after {
  content: " ";
  max-width: 330px;
  display: block;
  position: absolute;
  top: -5px;
  height: 30px;
  background: rgba(55, 174, 222, 0.3);
  left: 10px;
  border-radius: 12px;
  z-index: 1;
  right: 10px;
}

.wallet-header {
  display: flex;
  justify-content: space-between;
}

.wallet-header .title {
  font-size: 16px;
}

.site-name {
  font-size: 14px;
  opacity: 30%;
  font-family: tahoma;
}

.wallet-main {
  font-size: 30px;
  font-weight: 500;
  text-align: right;
  margin-top: 30px;
}
.small-unit {
  font-size: 19px;
}

.payment-wrapper {
  margin: 0 auto;
  max-width: 400px;
}

.box-title {
  text-align: right;
  font-size: 18px;
  color: #313a43;
}

.payment-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.payment-buttons > button {
  margin: 0;
  border: none;
  background: #f9faf5;
  border-radius: 20px;
  padding: 8px 15px;
  font-size: 20px;
  margin-bottom: 15px;
  transition: 100ms;
}

.payment-buttons > button:hover,
.payment-buttons > button:active,
.payment-buttons > button:focus {
  background: #21ad93;
  color: #fff;
  transition: 100ms;
}

.payment-buttons > button.active {
  background-color: #21ad93;
  color: #fff;
}

.payment-buttons > button span {
  font-size: 14px;
}

.input-wrapper {
  margin-top: 25px;
}

.input-wrapper input {
  width: 100%;
  border-radius: 4px;
  border: none;
  text-align: center;
  padding: 3px 0 4px;
  direction: ltr;
  background: #f9faf5;
  position: relative;
  font-size: 25px;
  color: #21ad93;
}

.count-input-wrapper {
  padding: 0;
  position: relative;
  margin: 0 auto;
  background: #fcfcfc;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #707070;
}

.count-input-wrapper .input-group-append {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
}

.count-input-wrapper .input-group-prepend {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
}

.count-input-wrapper button {
  padding: 9px 20px;
  font-size: 25px;
}

.form-control[type="tel"]::-webkit-inner-spin-button,
.form-control[type="tel"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.bg-gradient {
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);
}

.green-button {
  padding: 13px 65px;
  margin: 15px auto 10px;
  font-size: 16px;
  font-weight: bold;
  width: initial;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
}

.input-text-wrapper {
  height: 25px;
  padding-top: 5px;
}

.icon-wrapper {
  position: absolute;
  top: 53px;
  left: 10px;
  font-size: 15px;
  background: #fff;
  color: #333;
  border-radius: 8px;
  padding: 5px 7px;
  direction: ltr;
}

.icon-wrapper i {
  color: #21ad93;
  position: relative;
  top: 2px;
}

.box-item {
  width: 100%;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  display: block;
  position: relative;
  padding: 17px 0;
  margin: 30px auto;
  transition: 200ms;
  top: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0);
}

.box-item > .box-icon {
  position: absolute;
  left: 15px;
  top: 33px;
  font-size: 20px;
  color: #999;
}

.box-item:hover {
  transition: 200ms;
  top: -3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.button-icon-wrapper {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  position: absolute;
  right: -50px;
  font-size: 25px;
  color: #fff;
  background: #e0e0e0;
  text-align: left;
  padding-top: 35px;
  top: -5px;
  padding-left: 15px;
}

.box-item.payment-method {
  border-color: #4dc0bb;
}

.box-item.payment-method .button-icon-wrapper {
  background: #4dc0bb;
}

.box-item.wallet-method {
  border-color: #1da1f2;
}

.box-item.wallet-method .button-icon-wrapper {
  background: #1da1f2;
}

.box-content {
  text-align: right;
  padding-right: 65px;
}

.box-content p {
  color: #6d7179;
}

.box-content .title {
  font-size: 20px;
  font-weight: 500;
  color: #424750;
  margin-bottom: 6px;
}

.wallet-amount {
  position: absolute;
  left: 35px;
  top: 32px;
  font-size: 13px;
}

@media screen and (max-width: 768px) {
  .main-content,
  .main-wrapper {
    padding: 0;
  }
  .payment-buttons > button {
    padding: 6px;
  }
}
@media screen and (max-width: 360px) {
  .payment-buttons > button {
    font-size: 17px;
  }
}
</style>
<template>
  <section class="main-content h-100 col-xs-12">
    <!-- end payment loader -->
    <div class="main-wrapper col-xs-12 col-md-8 col-md-offset-2">
      <button @click.prevent="openIncreaseModal" class="wallet-wrapper">
        <div class="wallet">
          <div class="wallet-header">
            <p class="title">
              <i class="fa fa-wallet"></i>
              موجودی کیف پول
            </p>
            <span class="site-name"> ‌Buskool.com </span>
          </div>
          <div class="wallet-main">
            {{ getNumberWithCommas(walletBalance) }}
            <span class="small-unit"> تومان </span>
          </div>
          <span class="icon-wrapper">
            <span>افزایش موجودی</span>
            <i class="fa fa-plus"></i>
          </span>
        </div>
      </button>

      <div class="payment-wrapper">
        <p class="box-title">شیوه پرداخت خود را انتخاب کنید.</p>
        <div class="item-action text-center">
          <button
            class="box-item payment-method"
            @click.prevent="doPayment(false)"
          >
            <div class="button-icon-wrapper">
              <i class="fas fa-credit-card"></i>
            </div>
            <div class="box-content">
              <p class="title">پرداخت اینترنتی</p>
              <p>آنلاین با تمامی کارت‌های بانکی</p>
            </div>

            <i class="fa fa-angle-left box-icon"></i>
          </button>
          <button
            class="box-item"
            :class="{ 'wallet-method': walletHasAmount }"
            @click.prevent="doPayment(true)"
          >
            <div class="button-icon-wrapper">
              <i class="fa fa-wallet"></i>
            </div>
            <div class="box-content">
              <p class="title">کیف پول</p>
              <p>پرداخت از طریق کیف پول</p>
            </div>
            <div class="wallet-amount">
              <span class="green-text" v-if="walletHasAmount">
                موجودی کافی است
              </span>
              <span class="red-text" v-else> موجودی کافی نیست </span>
            </div>
            <i class="fa fa-angle-left box-icon"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import swal from "../../../sweetalert.min.js";

export default {
  props: ["walletBalance", "peymentMethodData"],
  data() {
    return {
      walletHasAmount: false,
      priceError: "",
    };
  },
  methods: {
    toLatinNumbers(num) {
      if (num == null) {
        return null;
      }
      num = num.toString().replace(/,/g, "");
      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function (c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function (c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    getNumberWithCommas(number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    validateRegx(input, regx) {
      return regx.test(input);
    },
    doPayment(isWallet) {
      if (isWallet) {
        if (this.walletHasAmount) {
          this.paymentWithWallet();
        } else {
          this.notEnoughAmountModal();
        }
      } else {
        this.$parent.doPaymentLoader = true;
        this.routeToPay();
      }
    },
    routeToPay() {
      switch (this.peymentMethodData.paymentName) {
        case "buyAdPriceData":
          this.registerComponentStatistics(
            "payment",
            "buyAd-reply-capacity",
            this.peymentMethodData.count
          );

          window.location.href =
            "/payment/buyAd-reply-capacity/" + this.peymentMethodData.count;

          break;

        case "productPriceData":
          this.registerComponentStatistics(
            "payment",
            "product-capacity",
            this.peymentMethodData.count
          );

          window.location.href =
            "/payment/product-capacity/" + this.peymentMethodData.count;

          break;

        case "pricingData":
          this.registerComponentStatistics(
            "payment",
            "type-" + this.peymentMethodData.packageType,
            "userId: " + this.peymentMethodData.userId
          );
          window.location.href =
            "/payment/" + this.peymentMethodData.packageType;

          break;

        case "elevatorPricingData":
          window.location.href =
            "/payment/elevator/" + this.peymentMethodData.productId;
          break;

        default:
          break;
      }
    },
    paymentWithWallet() {
      switch (this.peymentMethodData.paymentName) {
        case "buyAdPriceData":
          axios
            .post("/wallet-expend/buyAd-capacity", {
              extra_capacity: this.peymentMethodData.count,
            })
            .then((_) => {
              this.successModal();
            })
            .catch((err) => {
              console.log(err);
            });
          break;

        case "productPriceData":
          axios
            .post("/wallet-expend/product-capacity", {
              extra_capacity: this.peymentMethodData.count,
            })
            .then((_) => {
              this.successModal();
            })
            .catch((err) => {
              console.log(err);
            });

          break;

        case "pricingData":
          axios
            .post("/wallet-expend/buy-package", {
              package_type: this.peymentMethodData.packageType,
            })
            .then((_) => {
              this.successModal();
            })
            .catch((err) => {
              console.log(err);
            });

          break;
        case "elevatorPricingData":
          axios
            .post("/wallet-expend/elevator", {
              product_id: this.peymentMethodData.productId,
            })
            .then((_) => {
              this.successModal();
            })
            .catch((err) => {
              console.log(err);
            });

          break;

        default:
          break;
      }
    },
    successModal() {
      swal({
        title: "پرداخت",
        text: "پرداخت با موفقیت انجام شد",
        icon: "success",
        className: "custom-swal-with-cancel",
        timer: 3000,
        buttons: {
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((item) => {
        location.reload();
      });
    },
    notEnoughAmountModal() {
      let price = document.createElement("div");
      price.innerHTML = `<h4 class="red-text margin-top-50" dir="rtl">موجودی کافی نیست.</h4> <button id="increase-wallet" class="bg-blue green-button increase-wallet-button"><i class="fa fa-plus"></i>افزایش موجودی کیف پول</button>`;

      swal({
        title: "پرداخت",
        content: price,
        className: "custom-swal-with-cancel",
        buttons: {
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      });

      this.$nextTick(() => {
        $("#increase-wallet").on("click", () => {
          this.openIncreaseModal();
        });
      });
    },
    openIncreaseModal() {
      swal.close();
      $(".modal").modal("hide");
      setTimeout(() => {
        $("#wallet-modal").modal("show");
      }, 200);
    },
    registerComponentStatistics: function (
      categoryName,
      actionName,
      labelName
    ) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
    modalHasWalletBalance(){
      if(this.walletBalance == ""){
         axios.post("/user/profile_info").then((response) => {
        this.$parent.currentUser = response.data;
        this.checkWalletBalance(this.peymentMethodData.totalPrice,response.data.user_info.wallet_balance)
      });
      }
    },
    checkWalletBalance(totalPrice,walletBalance){
      if (totalPrice <= walletBalance) {
        this.walletHasAmount = true;
      } else {
        this.walletHasAmount = false;
      }
    }
  },
  watch: {
    peymentMethodData(payment) {
      this.modalHasWalletBalance();
      this.checkWalletBalance(payment.totalPrice, this.walletBalance);
      
    },
  },
};
</script>

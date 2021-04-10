<style scoped>
.main-content {
  direction: rtl;
  line-height: 1.618;
  background: #fff;
}

.wallet-wrapper {
  margin: 0 auto 30px;
  width: 100%;
  max-width: 295px;
  position: relative;
}

.wallet {
  border-radius: 12px;
  overflow: hidden;
  background: url("../../../../img/wallet-bg.jpg") center, rgb(55, 174, 222);
  background-size: cover;
  min-height: 150px;
  color: #fff;
  box-shadow: 0 6px 13px rgba(29, 161, 242, 0.16);
  padding: 15px 10px;
  z-index: 3;
  position: relative;
}

.wallet-wrapper::before {
  content: " ";
  width: 100%;
  max-width: 255px;
  display: block;
  position: absolute;
  top: -10px;
  height: 30px;
  background: rgba(55, 174, 222, 0.3);
  left: 20px;
  border-radius: 12px;
}

.wallet-wrapper::after {
  content: " ";
  width: 100%;
  max-width: 275px;
  display: block;
  position: absolute;
  top: -5px;
  height: 30px;
  background: rgba(55, 174, 222, 0.3);
  left: 10px;
  border-radius: 12px;
  z-index: 1;
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
  text-align: center;
  font-size: 30px;
  padding: 11px 0;
  font-weight: bold;
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

.box-title::after {
  content: " ";
  width: 100px;
  height: 4px;
  background: #00c569;
  display: block;
  border-radius: 5px;
  margin-top: 10px;
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
  border: 1px solid #00c569;
  transition: 100ms;
}

.payment-buttons > button:hover,
.payment-buttons > button:active,
.payment-buttons > button:focus {
  background: #00c569;
  color: #fff;
  transition: 100ms;
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
  border-radius: 4px;
}

.input-text-wrapper {
  height: 25px;
  padding-top: 5px;
}
@media screen and (max-width: 768px) {
  .main-content {
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
      <div class="wallet-wrapper">
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
          <div class="wallet-footer">
            <p class="user-name text-right" v-text="userName"></p>
          </div>
        </div>
      </div>

      <div class="payment-wrapper">
        <p class="box-title">افزایش موجودی</p>
        <div class="payment-buttons">
          <button @click="price = 150000" class="button-item">
            ۱۵۰،۰۰۰
            <span> تومان </span>
          </button>
          <button @click="price = 100000" class="button-item">
            ۱۰۰،۰۰۰
            <span> تومان </span>
          </button>
          <button @click="price = 50000" class="button-item">
            ۵۰،۰۰۰
            <span> تومان </span>
          </button>
        </div>
        <div class="input-wrapper">
          <div class="count-input-wrapper">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-secondary btn-minus"
                @click="calculatePrice(false)"
              >
                <i class="fa fa-minus"></i>
              </button>
            </div>
            <input type="tel" v-model="price" />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary btn-plus"
                @click="calculatePrice(true)"
              >
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="input-text-wrapper text-center">
          <p class="error-message">
            <span class="red-text" v-if="priceError" v-text="priceError"></span>
          </p>
        </div>
        <div
          class="item-action text-center"
          @click="$parent.rechargeWalletPayment(price)"
        >
          <button class="green-button bg-gradient">افزایش موجودی</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["userName", "walletBalance"],
  data: function () {
    return {
      price: "50,000",
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
    calculatePrice(increase) {
      let number = Number(this.toLatinNumbers(this.price));
      if (this.validateRegx(number, /^\d*$/)) {
        if (increase) {
          if (number < 10000) {
            number = 10000;
          } else {
            number = number + 5000;
          }
        } else if (number - 5000 >= 10000) {
          number = number - 5000;
        }
        this.price = this.getNumberWithCommas(number);
      }
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
  },
  watch: {
    price(value) {
      this.priceError = "";
      if (value) {
        let number = this.toLatinNumbers(value);

        if (!this.validateRegx(number, /^\d*$/)) {
          this.priceError = "لطفا  فقط عدد وارد کنید";
        } else if (number < 10000) {
          this.priceError = "حداقل مبلغ شارژ 10,000 تومان است.";
          this.price = this.getNumberWithCommas(number);
        } else {
          this.price = this.getNumberWithCommas(number);
        }
      } else {
        this.priceError = "مبلغ افزایش موجودی الزامی است";
      }
    },
  },
};
</script>

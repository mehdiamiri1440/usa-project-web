<style scoped>
p,
span {
  line-height: 1.5;
}

.from-wrapper {
  max-width: 510px;
  margin: 44px auto 70px;
  overflow: hidden;
  padding-top: 5px;
}

.title-contents {
  font-weight: 500;
  font-size: 18px;
  color: #555;
  margin-bottom: 16px;
  text-align: center;
  line-height: 1.618;
}

.form-contents {
  line-height: 1.618;
}

.form-contents label {
  font-weight: 500;
  color: #777;
  margin: 0 auto 7px;
}

.input-wrapper {
  margin: 0 auto;
  position: relative;
}

.step-action {
  margin-top: 40px;
}

.step-action.submit-button-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.submit-button {
  background: #e0e0e0;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 18px;
  padding: 8px;
  transition: 150ms;
  cursor: default;
  max-width: 147px;
  display: inline-block;
}

.submit-button.back-button {
  background: #fff;
  color: #909090;
  border: 1px solid #bebebe;
  cursor: pointer;
  max-width: 127px;
}

.submit-button.active {
  background: #00c569;
  cursor: pointer;
}
.submit-button.active:hover i {
  right: 3px;
  transition: 150ms;
}

.submit-button i {
  position: relative;
  top: 1px;
  font-size: 14px;
  right: 0;
  transition: 150ms;
}

input {
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  color: #bdc4cc;
  padding: 8px 15px 8px 45px;
  direction: rtl;
  transition: 150ms;
  text-align: right;
  background: #fbfbfb;
}

input#user-stock {
  direction: ltr;
}

.input-wrapper i {
  display: inline-block;
  position: absolute;
  left: 15px;
  font-size: 21px;
  color: #bebebe;
  top: 11px;
  transition: 150ms;
}

input:focus,
input:focus + i {
  color: #333;
}

input.active {
  border-color: #4dc0bb;
  color: #333;
}

input.active + i {
  color: #4dc0bb;
}

input.active:focus,
input.active:focus + i,
input.active + i {
  border-color: #4dc0bb;
}

input.error {
  color: #333;
  border-color: #e41c38;
}

input.error + i {
  color: #e41c38;
}

input.error:focus,
input.error:focus + i {
  border-color: #e41c38;
}

.input-text-wrapper {
  height: 22px;
  padding-top: 2px;
}

.small-description-text {
  text-align: left;
}

.error-message {
  color: #e41c38;
  direction: rtl;
  font-size: 13px;
  padding-top: 2px;
}

.submit-button i {
  position: relative;
  top: 1px;
  font-size: 14px;
  right: 0;
  transition: 150ms;
}

.item-button-wrapper button {
  position: relative;
  top: 0;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: 150ms;
  background: #556080;
  border: none;
  border-radius: 12px;
  color: #fff;
  width: 100%;
  text-align: center;
  padding: 20px 0 15px;
}

.item-button-wrapper button:hover {
  top: -5px;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  transition: 150ms;
}

.item-button-wrapper button img {
  width: 50px;
  height: 50px;
  margin: -1px auto 0;
  display: block;
}

.item-button-wrapper button .text {
  display: block;
  margin-top: 10px;
}

.item-button-wrapper button .title {
  font-weight: 500;
  font-size: 23px;
}

.form-buttons-wrapper button {
  width: 100%;
  max-width: 95px;
  border-radius: 8px;
  margin: 0 7px;
  font-size: 15px;
}
#stock {
  margin-top: 20px;
}
.form-buttons-wrapper {
  margin-top: 25px;
}

.green-button.disabled,
.green-button.disabled:hover {
  background: #e0e0e0 !important;
}
</style>

<template>
  <div class="text-rtl from-wrapper">
    <h2 class="title-contents">
      آیا تمایل به ارسال درخواست خرید به فروشندگان مشابه دارید؟
    </h2>
    <div class="form-contents col-xs-12">
      <div class="row">
        <div class="text-center form-buttons-wrapper">
          <button
            class="green-button"
            type="button"
            :class="{ disabled: isStock }"
            @click.prevent="stockCollapse()"
            :disabled="isStock"
          >
            بله
          </button>
          <button
            class="green-button bg-red"
            @click.prevent="callRegisterBuyAd()"
          >
            خیر
          </button>
        </div>
        <form
          v-on:submit.prevent="callRegisterBuyAd()"
          id="stock"
          class="collapse"
        >
          <label for="product-type" class="description">
            نوع
            <span
              class="light-green-text"
              v-text="this.$parent.product.main.sub_category_name"
            >
            </span>
            مورد نیاز خود را وارد کنید.
          </label>

          <div class="input-wrapper user-information-wrapper">
            <input
              v-model="productName"
              id="product-type"
              type="text"
              :class="{
                active: $parent.productName,
                error: $parent.errors.productName,
              }"
              placeholder="نوع محصول مورد نیاز خود را وارد کنید"
            />

            <i
              v-if="$parent.productName && !$parent.errors.productName"
              class="fa fa-check-circle"
            ></i>
            <i
              v-else-if="$parent.errors.productName"
              class="fa fa-times-circle"
            ></i>
            <i v-else class="fa fa-edit"></i>
          </div>
          <div class="input-text-wrapper">
            <p class="error-message" v-if="$parent.errors.productName">
              <span v-text="$parent.errors.productName"></span>
            </p>
          </div>

          <label for="user-stock">
            چه میزان
            <span
              class="light-green-text"
              v-text="this.$parent.product.main.sub_category_name"
            ></span>
            <span
              v-if="productName && !$parent.errors.productName"
              v-text="' از نوع '"
            ></span>
            <span
              v-if="productName && !$parent.errors.productName"
              class="light-green-text"
              v-text="productName"
            ></span>
            نیاز دارید؟
            <span class="red-text">(کیلوگرم)</span>
          </label>
          <div class="input-wrapper user-information-wrapper">
            <input
              v-model="stock"
              :class="{
                error: $parent.errors.stock,
                active: this.stock,
              }"
              id="user-stock"
              type="tel"
              placeholder="مثلا : 50,000"
            />

            <i
              class="fa fa-check-circle"
              v-if="this.stock && !$parent.errors.stock"
            ></i>
            <i class="fa fa-times-circle" v-else-if="$parent.errors.stock"></i>
            <i class="fa fa-edit" v-else></i>
          </div>
          <div class="input-text-wrapper">
            <p class="error-message" v-if="$parent.errors.stock">
              <span v-text="$parent.errors.stock"></span>
            </p>

            <p class="small-description-text" v-else>
              <span
                class="blue-text"
                v-if="stock_text"
                v-text="stock_text"
              ></span>
            </p>
          </div>
        </form>

        <div
          class="step-action text-right"
          :class="{ 'submit-button-wrapper': isStock }"
        >
          <button
            v-if="isStock"
            class="submit-button disabled"
            :class="{
              active:
                !this.$parent.errors.stock && !this.$parent.errors.productName,
            }"
            @click.prevent="callRegisterBuyAd()"
          >
            ثبت

            <i class="fa fa-check"></i>
          </button>
          <button
            class="submit-button back-button"
            @click.prevent="$parent.currentStep--"
          >
            <i class="fa fa-arrow-right"></i>
            مرحله قبل
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isStock: false,
      stock: "",
      stock_text: "",
      productName: "",
    };
  },
  methods: {
    stockCollapse() {
      if (!this.isStock) {
        this.isStock = true;
        $("#stock").collapse("show");
      }
    },
    callRegisterBuyAd() {
      if (!this.$parent.errors.stock && !this.$parent.errors.productName) {
        this.$parent.registerBuyAd();
      }
    },
    stockValidator(number) {
      var standardNumber = this.$parent.toLatinNumbersWithCommas(number);
      if (!this.$parent.validateRegx(standardNumber, /^\d*$/)) {
        this.$parent.errors.stock = "لطفا فقط عدد وارد کنید ";
      }

      if (!this.$parent.errors.stock) {
        if (number.length <= 13) {
          this.stock = this.$parent.getNumberWithCommas(standardNumber);
        } else {
          let numberWithCommas = this.$parent.getNumberWithCommas(
            standardNumber
          );
          this.stock = numberWithCommas.substring(0, 13);
        }
      }
      if (this.$parent.errors.stock) {
        this.$parent.registerComponentStatistics(
          "product-register-error",
          "min-sale-price",
          "input:" + number + " error:" + this.$parent.errors.stock
        );
      }
    },
  },
  mounted() {
    if (this.$parent.isOsIOS()) {
      $("#phone-number").attr("type", "text");
    }
  },
  watch: {
    "$parent.product"() {
      this.productName = this.$parent.product.main.product_name;
    },
    productName(productName) {
      this.$parent.errors.productName = "";
      let error = this.$parent.textValidator(productName, "نوع محصول");

      if (error) {
        this.$parent.errors.productName = error;
      } else {
        this.$parent.productName = this.productName;
      }
    },
    stock(value) {
      this.$parent.errors.stock = "";

      if (value) {
        this.stockValidator(value);
        if (!this.$parent.errors.stock) {
          this.$parent.stock = this.$parent.toLatinNumbersWithCommas(
            this.stock
          );
          this.stock_text = this.$parent.convertUnits(this.$parent.stock);
        }
      } else {
        this.$parent.stock = "";
        this.stock_text = "";
      }
    },
  },
};
</script>

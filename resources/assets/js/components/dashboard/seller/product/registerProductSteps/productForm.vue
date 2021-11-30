<style scoped>
form {
  display: grid;
}
form .form-group {
  margin-bottom: 7px;
  position: relative;
}
form .form-group:focus-within span {
  opacity: 1;
}
form .form-group label {
  color: #000000b2;
}
form .form-group label span {
  margin-top: 0.4rem;
  margin-right: 0.5rem;
  position: absolute;
}
form label {
  font-size: 1.4rem;
  font-weight: 700;
}
form input[type="text"] {
  height: 44px;
  border-radius: 8px;
}

form .custom-tooltip {
  position: absolute;
  left: 0;
  top: -10px;
  background: #1da1f2;
  color: #fff;
  border-radius: 8px;
  padding: 7px 15px;
  z-index: 100;
  opacity: 0;
  transition: 300ms;
}

form .custom-tooltip::after {
  content: "";
  position: absolute;
  bottom: -4px;
  width: 8px;
  height: 8px;
  background: #1da1f2;
  border-radius: 2px;
  transform: rotate(45deg);
  left: calc(50% - 4px);
}

form input[type="text"]:focus {
  box-shadow: unset;
  border: 1px solid #000000;
}
form input[type="text"].active {
  border-color: #00c569;
}
form input[type="text"].error {
  border-color: #e41c38;
}
form .input-icon {
  position: relative;
  float: left;
  z-index: 10;
  margin-top: -28px;
  margin-left: 10px;
  color: #9e9f9f;
}
form .input-icon.active {
  color: #00c569;
}
form .input-icon.error {
  color: #e41c38;
}
form .form-group p {
  height: 30px;
  line-height: 30px;
  font-size: 1.2rem;
}
form .form-group.buttons-div {
  padding-top: 1rem;
  margin-bottom: 1rem;
  display: block;
}
form .form-group button {
  width: 104px;
  height: 36px;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.38);
  padding: 0;
}
form .form-group button span {
  font-size: 1.4rem;
  margin-top: 0.4rem;
}
form .form-group button.prev {
  position: relative;
  float: right;
  border: 1px solid #767676;
  background: unset;
}
form .form-group button.next {
  position: relative;
  float: left;
  background-color: #c2c9d1;
  border: 1px solid #dadada;
}
form .form-group button.next.active {
  color: #ffffff;
  background-color: #00c569;
  border: 1px solid #00c569;
}
form .form-group button.next span.next-text {
  float: right;
  margin-top: 0.2rem;
  margin-right: 0.9rem;
}

form .form-group button.next span.next-icon {
  float: left;
  margin-top: 0.4rem;
  margin-left: 0.9rem;
  font-size: 1.9rem;
}
form .form-group button.prev span.prev-text {
  float: left;
  margin-top: 0.2rem;
  margin-left: 0.9rem;
}
form .form-group button.prev span.prev-icon {
  margin-top: 0.4rem;
  margin-right: 0.9rem;
  float: right;
  font-size: 1.9rem;
}
</style>
<template>
  <div>
    <form v-on:submit.prevent="productFormData()">
      <div class="form-group">
        <label>نوع محصول<span class="red-text">*</span></label>
        <input
          :class="[
            { active: $parent.product.product_name },
            { error: errors.productName },
          ]"
          type="text"
          v-model="$parent.product.product_name"
          class="form-control"
          placeholder="مثلا: مضافتی"
        />
        <span
          class="input-icon"
          :class="[{ active: $parent.product.product_name }]"
          v-if="$parent.product.product_name && !errors.productName"
          ><i class="fa fa-check-circle"></i
        ></span>
        <span
          class="input-icon"
          :class="[{ error: errors.productName }]"
          v-else-if="errors.productName"
          ><i class="fa fa-times-circle"></i
        ></span>
        <p class="red-text" v-text="errors.productName"></p>
      </div>
      <div class="form-group">
        <label>میزان موجودی<span class="red-text">*</span></label>
        <span
          v-show="stockText && !errors.stock"
          class="custom-tooltip"
          v-text="stockText"
        ></span>
        <input
          :class="[{ active: $parent.product.stock }, { error: errors.stock }]"
          type="text"
          class="form-control"
          v-model="$parent.product.stock"
          placeholder="مثلا : ۵۰٬۰۰۰"
        />
        <span
          class="input-icon"
          :class="[{ active: $parent.product.stock }]"
          v-if="$parent.product.stock && !errors.stock"
          ><i class="fa fa-check-circle"></i
        ></span>
        <span
          class="input-icon"
          :class="[{ error: errors.stock }]"
          v-else-if="errors.stock"
          ><i class="fa fa-times-circle"></i
        ></span>
        <p class="red-text" v-text="errors.stock"></p>
      </div>
      <div class="form-group">
        <label
          >حداقل میزان فروش (کیلوگرم)<span class="red-text">*</span></label
        >
        <span
          v-show="minSaleAmountText && !errors.minSaleAmount"
          class="custom-tooltip"
          v-text="minSaleAmountText"
        ></span>
        <input
          :class="[
            { active: $parent.product.min_sale_amount },
            { error: errors.minSaleAmount },
          ]"
          type="text"
          class="form-control"
          v-model="$parent.product.min_sale_amount"
          placeholder="مثلا : ۵۰٬۰۰۰"
        />
        <span
          class="input-icon"
          :class="[{ active: $parent.product.min_sale_amount }]"
          v-if="$parent.product.min_sale_amount && !errors.minSaleAmount"
          ><i class="fa fa-check-circle"></i
        ></span>
        <span
          class="input-icon"
          :class="[{ error: errors.minSaleAmount }]"
          v-else-if="errors.minSaleAmount"
          ><i class="fa fa-times-circle"></i
        ></span>
        <p class="red-text" v-text="errors.minSaleAmount"></p>
      </div>
      <div class="form-group">
        <label>حداقل قیمت فروش<span class="red-text">*</span></label>
        <span
          v-show="minSalePriceText && !errors.minSalePrice"
          class="custom-tooltip"
          v-text="minSalePriceText"
        ></span>
        <input
          :class="[
            { active: $parent.product.min_sale_price },
            { error: errors.minSalePrice },
          ]"
          type="text"
          class="form-control"
          v-model="$parent.product.min_sale_price"
          placeholder="مثلا : ۵۰٬۰۰۰"
        />
        <span
          class="input-icon"
          :class="[{ active: $parent.product.min_sale_price }]"
          v-if="$parent.product.min_sale_price && !errors.minSalePrice"
          ><i class="fa fa-check-circle"></i
        ></span>
        <span
          class="input-icon"
          :class="[{ error: errors.minSalePrice }]"
          v-else-if="errors.minSalePrice"
          ><i class="fa fa-times-circle"></i
        ></span>
        <p class="red-text" v-text="errors.minSalePrice"></p>
      </div>
      <div class="form-group">
        <label>حداکثر قیمت فروش<span class="red-text">*</span></label>
        <span
          v-show="maxSalePriceText && !errors.maxSalePrice"
          class="custom-tooltip"
          v-text="maxSalePriceText"
        ></span>
        <input
          :class="[
            { active: $parent.product.max_sale_price },
            { error: errors.maxSalePrice },
          ]"
          type="text"
          class="form-control"
          v-model="$parent.product.max_sale_price"
          placeholder="مثلا : ۵۰٬۰۰۰"
        />
        <span
          class="input-icon"
          :class="[{ active: $parent.product.max_sale_price }]"
          v-if="$parent.product.max_sale_price && !errors.maxSalePrice"
          ><i class="fa fa-check-circle"></i
        ></span>
        <span
          class="input-icon"
          :class="[{ error: errors.maxSalePrice }]"
          v-else-if="errors.maxSalePrice"
          ><i class="fa fa-times-circle"></i
        ></span>
        <p class="red-text" v-text="errors.maxSalePrice"></p>
      </div>
      <div class="form-group buttons-div">
        <button
          :class="[
            {
              active:
                errors.productName == '' &&
                errors.stock == '' &&
                errors.minSaleAmount == '' &&
                errors.minSalePrice == '' &&
                errors.maxSalePrice == '' &&
                this.$parent.product.product_name != '' &&
                this.$parent.product.stock != '' &&
                this.$parent.product.min_sale_amount != '' &&
                this.$parent.product.min_sale_price != '' &&
                this.$parent.product.max_sale_price != '',
            },
          ]"
          class="next"
          @click.prevent="productFormData()"
        >
          <span class="next-icon"><i class="fas fa-long-arrow-alt-left"></i></span> <span class="next-text">مرحله بعد</span> 
        </button>
        <button class="prev" @click.prevent="$parent.previousStep()">
          <span class="prev-icon"><i class="fas fa-long-arrow-alt-right"></i></span> <span class="prev-text"> مرحله قبل</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: {
        productName: "",
        stock: "",
        minSaleAmount: "",
        minSalePrice: "",
        maxSalePrice: "",
      },
      isActive: false,
      productName: "",
      stock: "",
      minSaleAmount: "",
      minSalePrice: "",
      maxSalePrice: "",
      stockText: "",
      minSaleAmountText: "",
      maxSalePriceText: "",
      minSalePriceText: "",
    };
  },
  methods: {
   
    getNumberWithCommas(number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    productTypeValidator(name) {
      if (!this.validateRegx(name, /^[\u0600-\u06FF\s_,.:/;()+-\d]+$/)) {
        this.errors.productName = "لطفا نوع محصول را فارسی وارد کنید.";
      }
      if (!this.errors.minSalePrice) {
        this.$parent.product.product_name =name;
      }
    },
    validateRegx(input, regx) {
      return regx.test(input);
    },
    stockValidator(number) {
      if (number.length >= 13) {
        this.$parent.product.stock = this.$parent.product.stock.substring(
          0,
          13
        );
      }
      let standardNumber = this.$parent.toLatinNumbers(this.$parent.product.stock);

      if (standardNumber == "") {
        this.errors.stock = "لطفا میزان موجودی را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.stock = "لطفا فقط عدد وارد کنید";
      }

      if (!this.errors.stock) {
        this.$parent.product.stock = this.getNumberWithCommas(standardNumber);
        this.stockText = this.convertUnits(standardNumber);
      }

      /*if (this.errors.stock) {
        this.registerComponentStatistics(
          "product-register-error",
          "stock",
          "input:" + number + " error:" + this.errors.stock
        );
      }*/
    },
    minSaleAmountValidator(number) {
      if (number.length >= 13) {
        this.$parent.product.min_sale_amount =
          this.$parent.product.min_sale_amount.substring(0, 13);
      }
      var standardNumber = this.$parent.toLatinNumbers(
        this.$parent.product.min_sale_amount
      );
      if (standardNumber == "") {
        this.errors.minSaleAmount = "لطفا حداقل میزان فروش را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.minSaleAmount = "لطفا فقط عدد وارد کنید ";
      }
      if (!this.errors.minSaleAmount) {
      
        this.$parent.product.min_sale_amount =
          this.getNumberWithCommas(standardNumber);
        this.minSaleAmountText = this.convertUnits(standardNumber);
      }
      /*
      if (this.errors.min_sale_amount) {
        this.registerComponentStatistics(
          "product-register-error",
          "min-sale-amount",
          "input:" + number + " error:" + this.errors.min_sale_amount
        );
      }*/
    },
    maxSalePriceValidator(number) {
      if (number.length >= 13) {
        this.$parent.product.max_sale_price =
          this.$parent.product.max_sale_price.substring(0, 13);
      }
      var standardNumber = this.$parent.toLatinNumbers(
        this.$parent.product.max_sale_price
      );
      if (standardNumber == "") {
        this.errors.maxSalePrice = "لطفا حداکثر قیمت را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.maxSalePrice = "لطفا فقط عدد وارد کنید ";
      }
      if (!this.errors.maxSalePrice) {
        this.$parent.product.max_sale_price =
          this.getNumberWithCommas(standardNumber);
        this.maxSalePriceText = this.convertCurrencyUnits(standardNumber);
      }
      /*if (this.errors.max_sale_price) {
        this.registerComponentStatistics(
          "product-register-error",
          "max-sale-price",
          "input:" + number + " error:" + this.errors.max_sale_price
        );
      }*/
    },
    minSalePriceValidator(number) {
      if (number.length >= 13) {
        this.$parent.product.min_sale_price =
          this.$parent.product.min_sale_price.substring(0, 13);
      }
      var standardNumber = this.$parent.toLatinNumbers(
        this.$parent.product.min_sale_price
      );
      if (standardNumber == "") {
        this.errors.minSalePrice = "لطفا حداقل قیمت را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.minSalePrice = "لطفا فقط عدد وارد کنید ";
      }
      if (!this.errors.minSalePrice) {
        this.$parent.product.min_sale_price =
          this.getNumberWithCommas(standardNumber);
        this.minSalePriceText = this.convertCurrencyUnits(standardNumber);
      }
      /*if (this.errors.min_sale_price) {
        this.registerComponentStatistics(
          "product-register-error",
          "min-sale-price",
          "input:" + number + " error:" + this.errors.min_sale_price
        );
      }*/
    },
    convertUnits(number) {
      let data = number / 1000;
      let text = "";
      if (number < 1000) {
        return number + " " + "کیلوگرم";
      } else {
        let ton = data.toString().split(".")[0];
        ton = this.getNumberWithCommas(ton);
        let kg = number.toString().substr(ton.length);
        kg = kg.replace(/^0+/, "");
        ton = ton + " " + "تن";

        if (kg) {
          kg = " و " + kg + " کیلوگرم";
          text = ton + kg;
        } else {
          text = ton;
        }

        return text;
      }
    },
    convertCurrencyUnits(number) {
      let price = "";
      if (number) {
        price = this.getNumberWithCommas(number);
        price = price + " " + "تومان";
      }
      return price;
    },
    getNumberWithCommas(number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
    productFormData() {
      if (this.$parent.product.product_name == "") {
        this.errors.productName = "لطفا نوع محصول را وارد کنید.";
      }
      if (this.$parent.product.stock == "") {
        this.errors.stock = "لطفا میزان موجودی را وارد کنید.";
      }
      if (this.$parent.product.min_sale_amount == "") {
        this.errors.minSaleAmount = "لطفا حداقل میزان فروش را وارد کنید.";
      }
      if (this.$parent.product.min_sale_price == "") {
        this.errors.minSalePrice = "لطفا حداقل قیمت را وارد کنید.";
      }
      if (this.$parent.product.max_sale_price == "") {
        this.errors.maxSalePrice = "لطفا حداکثر قیمت را وارد کنید.";
      }
      if (
        this.$parent.product.product_name == "" ||
        this.$parent.product.stock == "" ||
        this.$parent.product.min_sale_amount == "" ||
        this.$parent.product.min_sale_price == "" ||
        this.$parent.product.max_sale_price == ""
      ) {
        return;
      }

      this.$parent.currentStep++;
    },
  },
  watch: {
    "$parent.product.product_name"(e) {
      this.errors.productName = "";
      if (e != "") {
        this.productTypeValidator(e);
      }
    },
    "$parent.product.stock"(e) {
      this.errors.stock = "";
      if (e) {
        this.stockValidator(e);
      } else {
        this.stockText = "";
      }
    },
    "$parent.product.min_sale_amount"(e) {
      this.errors.minSaleAmount = "";
      if (e) {
        this.minSaleAmountValidator(e);
      } else {
        this.minSaleAmountText = "";
      }
    },
    "$parent.product.min_sale_price"(e) {
      this.errors.minSalePrice = "";
      if (e) {
        this.minSalePriceValidator(e);
      } else {
        this.minSalePriceText = "";
      }
    },
    "$parent.product.max_sale_price"(e) {
      this.errors.maxSalePrice = "";
      if (e) {
        this.maxSalePriceValidator(e);
      } else {
        this.maxSalePriceText = "";
      }
    },
  },
};
</script>

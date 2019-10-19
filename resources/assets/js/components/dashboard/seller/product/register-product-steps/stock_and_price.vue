
<style scoped>
input {
  box-shadow: none !important;
}

label {
  margin: 0 auto 9px auto;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 10px 30px 9px;
  transition: 200ms;
  cursor: default;
  margin: 8px 0;
}
.submit-button.default-button {
  background: #fff;
  color: #777;
  border: 1px solid #777;
  border-radius: 4px;
  cursor: pointer;
}
.submit-button.active {
  background: #00c569;
  cursor: pointer;
}

.title-contents {
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 15px;
}

.form-contents {
  margin: 5px auto;
}

.form-contents lable {
  font-size: 12px;
}

.input-wrapper,
.text-input-wrapper {
  margin: 6px auto;

  position: relative;
}

.input-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 6px;

  font-family: "Font Awesome 5 Free",sans-serif;

  font-weight: 900;

  left: 15px;

  font-size: 20px;

  z-index: 0;
}

input {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  color: #bebebe;

  border-color: #bebebe;

  direction: rtl;

  transition: 300ms;

  background: #fff;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 300ms;
}

input:focus,
input:focus + i {
  color: #333;
  border-color: #333;
}

input.active {
  border-color: #00c569;
  color: #333;
}

input.active + i {
  color: #00c569;
}

input.active:focus,
input.active:focus + i,
input.active + i {
  border-color: #00c569;
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

select {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  position: relative;

  z-index: 1;

  color: #777777;

  direction: rtl;

  transition: 200ms;

  background: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 200ms;
}

select option {
  color: #333;
}

select:focus {
  color: #333;
}

select.active {
  color: #333;
  color: #00c569;
}

select.active:focus {
  color: #00c569;
}

select.error {
  color: #333;
  color: #e41c38;
}

select.error:focus {
  color: #e41c38;
}

.error-message {
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 15px;

  direction: rtl;

  font-size: 11px;
}

.small-description {
  font-size: 11px;

  font-weight: bold;

  color: #777777;

  line-height: 1.618;
}
label .small-label {
  font-size: 12px;
}
@media screen and (max-width: 767px) {
  select {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
}
</style>

<template>
  <div>
    <h2 class="title-contents col-xs-12">موجودی و قیمت محصول</h2>

    <div class="form-contents col-xs-12">
      <div class="row">
        <div class="col-xs-6 pull-right">
          <label for="stock">
            میزان موجودی
            <span class="small-label">(کیلوگرم)</span>
          </label>

          <div class="text-input-wrapper">
            <!-- input type tel because we have some limmitation for processes -->

            <input
              v-model="$parent.product.stock"
              id="stock"
              type="tel"
              :class="{'active' :  $parent.product.stock , 'error': $parent.errors.stock}"
              placeholder="مثلا : 1000 "
              pattern="[0-9]*"
            />
          </div>
          <p class="error-message col-xs-12">
            <span v-if="$parent.errors.stock" v-text="$parent.errors.stock"></span>
          </p>
        </div>

        <div class="col-xs-6">
          <label for="min-sale-amount">
            حداقل سفارش
            <span class="small-label">(کیلوگرم)</span>
          </label>

          <div class="text-input-wrapper">
            <input
              v-model="$parent.product.min_sale_amount"
              id="min-sale-amount"
              type="tel"
              :class="{'active' :  $parent.product.min_sale_amount , 'error':$parent.errors.min_sale_amount}"
              placeholder="مثلا : 20 "
              pattern="[0-9]*"
            />
          </div>
          <p class="error-message">
            <span v-if="$parent.errors.min_sale_amount" v-text="$parent.errors.min_sale_amount"></span>
          </p>
        </div>

        <div class="col-xs-6 pull-right">
          <label for="min-sale-price">
            حداقل قیمت
            <span class="small-label">(هر کیلو به تومان)</span>
          </label>

          <div class="text-input-wrapper">
            <input
              v-model="$parent.product.min_sale_price"
              id="min-sale-price"
              type="tel"
              :class="{'active' :  $parent.product.min_sale_price , 'error':$parent.errors.min_sale_price}"
              placeholder="مثلا : 260000 "
              pattern="[0-9]*"
            />
          </div>
          <p class="error-message">
            <span v-if="$parent.errors.min_sale_price" v-text="$parent.errors.min_sale_price"></span>
          </p>
        </div>

        <div class="col-xs-6">
          <label for="max-sale-price">
            حداکثر قیمت
            <span class="small-label">(هر کیلو به تومان)</span>
          </label>

          <div class="text-input-wrapper">
            <input
              v-model="$parent.product.max_sale_price"
              id="max-sale-price"
              type="tel"
              :class="{'active' :  $parent.product.max_sale_price , 'error':$parent.errors.max_sale_price}"
              placeholder="مثلا : 500000 "
              pattern="[0-9]*"
            />
          </div>

          <p class="error-message">
            <span v-if="$parent.errors.max_sale_price" v-text="$parent.errors.max_sale_price"></span>
          </p>
        </div>
      </div>

      <!-- <span class="small-description">

 انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه اینکوباک کمک می کند
 انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه اینکوباک کمک می کند

      </span>-->

      <div class="col-xs-12">
        <div class="row">
          <button
            class="submit-button disabled pull-left"
            :class="{'active' : $parent.product.stock && $parent.product.min_sale_price && $parent.product.max_sale_price && $parent.product.min_sale_amount}"
            @click.prevent="$parent.stockAndPriceSubmited()"
          >
            مرحله بعد
            <i class="fa fa-arrow-left"></i>
          </button>

          <button
            class="submit-button default-button pull-right"
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
  mounted() {
    if (this.$parent.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
  },
  watch: {
    "$parent.product.stock": function() {
      this.$parent.errors.stock = "";
    },
    "$parent.product.min_sale_amount": function() {
      this.$parent.errors.min_sale_amount = "";
    },
    "$parent.product.min_sale_price": function() {
      this.$parent.errors.min_sale_price = "";
    },
    "$parent.product.max_sale_price": function() {
      this.$parent.errors.max_sale_price = "";
    }
  }
};
</script>

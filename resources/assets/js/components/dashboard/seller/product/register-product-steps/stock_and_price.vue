
<style scoped>
.title-contents {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 0;
}

.bg-white {
  background: #fff;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 8px 25px 7px;
  transition: 200ms;
  cursor: default;
  margin: 0;
}

.submit-button i {
  transition: 300ms;
  position: relative;
  top: 2px;
  left: -3px;
}

.input-text-wrapper {
  height: 25px;
  padding-top: 5px;
}

.small-description-text {
  text-align: left;
}

.submit-button.default-back-button i {
  left: 3px;
}

.submit-button.default-back-button {
  background: #fff;
  color: #777;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
}

.submit-button.default-back-button:hover i {
  transform: translateX(5px);
}
.submit-button.active {
  background: #00c569;
  cursor: pointer;
  transform: translateX(0);
}
.submit-button.active:hover i {
  background: #00c569;
  cursor: pointer;
  transform: translateX(-5px);
}
.action-control-wrapper {
  padding: 20px 15px 50px;
  background: #fff;
}

label {
  margin: 0 auto 10px auto;
  font-size: 15px;
  font-weight: 400;
  color: #777;
}
.small-label {
  font-size: 15px;
}

.text-input-wrapper {
  margin: 0 auto;
  position: relative;
  background: #fbfbfb;
}

input {
  background: none;
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  box-shadow: none;
}

.text-input-wrapper i {
  position: absolute;
  left: 15px;
  top: 11px;
  font-size: 18px;
  color: #bdc4cc;
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

.custom-tooltip {
  position: absolute;
  left: 0;
  top: -39px;
  background: #1da1f2;
  color: #fff;
  border-radius: 8px;
  padding: 7px 15px;
  opacity: 0;
  transition: 300ms;
}

.custom-tooltip::after {
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

.text-input-wrapper:focus-within span {
  opacity: 1;
}

@media screen and (max-width: 767px) {
  select {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
  .action-control-wrapper {
    padding: 20px 15px 100px;
  }
}
</style>

<template>
  <div>
    <form
      class="form-contents col-xs-12"
      v-on:submit.prevent="$parent.stockAndPriceSubmited()"
    >
      <div class="row">
        <div class="col-xs-12 bg-white">
          <h2 class="title-contents col-xs-12">
            میزان موجودی

            <span class="small-label">(کیلوگرم)</span>

            <span class="red-text"> * </span>
          </h2>
          <label for="stock" class="description"> مثلا: 50,000 </label>

          <div class="text-input-wrapper">
            <span
              v-show="$parent.stock_text && !$parent.errors.stock"
              class="custom-tooltip"
              v-text="$parent.stock_text"
            ></span>
            <input
              v-model="$parent.product.stock"
              id="stock"
              type="tel"
              name="stock"
              :class="{
                active: $parent.product.stock,
                error: $parent.errors.stock,
              }"
              placeholder="میزان موجودی محصول را وارد کنید"
              pattern="[0-9]*"
               @blur="$parent.showNavigationMenu"
              @focus="$parent.hideNavigationMenu"
            />

            <i
              v-if="$parent.product.stock && !$parent.errors.stock"
              class="fa fa-check-circle"
            ></i>
            <i v-else-if="$parent.errors.stock" class="fa fa-times-circle"></i>
            <i v-else class="fa fa-edit"></i>
          </div>

          <div class="input-text-wrapper">
            <!-- <p class="small-description-text" v-if="!$parent.errors.stock">
              <span
                class="blue-text"
                v-if="$parent.stock_text"
                v-text="$parent.stock_text"
              ></span>
            </p> -->
            <p class="error-message">
              <span
                class="red-text"
                v-if="$parent.errors.stock"
                v-text="$parent.errors.stock"
              ></span>
            </p>
          </div>
        </div>

        <div class="col-xs-12 bg-white">
          <h2 class="title-contents col-xs-12">
            حداقل میزان فروش

            <span class="small-label">(کیلوگرم)</span>

            <span class="red-text"> * </span>
          </h2>
          <label for="stock" class="description"> مثلا: 25,000 </label>

          <div class="text-input-wrapper">
            <span
              v-show="
                $parent.min_sale_amount_text && !$parent.errors.min_sale_amount
              "
              class="custom-tooltip"
              v-text="$parent.min_sale_amount_text"
            ></span>
            <input
              v-model="$parent.product.min_sale_amount"
              id="min-sale-amount"
              type="tel"
              :class="{
                active: $parent.product.min_sale_amount,
                error: $parent.errors.min_sale_amount,
              }"
              placeholder="حداقل میزان فروش را وارد کنید"
              pattern="[0-9]*"
              @blur="$parent.showNavigationMenu"
              @focus="$parent.hideNavigationMenu"
            />

            <i
              v-if="
                $parent.product.min_sale_amount &&
                !$parent.errors.min_sale_amount
              "
              class="fa fa-check-circle"
            ></i>
            <i
              v-else-if="$parent.errors.min_sale_amount"
              class="fa fa-times-circle"
            ></i>
            <i v-else class="fa fa-edit"></i>
          </div>

          <div class="input-text-wrapper">
            <!-- <p
              class="small-description-text"
              v-if="!$parent.errors.min_sale_amount"
            >
              <span
                class="blue-text"
                v-if="$parent.min_sale_amount_text"
                v-text="$parent.min_sale_amount_text"
              ></span>
            </p> -->
            <p class="error-message">
              <span
                class="red-text"
                v-if="$parent.errors.min_sale_amount"
                v-text="$parent.errors.min_sale_amount"
              ></span>
            </p>
          </div>
        </div>

        <div class="col-xs-12 bg-white">
          <h2 class="title-contents col-xs-12">
            حداقل قیمت

            <span class="small-label">(هر کیلو به تومان)</span>

            <span class="red-text"> * </span>
          </h2>
          <label for="stock" class="description"> مثلا: 15,000 </label>

          <div class="text-input-wrapper">
            <span
              v-show="
                $parent.min_sale_price_text && !$parent.errors.min_sale_price
              "
              class="custom-tooltip"
              v-text="$parent.min_sale_price_text"
            ></span>
            <input
              v-model="$parent.product.min_sale_price"
              id="min-sale-amount"
              type="tel"
              :class="{
                active: $parent.product.min_sale_price,
                error: $parent.errors.min_sale_price,
              }"
              placeholder="حداقل قیمت را وارد کنید"
              pattern="[0-9]*"
              @blur="$parent.showNavigationMenu"
              @focus="$parent.hideNavigationMenu"
            />

            <i
              v-if="
                $parent.product.min_sale_price && !$parent.errors.min_sale_price
              "
              class="fa fa-check-circle"
            ></i>
            <i
              v-else-if="$parent.errors.min_sale_price"
              class="fa fa-times-circle"
            ></i>
            <i v-else class="fa fa-edit"></i>
          </div>

          <div class="input-text-wrapper">
            <p class="error-message">
              <span
                class="red-text"
                v-if="$parent.errors.min_sale_price"
                v-text="$parent.errors.min_sale_price"
              ></span>
            </p>
          </div>
        </div>

        <div class="col-xs-12 bg-white">
          <h2 class="title-contents col-xs-12">
            حداکثر قیمت

            <span class="small-label">(هر کیلو به تومان)</span>

            <span class="red-text"> * </span>
          </h2>
          <label for="stock" class="description"> مثلا: 30,000 </label>

          <div class="text-input-wrapper">
            <span
              v-show="
                $parent.max_sale_price_text && !$parent.errors.max_sale_price
              "
              class="custom-tooltip"
              v-text="$parent.max_sale_price_text"
            ></span>
            <input
              v-model="$parent.product.max_sale_price"
              id="min-sale-amount"
              type="tel"
              :class="{
                active: $parent.product.max_sale_price,
                error: $parent.errors.max_sale_price,
              }"
              placeholder="حداکثر قیمت را وارد کنید"
              pattern="[0-9]*"
              @blur="$parent.showNavigationMenu"
              @focus="$parent.hideNavigationMenu"
            />

            <i
              v-if="
                $parent.product.max_sale_price && !$parent.errors.max_sale_price
              "
              class="fa fa-check-circle"
            ></i>
            <i
              v-else-if="$parent.errors.max_sale_price"
              class="fa fa-times-circle"
            ></i>
            <i v-else class="fa fa-edit"></i>
          </div>

          <div class="input-text-wrapper">
            <p class="error-message">
              <span
                class="red-text"
                v-if="$parent.errors.max_sale_price"
                v-text="$parent.errors.max_sale_price"
              ></span>
            </p>
          </div>
        </div>
      </div>
      <div class="row action-control-wrapper">
        <button
          class="submit-button disabled pull-left"
          :class="{
            active:
              $parent.product.stock &&
              $parent.product.min_sale_price &&
              $parent.product.max_sale_price &&
              $parent.product.min_sale_amount &&
              !$parent.errors.stock &&
              !$parent.errors.min_sale_price &&
              !$parent.errors.max_sale_price &&
              !$parent.errors.min_sale_amount,
          }"
          @click.prevent="$parent.stockAndPriceSubmited()"
          type="submit"
        >
          مرحله بعد
          <i class="fa fa-arrow-left"></i>
        </button>

        <button
          class="submit-button default-back-button pull-right"
          @click.prevent="$parent.currentStep--"
        >
          <i class="fa fa-arrow-right"></i>

          مرحله قبل
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  mounted() {
    if (this.$parent.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
  },
};
</script>

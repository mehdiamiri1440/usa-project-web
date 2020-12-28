
<style scoped>

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
  margin:0;
 
}

.submit-button i{
  transition:300ms;
  position: relative;
  top: 2px;
  left: -3px;
}

.submit-button.default-back-button i{
  left: 3px;
}

.error-message{
  height:25px
}


.submit-button.default-back-button {
  background: #fff;
  color: #777;
  border: 1px solid #BDC4CC;
  border-radius: 4px;
  cursor: pointer;
  font-weight:400;
  font-size: 14px;
}

.submit-button.default-back-button:hover i {
  transform : translateX(5px);

}
.submit-button.active {
  background: #00c569;
  cursor: pointer;
  transform : translateX(0);

}
.submit-button.active:hover i {
  background: #00c569;
  cursor: pointer;
  transform : translateX(-5px);
}
.action-control-wrapper{
  margin:40px auto 20px
}



.title-contents {
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 30px;
  padding: 0 15px;
  margin-top: -23px;
}

.title-contents img{
  width: 45px;
  position: relative;
  top: 9px;
  margin-left: 5px;
}

ul{
  max-height: 340px;
  overflow: auto;
  border-radius: 4px;
  width: 100%;
}

ul li.item img{
  max-width: 35px;
  float: right;
  margin-left: 18px;
}

ul li.item  button{
  background: #fff;
  width: 100%;
  border: none;
  border-bottom: 1px solid #E0E0E0;
  padding:  15px;
  text-align: right;
  transition:300ms;
}

ul li.item  button:hover{
  transition:300ms;
  color:#00c569;
  transform:translateX(-8px);
  border-bottom-color:#777;

}

ul li.item  button span{
  font-size: 18px;
  font-weight: 500;
  padding-top: 5px;
  display: inline-block;
}


ul li.item  button i{
  float: left;
  margin-top: 10px;
  font-size: 20px;
}


@media screen and (max-width: 767px) {
 .title-contents{
   font-weight: bold;
  font-size: 19px;
  margin-bottom: 20px;
  padding: 0 15px;
  margin-top: -53px;
 }
}
</style>

<template>
  <div>
  
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
              :class="{
                active: $parent.product.stock,
                error: $parent.errors.stock,
              }"
              placeholder="مثلا : 1000 "
              pattern="[0-9]*"
            />
          </div>
          <p class="small-description-text" v-if="!$parent.errors.stock">
            <span v-if="$parent.stock_text" v-text="$parent.stock_text"></span>
          </p>
          <p class="error-message col-xs-12" v-if="$parent.errors.stock">
            <span v-text="$parent.errors.stock"></span>
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
              :class="{
                active: $parent.product.min_sale_amount,
                error: $parent.errors.min_sale_amount,
              }"
              placeholder="مثلا : 20 "
              pattern="[0-9]*"
            />
          </div>

          <p
            class="small-description-text"
            v-if="!$parent.errors.min_sale_amount"
          >
            <span
              v-if="$parent.min_sale_amount_text"
              v-text="$parent.min_sale_amount_text"
            ></span>
          </p>
          <p class="error-message" v-if="$parent.errors.min_sale_amount">
            <span v-text="$parent.errors.min_sale_amount"></span>
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
              :class="{
                active: $parent.product.min_sale_price,
                error: $parent.errors.min_sale_price,
              }"
              placeholder="مثلا : 260000 "
              pattern="[0-9]*"
            />
          </div>
          <p class="error-message">
            <span
              v-if="$parent.errors.min_sale_price"
              v-text="$parent.errors.min_sale_price"
            ></span>
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
              :class="{
                active: $parent.product.max_sale_price,
                error: $parent.errors.max_sale_price,
              }"
              placeholder="مثلا : 500000 "
              pattern="[0-9]*"
            />
          </div>

          <p class="error-message">
            <span
              v-if="$parent.errors.max_sale_price"
              v-text="$parent.errors.max_sale_price"
            ></span>
          </p>
        </div>
      </div>

      <!-- <span class="small-description">

 انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه باسکول کمک می کند
 انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه باسکول کمک می کند

      </span>-->

      <div class="col-xs-12">
        <div class="row">
          <button
            class="submit-button disabled pull-left"
            :class="{
              active:
                $parent.product.stock &&
                $parent.product.min_sale_price &&
                $parent.product.max_sale_price &&
                $parent.product.min_sale_amount,
            }"
            @click.prevent="$parent.stockAndPriceSubmited()"
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
    "$parent.product.min_sale_price": function () {
      this.$parent.errors.min_sale_price = "";
    },
    "$parent.product.max_sale_price": function () {
      this.$parent.errors.max_sale_price = "";
    },
  },
};
</script>

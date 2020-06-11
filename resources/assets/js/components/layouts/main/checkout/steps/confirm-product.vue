<style scoped>
/* input styles  */

.input-wrapper {
  position: relative;
}
.input-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 9px;

  font-family: "Font Awesome 5 Free", sans-serif;

  font-weight: 900;

  left: 25px;

  font-size: 20px;

  z-index: 0;
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

  height: 25px;

  margin-bottom: 5px;

  direction: rtl;

  font-size: 12px;
}

/* headr styles  */
.header-section > p {
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  color: #777;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 15px;
  margin-top: 20px;
}

/* product styles */
.product-section {
  margin-top: 15px;
  overflow: hidden;
}

.product-image {
  width: 100px;
  height: 100px;
  background: #bdc4cc;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.product-image img {
  height: 100%;
  width: initial;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.product-contents {
  width: calc(100% - 100px);
}

.product-contents .content {
  padding: 0 15px;
  line-height: 1.618;
  color: #777;
}
.product-contents .content i,
.shipping-badge i {
  margin-left: 7px;
}
.shipping-badge {
  color: #777;
}
.product-title {
  font-size: 16px;
  font-weight: bold;
}

.content.pull-right > p {
  margin-bottom: 15px;
}
.content.pull-right > p > span:last-of-type {
  color: #333;
}

.prising-section {
  margin: 20px auto;
}

.price-item {
  color: #777;
  font-size: 20px;
  font-weight: bold;
  padding-top: 11px;
}
.price-item > span {
  color: #00c569;
}
.change-step > button {
  margin: 0;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
}
.change-step > button i {
  font-size: 26px;
  line-height: 1;
}
.change-step > button span {
  position: relative;
  top: -5px;
  margin-left: 10px;
}
@media screen and (max-width: 992px) {
  .change-step {
    margin-top: 20px;
  }
}
@media screen and (max-width: 600px) {
  .product-contents {
    width: 100%;
  }
  .product-image {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }
  .badged-wrapper {
    float: right !important;
    padding: 15px;
    width: 100%;
  }
  .change-step {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: #fff;
    padding: 15px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  }
}
</style>

<template>
  <div class="confirm-product-contents">
    <section class="product-section-wrapper">
      <div class="header-section">
        <p>اطلاعات محصول</p>
      </div>
      <div class="product-section">
        <div class="product-image pull-right" v-if="product.photos[0]">
          <img
            :src="$parent.str + '/' + product.photos[0].file_path"
            :alt="'فروش عمده ی ' + product.main.sub_category_name +
                                            ' '  +
                                         product.main.product_name +
                                            ' ' +
                                         product.main.city_name +
                                             ' - ' +
                                         product.main.province_name"
          />
        </div>
        <div class="product-contents text-rtl pull-right">
          <div class="content pull-right">
            <p class="product-title">
              <span
                v-text="product.main.category_name +
                ' | ' +
                product.main.sub_category_name "
              ></span>
              {{product.main.product_name}}
            </p>
            <p class="product-city">
              <i class="fa fa-map-marker"></i>
              <span>استان / شهر :</span>
              <span
                v-text="product.main.province_name +
                            ' - ' +
                             product.main.city_name"
              ></span>
            </p>
            <p class="product-abount margin-0">
              <i class="fa fa-box"></i>
              <span>مقدار موجودی :</span>
              <span v-text="getNumberWithCommas(product.main.stock) + ' کیلوگرم'"></span>
            </p>
          </div>
          <div class="badged-wrapper pull-left">
            <p class="shipping-badge">
              <i class="fa fa-truck"></i>
              <span>هزینه ارسال کالا :</span>
              <span>رایگان</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="pricing-section-wrapper">
      <div class="header-section">
        <p>انتخاب تناژ خرید</p>
      </div>

      <div class="prising-section">
        <div class="row">
          <div class="input-wrapper province-wrapper col-xs-12 col-sm-6 col-md-3 pull-right">
            <select id="pricing-input" v-model="amount" @change="calculatePrice()">
              <option
                v-for="(item,index) in 5"
                :key="index"
                v-text=" ++index + ' تن'"
                :value="item"
              ></option>
            </select>
          </div>
          <div class="price-contents text-right col-xs-12 col-sm-6 col-md-6 pull-right">
            <p class="price-item">
              قیمت :
              <span v-text=" getNumberWithCommas($parent.totalPrice) + ' تومان'"></span>
            </p>
          </div>
          <div class="change-step col-xs-12 col-md-3 pull-left">
            <button class="green-button hover-effect">
              <i class="fa fa-arrow-left"></i>
              <span>ادامه فرایند خرید</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      product: {
        main: {
          category_name: "",
          sub_category_name: ""
        },
        user_info: "",
        profile_info: {
          profile_photo: ""
        },
        photos: []
      },
      amount: 1
    };
  },
  methods: {
    init: function() {
      axios
        .post("/get_product_by_id", {
          product_id: this.$route.params.id
        })
        .then(response => {
          this.product = response.data.product;
        });
    },
    getNumberWithCommas: function(number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    calculatePrice: function() {
      this.$parent.totalPrice = this.amount * 3000000;
    }
  },
  mounted: function() {
    this.init();
  },
  created: function() {
    this.calculatePrice();
  }
};
</script>
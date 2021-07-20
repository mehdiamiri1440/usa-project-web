<style scoped>
input[type="number"] {
  -moz-appearance: button;
}
.wrapper-background {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 15px;
  line-height: 1.618;
  margin-bottom: 30px;
  float: right;
  width: 100%;
  position: relative;
}
.notice-content {
  padding: 8px;
}
.header-section p {
  font-weight: bold;
  font-size: 18px;
  border-bottom: 2px solid #e8e8e8;
  padding-bottom: 15px;
  text-align: right;
  margin: 15px auto;
}

.header-wrapper {
  text-align: center;
  padding: 15px 115px;
  float: left;
  width: 100%;
}

.header-title {
  margin-bottom: 9px;
}

.header-title span {
  font-size: 20px;
  color: #333;
  font-weight: bold;
}

.header-icon-wrapper {
  float: right;
  width: 100px;
  text-align: center;
  position: absolute;
  right: 25px;
  top: 12px;
}

.header-icon-wrapper i {
  font-size: 80px;
  color: #ffbb00;
  position: relative;
  top: 6px;
}

.header-icon-wrapper i:after {
  content: "\f00c";
  font-size: 19px;
  text-align: center;
  width: 100%;
  display: block;
  position: absolute;
  top: 20px;
}

.title-section p {
  font-size: 20px;
  color: #00c569;
}

.form-wrapper {
  float: right;
  width: 100%;
  margin-top: 20px;
}

.product-pricing {
  margin-bottom: 20px;
  float: right;
  width: 100%;
}
.item-wrapper {
  background: #fcfcfc;
  border-radius: 4px;
  padding: 7px 10px;
  max-width: 218px;
  width: 100%;
  margin-left: 30px;
  float: right;
}

.item-wrapper.active {
  background: #e41c38;
}

.item-wrapper.active .item-count,
.item-wrapper.active .item-text {
  color: #fff;
}
.item-wrapper button.item-guid {
  float: right;
  border: none;
  background: #556080;
  color: #fff;
  border-radius: 50px;
  height: 17px;
  width: 17px;
  text-align: center;
  padding: 0 1px;
  font-size: 11px;
  line-height: 1;
}
.item-wrapper .item-text {
  float: right;
  font-size: 13px;
  color: #777;
  margin-right: 10px;
  line-height: 1.4;
}
.item-wrapper .item-count {
  float: left;
  font-size: 13px;
  line-height: 1.2;
  font-weight: bold;
  color: #777;
}

.arrow-icon {
  position: absolute;
  right: -40%;
  font-size: 100px;
  color: #efefef;
  top: 21px;
}

.input-wrapper {
  float: right;
}

.input-wrapper label {
  float: right;
  margin: 5px auto 5px 10px;
}

.input-wrapper input {
  width: 152px;
  border-radius: 4px;
  border: none;
  text-align: center;
  padding: 5px;
  font-size: 19px;
  direction: ltr;
  background: #fcfcfc;
  position: relative;
}
.pricing-section {
  max-width: 300px;
  width: 100%;
  float: left;
}
.pricing-section .price-content {
  text-align: center;
  background: #fcfcfc;
  font-size: 20px;
  font-weight: bold;
  color: #00c569;
  padding: 5px 0;
  border-radius: 4px;
}
.pricing-section .green-button {
  width: 100%;
  font-size: 20px;
  padding: 9px 0;
}
.pricing-section .price-content span.currency {
  font-size: 16px;
  color: #777;
}

.price-date {
  font-size: 13px;
  color: #333;
}

.count-input-wrapper {
  padding: 0;
  position: relative;
  margin: 0 auto;
  background: #fcfcfc;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #707070;
  top: -7px;
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
  padding: 10px 15px;
}

.form-control[type="number"]::-webkit-inner-spin-button,
.form-control[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.fix-botton-wraper {
  position: fixed;
  bottom: 0;
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

@media screen and (max-width: 1300px) {
  .arrow-icon {
    display: none;
  }
}

@media screen and (max-width: 991px) {
  .main-content-wrapper > .row > div {
    padding: 0 7px;
  }

  .list-title,
  .needs,
  .list-time {
    padding: 15px;
  }
  .pricing-section-wrapper {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 767px) {
  .pricing-section {
    text-align: center;
    margin: 0 auto;
    float: none;
  }

  .title-section,
  .description-section {
    text-align: center;
  }

  .item-wrapper {
    background: #fcfcfc;
    border-radius: 4px;
    padding: 7px 10px;
    max-width: 300px;
    width: 100%;
    margin-left: 15px;
    margin-bottom: 15px;
    float: none;
    border: 1px solid #fcfcfc;
    overflow: hidden;
    margin: 0 auto 15px;
  }
  .input-wrapper {
    float: none;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    width: 100%;
    max-width: 300px;
  }
  .input-wrapper label {
    margin: 0 auto 15px;
    text-align: center;
    float: none;
  }
  .input-wrapper input {
    width: 100%;
  }
  .header-icon-wrapper {
    float: right;
    width: 50px;
    text-align: center;
    top: -4px;
  }

  .header-icon-wrapper i {
    font-size: 69px;
    color: #ffbb00;
    position: relative;
    top: 16px;
  }

  .header-wrapper {
    text-align: center;
    padding: 15px 50px;
    float: left;
    width: calc(100% - 100px);
    padding: 0;
  }

  .header-icon-wrapper i::after {
    content: "\F00C";
    font-size: 19px;
    text-align: center;
    width: 100%;
    display: block;
    position: absolute;
    top: 14px;
  }

  .header-description {
    font-size: 13px;
  }

  .header-title {
    margin-bottom: 0;
  }

  .product-pricing > div {
    padding: 0 15px;
  }
}
</style>
<template>
  <div class="col-xs-12 pricing-section-wrapper">
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

    <!-- end payment loader -->
    <div class="row">
      <div class="col-xs-12">
        <div class="header-section">
          <p>افزایش ظرفیت</p>
        </div>

        <div class="wrapper-background text-rtl">
          <div class="product-pricing">
            <div class="col-xs-12 col-sm-8 pull-right">
              <div class="title-section">
                <p>افزایش ظرفیت ثبت محصول</p>
              </div>
              <div class="description-section gray-text">
                <p>
                  تعداد ظرفیت اضافی برای ثبت محصول را انتخاب کنید سپس دکمه
                  افزایش ظرفیت را بزنید.
                </p>
              </div>
              <div class="form-wrapper">
                <div class="item-wrapper active">
                  <button
                    class="item-guid"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=" تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. "
                  >
                    <i class="fa fa-question"></i>
                  </button>
                  <p class="item-text">تعداد محصولات اضافی</p>
                  <p class="item-count">
                    {{ productPriceData.count }}
                    <span>عدد</span>
                  </p>
                </div>

                <div class="input-wrapper">
                  <label>تعداد</label>

                  <div class="count-input-wrapper">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-secondary btn-minus"
                        @click="--productPriceData.count"
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      min="1"
                      max="1000"
                      type="number"
                      @click="selectCountInput"
                      v-model="productPriceData.count"
                    />

                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-secondary btn-plus"
                        @click="++productPriceData.count"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 pull-left">
              <p class="arrow-icon">
                <i class="fa fa-arrow-left"></i>
              </p>
              <div class="pricing-section">
                <label>قیمت</label>
                <p class="price-content">
                  <span
                    v-text="getNumberWithCommas(productPriceData.totalPrice)"
                  ></span>
                  <span class="currency">تومان</span>
                  <span class="price-date">(سالانه)</span>
                </p>
                <button class="green-button" @click.prevent="doPayment()">
                  افزایش ظرفیت
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="row">
          <div class="header-section col-xs-12">
            <p>ارتقا عضویت</p>
          </div>
          <product-pricing-contents
            justPro="true"
            :offer-time="this.offerTime"
          />
        </div>
      </div>
    </div>
    <div class="fix-botton-wraper hidden-sm hidden-md hidden-lg">
      <button class="green-button" @click="openCreditCardGuide()">
        پرداخت از طریق کارت به کارت
        <i class="fa fa-credit-card"></i>
      </button>
    </div>
  </div>
</template>


<script>
import ProductPricing from "./pricing-tables/pricing-packages.vue";
import productPricingContents from "./pricing-tables/pricing-package-contents";
import swal from "../../../../sweetalert.min.js";

export default {
  props: ["offerTime"],
  components: { ProductPricing, productPricingContents },
  data: function () {
    return {
      productPriceData: {
        unitPrice: "25000",
        count: 1,
        totalPrice: "",
      },
      statusData: "",
      doPaymentLoader: false,

      productPricing: [
        {
          priceName: "عضویت ویژه",
          priceDate: "سالانه",
          price: "689,000",
          priceItems: [
            {
              title: "تعداد محصولات",
              contentUnit: "۷ عدد",
              helpDescription:
                " تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. ",
              active: true,
            },
            {
              title: "تعداد نردبان ",
              contentUnit: "1",
              helpDescription:
                "بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد",
              active: false,
            },
            {
              title: "نمایش در لیست محصولات ویژه",
              contentUnit:
                '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
              helpDescription:
                "محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود",
              active: false,
            },
            {
              title: "تایید فوری ",
              contentUnit:
                '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
              helpDescription:
                " آگهی های فروش ثبت شده بلافاصله پس از ثبت در لیست محصولات نمایش داده می شود. ",
              active: false,
            },
            {
              title: " میزان افزایش خوشنامی ",
              contentUnit: "350",
              helpDescription: " مقدار اعتبار اضافه شده به صفحه پروفایل شما ",
              active: false,
            },
            {
              title: " نشان فروشنده ویژه ",
              contentUnit:
                '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
              helpDescription:
                " این نشان در صفحه پروفایل فروشنده نمایش داده می شود. ",
              active: false,
            },
            {
              title: " سقف روزانه پاسخ به درخواست ها ",
              contentUnit: "30",
              helpDescription: "سقف تعداد روزانه پاسخگویی به درخواست های خرید",
              active: false,
            },
            {
              title: "مشاهده بلافاصله درخواست خرید ",
              contentUnit:
                '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
              helpDescription:
                " درخواست های خرید جدید بدون تاخیر به شما نمایش داده می شود. ",
              active: false,
            },
            {
              title: "تضمین بازگشت وجه ",
              contentUnit:
                '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
              helpDescription:
                " اگر پس از سه ماه از نتیجه آن رضایت نداشته باشید 100% مبلغ پرداختی به شما بازگردانده می شود. ",
              active: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    init: function () {
      var self = this;
      axios
        .post("/get_seller_dashboard_required_data")
        .then(function (response) {
          if (response.data.is_valid || response.data.is_valid == false) {
            self.statusData = response.data;
          }
        });
    },
    collapseControl: function (link) {
      var $myGroup = $(".item-content");
      $myGroup.find(".collapse.in").collapse("hide");
    },
    doPayment: function () {
      this.doPaymentLoader = true;

      let self = this;

      this.registerComponentStatistics(
        "payment",
        "product-capacity",
        self.productPriceData.count
      );

      window.location.href =
        "/payment/product-capacity/" + this.productPriceData.count;
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
    setTotalPrice: function () {
      this.productPriceData.totalPrice =
        this.productPriceData.count * this.productPriceData.unitPrice;
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    selectCountInput: function (event) {
      event.target.select();
      // event.target.setSelectionRange(0, this.productPriceData.count);
    },
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
  mounted() {
    this.init();
    $(document).on("click", function () {
      $(".collapse").collapse("hide");
    });
    this.setTotalPrice();
    $(".item-guid").tooltip();
  },
  watch: {
    "productPriceData.count": function () {
      if (this.productPriceData.count <= 0) {
        this.productPriceData.count = 1;
      } else if (this.productPriceData.count >= 1000) {
        this.productPriceData.count = 1000;
      }
      this.setTotalPrice();
    },
  },
};
</script>

<style scoped>
.wrapper-background {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 15px;
  line-height: 1.618;
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
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
}
.item-wrapper {
  background: #fcfcfc;
  border-radius: 4px;
  padding: 7px 10px;
  max-width: 250px;
  width: 100%;
  margin-left: 30px;
  margin-bottom: 15px;
  float: right;
  border: 1px solid transparent;
}
.item-wrapper.active {
  background: #e41c38;
}

.item-wrapper.active .item-count,
.item-wrapper.active .item-text {
  color: #fff;
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
  right: -30%;
  font-size: 100px;
  color: #efefef;
  top: 30px;
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
@media screen and (max-width: 1300px) {
  .arrow-icon {
    display: none;
  }
}

@media screen and (max-width: 1199px) {
  .pricing-section {
    max-width: 300px;
    width: 100%;
    float: none;
    margin: 0 auto;
  }
}
@media screen and (max-width: 1180px) {
  .product-pricing .form-wrapper {
    max-width: 560px;
    float: none;
    margin: 20px auto;
    overflow: hidden;
    width: 100%;
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
}

@media screen and (max-width: 767px) {
  .product-pricing > div {
    padding: 0;
  }
  .title-section p {
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
  .header-icon-wrapper {
    float: right;
    width: 50px;
    text-align: center;
  }

  .header-icon-wrapper i {
    font-size: 69px;
    color: #ffbb00;
    position: relative;
    top: 16px;
  }

  .header-wrapper {
    text-align: center;
    padding: 5px 50px;
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
}
</style>
<template>
  <div>
    <div class="wrapper-background text-rtl">
      <div class="product-pricing">
        <div class="col-xs-12 col-lg-8 pull-right">
          <div class="title-section">
            <p>
              {{ priceItem.priceName }}
              <span
                class="gray-text"
                v-if="priceItem.priceDate"
                v-text="'(' + priceItem.priceDate + ')'"
              ></span>
            </p>
          </div>

          <div class="form-wrapper">
            <div
              class="item-wrapper pricing-item-article"
              v-for="(item, index) in priceItem.priceItems"
              :key="index"
              :class="{ active: item.active }"
            >
              <p class="item-text" v-text="item.title"></p>
              <p class="item-count" v-html="item.contentUnit"></p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-lg-4 pull-left">
          <p class="arrow-icon">
            <i class="fa fa-arrow-left"></i>
          </p>
          <div class="pricing-section">
            <label>قیمت</label>
            <p class="price-content">
              {{ priceItem.price }}
              <span class="currency">تومان</span>
              <span class="price-date">(سالانه)</span>
            </p>
            <button class="green-button" @click.prevent="doPayment(3)">
              ارتقا عضویت
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["priceItem"],
  mounted: function () {
    let self = this;
    this.$nextTick(function () {
      $(".product-pricing .item-wrapper.pricing-item-article").each(function (
        index
      ) {
        $(this).prepend(
          " <button" +
            ' class="item-guid"' +
            ' data-toggle="tooltip"' +
            ' data-placement="bottom"' +
            ' title="' +
            self.priceItem.priceItems[index].helpDescription +
            '"' +
            " >" +
            ' <i class="fa fa-question"></i>' +
            " </button>"
        );
        $(".item-guid").tooltip();
      });
    });
  },
  methods: {
    doPayment: function (packageType) {
      this.$parent.doPaymentLoader = true;
      this.$parent.registerComponentStatistics(
        "payment",
        "type-" + packageType + "-from-capacity-page",
        "userId: " + this.$parent.userId
      );

      window.location.href = "/payment/" + packageType;
    },
  },
};
</script>

<style scoped>
/* .requests .main-content {
  padding-top: 50px;
} */

.user-information-wrapper {
  float: right;
  width: 100%;
  margin-bottom: 4px;
}

.user-information-content {
  display: block;
  float: right;
  width: 100%;
  background: none;
  border: none;
  padding-bottom: 3px;
}
.user-image {
  width: 25px;
  height: 25px;
  float: right;
  margin-left: 10px;
}
.user-content {
  display: block;
  max-width: 170px;
  overflow: hidden;
  font-size: 13px;
  font-weight: 400;
  color: #adadad;
  height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
}

.user-content i {
  margin-left: 1px;
  position: relative;
  top: 3px;
  font-size: 15px;
}

.wrapper_no_pro {
  text-align: center;
  font-size: 23px;
  padding: 15px 0;
}

.content_no_pic {
  font-size: 70px;
  margin: 20px auto;
  color: #bdbdbd;
}

.text_no_pic {
  margin: 10px auto;
  color: #bdbdbd;
}

.list-title,
.needs,
.list-time,
.list-notice {
  direction: rtl;
  text-align: center;
  line-height: 1.618;
  font-weight: 400;
  padding: 5px;
  color: #777;
}

.buyAd-wrapper-item {
  border: 1px solid #ddd;
  padding: 3px 5px 5px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.buyAd-wrapper-item.golden {
  padding: 11px 15px 15px 0;
}

.buyAd-wrapper-item:nth-last-of-type(2n + 1) {
  background: #fdfdfd !important;
}

.buyAd-phone-buttons-wrapper {
  display: flex;
  flex-direction: row-reverse;
}

.detail-success {
  padding: 10px 0;
  width: 100%;
  background: #00c569;
  border: none;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  display: block;
  max-width: 250px;
  margin: 13px auto 0;
  direction: rtl;
}

button.disable {
  background: #e0e0e0 !important;
}

.main-content > ul {
  border-radius: 3px;
  box-shadow: 0 0 10px #e1e1e1;
  overflow: hidden;
}

.main-content .buyAd-wrapper-item > p {
  text-align: center;
  direction: rtl;
  padding-top: 25px;
  font-size: 15px;
  font-weight: bold;
}

#main.little-main {
  margin-right: 80px;
}

.message-list {
  padding: 19px;
  text-align: center;
  background: #eff3f6;
  line-height: 1.618;
}

.request-detail .green-button {
  font-size: 16px;
  padding: 8px 30px;
}
.title {
  background: #f6f6f6;
  position: fixed;
  right: 250px;
  left: 0;
  z-index: 4;
  border-radius: 0;
  padding: 13px 15px;
}

.placeholder-title h1,
.title h1 {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.9;
}
.fix-request-header-box {
  background: #eff3f6;
  position: fixed;
  right: 250px;
  left: 0;
  z-index: 2;
  border-radius: 0;
  padding: 10px 0;
}

.fix-request-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  background: #fff;
  border-radius: 0;
  padding: 10px 0;
}
.request-update button {
  margin: 0;
  padding: 3px 14px;
  margin-right: 6px;
}

#main.little-main .fix-request-header-box,
#main.little-main .title {
  right: 80px;
}

.detail-contents {
  margin: 15px auto;
}
.detail-contents > div {
  background: #fff;
  padding: 15px;
  margin-bottom: 15px;
  line-height: 25px;
  font-size: 30px;
}
.list-notice {
  text-align: right;
  height: 32px;
}
.list-notice button {
  background: none;

  border: none;

  color: #556080;

  padding: 0;

  position: relative;

  top: -5px;
}
.list-notice button > span:first-of-type {
  position: relative;

  font-size: 26px;
}
.list-notice button > span.request-count {
  font-size: 18px;

  position: relative;

  top: -5px;
}
.list-notice button > span > i:last-of-type {
  position: absolute;

  left: 17px;

  color: #fff;

  font-size: 15px;

  top: 7px;
}

.hide-reply {
  display: none;
}

.wrapper-items {
  padding-top: 75px;
  overflow: hidden;
}

.list-title.list-name {
  text-align: right;
  padding: 5px 15px;
  direction: rtl;
  color: #7e7e7e;
}
.list-title.list-name div.buyer-text {
  text-align: center;
  font-size: 15px;
  font-weight: normal;
  height: 65px;
  display: flex;
  width: 100%;
  align-items: center;
}
.list-title.list-name div.buyer-text > div {
  flex: 1;
  font-weight: bold;
}

.text-center {
  text-align: center !important;
}

@media screen and (max-width: 991px) {
  .fix-request-header-box,
  .title {
    right: 0;
  }
  .default-list-title {
    padding: 4px 15px;
  }
}
@media screen and (max-width: 767px) {
  .banner-wrapper .main-wrapper {
    padding: 20px 10px;
  }

  .banner-wrapper .circle-item-wrapper {
    left: -20px;
    width: 190px;
    height: 190px;
    top: calc(50% - 48px);
  }

  .buyAd-phone-buttons-wrapper {
    margin-top: 15px;
  }

  .list-title.list-name div.buyer-text {
    text-align: center;
    min-height: 83px;
    display: flex;
    width: 100%;
    align-items: center;
  }

  .list-title.list-name div.buyer-text > div {
    flex: 1;
  }

  .button-wrapper {
    margin: 10px auto;
  }

  .main-content .buyAd-wrapper-item > p {
    padding-top: 10px;
  }
  .lock span.lock-text {
    text-align: center;
    right: 0;
    top: 90px;
  }

  .main-content,
  .wrapper-items {
    padding: 0;
  }
  .requests .main-content {
    padding: 0 0 100px !important;
  }
  .title {
    position: relative;
    z-index: 0;
  }
  .title h1 {
    text-align: center;
  }

  .detail-success {
    max-width: 300px;
    margin: 13px auto 0;
  }

  .default-button-full-with {
    max-width: 300px;
  }

  .list-notice button > span.request-count {
    font-size: 15px;
    top: -5px;
  }
  .list-notice button > span > i:last-of-type {
    left: 16px;

    font-size: 12px;
    top: 7px;
  }
  .list-notice button > span:first-of-type {
    font-size: 23px;
  }
  .list-notice button > span.request-count {
    font-size: 15px;
  }
  .list-title.list-name {
    text-align: center !important;
  }

  .main-content .buyAd-wrapper-item > p.list-notice {
    text-align: left;
    padding-left: 30px;
  }

  .main-content .buyAd-wrapper-item > p.list-time {
    text-align: right;
    padding-right: 30px;
    padding-top: 6px;
  }
}
</style>

<template>
  <div class="buyAd-wrapper-item col-xs-12">
    <div class="list-title list-name col-xs-12">
      <div class="user-information-wrapper">
        <div class="user-information-content">
          <div class="user-content">
            <i class="fa fa-user-circle"></i>
            <span
              class="user-name-link"
              v-text="buyAd.first_name + ' ' + buyAd.last_name"
            >
            </span>
          </div>
        </div>
      </div>
      <div class="buyer-text">
        <div>
          <span> خریدار </span>
          <span
            class="red-text"
            v-text="getConvertedNumbers(buyAd.requirement_amount)"
          ></span>
          <span class="brand-text" v-text="buyAd.subcategory_name"></span>
          <span v-if="buyAd.name"> از نوع </span>
          <span class="brand-text" v-if="buyAd.name" v-text="buyAd.name"></span>

          <span> هستم </span>
        </div>
      </div>
    </div>

    <p class="list-time" v-text="buyAd.register_date"></p>
  </div>
</template>


<script>
export default {
  props: ["buyAd"],
  methods: {
    getConvertedNumbers: function (number) {
      if (number || typeof number === "number") {
        let data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
  },
};
</script>

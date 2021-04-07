<style scoped>
.main-content {
  padding: 60px 15px;
}
#main .contents {
  text-align: center;
  background: #f7f7f7;
  width: 80%;
  margin: 15px auto;
  float: none;
  overflow: hidden;
  border-radius: 3px;
  line-height: 1.618;
  direction: rtl;
}
.factor-title {
  overflow: hidden;
  padding: 15px 0;
  border-bottom: 1px solid #bbb;
}
.col-xs-12.col-sm-4 {
  float: right;
}
.contents-detail {
  margin: 20px auto;
  padding: 0;
}
/*start style main header*/
#main {
  margin-right: 250px;
  margin-top: 65px;
  background: #fff;
}

#main.little-main {
  margin-right: 80px;
}

.main-header {
  height: 65px;
  position: fixed;
  left: 0;
  right: 250px;
  top: 0;
  background: #fff;
  z-index: 5;
  border-bottom: 2px solid #e6e6e6;
}

.image-header-profile {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  float: left;
}
.image-header-profile img {
  height: 100%;
}
.profile-menu-header {
  float: left;
}

.right-menu-header {
  padding: 16px;
}

.right-menu-header,
.content-header {
  float: right;
}

.profile-menu-header {
  padding: 7px;
  padding-left: 55px;
}

.profile-menu-header a {
  position: relative;
}

.profile-menu-header i {
  position: absolute;

  left: -75px;

  top: 18px;

  font-size: 20px;
}

.content-header {
  background: #00c569;
  color: #fff;
  height: 100%;
  padding: 20px 20px 0;
}

.right-menu-header a,
.profile-menu-header a {
  color: #7f8c9b;
  margin: 5px;
}

.right-menu-header a {
  font-size: 30px;
}

.right-menu-header a:hover,
.profile-menu-header a:hover {
  color: #2e353e;
}

.name-header-profile {
  position: relative;
  top: 18px;
  left: 10px;
}

.profile-list {
  position: absolute;
  width: 165px;
  background: #fff;
  padding: 8px 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #313a43;
  text-align: right;
  left: 40px;
  top: 65px;
  display: none;
  z-index: 999;
}

.profile-list li {
  margin: 5px;
}

.profile-list a {
  width: 100%;
  display: inline-block;
}

/*end style main header*/

/*start style sub-header*/
.sub-header {
  position: absolute;
  left: 0;
  background: #eff3f6;
  top: 63px;
  right: 0;
  text-align: center;
}

.sub-header ul {
  text-align: center;
}

.sub-header a {
  padding: 16px;

  display: inline-block;

  color: #808c9b;

  font-weight: bold;

  font-size: 14px;

  position: relative;
}

.sub-header a:hover {
  color: #313942;
}

.sub-header a:hover::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

.sub-header a.active {
  color: #313942;
}

.sub-header a.active::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

/*end style sub-header*/
/*start main content style */
.image-content-post {
  width: 30%;
  float: right;
  position: relative;
}

.image-content-post img {
  border-radius: 3px;
  transition: 200ms;
  filter: grayscale(30%);
}

.image-content-post a:hover img {
  filter: grayscale(0);
  transition: 200ms;
}

.image-content-post i {
  display: none;
  position: absolute;
  top: 46%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 35px;
  color: #fff;
  z-index: 1;
}

.image-content-post a:hover i {
  display: block;
}

.content-item {
  overflow: hidden;
  text-align: right;
  direction: rtl;
}

.main-content {
  padding: 60px 100px;
}

.header-label {
  display: block;
  margin: 13px;
  padding: 0;
}
.content-label {
  font-weight: 400;
}

/*end main content style */
/*custom cods*/
.green-button {
  margin: 15px 0;
  display: inline-block;
  background: #00c569;
  color: #fff;
  padding: 10px 35px;
  border-radius: 3px;
  text-align: center;
  border: none;
  transition: 300ms;
}

.green-button:hover {
  color: #fff;
  background: #00ac5c;
  transition: 300ms;
}

.botton-inco {
  margin: 15px 7px;
  display: inline-block;
  color: #313a43;
  padding: 8px 35px;
  border-radius: 3px;
  text-align: center;
}

.botton-inco:hover {
  color: #fff;
}

.font-big {
  font-size: 23px;
  position: relative;
  top: 3px;
}

.little_header {
  width: 80px;
}

.little-main-header {
  right: 80px;
}

.background_mob_sec {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
  display: none;
}

.kind_user,
.kind_activity {
  margin: 7px 0;
  border-bottom: 1px solid #eff3f6;
  padding-bottom: 10px;
}

.kind_user > div,
.kind_activity > div {
  float: right;
  overflow: hidden;
  padding: 10px;
  font-size: 15px;
}

.kind_user input,
.kind_activity input {
  cursor: pointer;
  width: 23px;
  height: 23px;
  float: right;
  position: absolute;
  top: 2px;
  right: 65px;
  opacity: 0;
}

.kind_user input:checked + i,
.kind_activity input:checked + i {
  color: #00c569;
  border: none;
  padding: 4px;
}

.kind_user i,
.kind_activity i {
  background: none;
  width: 23px;
  height: 23px;
  display: block;
  position: absolute;
  top: 4px;
  right: 65px;
  z-index: -1;
  color: #808c9c;
  border-radius: 50%;
  padding: 2px;
  font-size: 14px;
  border: 2px solid;
}

.main-content li {
  overflow: hidden;
}

.title-list {
  background: #f5f5f5;
}

.title-list .numbers {
  float: right;
  display: inline-block;
  padding-top: 10px;
  background: red;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  text-align: center;
  color: #fff;
}

.title-list-text,
.price,
.city {
  float: right;
  margin: 9px 30px;
  font-weight: bold;
}

.time-show {
  float: left;
  margin: 8px 30px;
  font-weight: normal;
  font-size: 16px;
}

.show-detail {
  background: #00c569;
  color: #fff;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 0;
}

.main-content ul {
  margin-top: 40px;
  border-radius: 3px;
  box-shadow: 0 0 10px #e1e1e1;
}

.main-content ul:first-of-type {
  margin-top: 0;
}

@media screen and (max-width: 991px) {
  .right-header.desktop-header {
    display: none;
  }

  .right-header.mobile-header {
    display: block;
    right: -300px;
  }

  .main-header,
  .little-main-header {
    right: 0 !important;
  }

  #main,
  #main.little-main {
    margin-right: 0 !important;
  }

  .post-contents-table {
    width: 100%;
  }

  .copy-right {
    display: none;
  }

  .close_menu {
    display: none;
  }

  .close_menu_mob {
    display: block;
  }

  .show-header button {
    display: block;
  }

  .kind_user > div,
  .kind_activity > div {
    float: none;
  }

  .img-profile .submit {
    position: relative;
    width: 100%;
    margin: 25px auto;
  }

  .img-profile .submit label {
    width: 40%;
    padding: 12px 0;
  }

  .img-profile {
    float: none;
  }
}

@media screen and (max-width: 768px) {
  .image-content-post,
  .contents-post {
    width: 100%;
    float: none;
    margin: 10px 0;
    padding: 0;
  }

  .main-content {
    padding: 60px 15px;
  }

  .name-header-profile {
    display: none;
  }

  .profile-menu-header {
    padding: 7px;
    padding-left: 36px;
  }
}

@media screen and (max-width: 555px) {
  .content-header {
    display: none;
  }
}

@media screen and (max-width: 345px) {
  .sub-header a {
    font-size: 10px;
  }

  .sub-header {
    bottom: -44px;
  }
}
</style>
<template>
  <section class="main-content col-xs-12">
    <div class="factor-detail contents col-xs-12">
      <div class="factor-title">
        <div class="title-text col-xs-12 col-sm-4">خلاصه ی فاکتور</div>
        <div
          class="serial-number col-xs-12 col-sm-4"
          v-if="factorInfo.sell_offer_id"
        >
          شماره سریال: <span>{{ factorInfo.sell_offer_id + 100000 }}</span>
        </div>
        <div
          class="serial-number col-xs-12 col-sm-4"
          v-if="factorInfo.transaction_id"
        >
          شماره سریال: <span>{{ factorInfo.transaction_id + 100000 }}</span>
        </div>
        <div class="date-init col-xs-12 col-sm-4">
          تاریخ پرداخت : <span>{{ factorInfo.persian_date }}</span>
        </div>
      </div>
      <div class="contents-detail col-xs-12">
        <div class="col-xs-12">
          <table class="table table-striped">
            <tr>
              <td>نام محصول:</td>
              <td>{{ factorInfo.product_name }}</td>
            </tr>
            <tr>
              <td>مبلغ پرداختی:</td>
              <td>{{ factorInfo.amount_to_pay }} تومان</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { eventBus } from "../../../../router/router";
export default {
  data: function () {
    return {
      currentStep: 1,
      pageStep: 1,
      transactionId: "",
      popUpMsg: "",
      factorInfo: "",
      submiting: false,
      items: [
        {
          message: " جزئیات فاکتور",
          url: "",
        },
      ],
    };
  },
  methods: {
    init: function () {
      var self = this;

      var pathName = this.$route.name;

      this.items.url = pathName;

      if (pathName == "buyerFactorDetail") {
        this.factorId = this.$route.params.id;

        axios
          .post("/get_factor_info", {
            factor_id: this.factorId,
          })
          .then(function (response) {
            self.factorInfo = response.data.factor;
          });
      } else {
        this.factorId = this.$route.params.id;

        axios
          .post("/get_instant_factor_info", {
            factor_id: this.factorId,
          })
          .then(function (response) {
            self.factorInfo = response.data.factor;
          });
      }
    },
  },
  mounted: function () {
    this.init();
    eventBus.$emit("subHeader", this.items);
  },
};
</script>

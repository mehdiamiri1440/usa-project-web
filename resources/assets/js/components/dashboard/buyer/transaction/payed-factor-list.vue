<style scoped>
/*start main content style */

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

.main-content {
  padding: 60px 15px;
}

/*end main content style */
/*custom cods*/

.green-button {
  display: block;
  color: #00c569;
  padding: 10px 0;
  border-radius: 3px;
  text-align: center;
  transition: 300ms;
  border: 2px solid;
}

.number,
.date,
.subject {
  padding: 8px 15px;
}

#icon-pro svg {
  height: 150px;
}

.main-content ul {
  margin-top: 0;
  text-align: center;
}

.list-group {
  float: left;
  width: 100%;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.075);
}

.list-group-item {
  padding: 15px 0;
}

.main-content .title-list {
  overflow: hidden;
  padding: 15px 0;
  background: #313942;
  color: #fff;
  text-align: center;
}

.main-content p {
  float: right;
  text-align: center;
}

@media screen and (max-width: 992px) {
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
}

@media screen and (max-width: 555px) {
  .main-content ul p {
    font-size: 11px;
    padding: 0;
  }

  .main-content .subject,
  .main-content p {
    padding: 0;
  }

  .main-content {
    padding: 60px 5px;
  }
}

@media screen and (max-width: 345px) {
  .sub-header a {
    font-size: 10px;
  }
}
</style>


<template>
  <section class="main-content col-xs-12">
    <div class="list-group" v-if="factors.length != 0">
      <!--start title list -->
      <div class="list-group-item title-list">
        <p class="title-list-text col-xs-2">شماره تراکنش</p>
        <p class="time-show col-xs-2">تاریخ</p>
        <p class="time-show col-xs-5">موضوع فعالیت</p>
        <p class="time-show col-xs-3">مبلغ</p>
      </div>
      <!--end title list -->
      <div v-for="factor in factors">
        <router-link
          :to="'/dashboard/factor-detail/' + factor.id"
          class="list-group-item list-group-item-action col-xs-12"
        >
          <p class="number col-xs-2">{{factor.sell_offer_id + 100000}}</p>
          <p class="date col-xs-2" dir="rtl">{{factor.persian_date}}</p>
          <p class="subject col-xs-5">{{factor.product_name}}</p>
          <p class="col-xs-3">
            <span class="green-button" dir="rtl">{{factor.amount_to_pay}} تومان</span>
          </p>
        </router-link>
      </div>
    </div>
    <div class="list-group" v-if="instantFactors.length != 0">
      <!--start title list -->
      <li>
        <hr />
        <h4 class="text-center">فاکتورهای آنی</h4>
        <hr />
      </li>
      <div class="list-group-item title-list">
        <p class="title-list-text col-xs-2">شماره تراکنش</p>
        <p class="time-show col-xs-2">تاریخ</p>
        <p class="time-show col-xs-5">موضوع فعالیت</p>
        <p class="time-show col-xs-3">مبلغ</p>
      </div>
      <!--end title list -->
      <div v-for="factor in instantFactors">
        <router-link
          :to="'/dashboard/instant-factor-detail/' + factor.id"
          class="list-group-item list-group-item-action col-xs-12"
        >
          <p class="number col-xs-2">{{factor.transaction_id + 100000}}</p>
          <p class="date col-xs-2" dir="rtl">{{factor.persian_date}}</p>
          <p class="subject col-xs-5">{{factor.product_name}}</p>
          <p class="col-xs-3">
            <span class="green-button" dir="rtl">{{factor.amount_to_pay}} تومان</span>
          </p>
        </router-link>
      </div>
    </div>
    <div class="loading_images col-xs-12" v-else-if="isLoading">
      <img src="../../../../../img/gif/loading.gif" style="width:200px;height:200px" />
    </div>
    <div class="col-xs-12" v-else-if="factors.length == 0 && instantFactors.length == 0">
      <h4 class="text-center" dir="rtl">فاکتوری در این قسمت وجود ندارد.</h4>
    </div>
  </section>
</template>
<script>
import { eventBus } from "../../../../router/router";

export default {
  data: function() {
    return {
      factors: "",
      isLoading: true,
      popUpMsg: "",
      submiting: false,
      instantFactors: "",
      items: [
        {
          message: "فاکتور های پرداخت شده",
          url: "PayedFactorList"
        }
      ]
    };
  },
  methods: {
    init: function() {
      var self = this;

      axios
        .post("/get_payed_factor_list")
        .then(function(response) {
          self.factors = response.data.factors;
          self.isLoading = false;
        })
        .catch(function(err) {
          if (err.response.status == 404) {
            window.location.href = "/404";
          }
          self.isLoading = false;
        });
      self.isLoading = true;

      axios
        .post("/get_payed_instant_factor_list")
        .then(function(response) {
          self.instantFactors = response.data.factors;
          self.isLoading = false;
        })
        .catch(function(err) {
          if (err.response.status == 404) {
            window.location.href = "/404";
          }
          self.isLoading = false;
        });
    }
  },
  mounted: function() {
    this.init();
    eventBus.$emit("subHeader", false);
  }
};
</script>

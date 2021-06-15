<style scoped>
.title {
  text-align: right;
  padding: 15px 0;
  border-bottom: 2px solid #e8e8e8;
  margin-bottom: 30px;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
}

@media screen and (max-width: 991px) {
  .list-title,
  .needs,
  .list-time {
    padding: 15px;
  }
}

@media screen and (max-width: 767px) {
  .title {
    text-align: center;
    margin-bottom: 15px;
  }
}
</style>
<template>
  <div>
    <section class="main-content col-xs-12">
      <div class="title col-xs-12">
        <div class="row">
          <div class="col-xs-12 col-sm-4 pull-right">
            <h1>ارتقا عضویت</h1>
          </div>
        </div>
      </div>

      <div class="row">
        <PricingTableSellerContent
          :active-users="activeUsers"
          :offer-time="this.offerTime"
        />
      </div>
    </section>
  </div>
</template>


<script>
import PricingTableSellerContent from "./seller/pricing-seller-page/pricing-table-seller-content";

export default {
  props: ["str", "offerTime"],
  components: {
    PricingTableSellerContent,
  },
  data: function () {
    return {
      activeUsers: "",
    };
  },
  mounted: function () {
    let self = this;
    this.$store.state.dashboardStore.subHeader = false;

    axios.post("/get_special_users_info").then(function (resposne) {
      self.activeUsers = resposne.data.users;
    });
  },
};
</script>

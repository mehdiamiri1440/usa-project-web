<style scoped>
.header-request h2 {
  font-size: 22px;
  margin: 0;
  margin-bottom: 15px;
}
</style>

<template>
  <div class="main-content-index-pages">
    <div class="container">
      <div class="row">
        <div class="header-request wrapper-bg text-center col-xs-12">
          <h2>
            استعلام شرایط فروش
          </h2>
          <p>
            برای ثبت استعلام شرایط فروش فرم زیر را کامل کنید
          </p>
        </div>

        <div class="main-request-content">
          <register-inquer-form
            wrapper-bg="true"
            user-profile-info="productUserInfo.user_info"
            user-profile-photo="
              productUserInfo.profile_info.profile_photo
                ? $parent.str + '/' + productUserInfo.profile_info.profile_photo
                : $parent.defultimg
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registerInquerForm from "./register-inquery-form.vue";
import { eventBus } from "../../../../router/router";

export default {
  components: {
    registerInquerForm,
  },
  data: function () {
    return {
      productUserInfo: "",
    };
  },
  mounted: function () {},
  created: function () {
    eventBus.$on("productUserInfo", ($event) => {
      this.productUserInfo = $event;
      console.log(productUserInfo);
    });
  },
};
</script>

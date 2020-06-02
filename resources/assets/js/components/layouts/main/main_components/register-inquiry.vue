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
        <!-- <div class="header-request wrapper-bg text-center col-xs-12">
          <h2>
            استعلام شرایط فروش
          </h2>
          <p>
            برای ثبت استعلام شرایط فروش فرم زیر را کامل کنید
          </p>
        </div>-->

        <div class="main-request-content">
          <register-inquiry-form
            wrapper-bg="true"
            :str="str"
            :user-profile-info="productUserInfo"
            :user-profile-photo="
              productUserInfo.profile_photo
                ? str + '/' + productUserInfo.profile_photo
                : assets + 'assets/img/user-defult.png'
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registerInquiryForm from "./register-inquiry-form.vue";
import { eventBus } from "../../../../router/router";

export default {
  components: {
    registerInquiryForm
  },
  props: ["str"],
  data: function() {
    return {
      productUserInfo: ""
    };
  },
  methods: {
    setUpProductOwnerInfo: function() {
      let contact = JSON.parse(window.localStorage.getItem("contact"));
      if (contact) {
        this.productUserInfo = contact;
        // console.log(this.productUserInfo.first_name);
      }
    }
  },
  mounted: function() {
    this.setUpProductOwnerInfo();
  },
  created: function() {
    this.setUpProductOwnerInfo();
    // eventBus.$on("productUserInfo", ($event) => {
    //   this.productUserInfo = $event;
    //   console.log(productUserInfo);
    // });
  }
};
</script>

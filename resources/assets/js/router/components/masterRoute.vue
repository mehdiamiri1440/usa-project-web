<template>
  <div>
    <header-master-layouts
      v-if="!checkoutPage"
      :assets="assets"
      :user_id="userId"
      :is_seller="isSeller"
      :profile_photo="profilePhoto"
      :user_full_name="userFullName"
      :user_logout_path="userLogoutPath"
      :storage_path="storagePath"
      :login_page_path="userLogoutPath"
    />
    <router-view
      id="main-content"
      :str="storagePath"
      :assets="assets"
      :is-user-login="userId"
      :user-type="isSeller"
    ></router-view>

    <footer-master-layouts />
  </div>
</template>

<script>
import HeaderMasterLayouts from "../../components/layouts/header/header";
import FooterMasterLayouts from "../../components/layouts/footer/footer";

export default {
  components: {
    HeaderMasterLayouts,
    FooterMasterLayouts
  },
  data: function() {
    return {
      productByResponseRate: false,
      checkoutPage: false
    };
  },
  props: [
    "userId",
    "isSeller",
    "assets",
    "storagePath",
    "profilePhoto",
    "userFullName",
    "userLogoutPath",
    "verifiedUserContent"
  ],
  methods: {
    pageIsCheckout: function() {
      if (this.$route.matched[1].name == "checkoutProduct") {
        this.checkoutPage = true;
      } else {
        this.checkoutPage = false;
      }
    }
  },
  mounted: function() {
    this.pageIsCheckout();
  },
  watch: {
    $route: function() {
      this.pageIsCheckout();
    }
  }
};
</script>

<template>
  <div>
    <header-master-layouts
      :assets="assets"
      :user_id="userId"
      :is_seller="isSeller"
      :user_default_image="assets + 'assets/img/user-defult.png'"
      :profile_photo="profilePhoto"
      :user_full_name="userFullName"
      :user_logout_path="userLogoutPath"
      :storage_path="storagePath"
      :login_page_path="userLogoutPath"
      :loading="assets + 'assets/img/gif/prload.gif'"
      :finish_load_img="assets + 'assets/img/gif/loading.gif'"
      :buskoolicon="assets + 'assets/img/logo-Inco-mobile.png'"
    />
    <router-view
      id="main-content"
      :not_found_image="assets + 'assets/img/def404.png'"
      :loading_img="assets + 'assets/img/gif/loading.gif'"
      :str="storagePath"
      :defimgitem="assets + 'assets/img/product.jpg'"
      :defultimg="assets + 'assets/img/user-defult.png'"
      :site_logo="assets + 'assets/img/new-logo-buskool.png'"
      :site_logo_white="assets + 'index/images/logo_white.png'"
      :incobaicon="assets + 'assets/img/lo.png'"
      :assets="assets"
      :img_about_us_1="assets + 'assets/img/about-us/1.jpg'"
      :img_about_us_2="assets + 'assets/img/about-us/2.jpg'"
      :img_about_us_3="assets + 'assets/img/about-us/3.jpg'"
      :img_about_us_4="assets + 'assets/img/about-us/4.jpg'"
      :img_about_us_5="assets + 'assets/img/about-us/5.jpg'"
      :img_about_us_6="assets + 'assets/img/about-us/6.jpg'"
      :img_pricing_38="assets + 'index/images/Group_38.png'"
      :img_pricing_36="assets + 'index/images/Group_36.png'"
      :img_pricing_34="assets + 'index/images/Group_34.png'"
      :img_pricing_32="assets + 'index/images/Group_32.png'"
      :img_success_project="assets + 'index/images/current.png'"
      :img_success_verified="assets + 'index/images/farmer.png'"
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
    FooterMasterLayouts,
  },
  data: function () {
    return {
      productByResponseRate: false,
      setReviewUserPrfileId: this.$parent.reviewUserPrfileId,
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
    "userAllowedReviewData",
  ],
  methods: {
    getUserAutorizeForReview: function () {
      this.$parent.reviewUserPrfileId = this.setReviewUserPrfileId;
      this.$parent.isUserAuthorizedToPostComment();
    },
  },
};
</script>

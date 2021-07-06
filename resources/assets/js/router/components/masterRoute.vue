<template>
  <div>
    <header-master-layouts
      :assets="assets"
      :user_id="userId"
      :is_seller="isSeller"
      :profile_photo="profilePhoto"
      :user_full_name="userFullName"
      :user_logout_path="userLogoutPath"
      :storage_path="storagePath"
      :login_page_path="userLogoutPath"
      :categoryList="categoryList"
    />
    <router-view
      id="main-content"
      :str="storagePath"
      :assets="assets"
      :is-user-login="userId"
      :user-type="isSeller"
      :verifiedUserContent="verifiedUserContent"
      :categoryList="categoryList"
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
  props: [
    "userId",
    "isSeller",
    "assets",
    "storagePath",
    "profilePhoto",
    "userFullName",
    "userLogoutPath",
    "verifiedUserContent",
  ],
  data: function () {
    return {
      productByResponseRate: false,
      categoryList: "",
    };
  },
  methods: {
    getCategories() {
      axios
        .post("/get_category_list", { cascade_list: true })
        .then((response) => (this.categoryList = response.data.categories));
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

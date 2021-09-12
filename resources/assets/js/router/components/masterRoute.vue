<template>
  <div>
    <header-master-layouts
      v-if="$route.name != 'invite'"
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
    <InviteHeaderMasterLayouts v-else :is-user-login="userId" />
    <CategoriesModal
      :categoryList="categoryList"
      :modalSubCategory="modalSubCategory"
      :mainSubCategories="mainSubCategories"
    />
    <router-view
      id="main-content"
      :str="storagePath"
      :assets="assets"
      :is-user-login="userId"
      :user-type="isSeller"
      :verifiedUserContent="verifiedUserContent"
      :categoryList="categoryList"
      :currentUser="currentUser"
    ></router-view>

    <footer-master-layouts />
  </div>
</template>

<script>
import HeaderMasterLayouts from "../../components/layouts/header/header";
import InviteHeaderMasterLayouts from "../../components/layouts/header/invite-header.vue";
import FooterMasterLayouts from "../../components/layouts/footer/footer";
import CategoriesModal from "../../components/layouts/main/main_components/categories-modal.vue";

export default {
  components: {
    HeaderMasterLayouts,
    InviteHeaderMasterLayouts,
    FooterMasterLayouts,
    CategoriesModal,
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
      provinceList: "",
      modalSubCategory: false,
      mainSubCategories: "",
      currentUser: {
        profile: {
          is_company: "",
          company_name: "",
          company_register_code: "",
          address: "",
          public_phone: "",
          profile_photo: this.storage + "",
          postal_code: "",
          shaba_code: "",
        },
        user_info: "",
      },
      filterCategory: "",
    };
  },
  methods: {
    getCategories() {
      axios
        .post("/get_category_list", { cascade_list: true })
        .then((response) => (this.categoryList = response.data.categories));
    },
    selectCategoryItem(category, url) {
      $(".modal").modal("hide");
      this.$nextTick(() => {
        this.$router.push({ path: url });
      });
    },
    getCurrentUser() {
      axios.post("/user/profile_info").then((response) => {
        this.currentUser = response.data;
        this.$parent.currentUser = response.data;
      });
    },
    selectBuyAdCategoryFilter(category) {
      this.filterCategory = category;
    },
  },
  mounted() {
    this.getCurrentUser();
    this.getCategories();
  },
};
</script>

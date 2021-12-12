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

    <footer-master-layouts v-if="hasfooter" />
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
      hasfooter: true,
      hiddenFooterPages: [
        "productList",
        "productCategory",
        "productView",
        "invite",
        "mainBuyAdRequests",
        "register",
      ],
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
    getCategoryName: function () {
      let name = this.$route.params.categoryName;

      return name ? name.toString().split("-").join(" ") : "";
    },
    getCategoryItem(categories) {
      let selectedCategory = "";
      let categoryName = this.getCategoryName();
      if (categoryName) {
        for (let i = 0; i < categories.length; i++) {
          if (categories[i].category_name == categoryName) {
            selectedCategory = categories[i];
            return;
          } else {
            let categoryItem = Object.values(categories[i].subcategories);
            let subCategoryItem = categoryItem.find((item) => {
              return item.category_name == categoryName;
            });
            if (subCategoryItem) {
              selectedCategory = subCategoryItem;
              return;
            } else {
              categoryItem.map((category, index) => {
                let subCategories = Object.values(category.subcategories);
                let data = subCategories.find((item) => {
                  if (item.category_name == categoryName) {
                    return true;
                  }
                });
                if (data) {
                  selectedCategory = data;
                  return true;
                }
              });
            }
          }
        }
      }
      return selectedCategory;
    },
    checkFooter(routeName) {
      this.hasfooter = true;
      this.hiddenFooterPages.map((pageName) => {
        if (pageName == routeName) {
          this.hasfooter = false;
        }
      });
    },
  },
  mounted() {
    this.getCurrentUser();
    this.getCategories();
    this.checkFooter(this.$route.name);
  },
  watch: {
    $route(to, from) {
      this.checkFooter(to.name);
    },
  },
};
</script>

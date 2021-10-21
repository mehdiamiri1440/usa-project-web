<style scoped>
.image-wrapper {
  max-width: 270px;
  height: 270px;
  margin: 0 auto;
}
.delsa-description-wrapper {
  text-align: center;
  direction: rtl;
  line-height: 30px;
}
.delsa-description-wrapper h1 {
  font-size: 16px;
  color: #000;
  font-weight: 500;
}
.delsa-description-wrapper p {
  font-size: 13px;
  color: #000;
}

@media screen and (max-width: 767px) {
}
</style>
<template>
  <section class="main-content col-xs-12">
    <CategoriesModal
      :categoryList="categoryList"
      :title="'دسته بندی محصول را انتخاب کنید'"
    />
    <div class="intro-delsa">
      <div class="image-wrapper">
        <img src="../../../../img/intro-delsa.gif" alt="دلسا" />
      </div>
      <div class="delsa-description-wrapper">
        <h1>دلسا هستم; منشی آنلاین شما!</h1>
        <p>قصد انجام چه کاری دارید؟</p>
      </div>
      <div class="actions-wrapper">
        <div class="col-xs-12">
          <router-link
            tag="button"
            :to="{ name: 'registerProductSeller' }"
            class="default-btn-with-icon"
          >
            <div class="button-main-icon-wrapper">
              <i class="fa fa-box-open"></i>
            </div>
            <div class="button-content-wrapper">
              <p class="button-title single-title">محصول برای فروش دارم</p>
            </div>
            <i class="fa fa-angle-left"></i>
          </router-link>
          <button
            data-target="#categories-modal"
            data-toggle="modal"
            class="default-btn-with-icon"
          >
            <div class="button-main-icon-wrapper">
              <i class="fa fa-tag"></i>
            </div>
            <div class="button-content-wrapper">
              <p class="button-title single-title">قیمت محصولات را می خواهم</p>
            </div>
            <i class="fa fa-angle-left"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../../router/router";
import CategoriesModal from "../../layouts/main/main_components/categories-modal.vue";

export default {
  components: {
    CategoriesModal,
  },
  data: function () {
    return {
      items: [
        {
          message: "راهنما",
          url: "guide",
        },
      ],
      categoryList: "",
    };
  },
  methods: {
    init() {
      axios
        .post("/get_category_list", {
          cascade_list: true,
        })
        .then((response) => {
          this.categoryList = response.data.categories;
        });
    },
    selectCategoryItem(category, url) {
      $(".modal").modal("hide");
      this.$nextTick(() => {
        this.$router.push({ path: url });
      });
    },
  },
  mounted() {
    this.init();
    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/guide" });
  },
};
</script>

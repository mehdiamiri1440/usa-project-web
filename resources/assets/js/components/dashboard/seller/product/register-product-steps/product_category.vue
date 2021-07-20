<template>
  <div>
    <SelectCategory v-if="step == 0" />
    <SelectSubCategory
      v-else-if="step == 1"
      :index="selectedCategoryIndex"
      :sub-categories="subCategoryList"
      :mainCategories="mainCategories"
    />
    <TypeCategory v-else :sub-categories="subCategoryList" />
  </div>
</template>

<script>
import SelectCategory from "./product-category-components/select-category.vue";
import SelectSubCategory from "./product-category-components/select-sub-category.vue";
import TypeCategory from "./product-category-components/type-category.vue";

export default {
  components: {
    SelectCategory,
    SelectSubCategory,
    TypeCategory,
  },
  props: ["categoryList"],
  data() {
    return {
      step: 0,
      selectedCategoryIndex: "",
      subCategoryList: "",
      mainCategories: "",
      categoryName: "",
      subCategoryName: "",
      productName: "",
      errors: {
        productName: "",
      },
    };
  },
  methods: {
    selectedCategory(index) {
      this.categoryName = "";
      this.selectedCategoryIndex = index;
      this.subCategoryList = this.categoryList[index].subcategories;
      this.step = 1;
    },
    selectedSubCategory(index) {
      let currentCategory =
        this.categoryList[this.selectedCategoryIndex].subcategories[index];
      this.categoryName = currentCategory.category_name;
      this.mainCategories = currentCategory.subcategories;
    },
    selectedMainCategory(item) {
      this.subCategoryName = item.category_name;
      this.$parent.product.category_id = item.id;
      this.step = 2;
    },
    submitCategory() {
      if (this.productName == "") {
        this.errors.productName = "لطفا نوع محصول را وارد کنید";
        this.$parent.registerComponentStatistics(
          "product-register-error",
          "product-name",
          "input:" + name + " error:" + this.errors.productName
        );
      } else {
        if (!this.errors.productName) {
          this.$parent.product.product_name = this.productName;
          this.$parent.goToStep(2);
        }
      }
    },
    productNameValidator: function (name) {
      if (!this.validateRegx(name, /^[\u0600-\u06FF\s_,.:/;()+-\d]+$/)) {
        this.errors.productName = "لطفا نوع محصول را فارسی وارد کنید.";
      }
    },
    validateRegx: function (input, regx) {
      return regx.test(input);
    },
    resetComponents() {
      this.step = 0;
      this.selectedCategoryIndex = "";
      this.subCategoryList = "";
      this.subCategoryName = "";
      this.categoryName = "";
      this.productName = "";
      this.errors = {
        productName: "",
      };
    },
  },
  watch: {
    productName(name) {
      this.errors.productName = "";
      if (name) {
        this.productNameValidator(name);
      }
    },
    mainCategories(category) {
      if (category == "") {
        this.categoryName = "";
      }
    },
    "errors.productName"(error) {
      if (error) {
        this.$parent.registerComponentStatistics(
          "product-register-error",
          "product-name",
          "input:" + name + " error:" + error
        );
      }
    },
    "$parent.successRegisterProduct"(value) {
      if (value == true) {
        this.resetComponents();
      }
    },
  },
};
</script>

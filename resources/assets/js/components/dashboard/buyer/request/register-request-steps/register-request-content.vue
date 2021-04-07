

<template>
  <SelectCategory v-if="step == 0" />
  <SelectSubCategory
    v-else-if="step == 1"
    :index="selectedCategoryIndex"
    :sub-categories="subCategoryList"
  />
  <TypeCategory v-else :sub-categories="subCategoryList" />
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
  data: function () {
    return {
      step: 0,
      selectedCategoryIndex: "",
      subCategoryList: "",
      categoryName: "",
      subCategoryName: "",
      productName: "",
      errors: {
        productName: "",
        requirement_amount: "",
      },
      requirement_amount: "",
      requirement_amount_text: "",
    };
  },
  mounted() {
    if (this.$parent.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
    let buyAd = JSON.parse(window.localStorage.getItem("buyAd"));

    if (buyAd) {
      this.$parent.buyAd = buyAd;

      let categoryId = buyAd.categorySelected;

      this.$parent.categorySelected = categoryId;

      axios
        .post("/get_category_list", {
          parent_id: categoryId,
        })
        .then(
          (response) =>
            (this.$parent.subCategoryList = response.data.categories)
        );
    }
  },
  methods: {
    selectedCategory(index) {
      window.localStorage.removeItem("buyAd");
      this.selectedCategoryIndex = index;
      this.categoryName = this.categoryList[index].category_name;
      this.subCategoryList = this.categoryList[index].subcategories;
      this.step = 1;
    },
    selectedSubCategory(item) {
      this.subCategoryName = item.category_name;
      this.$parent.buyAd.category_id = item.id;
      this.step = 2;
    },
    productNameValidator: function (name) {
      if (!this.validateRegx(name, /^[\u0600-\u06FF\s_,.:/;()+-\d]+$/)) {
        this.errors.productName = "لطفا نوع محصول را فارسی وارد کنید.";
      }
    },
    validateRegx: function (input, regx) {
      return regx.test(input);
    },
    formValidator: function () {
      if (!this.requirement_amount) {
        this.errors.requirement_amount = "لطفا میزان نیازمندی را وارد کنید.";
      }

      if (
        !this.errors.productName &&
        !this.$parent.errors.category_id &&
        !this.errors.requirement_amount
      ) {
        this.$parent.submitBuyAd();
      }
    },
  },
  watch: {
    productName: function (value) {
      this.$parent.buyAd.name = value;
      this.errors.productName = "";
      if (value) {
        this.productNameValidator(value);
      }
    },
    requirement_amount: function (value) {
      this.$parent.buyAd.requirement_amount = value;
      this.errors.requirement_amount = "";
      if (value) {
        if (value.length >= 13) {
          this.$parent.buyAd.requirement_amount = this.$parent.buyAd.requirement_amount.substring(
            0,
            13
          );
        }
        let number = this.$parent.toLatinNumbers(
          this.$parent.buyAd.requirement_amount
        );
        if (!this.validateRegx(number, /^\d*$/)) {
          this.errors.requirement_amount = "لطفا  فقط عدد وارد کنید";
        }
        if (!this.errors.requirement_amount) {
          this.requirement_amount = this.$parent.getNumberWithCommas(number);
          this.requirement_amount_text = this.$parent.convertUnits(number);
        }
      } else {
        this.requirement_amount_text = "";
      }
    },
  },
};
</script>

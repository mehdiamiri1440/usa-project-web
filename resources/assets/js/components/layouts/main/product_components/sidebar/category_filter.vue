<style scoped>
hr {
  margin-bottom: 0;
}
.title-widget {
  text-align: right;
  padding: 15px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-widget .remove-filter {
  background: none;
  border: none;
  color: #e41c38;
  font-size: 14px;
  padding: 0;
}
.title-widget div {
  font-size: 18px;
}

.content-sidebar h2 {
  padding: 0 15px;
}

.content-sidebar {
  text-align: right;
}

.content-sidebar .green-button {
  min-width: 130px;
  width: 100%;
  font-size: 13px;
  padding: 6px 0;
  margin: 0;
}

.content-sidebar .button-wrapper {
  text-align: center;
}

.content-sidebar h2 a {
  font-size: 17px;
  color: #333;
  font-weight: 700;
  margin: 5px;
}

.content-sidebar h2 i {
  font-weight: 700;
  position: relative;
  top: 2px;
}

.category-products-widget {
  padding: 10px 0;
}

.category-products-widget i {
  transition: 300ms;
}

.sub-category-product {
  padding: 0 15px;
}

.sub-category-product {
  padding-right: 37px;
  padding-top: 5px;
}

.sub-category-product a {
  color: #777777;
  transition: 300ms;
}

.content-sidebar h2 a:hover,
.sub-category-product a:hover {
  color: #00c569;
  transition: 300ms;
}

.sub-category-product a.active {
  color: #00c569;
  background: #fafafa;
}

.list-open .button-toggle i {
  transform: rotate(180deg);
  transition: 300ms;
}

.list-open h2 i {
  transform: rotate(-90deg);
}

.green-button {
  background: #f0f3f6;
  transition: 300ms;
  border-radius: 0;
  color: #534d4d !important;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
}

.sub-category-product {
  transition: 300ms;
  overflow: hidden;
}

.little {
  display: block;
  /* height: 168px; */
  height: 145px;
  transition: 300ms;
}

.header-item-default {
  margin: 15px 0;
  padding: 15px;
}

.sub-category-item h4 a,
.sub-category-item h1 a {
  font-size: 14px;
  line-height: 1.5;
  width: 100%;

  border: none;

  background: none;

  border-bottom: 1px solid #eee;

  text-align: right;

  padding: 12px 15px 13px;

  display: block;
}

.default-category-title {
  border: none;
  background: none;
  color: #313a43;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  text-align: right;
  padding: 0 22px;
}

.default-category-title > i {
  display: none;
}

.category-title {
  font-size: 15px;
  font-weight: 400;
  color: #5f6368;
  display: flex;
  justify-content: space-between;
  border: none;
  background: none;
  width: 100%;
  padding: 10px 0;
}

.category-title span i.fa-spin {
  color: #bebebe;
  font-size: 13px;
  width: 13px;
  height: 15px;
  opacity: 0;
}

.category-title.router-link-exact-active {
  color: #00c569;
}

.default-category-title.category-title > i {
  font-size: 17px;
  color: #868686;
  display: block;
}

.category-title:hover,
.category-title:hover i {
  color: #00c569;
}

.category-title span {
  position: relative;
  right: 0;
  transition: 150ms;
}
.category-title:hover span {
  right: 5px;
  transition: 150ms;
}

.category-title.back-item {
  position: relative;
  right: 0;
  transition: 150ms;
  margin-bottom: 5px;
  color: #1da1f2;
}

.category-title.back-item i {
  font-size: 14px;
  position: relative;
  top: 2px;
  margin-left: 3px;
}

.category-title.back-item:hover,
.category-title.back-item:hover i {
  color: #1da1f2;
  transition: 150ms;
}

.category-title.back-item:hover span {
  right: -5px;
  transition: 150ms;
}

.sub-category-list {
  display: none;
}

.current-category .sub-category-list {
  display: block;
  margin-top: 9px;
}

.sub-category-list .category-title {
  padding: 7px 15px;
}

.sub-category-list > li {
  padding-right: 35px;
}

.categories-list {
  display: none;
}

.current-sub-category .categories-list {
  display: block;
}

.categories-list li {
  padding-right: 40px;
}

.categories-list a {
  color: #777;
  display: inline-block;
  border-right: 1px solid #e9ecef;
  padding: 10px 15px;
  width: 100%;
  transition: 150ms;
}

.categories-list a:hover,
.categories-list a.active {
  transition: 150ms;
  color: #00c569;
  border-right-color: #00c569;
}

@media screen and (max-width: 768px) {
  .content-sidebar {
    margin: 0 auto;
    box-shadow: none;
  }
}
</style>
<template>
  <div v-if="categoryList" class="content-sidebar col-xs-12">
    <div class="title-widget">
      <div>دسته بندی محصولات</div>
    </div>
    <hr />
    <div class="category-products-widget">
      <ul>
        <li v-if="selectedCategory">
          <router-link
            :to="{ name: 'productList' }"
            tag="button"
            class="category-title back-item"
          >
            <span>
              <i class="fa fa-arrow-right"></i>
              همه دسته ها
            </span>
          </router-link>
        </li>
        <li
          v-for="(category, index) in categoryList"
          :key="index"
          v-show="selectedCategory == '' || selectedCategory == index + 1"
          :class="{ 'current-category': selectedCategory == index + 1 }"
        >
          <router-link
            :to="getSubCategoryUrl(category)"
            v-if="selectedCategory == ''"
            class="default-category-title category-title"
            data-dismiss="modal"
          >
            <span>
              {{ category.category_name }}
              <i class="fas fa-circle-notch fa-spin"></i>
            </span>
            <i class="fa fa-angle-left"></i>
          </router-link>
          <router-link
            :to="getSubCategoryUrl(category)"
            v-else
            class="default-category-title"
            data-dismiss="modal"
          >
            <span v-text="category.category_name"></span>
            <i class="fa fa-angle-left"></i>
          </router-link>
          <ul class="sub-category-list">
            <li
              v-for="(subCategory, subCategoryIndex) in category.subcategories"
              :key="subCategoryIndex"
              v-show="
                selectedSubCategory == '' ||
                selectedSubCategory == subCategory.id
              "
              :class="{
                'current-sub-category': selectedSubCategory == subCategory.id,
              }"
              :data-test="subCategory.id"
            >
              <router-link
                :to="getSubCategoryUrl(subCategory)"
                class="category-title"
                data-dismiss="modal"
              >
                <span v-text="subCategory.category_name"></span>
              </router-link>
              <ul class="categories-list">
                <li
                  v-for="(item, index) in subCategory.subcategories"
                  :key="index + '-category-item'"
                >
                  <router-link
                    :class="{ active: item.category_name == getCategoryName() }"
                    :to="getSubCategoryUrl(item)"
                    v-text="item.category_name"
                    data-dismiss="modal"
                  ></router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div v-else class="default-content content-sidebar">
    <div class="title-widget">
      <p class="col-xs-12">
        <span class="placeholder-content content-half-width"></span>
      </p>
    </div>
    <hr />

    <div class="category-products-widget-default">
      <ul>
        <li>
          <span class="placeholder-content h-20 content-full-width"></span>
          <span
            class="placeholder-content h-20 margin-15-0 content-half-width"
          ></span>
          <span class="placeholder-content h-20 content-default-width"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categoryList"],
  data() {
    return {
      selectedCategory: "",
      selectedSubCategory: "",
    };
  },
  methods: {
    getSubCategoryUrl: function (t) {
      // let url =
      //   "/product-list/category/" + t.category_name.split(" ").join("-");
      return {
        name: "productCategory",
        params: {
          categoryName: t.category_name.split(" ").join("-"),
        },
      };
    },
    getCategoryName: function () {
      let name = this.$route.params.categoryName
        ? this.$route.params.categoryName
        : "";

      return name.split("-").join(" ");
    },
    getCategoryItem(categories) {
      this.selectedCategory = "";
      this.selectedSubCategory = "";
      for (let i = 0; i < categories.length; i++) {
        let categoryName = this.getCategoryName();

        if (categories[i].category_name == categoryName) {
          this.selectedCategory = i + 1;
          return;
        } else {
          let categoryItem = Object.values(categories[i].subcategories);
          let subCategoryItem = categoryItem.find((item) => {
            return item.category_name == categoryName;
          });
          if (subCategoryItem) {
            this.selectedCategory = i + 1;
            this.selectedSubCategory = subCategoryItem.id;
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
                this.selectedCategory = i + 1;
                this.selectedSubCategory = data.parent_id;
                return true;
              }
            });
          }
        }
      }
    },
    changePageLoader() {
      $(".category-title").on("click", function (e) {
        $(this).find("i.fa-spin").css("opacity", "1");
      });
    },
  },
  mounted() {
    this.changePageLoader();
    this.getCategoryItem(this.categoryList);
  },
  watch: {
    categoryList(categories) {
      this.getCategoryItem(categories);
    },
    $route(route) {
      this.getCategoryItem(this.categoryList);
    },
  },
};
</script>

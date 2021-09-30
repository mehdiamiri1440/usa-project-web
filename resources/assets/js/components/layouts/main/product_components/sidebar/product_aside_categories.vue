<style >
.content-sidebar {
  direction: rtl;

  margin: 15px auto;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
}

.content-sidebar hr {
  margin: 10px auto 0;
}

.sidebar-buttons div > a:first-of-type {
  color: #fff;
  background: #00c569;
}

.right-sidebar > div {
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: block;
  margin: 15px auto;
  padding: 8px 15px;
  border-radius: 0 0 5px 5px;
}
</style>

<template>
  <div>
    <CategoryFilter
      :categoryList="categories"
      class="hidden-xs hidden-sm hidden-md"
    />
    <GeoLocationFilter
      :resetLocationFilter="resetLocation"
      :provinceList="provinceList"
    />
  </div>
</template>

<script>
import GeoLocationFilter from "./geo_location_filter";
import CategoryFilter from "./category_filter";

export default {
  components: {
    GeoLocationFilter,
    CategoryFilter,
  },
  props: [
    "productsInfo",
    "categoryId",
    "subCategoryId",
    "cityId",
    "categories",
    "resetLocation",
    "provinceList",
  ],
  data() {
    return {
      provinceChild: "",
      cityChild: "",
      cityList: "",
      products: this.productsInfo,
    };
  },
  methods: {
    setSidebarHeight: function () {
      setTimeout(() => {
        this.$parent.sidebarScroll();
      }, 500);
    },
    scrull_css_header: function () {
      var get_with = $(window).width();
      var mainElement = $("#main");

      if (get_with > 751) {
        mainElement.removeClass("main-padding-fix");
      }
      $(window).resize(function () {
        get_with = $(window).width();
        if (get_with > 751) {
          mainElement.removeClass("main-padding-fix");
        }
      });
      $(window).scroll(function () {
        var sc = $(this).scrollTop();
        $(window).resize(function () {
          get_with = $(window).width();
          if (get_with > 751) {
            mainElement.removeClass("main-padding-fix");
          }
        });
        if (sc >= 106) {
          if (get_with > 751) {
            mainElement.addClass("main-padding-fix");
          } else {
            mainElement.removeClass("main-padding-fix");
          }
        } else {
          mainElement.removeClass("main-padding-fix");
        }
      });
    },
    setProvinceFilterChild: function () {
      this.$parent.province = this.provinceChild;
      this.$parent.applyFilter();
    },
    setCityFilterChild: function () {
      this.$parent.province = this.provinceChild;
      this.$parent.city = this.cityChild;
      this.$parent.applyFilter();
    },
    resetFilterChild() {
      this.provinceChild = "";
      this.cityChild = "";
      this.$parent.resetFilter();
    },
  },
  mounted() {
    this.scrull_css_header();
  },
};
</script>

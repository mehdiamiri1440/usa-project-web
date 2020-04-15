<style scoped>
hr {
  margin-bottom: 0;
}

.content-sidebar h2 {
  padding: 0 15px;
}

.category-products-widget > ul > li {
  border-bottom: 1px solid #eee;

  padding-top: 12px;
}

.category-products-widget > ul > li:last-of-type {
  border-bottom: none;
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
@media screen and (max-width: 768px) {
  .content-sidebar {
    margin: 0 auto;
    box-shadow: none;
  }
}
</style>
<template>
  <div v-if="categoryList" class="content-sidebar">
    <div class="title-widget">
      <div>دسته بندی محصولات</div>
      <hr />
    </div>

    <div class="category-products-widget">
      <ul>
        <li
          v-for="(category, index) in categoryList"
          :key="category.id"
          :class="'collapse-category-' + category.id"
        >
          <h2>
            <a
              :class="'collapse-button-' + category.id"
              href="#"
              @click.prevent="
                collapseMethod(
                  category.id,
                  index,
                  category.subcategories.length
                )
              "
            >
              <i class="fa fa-angle-left"></i>

              <span v-text="category.category_name"></span>
            </a>
          </h2>

          <ul class="sub-category-product little">
            <li
              class="sub-category-item"
              v-for="subCategory in category.subcategories"
            >
              <h4>
                <router-link
                  :class="{
                    active: getCategoryName() === subCategory.category_name,
                  }"
                  :to="getSubCategoryUrl(subCategory)"
                  v-text="subCategory.category_name"
                  data-dismiss="modal"
                >
                </router-link>
              </h4>
            </li>
          </ul>

          <div class="button-wrapper">
            <button
              class="green-button button-toggle"
              @click.prevent="
                collapseMethod(
                  category.id,
                  index,
                  category.subcategories.length
                )
              "
            >
              <span>مشاهده بیشتر </span>

              <i class="fa fa-angle-down"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div v-else class="default-content content-sidebar">
    <div class="title-widget">
      <span class="placeholder-content content-half-width"></span>
      <hr />
    </div>

    <div class="category-products-widget-default">
      <ul>
        <li>
          <span
            class="placeholder-content default-boxing-size content-full-width"
          >
          </span>
          <span
            class="placeholder-content default-boxing-size content-full-width"
          >
          </span>
          <span
            class="placeholder-content default-boxing-size content-full-width"
          >
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fotnLoad"],
  data() {
    return {
      categoryList: "",
      fontIsLoad: false,
    };
  },
  methods: {
    init: function () {
      var self = this;
      var categoryParameterName = this.getCategoryName();
      axios
        .post("/get_category_list", {
          cascade_list: true,
        })
        .then(function (response) {
          self.categoryList = response.data.categories;
          setTimeout(function () {
            for (var i = 0; i < self.categoryList.length; i++) {
              for (
                var j = 0;
                j < self.categoryList[i].subcategories.length;
                j++
              ) {
                if (
                  self.categoryList[i].subcategories[j].category_name ===
                  categoryParameterName
                ) {
                  self.collapseMethod(
                    self.categoryList[i].id,
                    i,
                    self.categoryList[i].subcategories.length
                  );
                }
              }

              self.checkListHeight(
                self.categoryList[i].id,
                self.categoryList[i].subcategories.length
              );
            }
          });
        }, 500);
    },
    collapseMethod: function (id, index, listItems) {
      var wrapperlistElemetn = $(" aside .collapse-category-" + id);
      var listElemetn = $(
        "aside .collapse-category-" + id + " .sub-category-product"
      );
      var buttonElemetn = $("aside .collapse-category-" + id + " button span");
      var initialHeight = this.categoryList[index].subcategories.length * 47;

      if (this.checkListHeight(id, listItems) !== true) {
        if (listElemetn.hasClass("little")) {
          listElemetn.css("height", initialHeight + "px");
          listElemetn.removeClass("little", 500);
        } else {
          listElemetn.css("height", "145px");
          listElemetn.addClass("little", 500);
        }
        wrapperlistElemetn.toggleClass("list-open", 500);
        buttonElemetn.text(function (i, v) {
          return v === "بستن" ? "مشاهده بیشتر" : "بستن";
        });

        var wrapperlistElemetnMobile = $(
          " #searchFilter .collapse-category-" + id
        );
        var listElemetnMobile = $(
          "#searchFilter .collapse-category-" + id + " .sub-category-product"
        );
        var buttonElemetnMobile = $(
          "#searchFilter .collapse-category-" + id + " button span"
        );

        if (listElemetnMobile.hasClass("little")) {
          listElemetnMobile.css("height", initialHeight + "px");
          listElemetnMobile.removeClass("little", 500);
        } else {
          listElemetnMobile.css("height", "145px");
          listElemetnMobile.addClass("little", 500);
        }
        wrapperlistElemetnMobile.toggleClass("list-open", 500);
        buttonElemetnMobile.text(function (i, v) {
          return v === "بستن" ? "مشاهده بیشتر" : "بستن";
        });
      }
    },
    checkListHeight(id, listItems) {
      var buttonFilter = $(
        " aside .collapse-category-" + id + " .green-button.button-toggle"
      );

      var mobileButton = $(
        " #searchFilter .collapse-category-" +
          id +
          " .green-button.button-toggle"
      );

      if (listItems < 3) {
        buttonFilter.css("display", "none");
        mobileButton.css("display", "none");

        return true;
      } else {
        return false;
      }
    },
    checkListHeightUpdate() {
      var elements = $(" .category-products-widget > ul > li");
      var elementClass = "";
      var elementLenght = null;
      var buttonFilter = "";

      for (var i = 0; i < elements.length; i++) {
        elementClass = $(elements[i]).attr("class");
        elementLenght = $("." + elementClass + " .sub-category-item").length;
        buttonFilter = $(" ." + elementClass + " .green-button.button-toggle");

        if (elementLenght < 3) {
          buttonFilter.css("display", "none");
        }
      }
    },
    getSubCategoryUrl: function (t) {
      let url =
        "/product-list/category/" + t.category_name.split(" ").join("-");
      return url;
    },
    getCategoryName: function () {
      let name = this.$route.params.categoryName
        ? this.$route.params.categoryName
        : "";

      return name.split("-").join(" ");
    },
  },
  mounted() {
    this.init();
    var self = this;

    document.fonts.ready.then(function () {
      self.fontIsLoad = true;
    });
  },
  updated() {
    this.checkListHeightUpdate();
  },
};
</script>

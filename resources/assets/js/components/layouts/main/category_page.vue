

<style scoped>
#main-content {
  padding-top: 122px;
}

#searchFilter {
  background: #fff;
  padding-left: 0 !important;
}

#searchFilter .modal-dialog {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
}

#searchFilter .main_popup_content {
  padding: 0;
}

.sub-header {
  background: #f0f3f6;
  padding: 0 15px;
}

.search-box {
  position: relative;
  margin-top: 14px;
  border: none;
}

.search-box input {
  width: 100%;
  text-align: right;
  direction: rtl;
  border: 1px solid #666666;
  border-radius: 6px;
  padding: 6px 35px 5px 15px;
  background: #f8f8f8;
  font-size: 12px;
  float: right;
}

.search-box button.btn-search {
  background: none;
  border: none;
  position: absolute;
  right: 3px;
  top: 9px;
  border-left: 1px solid;
  color: #777;
  padding: 0 7px;
  font-size: 12px;
  height: 20px;
}

.search-box button.btn-filter {
  float: left;
  padding: 7px 10px;
  border-radius: 5px;
  border: none;
  background: #000546;
  color: #fff;
}

.links-sub-header {
  direction: rtl;
}

.links-sub-header a {
  padding: 25px 15px;
  display: inline-block;
  color: #808c9b;
  font-weight: bold;
  font-size: 14px;
  position: relative;
}

.links-sub-header a:hover {
  color: #313942;
}

.links-sub-header a:hover:after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

.category-item {
  margin: 15px auto;
}

.wrapper-item {
  transition: 300ms;

  position: relative;

  background-position: 50% 50%;

  background-size: cover;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  border-radius: 4px;

  top: 0;
}

.wrapper-item:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.wrapper-item a {
  transition: 300ms;

  border-radius: 4px;

  position: absolute;

  width: 100%;

  height: 100%;

  text-align: center;

  padding-top: calc(50% - 26px);

  right: 0;

  left: 0;

  font-size: 32px;

  font-weight: bold;

  color: #fff;

  background: rgba(0, 0, 0, 0.6);
}

.wrapper-item:hover {
  transition: 300ms;

  top: -3px;
}

.wrapper-item a:hover {
  transition: 300ms;
  background: rgba(0, 0, 0, 0.3);
}

.default-square-item {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

@media screen and (max-width: 1199px) {
  .search-box input {
    width: calc(100% - 75px);
  }
}

@media screen and (max-width: 991px) {
  #main-content {
    padding-top: 85px;
  }
  #main {
    width: 100%;
  }

  .category-item {
    padding: 0;
    margin: 0;
  }

  .wrapper-item,
  .default-square-item {
    border-radius: 0;
    box-shadow: none;
  }

  .wrapper-item a {
    border-radius: 0;
    box-shadow: none;
  }

  .wrapper-item:hover {
    top: 0;
  }
}

@media screen and (max-width: 767px) {
  #main-content {
    padding-top: 60px;
  }

  #main {
    padding-top: 50px;
  }
  .sub-header {
    position: fixed;
    z-index: 1;
    width: 100%;
  }

  .search-box {
    margin: 7px auto 0;
    padding: 0;
  }

  .main-image {
    padding: 0;
  }

  .main-content > .row {
    margin: 0;
  }

  .sub-header {
    background: #f0f3f6;
  }

  .links-sub-header {
    direction: rtl;
    text-align: center;
  }
}

@media screen and (max-width: 715px) {
  .name-header-profile {
    display: none;
  }

  .profile-menu-header i {
    position: absolute;
    left: -75px;
    top: 22px;
    font-size: 20px;
  }
}
</style>


<template>
  <div>
    <div
      class="
        sub-header-fix sub-header
        hidden-lg hidden-md hidden-sm
        container-fluid
      "
    >
      <div class="search-box col-sm-8 col-xs-12 col-lg-5 pull-right">
        <input
          type="text"
          v-model="searchText"
          placeholder="اینجا جستجو کنید"
        />

        <button class="btn-search">
          <i class="fa-search fa"></i>
        </button>

        <button
          class="btn-filter hidden-lg"
          data-toggle="modal"
          data-target="#searchFilter"
        >
          فیلتر
          <i class="fa fa-filter"></i>
        </button>
      </div>
    </div>

    <main id="main" class="container">
      <div class="row">
        <div
          v-for="(item, index) in 3"
          :key="index"
          class="category-item col-xs-6 col-sm-4 col-md-3 pull-right"
        >
          <div
            class="wrapper-item"
            style="
              background-image: url('http://localhost:8000/assets/img/product.jpg');
            "
          >
            <router-link to>خرما</router-link>
          </div>
        </div>

        <div
          v-for="(item, index) in 6"
          :key="index"
          class="category-item col-xs-6 col-sm-4 col-md-3 pull-right"
        >
          <div class="default-square-item placeholder-content"></div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
// import { eventBus } from "../../../router/router";

export default {
  props: ["str"],
  data: function () {
    return {};
  },
  methods: {
    init: function () {},

    registerRequestInSearchNotFoundCase: function () {
      if (this.currentUser.profile) {
        if (this.currentUser.user_info.is_buyer) {
          this.$router.push({ name: "registerRequestBuyer" });
        } else {
          this.popUpMsg = "حساب کاربری شما از نوع خریدار نیست.";
          this.$store.state.dashboardStore.submitSuccess = this.popUpMsg;
          $("#custom-main-modal").modal("show");
        }
      } else {
        this.popUpMsg =
          "تنها کاربران تایید شده ی باسکول مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.";
        this.$store.state.dashboardStore.submitSuccess = this.popUpMsg;
        $("#auth-popup").modal("show");
      }
    },

    addProductOrRequest: function () {
      if (this.currentUser.user_info) {
        if (this.currentUser.user_info.is_seller) {
          this.registerComponentStatistics(
            "product-list",
            "register-product",
            "seller clicks on plus button"
          );

          this.$router.push({ name: "registerProductSeller" });
        } else if (this.currentUser.user_info.is_buyer) {
          this.registerComponentStatistics(
            "product-list",
            "register-request",
            "seller clicks on plus button"
          );

          this.$router.push({ name: "registerProductSeller" });
        }
      } else {
        this.registerComponentStatistics(
          "product-list",
          "unauthorized-user-clicks-on-plus-btn",
          "unauthorized-user-clicks-on-plus-btn"
        );

        this.popUpMsg =
          "برای ثبت آگهی خرید یا فروش  ابتدا وارد سامانه شوید یا ثبت نام کنید.";
        this.$store.state.dashboardStore.submitSuccess = this.popUpMsg;
        $("#auth-popup").modal("show");
      }
    },
    resetFilter: function () {
      eventBus.$emit("submiting", true);

      $(".box-sidebar option").prop("selected", function () {
        return this.defaultSelected;
      });

      this.searchText = "";
      this.provinceId = "";
      this.categoryId = "";
      this.subCategoryId = "";
      this.cityId = "";

      this.applyFilter();
    },
    applyFilter: function () {
      var self = this;

      eventBus.$emit("submiting", true);

      var searchObject = {};

      searchObject.response_rate = self.$parent.productByResponseRate;

      if (this.categoryId) {
        searchObject.category_id = this.categoryId;
      }
      if (this.subCategoryId) {
        searchObject.sub_category_id = this.subCategoryId;
      }
      if (this.provinceId) {
        searchObject.province_id = this.provinceId;
      }
      if (this.cityId) {
        searchObject.city_id = this.cityId;
      }
      if (this.searchText) {
        this.$router.replace({
          name: "productList",
          query: {
            s: this.searchText.replace(/ /g, "+"),
          },
        });
        searchObject.search_text = this.searchText;
      }

      if (jQuery.isEmptyObject(searchObject)) {
        searchObject.from_record_number = 0;
        searchObject.to_record_number = 10;
        if (this.searchText == "") {
          this.$router.push({
            name: "productList",
          });
        }
      }

      axios
        .post("/user/get_product_list", searchObject)
        .then(function (response) {
          self.products = response.data.products;
          eventBus.$emit("submiting", false);
          // self.scrollToTop();
        })
        .catch(function (err) {
          alert("خطایی رخ داده است. دوباره تلاش کنید.");
        });
    },

    registerComponentStatistics: function (
      categoryName,
      actionName,
      labelName
    ) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
    registerComponentExceptions: function (description, fatal = false) {
      gtag("event", "exception", {
        description: description,
        fatal: fatal,
      });
    },
  },
  watch: {
    searchText: function (value) {
      var self = this;

      eventBus.$emit("textSearch", value);

      clearTimeout(this.searchTextTimeout);

      this.searchTextTimeout = setTimeout(function () {
        self.registerComponentStatistics(
          "product-list",
          "search-text",
          self.searchText
        );

        self.applyFilter();
      }, 1500);
    },
    $route: function () {
      if (this.$route.query.s) {
        this.searchText = this.$route.query.s.split("+").join(" ");
      }
    },
    "$parent.productByResponseRate": function () {
      this.products = {};

      if (this.searchText) {
        this.applyFilter();
      } else {
        this.init();
      }
    },
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/product-list" });
    eventBus.$on("textSearch", (event) => {
      this.searchText = event;
    });

    // document.addEventListener('click', this.documentClick);
  },
  mounted() {
    let self = this;
    this.init().then((loading) => {
      if (!loading) {
        let scrollPosition = localStorage.getItem("scroll") || { x: 0, y: 0 };
        window.scrollTo(0, scrollPosition);
        localStorage.removeItem("scroll");
      }
    });
    this.stopLoader();
  },
  metaInfo() {
    return {
      title: "لیست محصولات و قیمت عمده محصولات کشاورزی",
      titleTemplate: "باسکول | %s",
      meta: [
        {
          name: "description",
          content:
            "خرید عمده و قیمت میوه | خرید عمده و قیمت غلات | خرید عمده و قیمت صیفی جات | خرید و قیمت عمده خشکبار",
        },
        {
          name: "author",
          content: "باسکول",
        },
        {
          property: "og:description",
          content:
            "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی",
        },
        {
          property: "og:site_name",
          content: "باسکول بازارآنلاین خرید و فروش محصولات کشاورزی ایران",
        },
        {
          property: "og:title",
          content: "باسکول | لیست محصولات و قیمت محصولات کشاورزی",
        },
      ],
    };
  },
};
</script>

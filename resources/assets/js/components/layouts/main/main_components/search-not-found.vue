<style scoped>
.contents .green-button {
  padding: 4px 12px;
  margin-top: 40px;
}

.search-not-found {
  background: #fff;
  direction: rtl;
  margin: 15px auto 0;
  padding: 25px 15px 15px;
  border-radius: 5px;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
}

.main-content-icon {
  width: 170px;
  float: right;
}

.contents {
  float: right;

  width: calc(100% - 170px);

  padding-right: 30px;

  padding-top: 30px;
}

.header-content {
  font-size: 22px;

  font-weight: bold;

  color: #555;

  margin-bottom: 15px;
}

.text-content {
  color: #777;
}

.category-item {
  float: right;

  width: 100%;

  margin: 15px auto;
}

.title-section {
  direction: rtl;
  margin-bottom: 8px;
}

.title-section p {
  font-size: 16px;
  color: #00c569;
  float: right;
}

.title-section hr {
  margin: 15px 15px 10px auto;
  position: relative;
}

.title-section hr::after {
  content: " ";
  height: 3px;
  width: 50px;
  background: #00c569;
  position: absolute;
  top: -4px;
  right: 0;
}
.categories-list a {
  color: #777;
  padding: 10px 0;
  display: inline-block;
  border-bottom: 1px solid #eee;
  text-align: right;
  width: 100%;
}

#request-form {
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .search-not-found {
    margin-top: 70px;
  }

  .main-content-icon {
    width: 80px;
  }
  .contents {
    float: right;
    width: calc(100% - 80px);
    padding-right: 15px;
    padding-top: 0;
  }
  .header-content {
    font-size: 16px;
  }
  .contents .green-button {
    margin: 15px auto;
  }
}
</style>

<template>
  <div class="col-xs-12">
    <div class="search-not-found">
      <div class="main-content-wrapper">
        <div class="main-content-icon">
          <img
            :src="$parent.assets + 'assets/img/search-not-found.svg'"
            alt=""
          />
        </div>
        <div class="contents">
          <p class="header-content">
            متاسفانه نتیجه‌ای پیدا نشد.
          </p>
          <p class="text-content">
            <span class="red-text">آیا قصد خرید عمده دارید؟</span>
            همین حالا درخواست خرید ثبت کنید.
          </p>
          <button class="green-button" type="button" @click="openBuyAdRequestPage()">
            ثبت درخواست خرید
          </button>
        </div>
      </div>

      <div class="categories-content-wrapper">
        <div
          class="category-item"
          v-for="(category, index) in categories"
          :key="index"
        >
          <div class="title-section col-xs-12">
            <p class="category-title" v-text="category.category_name"></p>
            <hr />
          </div>

          <ul class="categories-list">
            <li
              v-for="(subCategory, catIndex) in category.subcategories"
              :key="catIndex"
              class="list-item col-xs-4 col-sm-3 col-md-2 pull-right"
            >
              <router-link
                :to="getSubCategoryUrl(subCategory)"
                v-text="subCategory.category_name"
              >
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      categories: "",
    };
  },
  methods: {
    init: function () {
      let self = this;

      axios
        .post("/get_category_list", {
          cascade_list: true,
        })
        .then(function (response) {
          self.categories = response.data.categories;
        });
    },
    getSubCategoryUrl: function (t) {
      let url =
        "/product-list/category/" + t.category_name.split(" ").join("-");
      return url;
    },
    openBuyAdRequestPage: function(){
      this.$router.push({name: 'mainRegisterRequest'});
    }
  },
  mounted: function () {
    this.init();
  },
};
</script>

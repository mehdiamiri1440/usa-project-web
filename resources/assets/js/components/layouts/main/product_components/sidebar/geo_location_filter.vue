<style>
.box-sidebar {
  text-align: center;
  direction: rtl;
  margin: 15px auto;
  position: relative;
}
hr {
  margin-bottom: 0;
}
.title-widget {
  text-align: right;
  padding: 15px 15px 0 15px;
}
.title-widget h3 {
  font-size: 18px;
}
.sidebar-buttons {
  text-align: center;
}

.sidebar-buttons a {
  width: initial;

  border: none;

  padding: 9px 18px;

  margin: 0 auto;

  display: inline-block;
}

.box-sidebar select {
  border-radius: 3px;
  border: 1px solid #4c5058;
  width: 80%;
  padding: 5px 15px;
}
.sidebar-buttons {
  padding-bottom: 15px;
}
.red-button {
  background: #e41c38;
  color: #fff;
}

.red-button:hover {
  background: #ce1c38;
  color: #fff;
}
.red-button:hover,
.red-button:active,
.red-button:focus {
  color: #fff;
}

.header-item-default {
  margin: 15px 0;
  padding: 25px;
}

@media screen and (max-width: 992px) {
  .sidebar-buttons a {
    width: 150px;
    border: none;
    padding: 9px 0;
  }
}
</style>

<template>
  <div>
    <div v-if="fontIsLoad && provinceList" class="content-sidebar">
      <div class="title-widget">
        <h3>موقعیت جغرافیایی</h3>
        <hr />
      </div>

      <div class="box-sidebar">
        <i class="fa-building fa"></i>

        <select v-on:change="setProvinceFilter($event)">
          <option disabled selected>استان</option>

          <option
            v-for="province in provinceList"
            v-bind:value="province.id"
            v-text="province.province_name"
          ></option>
        </select>
      </div>
      <div class="box-sidebar">
        <i class="fa-home fa"></i>
        <select v-on:change="setCityFilter($event)">
          <option disabled selected>شهر</option>
          <option v-for="city in cityList" v-bind:value="city.id">{{city.city_name}}</option>
        </select>
      </div>
      <div class="sidebar-buttons">
        <a href="#" class="btn green-button hidden-md hidden-lg" data-dismiss="modal">جستجو</a>

        <a
          href="#"
          @click.prevent="$parent.resetFilterChild()"
          data-dismiss="modal"
          class="btn red-button"
        >حذف فیلتر ها</a>
      </div>
    </div>

    <div v-else class="content-sidebar">
      <div class="title-widget">
        <span class="placeholder-content content-half-width"></span>
        <hr />
      </div>
      <div class="category-products-widget-default">
        <ul>
          <li>
            <span class="placeholder-content default-boxing-size content-full-width"></span>
            <span class="placeholder-content default-boxing-size content-full-width"></span>
            <div class="text-center">
              <span class="placeholder-content default-button"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="category-products-widget-default">
      <ul>
        <li>
          <span class="placeholder-content default-boxing-size content-full-width"></span>
          <span class="placeholder-content default-boxing-size content-full-width"></span>
          <div class="text-center">
            <span class="placeholder-content default-button"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      provinceList: "",
      cityList: "",
      fontIsLoad: false
    };
  },
  methods: {
    init: function() {
      axios
        .post("/location/get_location_info")
        .then(response => (this.provinceList = response.data.provinces));
    },
    setProvinceFilter: function(e) {
      e.preventDefault();
      var provinceId = $(e.target).val();

      this.registerComponentStatistics(
        "product-list",
        "sidebarSearch",
        "province"
      );
      this.$parent.provinceIdChild = provinceId;
      this.$parent.setProvinceFilterChild();

      axios
        .post("/location/get_location_info", {
          province_id: provinceId
        })
        .then(response => (this.cityList = response.data.cities));
    },
    setCityFilter: function(e) {
      e.preventDefault();
      var cityId = $(e.target).val();

      this.registerComponentStatistics(
        "product-list",
        "sidebarSearch",
        "province"
      );
      this.$parent.provinceIdChild = provinceId;
      this.$parent.setProvinceFilterChild();

      axios
        .post("/location/get_location_info", {
          province_id: provinceId
        })
        .then(response => (this.cityList = response.data.cities));
    },
    setCityFilter: function(e) {
      e.preventDefault();
      var cityId = $(e.target).val();

      this.loading = true;
      this.registerComponentStatistics("product-list", "sidebarSearch", "city");
      this.$parent.cityIdChild = cityId;
      this.$parent.setCityFilterChild();
      this.loading = false;
    },
    registerComponentStatistics: function(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    }
  },
  mounted() {
    this.init();
    var self = this;
    // this.$parent.scrollSet();
    document.fonts.ready.then(function() {
      setTimeout(function() {
        self.fontIsLoad = true;
      }, 500);
    });
  },
  mounted() {
    this.init();
    var self = this;
    // this.$parent.scrollSet();
    document.fonts.ready.then(function() {
      setTimeout(function() {
        self.fontIsLoad = true;
      }, 500);
    });
  }
};
</script>

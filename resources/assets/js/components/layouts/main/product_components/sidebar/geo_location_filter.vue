<style scoped>
.content-sidebar {
  text-align: right;
}

.content-sidebar .title-input i {
  margin-left: 3px;
  font-size: 17px;
}
.box-sidebar {
  text-align: right;
  direction: rtl;
  margin: 20px auto;
  position: relative;
}
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

.box-sidebar .select-wrapper {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: #fbfbfb;
  border: 1px solid #bdc4cc;
}

.box-sidebar .select-wrapper > i {
  position: absolute;
  left: 15px;
  top: 9px;
  width: initial;
  margin: 0;
}

.box-sidebar select {
  border: none;
  width: 100%;
  padding: 5px 15px;
  background: none;
  color: #404b55;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}

.title-input {
  color: #555;
  margin-bottom: 10px;
}

.title-input .fa-map-marker-alt {
  position: relative;
}

.action-button .filter-button {
  width: 100%;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 400;
  background: #556080;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 6px;
}

.action-button .filter-button i {
  font-size: 14px;
  position: relative;
  top: 1px;
  left: 1px;
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

.box-sidebar i {
  width: 20px;
  text-align: center;
}

@media screen and (max-width: 1199px) {
  .sidebar-buttons a,
  .sidebar-buttons button {
    width: 150px;
    border: none;
    padding: 9px 0;
  }
}
@media screen and (max-width: 768px) {
  .content-sidebar {
    margin: 50px auto 100px;
    box-shadow: none;
    border: none;
  }
}
</style>

<template>
  <div>
    <div v-if="provinceList" class="content-sidebar col-xs-12">
      <div class="title-widget">
        <div>موقعیت جغرافیایی</div>
        <button
          v-if="$parent.provinceChild"
          @click.prevent="resetFitler()"
          data-dismiss="modal"
          class="remove-filter hidden-xs"
        >
          حذف فیلتر
        </button>
      </div>
      <hr />
      <div class="col-xs-12">
        <div class="box-sidebar">
          <p class="title-input">
            <i class="fas fa-map-marker-alt"></i>
            جستجو در استان
          </p>

          <div class="select-wrapper">
            <select v-model="provinceIndex">
              <option value="" disabled selected>استان را انتخاب کنید</option>

              <option
                v-for="(province, index) in provinceList"
                :key="'province-' + index"
                v-bind:value="index"
                v-text="province.province_name"
              ></option>
            </select>
            <i class="fa fa-angle-down"></i>
          </div>
        </div>
        <div class="box-sidebar">
          <p class="title-input">
            <i class="fa fa-home"></i>
            جستجو در شهر
          </p>
          <div class="select-wrapper">
            <select v-model="selectedCity">
              <option disabled value selected>شهر را انتخاب کنید</option>
              <option
                v-for="(city, index) in cityList"
                :key="'city-' + index"
                v-bind:value="city"
              >
                {{ city.city_name }}
              </option>
            </select>
            <i class="fa fa-angle-down"></i>
          </div>
        </div>
      </div>
      <div class="action-button col-xs-12">
        <button
          @click="filterProducts"
          class="green-button filter-button"
          data-dismiss="modal"
        >
          <i class="fa fa-filter"></i>
          اعمال فیلتر
        </button>
      </div>
    </div>

    <div v-else class="content-sidebar col-xs-12">
      <div class="title-widget">
        <span class="placeholder-content content-half-width"></span>
      </div>
      <hr />
      <div class="category-products-widget-default">
        <ul>
          <li>
            <span
              class="placeholder-content default-boxing-size content-full-width"
            ></span>
            <span
              class="placeholder-content default-boxing-size content-full-width"
            ></span>
            <div class="text-center">
              <span class="placeholder-content default-button"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../../../router/router";

export default {
  props: ["resetLocationFilter", "provinceList"],
  data() {
    return {
      provinceIndex: "",
      selectedProvince: "",
      selectedCity: "",
      cityList: "",
      isResetData: false,
    };
  },
  methods: {
    init() {
      if (this.provinceList) {
        this.checkLocationFilter();
      }
    },
    filterProducts() {
      if (this.selectedCity) {
        eventBus.$emit("selectedCity", this.selectedCity);
        this.$parent.provinceChild = this.selectedProvince;
        this.$parent.cityChild = this.selectedCity;
        localStorage.setItem("provinceIndex", parseInt(this.provinceIndex));
        localStorage.setItem(
          "selectedProvince",
          JSON.stringify(this.selectedProvince)
        );
        localStorage.setItem("selectedCity", JSON.stringify(this.selectedCity));
        this.registerComponentStatistics(
          "product-list",
          "sidebarSearch",
          "city"
        );
        this.$parent.setCityFilterChild();
      } else if (this.selectedProvince) {
        localStorage.setItem("provinceIndex", parseInt(this.provinceIndex));
        localStorage.setItem(
          "selectedProvince",
          JSON.stringify(this.selectedProvince)
        );
        this.$parent.provinceChild = this.selectedProvince;
        eventBus.$emit("selectedProvince", this.selectedProvince);
        this.registerComponentStatistics(
          "product-list",
          "sidebarSearch",
          "province"
        );
        this.$parent.setProvinceFilterChild();
      }
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
    resetFitler() {
      this.isResetData = true;
      this.provinceIndex = "";
      this.selectedProvince = "";
      this.selectedCity = "";
      this.cityList = "";
      eventBus.$emit("selectedProvince", "");
      eventBus.$emit("selectedCity", "");
      localStorage.removeItem("provinceIndex");
      localStorage.removeItem("selectedProvince");
      localStorage.removeItem("selectedCity");
      this.$parent.resetFilterChild();
    },
    checkLocationFilter() {
      const index = localStorage.getItem("provinceIndex");
      const province = localStorage.getItem("selectedProvince");
      const city = localStorage.getItem("selectedCity");
      this.provinceIndex = index ? index : "";
      this.selectedProvince = province ? JSON.parse(province) : "";
      this.$nextTick(() => {
        this.selectedCity = city ? JSON.parse(city) : "";
        this.$parent.provinceChild = this.selectedProvince;
        this.$parent.cityChild = this.selectedCity;
      });
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    provinceList(provinces) {
      if (provinces) {
        this.checkLocationFilter();
      }
    },
    provinceIndex(index) {
      if (index >= 0 && this.provinceList && !this.isResetData) {
        this.selectedProvince = this.provinceList[Number(index)];
        this.cityList = this.selectedProvince.cities;
        
        this.selectedCity = "";
      } else {
        this.isResetData = false;
      }
    },
    resetLocationFilter(reset) {
      if (this.selectedProvince || this.selectedCity) {
        this.resetFitler();
      }
    },
  },
};
</script>

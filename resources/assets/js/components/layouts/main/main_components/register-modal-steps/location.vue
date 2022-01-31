<style scoped>
p,
span {
  line-height: 1.5;
}

.from-wrapper {
  max-width: 510px;
  margin: 44px auto 70px;
  overflow: hidden;
  padding-top: 5px;
}

.title-contents {
  font-weight: 500;
  font-size: 18px;
  color: #555;
  margin-bottom: 16px;
}

.form-contents {
  line-height: 1.618;
}

.form-contents label {
  font-weight: 500;
  color: #777;
  margin: 0 auto 7px;
}

.input-wrapper {
  margin: 0 auto;
  position: relative;
}

input {
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  color: #bdc4cc;
  padding: 8px 15px 8px 45px;
  direction: rtl;
  transition: 150ms;
  text-align: right;
  background: #fbfbfb;
}

.input-wrapper button {
  display: inline-block;
  position: absolute;
  left: 0;
  font-size: 19px;
  color: #909090;
  top: 0;
  -webkit-transition: 150ms;
  transition: 150ms;
  background: none;
  border: none;
  padding: 11px 15px 8px;
}

input.focus,
input.focus + i {
  color: #333;
}

.step-action {
  margin-top: 40px;
}
.submit-button {
  background: #e0e0e0;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 18px;
  padding: 8px;
  transition: 150ms;
  cursor: default;
  max-width: 147px;
  display: inline-block;
}

.submit-button.back-button {
  background: #fff;
  color: #909090;
  border: 1px solid #bebebe;
  cursor: pointer;
  max-width: 127px;
}

.submit-button.active {
  background: #ff9828;
  cursor: pointer;
}
.submit-button.active:hover i {
  right: 3px;
  transition: 150ms;
}

.submit-button i {
  position: relative;
  top: 1px;
  font-size: 14px;
  right: 0;
  transition: 150ms;
}

.list-wrapper > ul {
  border-radius: 12px;
  background: #fdfdfd;
  border: 1px solid #bdc4cc;
  height: 215px;
  overflow-y: scroll;
  margin-top: 20px;
}

.list-wrapper button {
  width: 100%;
  background: none;
  border: none;
  text-align: right;
  font-weight: 500;
  font-size: 15px;
  color: #38485f;
  border-bottom: 1px solid #e0e0e0;
  padding: 12px 15px;
  position: relative;
}

.list-wrapper button i {
  position: absolute;
  left: 15px;
  top: calc(50% - 8px);
  font-size: 16px;
}

.list-wrapper button:hover {
  background: #f2f2f2;
}

.list-wrapper li:last-of-type button {
  border: none;
}
.search-not-found {
  text-align: center;
  font-size: 60px;
  padding-top: 40px;
  color: #bebebe;
}
.search-not-found p {
  font-size: 24px;
  margin-top: -20px;
}

@media screen and (max-width: 991px) {
  .list-wrapper > ul {
    height: 325px;
  }
}
</style>

<template>
  <div class="text-rtl from-wrapper">
    <h2 class="title-contents">
      <span v-if="isProvince">استان </span>
      <span v-else>شهر </span>
      خود را انتخاب کنید
    </h2>

    <div class="form-contents col-xs-12">
      <div class="row">
        <div class="col-xs-12">
          <label for="user-name">
            <span v-if="isProvince">استان </span>
            <span v-else>شهر </span>
            مورد نظر خود را جستجو کنید</label
          >

          <div class="input-wrapper search-wrapper">
            <input
              v-model="searchText"
              id="search"
              type="text"
              :class="{ focus: searchText }"
              :placeholder="isProvince ? 'جستجوی استان' : 'جستجوی شهر'"
              @blur="showNavigationMenu"
              @focus="hideNavigationMenu"
            />

            <button v-if="searchText" @click.prevent="searchText = ''">
              <i class="fa fa-times"></i>
            </button>
            <button v-else>
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div class="list-wrapper">
            <ul v-if="isProvince && provinces.length" ref="isProvinces">
              <li v-for="(item, index) in provinces" :key="index">
                <button
                  @click.prevent="setProvince(item.id, item.province_name)"
                >
                  <span v-text="item.province_name"></span>
                  <i class="fa fa-angle-left"></i>
                </button>
              </li>
            </ul>
            <ul v-else-if="!isProvince && cities.length" ref="isProvinces">
              <li v-for="(city, index) in cities" :key="index">
                <button @click.prevent="setCity(city.city_name)">
                  <span v-text="city.city_name"></span>
                  <i class="fa fa-angle-left"></i>
                </button>
              </li>
            </ul>
            <ul v-else>
              <li class="search-not-found">
                <i class="fa fa-search"></i>
                <p>موردی یافت نشد.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row"></div>
      <div class="step-action text-right">
        <button
          v-if="isProvince"
          class="submit-button back-button"
          @click.prevent="$parent.currentStep--"
        >
          <i class="fa fa-arrow-right"></i>
          مرحله قبل
        </button>
        <button
          v-else
          class="submit-button back-button"
          @click.prevent="isProvince = !isProvince"
        >
          <i class="fa fa-arrow-right"></i>
          مرحله قبل
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      searchText: "",
      isProvince: true,
      provinces: "",
      allCitiesList: "",
      cities: "",
    };
  },
  methods: {
    setProvince(provinceId, provinceName) {
      this.searchText = "";
      this.provinces = this.$parent.step3.provinceList;
      this.$parent.step5.provinceName = provinceName;

      this.allCitiesList = this.$parent.step3.provinceList.find(
        (item) => item.id == provinceId
      ).cities;
      if (!Array.isArray(this.allCitiesList))
        this.allCitiesList = Object.values(this.allCitiesList);
      this.cities = this.allCitiesList;
      this.isProvince = false;
    },
    setCity(cityName) {
      this.$parent.step5.cityName = cityName;

      if (this.$parent.activity_type == 1) {
        this.$parent.registerUser(this.$parent.activity_type);
        this.$parent.goToStep(6);
      } else {
        this.$parent.registerUser(this.$parent.activity_type);
      }
    },
    itemsSearched() {
      if (this.searchText == "") {
        if (this.isProvince) {
          return (this.provinces = this.$parent.step3.provinceList);
        } else {
          return (this.cities = this.allCitiesList);
        }
      } else {
        if (this.isProvince) {
          this.provinces = this.$parent.step3.provinceList.filter((item) => {
            if (item.province_name.indexOf(this.searchText) >= 0) {
              return item;
            }
          });
        } else {
          this.cities = this.allCitiesList.filter((item) => {
            if (item.city_name.indexOf(this.searchText) >= 0) {
              return item;
            }
          });
        }
      }
    },
    setScrollToTop() {
      this.$nextTick(() => {
        if (this.$refs.isProvinces) {
          this.$refs.isProvinces.scrollTop = 0;
        }
      });
    },
    showNavigationMenu() {
      if (screen.width < 992) {
        if (document.querySelector(".custom-navigation")) {
          setTimeout(() => {
             document.querySelector(".custom-navigation").style.display = "block";
          }, 50);
        }
      }
    },
    hideNavigationMenu() {
      if (screen.width < 992) {
       
          if (document.querySelector(".custom-navigation")) {
            document.querySelector(".custom-navigation").style.display = "none";
          }
        
      }
    },
  },
  // mounted() {
  //   this.$parent.getProvinceList();
  // },
  watch: {
    "$parent.step3.provinceList"() {
      this.provinces = this.$parent.step3.provinceList;
    },
    searchText() {
      this.itemsSearched();
    },
    isProvince() {
      this.setScrollToTop();
    },
  },
};
</script>

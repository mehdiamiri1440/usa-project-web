
<style scoped>
input[type="tel"] {
  box-shadow: none !important;
}
label {
  margin: 0 auto 9px auto;
}

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  padding: 10px 30px 9px;
  transition: 200ms;
  cursor: default;
  margin: 8px 0;
}
.submit-button.default-button {
  background: #fff;
  color: #777;
  border: 1px solid #777;
  border-radius: 4px;
  cursor: pointer;
}
.submit-button.active {
  background: #00c569;
  cursor: pointer;
}

.title-contents {
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 15px;
}

.form-contents {
  margin: 5px auto;
}

.form-contents lable {
  font-size: 12px;
}

.input-wrapper,
.text-input-wrapper {
  margin: 6px auto;

  position: relative;
}

.input-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 6px;

  font-family: "FontAwesome", sans-serif;

  left: 15px;

  font-size: 20px;

  z-index: 0;
}

input {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  color: #bebebe;

  border-color: #bebebe;

  direction: rtl;

  transition: 300ms;

  background: #fff;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 300ms;
}

input:focus,
input:focus + i {
  color: #333;
  border-color: #333;
}

input.active {
  border-color: #00c569;
  color: #333;
}

input.active + i {
  color: #00c569;
}

input.active:focus,
input.active:focus + i,
input.active + i {
  border-color: #00c569;
}

input.error {
  color: #333;
  border-color: #e41c38;
}

input.error + i {
  color: #e41c38;
}

input.error:focus,
input.error:focus + i {
  border-color: #e41c38;
}

select {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;

  position: relative;

  z-index: 1;

  color: #777777;

  direction: rtl;

  transition: 200ms;

  background: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}

.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 200ms;
}

select option {
  color: #333;
}

select:focus {
  color: #333;
}

select.active {
  color: #333;
  color: #00c569;
}

select.active:focus {
  color: #00c569;
}

select.error {
  color: #333;
  color: #e41c38;
}

select.error:focus {
  color: #e41c38;
}

.error-message {
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 15px;

  direction: rtl;

  font-size: 11px;
}

.small-description {
  font-size: 11px;

  font-weight: bold;

  color: #777777;

  line-height: 1.618;
}
label .small-label {
  font-size: 12px;
}
@media screen and (max-width: 767px) {
  select {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
}
</style>

<template>
  <div>
    <h2 class="title-contents col-xs-12">انتخاب مبدا</h2>

    <div class="form-contents col-xs-12">
      <div class="row">
        <div class="col-xs-6 pull-right">
          <label for="province">استان را انتخاب کنید</label>

          <div class="input-wrapper">
            <!-- input type tel because we have some limmitation for processes -->

            <select
              @change="$parent.loadCityList($event)"
              :class="{'error' :  $parent.errors.provinceSelected , 'active' : $parent.provinceSelected}"
              id="province"
            >
              <option selected disabled>استان را انتخاب کنید</option>

              <option
                v-for="province in $parent.provinces"
                v-bind:value="province.id"
                v-text="province.province_name"
                :selected="$parent.provinceSelected == province.id "
              ></option>
            </select>
          </div>
          <p class="error-message col-xs-12">
            <span v-if="$parent.errors.provinceSelected" v-text="$parent.errors.provinceSelected"></span>
          </p>
        </div>

        <div class="col-xs-6">
          <label for="city">شهر را انتخاب کنید</label>

          <div class="input-wrapper">
            <select
              @change="$parent.setCityId($event)"
              :class="{'error' :  $parent.errors.city_id , 'active' : $parent.product.city_id}"
              id="city"
              class="dire"
            >
              <option selected disabled>شهر را انتخاب کنید</option>
              <option
                v-for="city in $parent.cities"
                v-bind:value="city.id"
                :selected="$parent.product.city_id == city.id "
                v-text="city.city_name"
              ></option>
            </select>
          </div>
          <p class="error-message">
            <span v-if="$parent.errors.city_id" v-text="$parent.errors.city_id"></span>
          </p>
        </div>
      </div>

      <!-- <span class="small-description">
			     		
 انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه اینکوباک کمک می کند 
 انتخاب آدرس صحیح به بهتر دیده شدن شما در سامانه اینکوباک کمک می کند 

      </span>-->

      <div class="col-xs-12">
        <div class="row">
          <button
            class="submit-button disabled pull-left"
            :class="{'active' : $parent.product.city_id && $parent.provinceSelected}"
            @click.prevent="$parent.locationSubmited()"
          >
            مرحله بعد
            <i class="fa fa-arrow-left"></i>
          </button>

          <button
            class="submit-button default-button pull-right"
            @click.prevent="$parent.currentStep--"
          >
            <i class="fa fa-arrow-right"></i>

            مرحله قبل
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    if (this.$parent.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
  }
};
</script>